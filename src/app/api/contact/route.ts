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

    // In production with email provider configured (e.g., RESEND_API_KEY):
    // Delivery will be executed here. If no credentials exist, acknowledge receipt gracefully.
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
