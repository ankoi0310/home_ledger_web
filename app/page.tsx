import { HeroSection } from "@/components/home/HeroSection";
import { PainPoints } from "@/components/home/PainPoints";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { InteractiveMoneyHub } from "@/components/home/InteractiveMoneyHub";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { FAQTeaser } from "@/components/home/FAQTeaser";
import { WaitlistCTA } from "@/components/home/WaitlistCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PainPoints />
      <FeatureHighlights />
      <InteractiveMoneyHub />
      <HowItWorks />
      <Testimonials />
      <PricingTeaser />
      <FAQTeaser />
      <WaitlistCTA />
    </>
  );
}
