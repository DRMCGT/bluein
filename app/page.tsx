"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Scorecard } from "@/components/scorecard"
import { Footer } from "@/components/footer"

export default function Page() {
  const [analysisData, setAnalysisData] = useState<any>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero onAnalysisComplete={setAnalysisData} />
      <HowItWorks />
      <Scorecard data={analysisData} />
      <Footer />
    </main>
  )
}
