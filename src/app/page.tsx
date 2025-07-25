import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FAQSection";
import { FeatureCategories } from "@/components/FeaturesCategories";
import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { LogosSection } from "@/components/Logos";
import { TestimonialSection } from "@/components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col max-sm:px-3  items-center justify-center ">
      <HeroSection />
      <FeatureSection />
      <FeatureCategories />
      <LogosSection />
      <AboutSection />
      <TestimonialSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </div>
  );
}
