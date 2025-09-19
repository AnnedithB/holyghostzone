import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Globe } from "lucide-react"

export default function AboutPage() {
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
                About Holy Ghost Zone MK
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed">
                A vibrant community where faith meets modern life, creating space for authentic worship, meaningful
                relationships, and spiritual growth in the heart of our city.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-balance">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  To create an authentic community where people can encounter God, grow in faith, and discover their
                  purpose. We believe in the transformative power of the Gospel and its ability to bring hope, healing,
                  and restoration to every life.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Community Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years Serving</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/church-worship.png"
                  alt="Church community worship"
                  width={600}
                  height={400}
                  className="rounded-2xl premium-shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                These values guide everything we do as a community of faith
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Authentic Love",
                  description: "We believe love is the foundation of all relationships and community",
                },
                {
                  icon: Users,
                  title: "Genuine Community",
                  description: "Creating spaces where everyone belongs and can grow together",
                },
                {
                  icon: BookOpen,
                  title: "Biblical Truth",
                  description: "Grounding our faith and practices in the timeless wisdom of Scripture",
                },
                {
                  icon: Globe,
                  title: "Global Impact",
                  description: "Extending God's love beyond our walls to transform our world",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="glass-effect border-white/20 premium-shadow hover:premium-shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Our Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Passionate leaders committed to serving our community with integrity and love
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Pastor John Smith",
                  role: "Senior Pastor",
                  image: "/pastor-preaching-faith-sermon.jpg",
                },
                {
                  name: "Sarah Johnson",
                  role: "Worship Director",
                  image: "/church-worship.png",
                },
                {
                  name: "Michael Brown",
                  role: "Youth Pastor",
                  image: "/youth-conference-church-event.jpg",
                },
              ].map((leader, index) => (
                <Card
                  key={index}
                  className="glass-effect border-white/20 premium-shadow hover:premium-shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover rounded-xl mb-6"
                    />
                    <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                    <p className="text-primary font-medium">{leader.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Join Our Community?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              We'd love to welcome you into our church family. Come as you are and discover the joy of authentic
              community and faith.
            </p>
            <Button size="lg" className="premium-shadow hover:premium-shadow-lg transition-all duration-300">
              Plan Your Visit
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
