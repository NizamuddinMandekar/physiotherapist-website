import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { About } from "@/components/about";
import { SessionGallery } from "@/components/session-gallery";
import { Conditions } from "@/components/conditions";
import { Process } from "@/components/process";
import { WhatsAppSection } from "@/components/whatsapp-section";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <SessionGallery />
        <Conditions />
        <Process />
        <WhatsAppSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
