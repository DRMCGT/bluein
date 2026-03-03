import { ProfileInput } from "@/components/profile-input"
import { Zap, Shield, Clock } from "lucide-react"

const stats = [
  { icon: Zap, label: "+30 parametros analizados" },
  { icon: Shield, label: "100% privado" },
  { icon: Clock, label: "Resultado en 30 seg" },
]

export function Hero({ onAnalysisComplete }: { onAnalysisComplete: (data: any) => void }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow effect */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-border px-3 py-1.5">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Beta abierta para egresados 2024-2026
          </span>
        </div>

        <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
          {'Descubre tu Score de '}
          <span className="text-primary">Empleabilidad</span>
          {' en LinkedIn'}
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {
            "Analiza tu perfil con los mismos criterios que usan los reclutadores de empresas tech. Identifica errores y mejora tu visibilidad."
          }
        </p>

        <ProfileInput onAnalysisComplete={onAnalysisComplete} />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <stat.icon className="h-4 w-4 text-primary/70" />
              <span className="font-mono text-xs">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
