"use client"

import { ScoreGauge } from "@/components/score-gauge"
import {
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Users,
  Briefcase,
} from "lucide-react"

const errors = [
  {
    id: 1,
    icon: AlertTriangle,
    title: "Headline generico",
    description:
      'Tu headline dice "Estudiante de Ingenieria" sin diferenciacion. Faltan keywords de tu especialidad.',
  },
  {
    id: 2,
    icon: Users,
    title: "Red de contactos limitada",
    description:
      "Tienes menos de 150 conexiones. El algoritmo de LinkedIn limita tu visibilidad ante reclutadores.",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Sin seccion de proyectos",
    description:
      "No tienes proyectos destacados. Los reclutadores tech buscan evidencia de trabajo practico.",
  },
]

const successes = [
  {
    id: 1,
    icon: CheckCircle2,
    title: "Foto profesional",
    description:
      "Tu foto cumple con los estandares: fondo neutro, iluminacion correcta y vestimenta adecuada.",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Experiencia bien estructurada",
    description:
      "Tus descripciones de experiencia usan verbos de accion y metricas cuantificables.",
  },
  {
    id: 3,
    icon: CheckCircle2,
    title: "Skills relevantes validadas",
    description:
      "Tienes +5 endorsements en habilidades tecnicas clave para tu industria.",
  },
]

export function Scorecard({ data }: { data?: any }) {
  const score = data?.score ?? 67
  const summary = data?.summary ?? "Asi es como se ve un analisis completo de un perfil de ingenieria."
  const isDynamic = !!data

  return (
    <section id="scorecard" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 text-center">
          <span className="inline-block rounded-sm border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {isDynamic ? "Tu reporte personalizado" : "Ejemplo de reporte"}
          </span>
        </div>
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Tu Scorecard
        </h2>
        <p className="mx-auto mb-16 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">
          {summary}
        </p>

        <div className="rounded-lg border border-border bg-card p-6 md:p-10">
          {/* Header row */}
          <div className="mb-10 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            {/* Gauge */}
            <div className="flex flex-col items-center">
              <ScoreGauge score={score} size={180} strokeWidth={10} />
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-destructive" />
                  <span className="font-mono text-xs text-muted-foreground">
                    Errores
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <span className="font-mono text-xs text-muted-foreground">
                    Aciertos
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-1 flex-col gap-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-md border border-border bg-secondary p-4">
                  <span className="font-mono text-2xl font-bold text-foreground">
                    {score}
                  </span>
                  <span className="font-mono text-2xl text-muted-foreground">
                    /100
                  </span>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Score global
                  </p>
                </div>
                <div className="rounded-md border border-border bg-secondary p-4">
                  <span className="font-mono text-2xl font-bold text-primary">
                    {score > 80 ? "Top 5%" : score > 50 ? "Top 25%" : "Top 60%"}
                  </span>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Percentil
                  </p>
                </div>
                <div className="rounded-md border border-border bg-secondary p-4">
                  <span className="font-mono text-2xl font-bold text-foreground">
                    {data?.details?.keywords ? Object.values(data.details.keywords).filter(Boolean).length : 12}
                  </span>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Skills detectadas
                  </p>
                </div>
              </div>
              <div className="rounded-md border border-border bg-secondary px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    Completitud del perfil
                  </span>
                  <span className="font-mono text-xs font-medium text-foreground">
                    {score}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-background">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-1000"
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-8 h-px w-full bg-border" />

          {/* Errors and Successes */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Errors */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-destructive" />
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-destructive">
                  Errores detectados
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {errors.map((error) => (
                  <div
                    key={error.id}
                    className="group rounded-md border border-border bg-secondary p-4 transition-all hover:border-destructive/30"
                  >
                    <div className="flex items-start gap-3">
                      <error.icon className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <div>
                        <h4 className="text-sm font-medium text-foreground">
                          {error.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {error.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Successes */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-success" />
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-success">
                  Aciertos del perfil
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {successes.map((success) => (
                  <div
                    key={success.id}
                    className="group rounded-md border border-border bg-secondary p-4 transition-all hover:border-success/30"
                  >
                    <div className="flex items-start gap-3">
                      <success.icon className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <div>
                        <h4 className="text-sm font-medium text-foreground">
                          {success.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {success.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
