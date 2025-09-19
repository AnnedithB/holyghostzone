import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Calendar, User, Clock } from "lucide-react"

interface TeachingCardProps {
  title: string
  description: string
  speaker: string
  date: string
  duration: string
  thumbnail: string
  videoUrl?: string
  series?: string
}

export function TeachingCard({
  title,
  description,
  speaker,
  date,
  duration,
  thumbnail,
  videoUrl,
  series,
}: TeachingCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border/50">
      {/* Video Thumbnail Container */}
      <div className="relative overflow-hidden">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          width={400}
          height={240}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Series Badge */}
        {series && (
          <div className="absolute top-4 left-4">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
              {series}
            </span>
          </div>
        )}

        {/* Duration Badge */}
        <div className="absolute bottom-4 right-4">
          <span className="bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">{duration}</span>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Teaching Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="w-4 h-4 mr-2 text-primary" />
            <span className="font-medium">{speaker}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 text-secondary" />
            <span>{date}</span>
            <Clock className="w-4 h-4 ml-4 mr-2 text-accent" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold mb-3 text-balance group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-pretty mb-6 line-clamp-3">{description}</p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all duration-300 group-hover:shadow-lg"
            size="lg"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-full font-semibold transition-all duration-300 bg-transparent"
          >
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
