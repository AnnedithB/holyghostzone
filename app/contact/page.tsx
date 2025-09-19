import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Car, Bus } from "lucide-react"

export default function ContactPage() {
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
                Get in Touch
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed">
                We'd love to hear from you! Whether you have questions, need prayer, or want to get involved, we're here
                to connect with you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-balance">Send Us a Message</h2>
                <Card className="glass-effect border-white/20 premium-shadow">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                            First Name
                          </label>
                          <Input
                            id="firstName"
                            placeholder="Your first name"
                            className="glass-effect border-white/20"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                            Last Name
                          </label>
                          <Input id="lastName" placeholder="Your last name" className="glass-effect border-white/20" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="glass-effect border-white/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number (Optional)
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="glass-effect border-white/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input id="subject" placeholder="What's this about?" className="glass-effect border-white/20" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          className="glass-effect border-white/20"
                        />
                      </div>
                      <Button
                        size="lg"
                        className="w-full premium-shadow hover:premium-shadow-lg transition-all duration-300"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-balance">Visit Us</h2>
                <div className="space-y-8">
                  <Card className="glass-effect border-white/20 premium-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Church Address</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            123 Faith Street
                            <br />
                            Spiritual City, SC 12345
                            <br />
                            United States
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-white/20 premium-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Phone</h3>
                          <p className="text-muted-foreground">
                            Main Office: (555) 123-4567
                            <br />
                            Prayer Line: (555) 123-PRAY
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-white/20 premium-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Email</h3>
                          <p className="text-muted-foreground">
                            General: info@holyghostzonemk.org
                            <br />
                            Pastor: pastor@holyghostzonemk.org
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-white/20 premium-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Service Times</h3>
                          <div className="text-muted-foreground space-y-1">
                            <p>Sunday: 9:00 AM & 11:00 AM</p>
                            <p>Wednesday: 7:00 PM</p>
                            <p>Office Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directions */}
        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Getting Here</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Find the best way to reach our church location
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="glass-effect border-white/20 premium-shadow">
                <CardContent className="p-8 text-center">
                  <Car className="h-12 w-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-4">By Car</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Free parking available on-site. Take Exit 15 from Highway 101 and follow Faith Street for 2 miles.
                  </p>
                  <Button variant="outline">Get Directions</Button>
                </CardContent>
              </Card>
              <Card className="glass-effect border-white/20 premium-shadow">
                <CardContent className="p-8 text-center">
                  <Bus className="h-12 w-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Public Transit</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Bus routes 15 and 22 stop directly in front of the church. The Metro station is a 5-minute walk
                    away.
                  </p>
                  <Button variant="outline">Transit Info</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="glass-effect border-white/20 premium-shadow">
                <CardContent className="p-12 text-center">
                  <Phone className="h-16 w-16 text-primary mx-auto mb-8" />
                  <h2 className="text-3xl font-bold mb-6 text-balance">Need Prayer or Emergency Support?</h2>
                  <p className="text-lg text-muted-foreground mb-8 text-balance leading-relaxed">
                    Our pastoral care team is available 24/7 for prayer requests, spiritual guidance, and emergency
                    support.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="premium-shadow hover:premium-shadow-lg transition-all duration-300">
                      Call Prayer Line
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="premium-shadow hover:premium-shadow-lg transition-all duration-300 bg-transparent"
                    >
                      Request Prayer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
