import { Activity } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">
            ScoreIn
          </span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {'Hecho para ingenieros que buscan su primer empleo.'}
        </p>
        <span className="font-mono text-xs text-muted-foreground">
          {'2026 ScoreIn'}
        </span>
      </div>
    </footer>
  )
}
