import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeachingCard } from "@/components/teaching-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Play, Download, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function TeachingsPage() {
  const recentTeachings = [
    {
      id: 1,
      title: "Walking in Faith",
      speaker: "Pastor John Smith",
      date: "March 10, 2024",
      duration: "45 min",
      series: "Foundations of Faith",
      thumbnail: "/pastor-preaching-faith-sermon.jpg",
      description:
        "Discover what it means to live by faith and trust God's plan for your life, even in uncertain times.",
    },
    {
      id: 2,
      title: "The Power of Community",
      speaker: "Pastor Sarah Johnson",
      date: "March 3, 2024",
      duration: "38 min",
      series: "Life Together",
      thumbnail: "/church-worship-congregation-praise.jpg",
      description: "Exploring how authentic Christian community transforms lives and strengthens our faith journey.",
    },
    {
      id: 3,
      title: "Hope in Difficult Times",
      speaker: "Pastor Michael Brown",
      date: "February 25, 2024",
      duration: "42 min",
      series: "Anchored Hope",
      thumbnail: "/pastor-preaching-faith-sermon.jpg",
      description: "Finding strength and hope in God's promises when facing life's greatest challenges.",
    },
  ]

  const teachingSeries = [
    {
      title: "Foundations of Faith",
      description: "Essential truths for every believer's spiritual journey",
      lessons: 8,
      image: "/pastor-preaching-faith-sermon.jpg",
    },
    {
      title: "Life Together",
      description: "Building authentic Christian community and relationships",
      lessons: 6,
      image: "/church-worship-congregation-praise.jpg",
    },
    {
      title: "Anchored Hope",
      description: "Finding stability and hope in an uncertain world",
      lessons: 5,
      image: "/church-worship.png",
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
                Teachings & Sermons
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed">
                Dive deeper into God's Word with our collection of inspiring messages, practical teachings, and
                transformative biblical insights.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search teachings by topic, speaker, or series..."
                  className="pl-12 h-14 text-lg glass-effect border-white/20 premium-shadow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Recent Teachings */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Recent Messages</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Catch up on our latest Sunday messages and special teachings
              </p>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {recentTeachings.map((teaching) => (
                <TeachingCard key={teaching.id} teaching={teaching} />
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Series */}
        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Teaching Series</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Explore our comprehensive teaching series on various biblical topics
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachingSeries.map((series, index) => (
                <Card
                  key={index}
                  className="glass-effect border-white/20 premium-shadow hover:premium-shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={series.image || "/placeholder.svg"}
                        alt={series.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-white/90 text-sm font-medium mb-1">{series.lessons} Lessons</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{series.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{series.description}</p>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Series
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Additional Resources</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Tools and materials to support your spiritual growth and study
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Study Guides",
                  description: "Downloadable guides to accompany our teaching series",
                },
                {
                  icon: Download,
                  title: "Audio Downloads",
                  description: "Take our messages with you wherever you go",
                },
                {
                  icon: Play,
                  title: "Video Library",
                  description: "Complete archive of all our recorded teachings",
                },
              ].map((resource, index) => (
                <Card
                  key={index}
                  className="glass-effect border-white/20 premium-shadow hover:premium-shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <resource.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{resource.description}</p>
                    <Button variant="outline">Access Resource</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Never Miss a Message</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Subscribe to our podcast or YouTube channel to stay up-to-date with all our latest teachings and special
              messages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="premium-shadow hover:premium-shadow-lg transition-all duration-300">
                Subscribe to Podcast
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="premium-shadow hover:premium-shadow-lg transition-all duration-300 bg-transparent"
              >
                YouTube Channel
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
