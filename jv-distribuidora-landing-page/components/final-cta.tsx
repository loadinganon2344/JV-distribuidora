"use client"

import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowRight, ShieldCheck } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="bg-primary px-4 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-primary-foreground/70 md:text-base">
          No pierdas tiempo buscando
        </p>
        <h2 className="mb-3 text-2xl font-bold text-primary-foreground md:mb-4 md:text-4xl">
          Asegura tu stock hoy mismo
        </h2>
        <p className="mb-6 text-base text-primary-foreground/80 md:mb-8 md:text-lg">
          Cotiza sin compromiso y recibe precios especiales para tu negocio
        </p>

        <WhatsAppButton
          variant="outline"
          size="lg"
          className="w-full max-w-sm border-2 border-primary-foreground bg-primary-foreground px-6 py-5 text-base font-bold text-primary shadow-lg transition-all hover:bg-primary-foreground/90 md:w-auto md:px-10 md:py-6 md:text-lg"
        >
          Cotizar por WhatsApp
          <ArrowRight className="ml-2 h-5 w-5" />
        </WhatsAppButton>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-primary-foreground/70 md:mt-6 md:text-sm">
          <ShieldCheck className="h-4 w-4" />
          <span>Sin spam, solo respondemos consultas de pedidos</span>
        </div>
      </div>
    </section>
  )
}
