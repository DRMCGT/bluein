"use client"

import { useEffect, useState } from "react"

interface ScoreGaugeProps {
  score: number
  size?: number
  strokeWidth?: number
}

export function ScoreGauge({
  score,
  size = 200,
  strokeWidth = 12,
}: ScoreGaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(0)

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const startAngle = 135
  const sweepAngle = 270
  const arcLength = (sweepAngle / 360) * circumference
  const filledLength = (animatedScore / 100) * arcLength
  const dashOffset = arcLength - filledLength

  useEffect(() => {
    const timeout = setTimeout(() => {
      let current = 0
      const interval = setInterval(() => {
        current += 1
        if (current >= score) {
          setAnimatedScore(score)
          clearInterval(interval)
        } else {
          setAnimatedScore(current)
        }
      }, 12)
      return () => clearInterval(interval)
    }, 400)
    return () => clearTimeout(timeout)
  }, [score])

  const getScoreColor = (s: number) => {
    if (s >= 75) return "text-success"
    if (s >= 50) return "text-primary"
    if (s >= 25) return "text-chart-4"
    return "text-destructive"
  }

  const getScoreLabel = (s: number) => {
    if (s >= 75) return "Excelente"
    if (s >= 50) return "Bueno"
    if (s >= 25) return "Mejorable"
    return "Bajo"
  }

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-[225deg]"
      >
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          className="text-secondary"
          strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength} ${circumference - arcLength}`}
          strokeLinecap="round"
        />
        {/* Filled arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          className={`${getScoreColor(animatedScore)} transition-all duration-300`}
          strokeWidth={strokeWidth}
          strokeDasharray={`${filledLength} ${circumference - filledLength}`}
          strokeDashoffset={0}
          strokeLinecap="round"
          style={{
            filter: `drop-shadow(0 0 8px currentColor)`,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`font-mono text-5xl font-bold tracking-tighter ${getScoreColor(animatedScore)}`}
        >
          {animatedScore}
        </span>
        <span className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {getScoreLabel(animatedScore)}
        </span>
      </div>
    </div>
  )
}
