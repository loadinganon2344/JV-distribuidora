"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, CheckCircle } from "lucide-react"

const WHATSAPP_NUMBER = "56930776762"

const products = [
  {
    id: "perlado",
    name: "Detergente Perlado con Suavizante",
    image: "/detergentes-jv.jpg",
    badge: "Más vendido",
    badgeColor: "bg-accent text-accent-foreground",
    features: [
      "Detergente perlado con suavizante incluido",
      "Formato de 5 litros",
      "3 colores disponibles: Rosa, Azul y Blanco",
      "Ideal para reventa - Alta rotación",
    ],
    minOrder: 30,
    note: "Puedes mezclar colores en tu pedido",
    whatsappMessage: "Hola, quiero cotizar detergentes perlados al por mayor (30+ bidones)",
  },
  {
    id: "concentrado",
    name: "Detergente Líquido Concentrado Premium",
    image: "/detergente-concentrado-jv.jpg",
    badge: "Nueva Fórmula",
    badgeColor: "bg-primary text-primary-foreground",
    features: [
      "Fórmula concentrada premium",
      "Formato de 5 litros",
      "Rinde el doble que detergentes comunes",
      "Limpieza profunda para todo tipo de ropa",
    ],
    minOrder: 30,
    note: "Mayor rendimiento por litro",
    whatsappMessage: "Hola, quiero cotizar detergentes concentrados al por mayor (30+ bidones)",
  },
  {
    id: "economico",
    name: "Detergente Económico",
    image: "/detergente-economico-jv.jpg",
    badge: "Mejor precio",
    badgeColor: "bg-amber-500 text-white",
    features: [
      "Detergente líquido concentrado",
      "Formato de 5 litros",
      "Nueva fórmula mejorada",
      "Opción más económica para alta rotación",
    ],
    minOrder: 50,
    note: "Pedido mínimo de 50 unidades",
    whatsappMessage: "Hola, quiero cotizar detergentes económicos al por mayor (50+ bidones)",
  },
]

export function ProductsSection() {
  const handleClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    )
  }

  return (
    <section className="bg-card px-4 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-14">
          <Badge className="mb-3 bg-primary/10 text-primary">
            Venta Mayorista
          </Badge>
          <h2 className="mb-3 text-2xl font-bold text-foreground md:mb-4 md:text-3xl lg:text-4xl">
            Nuestros Productos
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Calidad premium a precio mayorista - Diferentes opciones para tu negocio
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`grid gap-6 md:grid-cols-2 md:gap-10 lg:gap-14 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100 shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                  priority={index === 0}
                />
                <Badge className={`absolute left-3 top-3 md:left-4 md:top-4 ${product.badgeColor}`}>
                  {product.badge}
                </Badge>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl lg:text-3xl">
                  {product.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground md:text-base">
                  Bidones de 5 Litros
                </p>
                
                <ul className="mb-6 space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground md:text-base">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6 rounded-lg bg-primary/5 p-4">
                  <p className="text-sm font-medium text-foreground md:text-base">
                    Pedido mínimo: <span className="font-bold text-primary">{product.minOrder} bidones</span>
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                    {product.note}
                  </p>
                </div>

                <Button
                  onClick={() => handleClick(product.whatsappMessage)}
                  size="lg"
                  className="w-full bg-[#25D366] text-base font-semibold text-white hover:bg-[#20BD5A] md:text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Cotizar este producto
                </Button>
                
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Respuesta en menos de 2 horas
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground md:mt-14 md:text-sm">
          * Precios varían según volumen. Cotiza por WhatsApp para tu mejor precio.
        </p>
      </div>
    </section>
  )
}
