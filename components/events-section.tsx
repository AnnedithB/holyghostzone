import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"

export function EventsSection() {
  const events = [
    {
      title: "Sunday Worship",
      description:
        "Join us for an inspiring time of worship, prayer, and biblical teaching. Experience the presence of God in a welcoming community atmosphere.",
      date: "Every Sunday",
      time: "11:00 AM",
      location: "Delta Hotels Milton Keynes",
      image: "/church-worship.png",
      attendees: 250,
      category: "Worship",
    },
    {
      title: "Tuesday House Fellowship & Bible Study",
      description:
        "Join us online for house fellowship and Bible study. A time of deep study, prayer, and community building.",
      date: "Every Tuesday",
      time: "7:30 PM (Zoom)",
      location: "Online",
      image: "/youth-conference-church-event.jpg",
      attendees: 120,
      category: "Fellowship",
    },
    {
      title: "Thursday Shiloh Hour",
      description:
        "Join us online for the Shiloh Hour - a powerful time of prayer, worship, and encountering God's presence.",
      date: "Every Thursday",
      time: "7:00 PM (Zoom)",
      location: "Online",
      image: "/community-outreach-volunteer-service.jpg",
      attendees: 80,
      category: "Worship",
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
