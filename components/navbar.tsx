import { Activity } from "lucide-react"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            BlueIn
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#como-funciona"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {'Como funciona'}
          </a>
          <a
            href="#scorecard"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Ejemplo
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground md:inline-block">
            v1.0.0
          </span>
        </div>
      </nav>
    </header>
  )
}
