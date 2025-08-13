import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Mission } from "@/components/mission";
import { Community } from "@/components/community";
import { AnimatedSection } from "@/components/animated-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <Products />
        </AnimatedSection>
        <AnimatedSection>
          <Mission />
        </AnimatedSection>
        <AnimatedSection>
          <Community />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
