import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Users, Heart, Calendar } from "lucide-react"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/church-worship-congregation-praise.jpg",
      alt: "Sunday worship service with congregation in praise",
      category: "Worship",
    },
    {
      src: "/youth-conference-church-event.jpg",
      alt: "Youth conference with young people engaged in worship",
      category: "Youth",
    },
    {
      src: "/community-outreach-volunteer-service.jpg",
      alt: "Community outreach volunteers serving together",
      category: "Outreach",
    },
    {
      src: "/church-worship.png",
      alt: "Church sanctuary during worship service",
      category: "Worship",
    },
    {
      src: "/pastor-preaching-faith-sermon.jpg",
      alt: "Pastor delivering inspiring sermon",
      category: "Teaching",
    },
    {
      src: "/church-worship-congregation-praise.jpg",
      alt: "Congregation in worship and prayer",
      category: "Prayer",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-8 bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
                Photo Gallery
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed">
                Capturing moments of worship, fellowship, and community life that showcase the heart and spirit of Holy
                Ghost Zone MK.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Categories */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Gallery Categories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Explore different aspects of our church life and community
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: Users,
                  title: "Worship Services",
                  description: "Sunday services and special worship events",
                  count: "150+ Photos",
                },
                {
                  icon: Heart,
                  title: "Community Events",
                  description: "Fellowship gatherings and celebrations",
                  count: "200+ Photos",
                },
                {
                  icon: Calendar,
                  title: "Special Events",
                  description: "Conferences, retreats, and special occasions",
                  count: "100+ Photos",
                },
                {
                  icon: Camera,
                  title: "Behind the Scenes",
                  description: "Candid moments and preparation",
                  count: "75+ Photos",
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="glass-effect border-white/20 premium-shadow hover:premium-shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-8 text-center">
                    <category.icon className="h-12 w-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                    <div className="text-sm font-medium text-primary">{category.count}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Gallery */}
        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Recent Highlights</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                A collection of our most recent and memorable moments
              </p>
            </div>
            <GalleryGrid images={galleryImages} />
          </div>
        </section>

        {/* Photo Submission */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="glass-effect border-white/20 premium-shadow">
                <CardContent className="p-12 text-center">
                  <Camera className="h-16 w-16 text-primary mx-auto mb-8" />
                  <h2 className="text-3xl font-bold mb-6 text-balance">Share Your Photos</h2>
                  <p className="text-lg text-muted-foreground mb-8 text-balance leading-relaxed">
                    Have photos from our events or church activities? We'd love to feature them in our gallery! Share
                    your favorite moments with our community.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="premium-shadow hover:premium-shadow-lg transition-all duration-300">
                      Submit Photos
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="premium-shadow hover:premium-shadow-lg transition-all duration-300 bg-transparent"
                    >
                      Photo Guidelines
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Follow Us for More</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Stay connected with our community and see the latest photos and updates from our church family on social
              media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="premium-shadow hover:premium-shadow-lg transition-all duration-300">
                Follow on Instagram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="premium-shadow hover:premium-shadow-lg transition-all duration-300 bg-transparent"
              >
                Like on Facebook
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
