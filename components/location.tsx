"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Find Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are conveniently located in Newport Pagnell, Milton Keynes, making us easily accessible to our community.
          </p>
        </div>

        {/* Map */}
        <div className="w-full">
          <div className="aspect-[16/6] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.787516822602!2d-0.7135476!3d52.0835978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877abc83a8576e3%3A0x9a9493828d459a5!2sHOLY%20GHOST%20ZONE%20MK!5e0!3m2!1sen!2s!4v1758294696959!5m2!1sen!2s"
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
