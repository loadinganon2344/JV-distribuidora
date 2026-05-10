"use client"

import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "56930776762"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero cotizar detergentes al por mayor (30+ bidones)"
)

export function Header() {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    )
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:h-16">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-jv.jpg"
            alt="JV Distribuidora Logo"
            width={48}
            height={48}
            className="h-10 w-10 rounded-lg object-contain md:h-12 md:w-12"
          />
          <span className="text-base font-bold text-foreground md:text-lg">
            JV Distribuidora
          </span>
        </div>

        <Button
          onClick={handleWhatsAppClick}
          size="sm"
          className="bg-[#25D366] text-xs font-semibold text-white hover:bg-[#22c55e] md:text-sm"
        >
          <MessageCircle className="mr-1.5 h-4 w-4" />
          <span className="hidden sm:inline">Cotizar</span>
          <span className="sm:hidden">WhatsApp</span>
        </Button>
      </div>
    </header>
  )
}
