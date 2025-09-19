import { TeachingCard } from "@/components/teaching-card"
import { Button } from "@/components/ui/button"

export function TeachingsSection() {
  const teachings = [
    {
      title: "Walking in Faith",
      description:
        "Discover how to live a life of unwavering faith, trusting God through every season and circumstance. Learn practical steps to strengthen your relationship with Christ.",
      speaker: "Pastor John Smith",
      date: "March 10, 2024",
      duration: "45 min",
      thumbnail: "/pastor-preaching-faith-sermon.jpg",
      series: "Faith Series",
    },
    {
      title: "The Power of Prayer",
      description:
        "Unlock the transformative power of prayer in your daily life. Learn different types of prayer and how to develop a consistent prayer life that brings breakthrough.",
      speaker: "Pastor Sarah Johnson",
      date: "March 3, 2024",
      duration: "38 min",
      thumbnail: "/prayer-worship-hands-raised.jpg",
      series: "Prayer Life",
    },
    {
      title: "Living with Purpose",
      description:
        "God has a unique purpose for your life. Discover how to identify your calling, develop your gifts, and make a lasting impact in your community and beyond.",
      speaker: "Pastor Michael Brown",
      date: "February 25, 2024",
      duration: "42 min",
      thumbnail: "/purpose-calling-ministry-teaching.jpg",
      series: "Purpose Driven",
    },
  ]

  return (
    <section id="teachings" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Latest <span className="text-secondary">Teachings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Grow in your faith with our inspiring messages. Watch, listen, and be transformed by the Word of God.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teachings.map((teaching, index) => (
            <TeachingCard key={index} {...teaching} />
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Browse All Teachings
          </Button>
        </div>
      </div>
    </section>
  )
}
