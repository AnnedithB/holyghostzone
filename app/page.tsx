import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { EventLanding } from "@/components/eventlanding"
import { Location } from "@/components/location"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, BookOpen, Camera, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <EventLanding />
        <Location />

      </main>
      <Footer />
    </div>
  )
}
