"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/teachings", label: "Teachings" },
    { href: "/gallery", label: "Gallery" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-effect premium-shadow-lg border-b border-white/20" : "bg-transparent "
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Main Logo - Left Side */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-105 group"
            aria-label="Holy Ghost Zone MK Homepage"
          >
            <Image
              src="/images/holy-ghost-zone-logo.png"
              alt="Holy Ghost Zone MK"
              width={120}
              height={40}
              className="h-14 sm:h-14 lg:h-20 w-auto group-hover:drop-shadow-lg transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-all duration-300 font-medium text-base xl:text-lg group ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side - Affiliate Logo and Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Affiliate Logo - Hidden on very small screens, visible on sm and up */}
            <Link
              href="https://www.rccg.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center hover:opacity-80 transition-all duration-300 hover:scale-105 group"
              aria-label="Visit Affiliated Church"
            >
              <Image
                src="/images/affchurch.avif"
                alt="Affiliated Church"
                width={100}
                height={32}
                className="h-6 sm:h-8 lg:h-20 w-auto group-hover:drop-shadow-lg transition-all duration-300"
                priority
              />
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-effect premium-shadow hover:bg-primary/10 transition-all duration-300"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-effect premium-shadow-lg border-b border-white/20 animate-slide-up">
            <nav className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
              <div className="flex flex-col space-y-4 sm:space-y-6">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-all duration-300 font-medium text-base sm:text-lg py-2 sm:py-3 border-b border-border/50 last:border-b-0 animate-fade-in ${
                      isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Affiliate Section */}
                <div className="pt-4 sm:pt-6 border-t border-border/50">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <span className="text-sm text-muted-foreground font-medium">Partner Church:</span>
                    <Link
                      href="https://example-affiliate.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 group"
                      aria-label="Visit Affiliated Church"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Image
                        src="/images/affchurch.avif"
                        alt="Affiliated Church"
                        width={80}
                        height={24}
                        className="h-6 w-auto group-hover:drop-shadow-lg transition-all duration-300"
                      />
                      <span className="text-sm font-medium text-primary">Visit Site</span>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
