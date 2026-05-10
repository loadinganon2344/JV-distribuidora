"use client"

import { Package, Truck, MessageCircle, Clock } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

const conditions = [
  {
    icon: Package,
    text: "Pedido mínimo: 30 bidones",
  },
  {
    icon: Truck,
    text: "Entregas con recargo según comuna",
  },
  {
    icon: MessageCircle,
    text: "Cotización directa por WhatsApp",
  },
  {
    icon: Clock,
    text: "Respuesta en menos de 2 horas",
  },
]

export function PurchaseConditions() {
  return (
    <section className="px-4 py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-center text-xl font-bold text-foreground md:mb-8 md:text-2xl">
          Así de simple es comprar
        </h2>

        {/* Simple direct format */}
        <div className="mb-6 space-y-3 rounded-xl border border-border bg-card p-4 shadow-sm md:mb-8 md:space-y-4 md:p-6">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm md:text-base"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 md:h-10 md:w-10">
                <condition.icon className="h-4 w-4 text-primary md:h-5 md:w-5" />
              </div>
              <p className="font-medium text-foreground">{condition.text}</p>
            </div>
          ))}
        </div>

        {/* Direct CTA */}
        <div className="text-center">
          <WhatsAppButton
            size="lg"
            className="w-full bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-lg hover:bg-[#22c55e] md:w-auto md:px-10 md:py-5 md:text-lg"
          >
            Cotizar Ahora
          </WhatsAppButton>
          <p className="mt-3 text-xs text-muted-foreground md:text-sm">
            Sin compromiso - Respuesta rápida
          </p>
        </div>
      </div>
    </section>
  )
}
