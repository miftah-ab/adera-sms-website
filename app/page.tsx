import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorks from "@/components/HowItWorks";
import TrustPrivacy from "@/components/TrustPrivacy";
import InstallSteps from "@/components/InstallSteps";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <ProblemSection />
      </Reveal>
      <Reveal delay={100}>
        <ProductShowcase />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal delay={100}>
        <TrustPrivacy />
      </Reveal>
      <Reveal>
        <InstallSteps />
      </Reveal>
      <FinalCta />
      <Footer />
    </main>
  );
}
