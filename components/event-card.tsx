import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

interface EventCardProps {
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  attendees?: number
  category?: string
}

export function EventCard({
  title,
  description,
  date,
  time,
  location,
  image,
  attendees,
  category = "Event",
}: EventCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border/50">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={240}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-6">
        {/* Event Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span>{date}</span>
            <Clock className="w-4 h-4 ml-4 mr-2 text-secondary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-accent" />
            <span>{location}</span>
          </div>
          {attendees && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="w-4 h-4 mr-2 text-primary" />
              <span>{attendees} attending</span>
            </div>
          )}
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold mb-3 text-balance group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-pretty mb-6 line-clamp-3">{description}</p>

        {/* Action Button */}
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all duration-300 group-hover:shadow-lg"
          size="lg"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}
