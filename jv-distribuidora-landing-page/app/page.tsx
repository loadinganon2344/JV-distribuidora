import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { ProductsSection } from "@/components/products-section"
import { PurchaseConditions } from "@/components/purchase-conditions"
import { SocialProof } from "@/components/social-proof"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { FloatingWhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ValueProposition />
      <section id="productos">
        <ProductsSection />
      </section>
      <section id="condiciones">
        <PurchaseConditions />
      </section>
      <SocialProof />
      <FinalCTA />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  )
}
