import { GalleryGrid } from "@/components/gallery-grid"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const galleryImages = [
    {
      id: 1,
      src: "/church-worship-congregation-praise.jpg",
      alt: "Sunday worship service with congregation praising",
      title: "Sunday Worship",
      category: "worship",
    },
    {
      id: 2,
      src: "/youth-group-fellowship-activities.jpg",
      alt: "Youth group fellowship and activities",
      title: "Youth Fellowship",
      category: "youth",
    },
    {
      id: 3,
      src: "/community-service-food-drive.jpg",
      alt: "Community service food drive volunteers",
      title: "Community Service",
      category: "outreach",
    },
    {
      id: 4,
      src: "/baptism-ceremony-celebration.jpg",
      alt: "Baptism ceremony celebration",
      title: "Baptism Celebration",
      category: "sacraments",
    },
    {
      id: 5,
      src: "/church-choir-worship-music.jpg",
      alt: "Church choir leading worship music",
      title: "Worship Team",
      category: "worship",
    },
    {
      id: 6,
      src: "/childrens-ministry-sunday-school.jpg",
      alt: "Children's ministry and Sunday school",
      title: "Children's Ministry",
      category: "ministry",
    },
    {
      id: 7,
      src: "/prayer-meeting-fellowship.jpg",
      alt: "Prayer meeting fellowship gathering",
      title: "Prayer Meeting",
      category: "fellowship",
    },
    {
      id: 8,
      src: "/church-picnic-community-fun.jpg",
      alt: "Church picnic community fun day",
      title: "Church Picnic",
      category: "fellowship",
    },
    {
      id: 9,
      src: "/missions-trip-outreach.jpg",
      alt: "Missions trip outreach activities",
      title: "Missions Trip",
      category: "outreach",
    },
    {
      id: 10,
      src: "/confirmation-class-ceremony.jpg",
      alt: "Confirmation class ceremony",
      title: "Confirmation",
      category: "sacraments",
    },
    {
      id: 11,
      src: "/church-building-exterior.jpg",
      alt: "Beautiful church building exterior",
      title: "Our Church Home",
      category: "facility",
    },
    {
      id: 12,
      src: "/volunteer-appreciation-dinner.jpg",
      alt: "Volunteer appreciation dinner event",
      title: "Volunteer Appreciation",
      category: "fellowship",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Our Church <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Witness the joy, fellowship, and faith that defines our church community through these precious moments
            we've shared together.
          </p>
        </div>

        <GalleryGrid images={galleryImages} />

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
