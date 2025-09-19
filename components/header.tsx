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
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/teachings", label: "Teachings" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-effect premium-shadow-lg border-b border-white/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 hover:scale-105 group"
            aria-label="Holy Ghost Zone MK Homepage"
          >
            <Image
              src="/images/holy-ghost-zone-logo.png"
              alt="Holy Ghost Zone MK"
              width={140}
              height={48}
              className="h-10 lg:h-12 w-auto group-hover:drop-shadow-lg transition-all duration-300"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all duration-300 font-medium text-lg group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="https://example-affiliate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 py-3"
              aria-label="Visit Affiliated Site"
            >
              <div className="px-6 py-3 glass-effect rounded-xl premium-shadow text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 border border-white/20">
                Affiliate Site
              </div>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden w-12 h-12 rounded-xl glass-effect premium-shadow hover:bg-primary/10 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-effect premium-shadow-lg border-b border-white/20 animate-slide-up">
            <nav className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-all duration-300 font-medium text-lg py-3 border-b border-border/50 last:border-b-0 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-6 border-t border-border/50">
                  <Link
                    href="https://example-affiliate.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 hover:opacity-80 transition-all duration-300 py-3"
                    aria-label="Visit Affiliated Site"
                  >
                    <div className="px-4 py-2 glass-effect rounded-lg premium-shadow text-sm font-medium text-muted-foreground border border-white/20">
                      Visit Affiliate Site
                    </div>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
