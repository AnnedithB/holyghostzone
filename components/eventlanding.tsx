"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react"

export function EventLanding() {
  const [currentEvent, setCurrentEvent] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const events = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "9:00 AM & 11:00 AM",
      location: "De Vere Venues Harben",
      description: "Join us for our main worship services. We gather to worship together, learn from Scripture, pray for one another, and create space to hear from the Spirit.",
      image: "/images/temp.webp"
    },
    {
      title: "Wednesday Bible Study",
      date: "Every Wednesday",
      time: "7:00 PM",
      location: "De Vere Venues Harben",
      description: "Mid-week Bible study sessions where we dive deeper into God's Word. Interactive study sessions with small group discussions.",
      image: "/images/temp.webp"
    },
    {
      title: "Friday Youth Service",
      date: "Every Friday",
      time: "6:30 PM",
      location: "De Vere Venues Harben",
      description: "Special services designed for our youth community. Energetic gatherings focused on relevant topics for young people and the energetic.",
      image: "/images/temp.webp"
    },
    {
      title: "Community Outreach",
      date: "Monthly",
      time: "Various Times",
      location: "Local Community",
      description: "Community outreach programs and seasonal celebrations. Transformational Christ-centered activities that impact our local community.",
      image: "/images/temp.webp"
    },
    {
      title: "Prayer Meeting",
      date: "Every Tuesday",
      time: "7:30 PM",
      location: "De Vere Venues Harben",
      description: "Weekly prayer meetings where we come together to pray for our community, church family, and world. All are welcome to join in prayer.",
      image: "/images/temp.webp"
    },
    {
      title: "Children's Ministry",
      date: "Every Sunday",
      time: "10:00 AM",
      location: "De Vere Venues Harben",
      description: "Special programs designed for children to learn about God's love through stories, songs, and activities in a fun and engaging environment.",
      image: "/images/temp.webp"
    }
  ]

  const getVisibleEvents = () => {
    // For mobile: show 1 event, tablet: 2 events, desktop: 3 events
    const isMobile = windowWidth < 768
    const isTablet = windowWidth >= 768 && windowWidth < 1024
    
    let eventsToShow = 3 // desktop default
    if (isMobile) eventsToShow = 1
    else if (isTablet) eventsToShow = 2
    
    return events.slice(currentEvent, currentEvent + eventsToShow)
  }

  const getMaxIndex = () => {
    const isMobile = windowWidth < 768
    const isTablet = windowWidth >= 768 && windowWidth < 1024
    
    let eventsToShow = 3 // desktop default
    if (isMobile) eventsToShow = 1
    else if (isTablet) eventsToShow = 2
    
    return events.length - eventsToShow
  }

  const nextEvent = () => {
    const maxIndex = getMaxIndex()
    setCurrentEvent((prev) => (prev + 1) % (maxIndex + 1))
  }

  const prevEvent = () => {
    const maxIndex = getMaxIndex()
    setCurrentEvent((prev) => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1))
  }

  return (
    <section className="relative py-12 bg-gray-900 overflow-hidden">
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/carousel.jpg')`,
          filter: 'blur(8px)',
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join us for worship, fellowship, and spiritual growth.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            {/* Left Navigation Arrow */}
            <button
              onClick={prevEvent}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 flex-shrink-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Event Cards Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getVisibleEvents().map((event, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                  <CardContent className="">
                    {/* Event Image */}
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Event Details */}
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-3">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{event.date}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{event.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{event.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed text-xs line-clamp-3">
                        {event.description}
                      </p>

                      <div className="flex justify-center">
                        <Button className="w-[50%] bg-primary hover:bg-primary/90 text-white py-2 text-sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Navigation Arrow */}
            <button
              onClick={nextEvent}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 flex-shrink-0"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Event Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: getMaxIndex() + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEvent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentEvent 
                    ? 'bg-primary scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
