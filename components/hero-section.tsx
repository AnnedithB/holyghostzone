"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Sparkles } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById("about")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

        {/* Sophisticated animated elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/6 to-primary/6 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/4 to-secondary/4 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Premium mesh pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(15, 23, 36, 0.4) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Subtle noise texture for premium feel */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect premium-shadow mb-8 text-sm font-medium text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            Welcome to Holy Ghost Zone MK
          </div>

          <h1 className="font-bold text-balance mb-8 leading-[0.95] tracking-tight">
            Experience the <span className="gradient-text font-black">Power</span> of{" "}
            <span className="text-secondary font-black">Faith</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto text-pretty mb-12 leading-relaxed font-light">
            Join our vibrant community where modern worship meets timeless truth.
            <br className="hidden md:block" />
            Discover your purpose, grow in faith, and make lasting connections.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold rounded-2xl premium-shadow-lg hover:premium-shadow transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 min-w-[200px]"
            >
              <span className="relative z-10">Join Us This Sunday</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground px-10 py-6 text-lg font-semibold rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-white/50 backdrop-blur-sm premium-shadow min-w-[200px]"
            >
              <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Live Stream</span>
            </Button>
          </div>

          <div className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto premium-shadow-lg border border-white/30">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Service Times</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">S</span>
                </div>
                <div className="font-bold text-lg text-foreground mb-2">Sunday Worship</div>
                <div className="text-muted-foreground font-medium">9:00 AM & 11:00 AM</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">W</span>
                </div>
                <div className="font-bold text-lg text-foreground mb-2">Wednesday Bible Study</div>
                <div className="text-muted-foreground font-medium">7:00 PM</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">F</span>
                </div>
                <div className="font-bold text-lg text-foreground mb-2">Friday Youth Service</div>
                <div className="text-muted-foreground font-medium">6:30 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-all duration-500 animate-bounce hover:scale-110 group"
        aria-label="Scroll to next section"
      >
        <div className="w-12 h-12 rounded-full glass-effect premium-shadow flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>
    </section>
  )
}
