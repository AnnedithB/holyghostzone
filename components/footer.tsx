import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 md:mb-6">
              <Image
                src="/images/holy-ghost-zone-logo.png"
                alt="Holy Ghost Zone MK"
                width={200}
                height={150}
                className="mr-3 w-40 md:w-48 lg:w-52 h-auto"
              />
              
            </div>
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 text-pretty">
              We are a community based church with a keen interest in impacting our community through transformational Christ-centered activities and programs.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-2">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#teachings" className="text-gray-300 hover:text-white transition-colors">
                  Teachings
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Service Times</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunday Worship</p>
                  <p className="text-gray-300 text-sm">11:00 AM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Tuesday House Fellowship & Bible Study</p>
                  <p className="text-gray-300 text-sm">7:30 PM (Zoom)</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Thursday Shiloh Hour</p>
                  <p className="text-gray-300 text-sm">7:00 PM (Zoom)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Delta Hotels Milton Keynes
                    <br />
                    Timbold Drive, Kents Hill
                    <br />
                    Milton Keynes, MK7 6HL
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+44 7445 423178</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@holyghostzonemk.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Holy Ghost Zone MK. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-xs md:text-sm">
              <span>Developed by </span>
              
              <Link href="https://www.sillylittletools.com" passHref>
                <span className="hover:text-primary transition-colors cursor-pointer">&nbsp;SillyLittleTools</span>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
