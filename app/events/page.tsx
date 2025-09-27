import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Easter Celebration Service",
      date: "March 31, 2024",
      time: "9:00 AM & 11:00 AM",
      location: "Main Sanctuary",
      category: "Worship",
      attendees: 350,
      image: "/images/fillerevents.jpg",
      description: "Join us for a powerful Easter celebration as we rejoice in the resurrection of our Lord Jesus Christ. Special music, drama presentation, and communion service.",
    },
    {
      id: 2,
      title: "Women's Empowerment Conference",
      date: "April 6-7, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Hall",
      category: "Conference",
      attendees: 150,
      image: "/images/aboutus2.jpg",
      description: "A two-day conference designed to empower women in faith, leadership, and purpose. Featuring guest speakers, workshops, and networking opportunities.",
    },
    {
      id: 3,
      title: "Community Food Drive",
      date: "April 13, 2024",
      time: "8:00 AM - 4:00 PM",
      location: "Church Parking Lot",
      category: "Outreach",
      attendees: 100,
      image: "/community-outreach-volunteer-service.jpg",
      description: "Help us make a difference in our community by donating non-perishable food items. We'll be collecting and distributing food to local families in need.",
    },
    {
      id: 4,
      title: "Youth Worship Night",
      date: "April 19, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "Youth Center",
      category: "Youth",
      attendees: 80,
      image: "/youth-conference-church-event.jpg",
      description: "An evening of dynamic worship, testimonies, and fellowship for young people ages 13-25. Featuring live music, games, and refreshments.",
    },
    {
      id: 5,
      title: "Men's Breakfast & Fellowship",
      date: "April 27, 2024",
      time: "8:00 AM - 10:00 AM",
      location: "Church Hall",
      category: "Fellowship",
      attendees: 60,
      image: "/images/aboutus3.jpg",
      description: "Join our men's ministry for a time of fellowship, encouragement, and spiritual growth. Delicious breakfast and inspiring testimonies included.",
    },
    {
      id: 6,
      title: "Children's Fun Day",
      date: "May 4, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Church Grounds",
      category: "Children",
      attendees: 200,
      image: "/images/temp.webp",
      description: "A day of fun, games, and learning for children ages 5-12. Bouncy castles, face painting, Bible stories, and prizes for everyone!",
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
              backgroundImage: `url('/images/services.jpg')`
            }}
          />
          
          {/* Very Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/80 to-black/90" />
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-bold text-balance mb-8 leading-[0.9] tracking-tight text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Upcoming Events
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 text-pretty mb-12 leading-relaxed font-light">
                Join us for meaningful gatherings, inspiring worship, and community-building events that strengthen our
                faith and deepen our connections.
              </p>
            </div>
          </div>
        </section>

        {/* Special Events */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-bold text-balance mb-6 leading-[0.9] tracking-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Special Events</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed font-light">
                Don't miss these upcoming special gatherings and community events
              </p>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </div>
        </section>

        {/* Philosophical Reflection */}
        <section className="relative py-24 lg:py-48 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/carousel.jpg')`
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/80" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-bold text-balance leading-[0.9] tracking-tight text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                What If Community Changes Everything?
              </h2>
            </div>
          </div>
        </section>


        {/* Event Categories */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-bold text-balance mb-6 leading-[0.9] tracking-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Event Categories</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed font-light">
                Explore different types of events and find what interests you most
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Worship Services",
                  description: "Regular Sunday services and special worship events",
                },
                {
                  icon: Calendar,
                  title: "Community Events",
                  description: "Fellowship gatherings and social activities",
                },
                {
                  icon: MapPin,
                  title: "Outreach Programs",
                  description: "Service projects and community involvement",
                },
                {
                  icon: Clock,
                  title: "Bible Studies",
                  description: "Weekly studies and spiritual growth opportunities",
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="glass-effect border-white/20 premium-shadow hover:premium-shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <category.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
