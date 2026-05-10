import { BadgeDollarSign, Package, Truck, Users } from "lucide-react"

const valueProps = [
  {
    icon: BadgeDollarSign,
    title: "Precios mayoristas reales",
    description: "Sin intermediarios, directo para tu negocio",
  },
  {
    icon: Package,
    title: "Mínimo 30 bidones",
    description: "Volumen ideal para locales y revendedores",
  },
  {
    icon: Truck,
    title: "Entregas coordinadas",
    description: "Despacho según tu comuna",
  },
  {
    icon: Users,
    title: "Para negocios",
    description: "Almacenes, ferias, locales comerciales",
  },
]

export function ValueProposition() {
  return (
    <section className="px-4 py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-xl font-bold text-foreground md:mb-12 md:text-3xl">
          ¿Por qué comprar con nosotros?
        </h2>

        <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="rounded-xl bg-card p-4 shadow-sm transition-shadow hover:shadow-md md:p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 md:mb-4 md:h-12 md:w-12">
                <prop.icon className="h-5 w-5 text-primary md:h-6 md:w-6" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground md:mb-2 md:text-base">
                {prop.title}
              </h3>
              <p className="text-xs text-muted-foreground md:text-sm">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
