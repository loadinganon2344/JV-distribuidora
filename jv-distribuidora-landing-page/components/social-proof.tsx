"use client"

import { WhatsAppButton } from "@/components/whatsapp-button"
import { Star } from "lucide-react"

export function SocialProof() {
  return (
    <section className="bg-primary/5 px-4 py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        {/* Human-focused proof */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:mb-8 md:grid-cols-3 md:gap-6">
          <div className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-sm md:flex-col md:text-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 md:h-12 md:w-12">
              <span className="text-lg font-bold text-primary md:text-xl">100+</span>
            </div>
            <p className="text-sm text-foreground md:text-base">
              <span className="font-semibold">Negocios ya compran</span> con JV cada semana
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-sm md:flex-col md:text-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 md:h-12 md:w-12">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400 md:h-6 md:w-6" />
            </div>
            <p className="text-sm text-foreground md:text-base">
              <span className="font-semibold">Proveedor directo</span> sin intermediarios
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-sm md:flex-col md:text-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 md:h-12 md:w-12">
              <span className="text-lg font-bold text-primary md:text-xl">4</span>
            </div>
            <p className="text-sm text-foreground md:text-base">
              <span className="font-semibold">Años de experiencia</span> abasteciendo negocios
            </p>
          </div>
        </div>

        <blockquote className="mb-4 rounded-lg border-l-4 border-primary bg-card p-4 text-left text-base font-medium text-foreground shadow-sm md:mb-6 md:p-6 md:text-lg">
          {'"'}Clientes abastecer su stock cada semana con nosotros. Somos su proveedor de confianza.{'"'}
        </blockquote>

        <p className="mb-6 text-sm text-muted-foreground md:text-base">
          Almacenes, minimarkets y revendedores de todo Chile confían en JV Distribuidora.
        </p>

        <WhatsAppButton className="bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground md:px-8 md:py-4 md:text-base">
          Unete a nuestros clientes
        </WhatsAppButton>
      </div>
    </section>
  )
}
