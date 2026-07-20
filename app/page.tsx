import { Biography } from "@/components/Biography";
import { ChakraDivider } from "@/components/ChakraDivider";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Initiatives } from "@/components/Initiatives";
import { Nav } from "@/components/Nav";
import { Trustees } from "@/components/Trustees";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <Nav />
      <div id="top" />
      <Hero />
      <ChakraDivider />
      <Biography />
      <TrustSection />
      <Trustees />
      <Initiatives />
      <Contact />
      <Footer />
    </>
  );
}
