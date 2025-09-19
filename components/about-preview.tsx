import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen } from "lucide-react"

export function AboutPreview() {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "We believe in showing God's love through our actions and words to everyone we meet.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships and supporting one another through life's journey.",
    },
    {
      icon: BookOpen,
      title: "Biblical Truth",
      description: "Grounded in Scripture, we seek to understand and apply God's word in our daily lives.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Welcome to Our <span className="text-primary">Church Family</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            For over 20 years, Holy Ghost Zone MK has been a beacon of hope and faith in our community. We're more than
            just a church – we're a family united by our love for God and each other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-pretty">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
          >
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  )
}
