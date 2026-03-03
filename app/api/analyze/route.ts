import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { text } = await request.json()

    if (!text) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 })
    }

    let score = 70 // Base score
    const details = {
      length: text.length,
      hasEngineering: /ingeniero|engineering/i.test(text),
      keywords: {
        python: /python/i.test(text),
        sql: /sql/i.test(text),
        autocad: /autocad/i.test(text),
        excel: /excel/i.test(text),
      },
    }

    // Rules logic
    if (details.length < 200) {
      score -= 20
    }

    if (!details.hasEngineering) {
      score -= 15
    }

    if (details.keywords.python) score += 10
    if (details.keywords.sql) score += 10
    if (details.keywords.autocad) score += 10
    if (details.keywords.excel) score += 10

    // Clamp score between 0 and 100
    score = Math.max(0, Math.min(100, score))

    // Gemini 1.5 Flash Mock summary
    const summary = `Tu perfil tiene un score de ${score}/100. ${
      score < 50
        ? "Necesitas fortalecer tu extracto con más palabras clave técnicas y descripciones detalladas."
        : "Buen trabajo, tu perfil destaca en áreas técnicas clave."
    } Sugerencia: Asegúrate de incluir proyectos específicos.`

    return NextResponse.json({
      score,
      summary,
      details,
    })
  } catch (error) {
    console.error("Analysis error:", error)
    return NextResponse.json({ error: "Failed to analyze profile" }, { status: 500 })
  }
}
