import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  try {
    // Limit request body size to ~50KB to prevent abuse
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 50000) {
      return NextResponse.json(
        { error: "Payload too large" },
        { status: 413 }
      );
    }

    const body = await request.json();

    // Validate payload with Zod
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          error: "Validation failed",
          details: formattedErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Log enquiry in server environment
    console.log("[Gridmark Contact Enquiry]", {
      name: data.name,
      businessName: data.businessName,
      email: data.email,
      service: data.service,
      timestamp: new Date().toISOString(),
    });

    // Deliver via Web3Forms if access key is configured
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Gridmark Enquiry: ${data.service} - ${data.businessName || data.name}`,
          from_name: "Gridmark Web Portal",
          name: data.name,
          email: data.email,
          business_name: data.businessName || "Not specified",
          service: data.service,
          budget: data.budget || "Not specified",
          timeframe: data.timeframe || "Not specified",
          website_or_social: data.websiteOrSocial || "None provided",
          message: data.message,
          replyto: data.email,
        }),
      });

      let web3Result: { success?: boolean; message?: string } | null = null;
      try {
        web3Result = await web3Response.json();
      } catch {
        web3Result = null;
      }

      if (!web3Response.ok || !web3Result?.success) {
        console.error("[Gridmark Web3Forms Error]", web3Result);
        return NextResponse.json(
          {
            error:
              web3Result?.message ||
              "Failed to submit enquiry through Web3Forms. Please message us on WhatsApp.",
          },
          { status: 502 }
        );
      }
    } else {
      console.warn(
        "[Gridmark Contact API] WEB3FORMS_ACCESS_KEY is not configured. Running in acknowledgement simulation mode."
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for contacting Gridmark. We have received your project enquiry and will respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Gridmark Contact API Error]", error);
    return NextResponse.json(
      { error: "Internal server error. Please reach out directly via WhatsApp." },
      { status: 500 }
    );
  }
}
