"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/bgimg.jpg')`
          }}
        />
        
        {/* Super Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/98" />
        
        {/* Additional dramatic overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Sophisticated animated elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/12 to-primary/12 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Premium mesh pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Subtle noise texture for premium feel */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
        
        {/* Additional polish - subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent via-transparent to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="max-w-[90%] text-left">
              <h1 className="font-bold text-balance mb-8 leading-[0.9] tracking-tight text-white text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
                Experience the <span className="gradient-text font-black">Power</span> of{" "}
                <span className="text-primary font-black">Faith</span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 text-pretty mb-12 leading-relaxed font-light">
                Join our vibrant community where modern worship meets timeless truth.
                <br className="hidden md:block" />
                Discover your purpose, grow in faith, and make lasting connections.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <Link href="/teachings">
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold rounded-2xl premium-shadow-lg hover:premium-shadow transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 min-w-[220px]"
                  >
                    <span className="relative z-10">Teachings</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-white/10 backdrop-blur-sm premium-shadow min-w-[220px]"
                  >
                    <span>About</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
