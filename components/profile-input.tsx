"use client"

import { useState, useRef } from "react"
import { Link, Upload, ArrowRight, FileText, X, Loader2 } from "lucide-react"

export function ProfileInput({ onAnalysisComplete }: { onAnalysisComplete: (data: any) => void }) {
  const [url, setUrl] = useState("")
  const [text, setText] = useState("")
  const [fileName, setFileName] = useState<string | null>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf") {
      setFileName(file.name)
      setUrl("")
    }
  }

  const clearFile = () => {
    setFileName(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = async () => {
    if (!text && !url && !fileName) return

    setIsAnalyzing(true)
    try {
      // For now, we only analyze the 'text' which is the LinkedIn extract pasted by the user
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text || "Extracto de prueba" }),
      })

      const data = await response.json()
      onAnalysisComplete(data)

      const target = document.getElementById("scorecard")
      target?.scrollIntoView({ behavior: "smooth" })
    } catch (error) {
      console.error("Analysis failed:", error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div
        className={`relative flex flex-col gap-3 rounded-lg border bg-card p-4 transition-all duration-200 ${isFocused
            ? "border-primary shadow-[0_0_20px_rgba(56,132,255,0.15)]"
            : "border-border"
          }`}
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Pega aquí tu extracto de LinkedIn o información del perfil..."
          className="min-h-[120px] w-full bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          aria-label="Extracto de LinkedIn"
        />

        <div className="flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
              aria-label="Subir PDF"
            >
              <Upload className="h-4 w-4" />
              <span className="hidden sm:inline">Subir CV (PDF)</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              aria-label="Seleccionar archivo PDF"
            />
            {fileName && (
              <span className="text-xs text-primary truncate max-w-[100px]">
                {fileName}
              </span>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!text || isAnalyzing}
            className="flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 disabled:opacity-30 disabled:hover:brightness-100"
            aria-label="Analizar perfil"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Analizando...</span>
              </>
            ) : (
              <>
                <span>Analizar mi perfil</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-xs text-muted-foreground">
        {'Tu privacidad es lo primero. No guardamos tus datos.'}
      </p>
    </div>
  )
}
