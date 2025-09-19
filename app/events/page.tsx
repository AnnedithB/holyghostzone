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
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "9:00 AM & 11:00 AM",
      location: "Main Sanctuary",
      category: "Worship",
      attendees: 250,
      image: "/church-worship.png",
      description: "Join us for inspiring worship, powerful teaching, and authentic community every Sunday morning.",
    },
    {
      id: 2,
      title: "Youth Conference 2024",
      date: "March 15-17, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Youth Center",
      category: "Youth",
      attendees: 120,
      image: "/youth-conference-church-event.jpg",
      description:
        "A transformative weekend for young people to encounter God, build friendships, and discover their purpose.",
    },
    {
      id: 3,
      title: "Community Outreach Day",
      date: "March 23, 2024",
      time: "8:00 AM - 4:00 PM",
      location: "City Center",
      category: "Outreach",
      attendees: 80,
      image: "/community-outreach-volunteer-service.jpg",
      description: "Join us as we serve our community through various volunteer activities and acts of kindness.",
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
                Upcoming Events
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed">
                Join us for meaningful gatherings, inspiring worship, and community-building events that strengthen our
                faith and deepen our connections.
              </p>
            </div>
          </div>
        </section>

        {/* Service Times */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Weekly Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Regular gatherings for worship, teaching, and fellowship
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Sunday Morning",
                  time: "9:00 AM",
                  description: "Traditional worship service with contemporary elements",
                },
                {
                  title: "Sunday Morning",
                  time: "11:00 AM",
                  description: "Contemporary worship with dynamic teaching",
                },
                {
                  title: "Wednesday Evening",
                  time: "7:00 PM",
                  description: "Midweek Bible study and prayer meeting",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="glass-effect border-white/20 premium-shadow hover:premium-shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <Clock className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <div className="text-2xl font-bold text-primary mb-4">{service.time}</div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Special Events</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Don't miss these upcoming special gatherings and community events
              </p>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Event Categories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
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

        {/* Call to Action */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Stay Connected</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Subscribe to our newsletter to receive updates about upcoming events, special announcements, and community
              news.
            </p>
            <Button size="lg" className="premium-shadow hover:premium-shadow-lg transition-all duration-300">
              Subscribe to Updates
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
