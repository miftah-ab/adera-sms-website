import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductProof from "@/components/ProductProof";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import InteractiveStory from "@/components/InteractiveStory";
import FeaturesBento from "@/components/FeaturesBento";
import UseCases from "@/components/UseCases";
import EmotionalBenefit from "@/components/EmotionalBenefit";
import TrustPrivacy from "@/components/TrustPrivacy";
import FAQSection from "@/components/FAQSection";
import DownloadSection from "@/components/DownloadSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050b08] text-zinc-100 flex flex-col">
      {/* 01: Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 02: Hero */}
        <Hero />

        {/* 03: Immediate Product Proof */}
        <ProductProof />

        {/* 04: Problem Section */}
        <ProblemSection />

        {/* 05: How It Works */}
        <HowItWorks />

        {/* 06: Product Experience & Interactive Story */}
        <InteractiveStory />

        {/* 07: Core Benefits & Bento Features */}
        <FeaturesBento />

        {/* 08: Real-World Use Cases */}
        <UseCases />

        {/* 09: Emotional Reassurance */}
        <EmotionalBenefit />

        {/* 10: Privacy & Android Permissions */}
        <TrustPrivacy />

        {/* 11: Accordion FAQ */}
        <FAQSection />

        {/* 12: Download & Install Guide */}
        <DownloadSection />

        {/* 13: Final CTA */}
        <FinalCta />
      </main>

      {/* 14: Minimal 2026 Footer */}
      <Footer />

      {/* 15: Mobile Sticky Action Bar */}
      <MobileStickyCta />
    </div>
  );
}
