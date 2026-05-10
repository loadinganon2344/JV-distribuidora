"use client"

import { Badge } from "@/components/ui/badge"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckCircle, Package, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card px-4 py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Urgency badge */}
        <Badge
          variant="secondary"
          className="mb-4 border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent md:mb-6 md:px-4 md:text-sm"
        >
          <Clock className="mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
          Stock Limitado - Pedidos Semanales
        </Badge>

        <Badge
          variant="secondary"
          className="mb-4 ml-2 px-3 py-1.5 text-xs font-medium md:mb-6 md:px-4 md:text-sm"
        >
          <Package className="mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
          Venta Mayorista
        </Badge>

        <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:mb-6 md:text-5xl lg:text-6xl">
          Detergentes al por mayor{" "}
          <span className="text-primary">para tu negocio</span>
        </h1>

        <p className="mx-auto mb-6 max-w-2xl text-pretty text-base text-muted-foreground md:mb-8 md:text-xl">
          Abastece tu local o revende con{" "}
          <span className="font-semibold text-foreground">
            precios reales de mayorista.
          </span>{" "}
          Pedido mínimo: 30 bidones. Entregas con recargo según comuna.
        </p>

        {/* Primary CTA - more prominent */}
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <WhatsAppButton
            size="lg"
            className="w-full max-w-sm animate-pulse bg-[#25D366] px-6 py-5 text-base font-bold text-white shadow-lg transition-all hover:animate-none hover:bg-[#22c55e] hover:shadow-xl md:w-auto md:px-10 md:py-6 md:text-lg"
          >
            Cotizar Ahora por WhatsApp
          </WhatsAppButton>

          <p className="flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground md:text-sm">
            <Clock className="h-3.5 w-3.5 text-accent" />
            Respuesta rápida (menos de 2 horas)
          </p>
        </div>

        {/* Trust signals - tighter on mobile */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground md:mt-8 md:gap-x-6 md:text-sm">
          <span className="flex items-center gap-1.5">
            <Package className="h-4 w-4 text-accent" />
            Stock disponible semanal
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-accent" />
            Atención directa sin intermediarios
          </span>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
    </section>
  )
}
