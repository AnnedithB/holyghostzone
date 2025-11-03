"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Users, Heart, Calendar } from "lucide-react"

export default function GalleryPage() {
  const [pageData, setPageData] = useState({
    hero: {
      title: 'Photo Gallery',
      subtitle: 'Capturing moments of worship, fellowship, and community life that showcase the heart and spirit of Holy Ghost Zone MK.',
      backgroundImage: '/prayer-worship-hands-raised.jpg'
    },
    recentTitle: 'Recent Highlights',
    recentSubtitle: 'A collection of our most recent and memorable moments',
    reflection: {
      title: 'What If Every Moment Matters?',
      backgroundImage: '/images/temp.webp'
    },
    galleryImages: [
      {
        id: 1,
        src: '/images/fillerevents.jpg',
        alt: 'Sunday worship service with congregation in praise',
        title: 'Sunday Worship Service',
        category: 'Worship'
      }
    ]
  })

  useEffect(() => {
    loadPageData();
  }, []);

  const loadPageData = async () => {
    try {
      const response = await fetch('/api/pages/gallery');
      if (!response.ok) {
        console.error('Failed to load page data');
        return;
      }
      const data = await response.json();
      if (Object.keys(data).length > 0) {
        setPageData(prevData => ({
          ...prevData,
          ...data
        }));
      }
    } catch (error) {
      console.error('Error loading page data:', error);
    }
  };

  const galleryImages = pageData.galleryImages || []

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
              backgroundImage: `url('${pageData.hero.backgroundImage}')`
            }}
          />
          
          {/* Very Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/80 to-black/90" />
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-bold text-balance mb-8 leading-[0.9] tracking-tight text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {pageData.hero.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 text-pretty mb-12 leading-relaxed font-light">
                {pageData.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Main Gallery */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-bold text-balance mb-6 leading-[0.9] tracking-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{pageData.recentTitle}</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed font-light">
                {pageData.recentSubtitle}
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
              backgroundImage: `url('${pageData.reflection.backgroundImage}')`
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/80" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-bold text-balance leading-[0.9] tracking-tight text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {pageData.reflection.title}
              </h2>
            </div>
          </div>
        </section>


       
      </main>
      <Footer />
    </div>
  )
}
