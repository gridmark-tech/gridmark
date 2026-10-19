import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustPositioning } from "@/components/sections/trust-positioning";
import { ServicesOverview } from "@/components/sections/services-overview";
import { FeaturedWork } from "@/components/sections/featured-work";
import { SolutionConfigurator } from "@/components/sections/solution-configurator";
import { WhyGridmark } from "@/components/sections/why-gridmark";
import { Process } from "@/components/sections/process";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustPositioning />
        <ServicesOverview />
        <FeaturedWork />
        <SolutionConfigurator />
        <WhyGridmark />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
