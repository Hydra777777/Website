import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Mission } from "@/components/mission";
import { FaqSection } from "@/components/faq-section";
import { Community } from "@/components/community";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <Mission />
        <FaqSection />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
