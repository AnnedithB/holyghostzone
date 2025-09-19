"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, Send, CheckCircle } from "lucide-react"

export function SubscribeSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setEmail("")
        // Reset success state after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError("An error occurred. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              Stay Connected with <span className="text-primary">Holy Ghost Zone</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Subscribe to our newsletter and never miss updates on upcoming events, inspiring teachings, and community
              news from our church family.
            </p>
          </div>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  You've successfully subscribed to our newsletter. Welcome to the Holy Ghost Zone family!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 px-4 text-base border-2 border-border focus:border-primary rounded-full bg-background"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading || !email}
                    className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        Subscribe
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <p className="text-sm text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
              </form>
            )}
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Weekly Updates</h3>
              <p className="text-sm text-muted-foreground">
                Get the latest news and announcements delivered to your inbox
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Event Reminders</h3>
              <p className="text-sm text-muted-foreground">Never miss important church events and special services</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Prayer Requests</h3>
              <p className="text-sm text-muted-foreground">Join our community in prayer and spiritual support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
