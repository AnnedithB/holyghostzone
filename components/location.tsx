"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function Location() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-bold text-gray-900 mb-4 md:mb-6" style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}>
            Find Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto px-4" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)' }}>
            We are conveniently located at Delta Hotels Milton Keynes, Timbold Drive, Kents Hill, Milton Keynes, MK7 6HL, United Kingdom - easily accessible to our community.
          </p>
        </div>

        {/* Map */}
        <div className="w-full">
          <div className="aspect-[16/9] md:aspect-[16/7] lg:aspect-[16/6] overflow-hidden rounded-lg">
          
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.077566741137!2d-0.7015713!3d52.023684599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877ab421b22b29f%3A0xc2a6c4e7f2bb1aa3!2sDelta%20Hotels%20Milton%20Keynes!5e0!3m2!1sen!2s!4v1760456046669!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Holy Ghost Zone MK Location"
            />
          </div>
        </div>

       
      </div>
    </section>
  )
}
