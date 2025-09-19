import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/images/holy-ghost-zone-logo.png"
                alt="Holy Ghost Zone MK"
                width={48}
                height={48}
                className="mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Holy Ghost Zone</h3>
                <p className="text-sm text-gray-300">MK</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-pretty">
              A vibrant community of believers dedicated to experiencing God's presence, growing in faith, and serving
              others with love and compassion.
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
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#teachings" className="text-gray-300 hover:text-white transition-colors">
                  Teachings
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-gray-300 hover:text-white transition-colors">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Times</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunday Worship</p>
                  <p className="text-gray-300 text-sm">9:00 AM & 11:30 AM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Wednesday Prayer</p>
                  <p className="text-gray-300 text-sm">7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Friday Youth</p>
                  <p className="text-gray-300 text-sm">6:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Faith Street
                    <br />
                    Lusaka, Zambia
                    <br />
                    10101
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+260 123 456 789</p>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Holy Ghost Zone MK. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>for the Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
