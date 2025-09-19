import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { SubscribeSection } from "@/components/subscribe-section"
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

        {/* Quick Links Section */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Explore Our Community</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Discover the many ways to connect, grow, and serve in our church family
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Calendar,
                  title: "Upcoming Events",
                  description: "Join us for worship services, community gatherings, and special events",
                  href: "/events",
                },
                {
                  icon: BookOpen,
                  title: "Latest Teachings",
                  description: "Dive deeper into God's Word with our inspiring messages and series",
                  href: "/teachings",
                },
                {
                  icon: Camera,
                  title: "Photo Gallery",
                  description: "See moments from our worship services and community life",
                  href: "/gallery",
                },
                {
                  icon: Users,
                  title: "Get Connected",
                  description: "Learn more about our church family and how to get involved",
                  href: "/contact",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="glass-effect border-white/20 premium-shadow hover:premium-shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-8 text-center">
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={item.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <SubscribeSection />
      </main>
      <Footer />
    </div>
  )
}
