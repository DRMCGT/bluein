import { Link, Cpu, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Pega tu URL",
    description:
      "Comparte el enlace de tu perfil de LinkedIn o sube tu CV en formato PDF.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Analisis automatico",
    description:
      "Nuestro algoritmo evalua +30 parametros clave que los reclutadores revisan.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Recibe tu Scorecard",
    description:
      "Obten un reporte detallado con score, errores y recomendaciones accionables.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 text-center">
          <span className="inline-block rounded-sm border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Proceso
          </span>
        </div>
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {'Como funciona'}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-primary">
                  {step.number}
                </span>
                <div className="h-px flex-1 bg-border" />
                <step.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
