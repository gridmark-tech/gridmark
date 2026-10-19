import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center py-24 sm:py-32">
        <Container className="text-center flex flex-col items-center">
          <span className="font-heading text-xs font-bold text-brand-secondary bg-brand-surface px-3 py-1 rounded-md border border-brand-border uppercase tracking-wider">
            404 — Page Not Found
          </span>
          <h1 className="mt-4 font-heading font-extrabold text-4xl sm:text-5xl text-brand-primary">
            This page does not exist.
          </h1>
          <p className="mt-4 text-base text-brand-secondary max-w-md leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/" variant="accent" size="md" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to homepage</span>
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Contact us
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
