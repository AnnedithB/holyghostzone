import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"

export function EventsSection() {
  const events = [
    {
      title: "Sunday Worship Service",
      description:
        "Join us for an inspiring time of worship, prayer, and biblical teaching. Experience the presence of God in a welcoming community atmosphere.",
      date: "Every Sunday",
      time: "9:00 AM & 11:00 AM",
      location: "Main Sanctuary",
      image: "/church-worship.png",
      attendees: 250,
      category: "Worship",
    },
    {
      title: "Youth Conference 2024",
      description:
        "A powerful weekend conference designed for young people to encounter God, build friendships, and discover their purpose in Christ.",
      date: "March 15-17, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Youth Center",
      image: "/youth-conference-church-event.jpg",
      attendees: 120,
      category: "Conference",
    },
    {
      title: "Community Outreach",
      description:
        "Join us as we serve our local community through food distribution, prayer, and sharing God's love with those in need.",
      date: "March 23, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Community Center",
      image: "/community-outreach-volunteer-service.jpg",
      attendees: 80,
      category: "Outreach",
    },
  ]

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join us for these exciting opportunities to grow in faith, connect with others, and make a difference in our
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}
