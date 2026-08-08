import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { AreasGrid } from "@/components/sections/areas-grid";
import { Process } from "@/components/sections/process";
import { AboutPreview } from "@/components/sections/about-preview";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AreasGrid />
        <Process />
        <AboutPreview />
        <FAQ />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
