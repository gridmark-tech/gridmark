"use client";

import React, { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Gridmark Application Error]", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg py-24 px-4">
      <Container className="max-w-md text-center flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-5">
          <AlertCircle className="w-7 h-7" />
        </div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-primary">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm text-brand-secondary leading-relaxed">
          An unexpected error occurred while rendering this page. You can try refreshing the view or navigating home.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Button
            type="button"
            variant="accent"
            size="md"
            onClick={() => reset()}
            className="gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try again</span>
          </Button>
          <Button href="/" variant="outline" size="md">
            Go to home
          </Button>
        </div>
      </Container>
    </div>
  );
}
