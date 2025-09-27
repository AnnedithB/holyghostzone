import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Users, Heart, Calendar } from "lucide-react"

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      src: "/images/fillerevents.jpg",
      alt: "Sunday worship service with congregation in praise",
      title: "Sunday Worship Service",
      category: "Worship",
    },
    {
      id: 2,
      src: "/youth-conference-church-event.jpg",
      alt: "Youth conference with young people engaged in worship",
      title: "Youth Conference",
      category: "Youth",
    },
    {
      id: 3,
      src: "/community-outreach-volunteer-service.jpg",
      alt: "Community outreach volunteers serving together",
      title: "Community Outreach",
      category: "Outreach",
    },
    {
      id: 4,
      src: "/church-worship.png",
      alt: "Church sanctuary during worship service",
      title: "Church Sanctuary",
      category: "Worship",
    },
    {
      id: 5,
      src: "/pastor-preaching-faith-sermon.jpg",
      alt: "Pastor delivering inspiring sermon",
      title: "Pastor Preaching",
      category: "Teaching",
    },
    {
      id: 6,
      src: "/images/fillerevents.jpg",
      alt: "Congregation in worship and prayer",
      title: "Prayer & Worship",
      category: "Prayer",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/prayer-worship-hands-raised.jpg')`
            }}
          />
          
          {/* Very Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/80 to-black/90" />
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-bold text-balance mb-8 leading-[0.9] tracking-tight text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Photo Gallery
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 text-pretty mb-12 leading-relaxed font-light">
                Capturing moments of worship, fellowship, and community life that showcase the heart and spirit of Holy
                Ghost Zone MK.
              </p>
            </div>
          </div>
        </section>

        {/* Main Gallery */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-bold text-balance mb-6 leading-[0.9] tracking-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Recent Highlights</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed font-light">
                A collection of our most recent and memorable moments
              </p>
            </div>
            <GalleryGrid images={galleryImages} />
          </div>
        </section>

        {/* Philosophical Reflection */}
        <section className="relative py-24 lg:py-48 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/temp.webp')`
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/80" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-bold text-balance leading-[0.9] tracking-tight text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                What If Every Moment Matters?
              </h2>
            </div>
          </div>
        </section>


       
      </main>
      <Footer />
    </div>
  )
}
