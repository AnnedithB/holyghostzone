"use client"

import { Button } from "@/components/ui/button"
import { Church, BookOpen, Calendar } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import NewToTown from "@/components/newtotown"
import FollowJesus from "@/components/followjesus"

export function AboutPreview() {
  const [activeServiceTab, setActiveServiceTab] = useState(0)

  const sections = [
    {
      title: "Who We Are",
      icon: Church,
      backgroundImage: "/church-worship.png",
      content: {
        description: "We are a community based church with a keen interest in impacting our community through transformational Christ-centered activities and programs.",
        details: [
          "A welcoming community of believers",
          "Committed to serving our local area",
          "Focused on transformational change through Christ",
          "Building lasting relationships with our neighbors"
        ]
      }
    },
    {
      title: "What We Believe",
      icon: BookOpen,
      backgroundImage: "/images/whoweare.jpg",
      content: {
        description: "Our faith is grounded in the Bible and centered on Jesus Christ. We believe in the power of God's love to transform lives and communities.",
        details: [
          "The Bible as the inspired Word of God",
          "Jesus Christ as Lord and Savior",
          "The power of prayer and community",
          "Serving others as an expression of faith"
        ]
      }
    },
    {
      title: "Our Services",
      icon: Calendar,
      backgroundImage: "/images/services.jpg",
      content: {
        description: "Join us for worship, fellowship, and spiritual growth. We offer multiple service times to accommodate different schedules.",
        details: [
          "Sunday Worship: 11:00 AM",
          "Tuesday House Fellowship & Bible Study: 7:30 PM (Zoom)",
          "Thursday Shiloh Hour: 7:00 PM (Zoom)",
          "Special events and community programs"
        ]
      }
    },
  ]

  return (
    <div id="about">
      {sections.map((section, index) => {
        // Special layout for "Who We Are" section
        if (section.title === "Who We Are") {
          return (
            <section key={index} className="py-12 md:py-20 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Left Column - Image Grid */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="col-span-2 aspect-[2/1] rounded-lg overflow-hidden">
                      <img 
                        src="/images/rccg.JPG" 
                        alt="RCCG Church" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src="/images/2hgz.JPG" 
                        alt="Community service" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src="/images/3hgz.png" 
                        alt="Pastor preaching" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Right Column - Content */}
                  <div>
                     <h2 className="font-bold text-gray-900 mb-6 md:mb-8" style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}>
                       {section.title}
                     </h2>
                    
                    <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
                      {section.content.description}
                    </p>
                    
                    <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                      <div className="text-sm md:text-base text-gray-700">
                        <strong>Times:</strong> Sunday 11:00 AM, Tuesday 7:30 PM (Zoom), Thursday 7:00 PM (Zoom)
                      </div>
                      <div className="text-sm md:text-base text-gray-700">
                        <strong>Location:</strong> Delta Hotels Milton Keynes, Timbold Drive, Kents Hill, Milton Keynes, MK7 6HL, United Kingdom
                      </div>
                    </div>

                    <Link href="/events">
                      <button className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 px-6 md:px-8 py-3 text-xs md:text-sm font-medium uppercase tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )
        }
         // Special layout for "Our Services" section
         if (section.title === "Our Services") {
           const serviceTabs = [
            "Sunday Worship: 11:00 AM",
            "Tuesday House Fellowship & Bible Study: 7:30 PM (Zoom)",
            "Thursday Shiloh Hour: 7:00 PM (Zoom)",
            "Special events and community programs"
          ]

           return (
             <section key={index} className="py-12 md:py-20 bg-white">
               <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                   {/* Left Column - Tabs */}
                   <div>
                     <h2 className="font-bold text-gray-900 mb-6 md:mb-8" style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}>
                       {section.title}
                     </h2>
                     
                     <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
                       {section.content.description}
                     </p>

                     {/* Tabs */}
                     <div className="space-y-2 mb-6 md:mb-8">
                       {serviceTabs.map((tab, tabIndex) => (
                         <button
                           key={tabIndex}
                           onClick={() => setActiveServiceTab(tabIndex)}
                           className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                             activeServiceTab === tabIndex
                               ? 'bg-primary/10 text-primary border-l-4 border-primary'
                               : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                           }`}
                         >
                           <div className="font-medium text-lg">{tab}</div>
                           {activeServiceTab === tabIndex && (
                             <div className="w-full h-0.5 bg-primary mt-2"></div>
                           )}
                         </button>
                       ))}
                     </div>

                     <Link href="/events">
                       <button className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 px-6 md:px-8 py-3 text-xs md:text-sm font-medium uppercase tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300">
                         View All Events
                       </button>
                     </Link>
                   </div>

                   {/* Right Column - Image */}
                   <div className="aspect-[4/3]">
                     <img 
                       src="/images/services.jpg" 
                       alt="Church service" 
                       className="w-full h-full object-cover rounded-lg"
                     />
                   </div>
                 </div>
               </div>
             </section>
           )
         }

         // Special layout for "What We Believe" section
         if (section.title === "What We Believe") {
           return (
             <>
               <section key={index} className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden py-16 md:py-0">
                 {/* Background Image */}
                 <div 
                   className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                   style={{
                     backgroundImage: `url('${section.backgroundImage}')`
                   }}
                 />
                 
                 {/* Dark Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/75" />

                 {/* Content */}
                 <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="max-w-4xl mx-auto text-center">
                     <h2 className="font-bold text-white mb-6 md:mb-8" style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}>
                       {section.title}
                     </h2>
                     
                     <p className="text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
                       {section.content.description}
                     </p>

                   <Link href="/about">
                     <button className="w-full sm:w-auto border-2 border-white text-white px-6 md:px-8 py-3 text-xs md:text-sm font-medium uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300">
                       Learn More
                     </button>
                   </Link>
                   </div>
                 </div>
               </section>
               <NewToTown />
               <FollowJesus />
             </>
           )
         }

         // Default layout for other sections
         return (
           <section key={index} className="relative min-h-screen flex items-center justify-center overflow-hidden">
             {/* Background Image */}
             <div 
               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
               style={{
                 backgroundImage: `url('${section.backgroundImage}')`
               }}
             />
             
             {/* Dark Overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/80" />

             {/* Content */}
             <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto text-center">
                 <div className="flex justify-center mb-8">
                   <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                     <section.icon className="w-10 h-10 text-white" />
                   </div>
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                   {section.title}
                 </h2>
                 
                 <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
                   {section.content.description}
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                   {section.content.details.map((detail, detailIndex) => (
                     <div key={detailIndex} className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                       <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                       <span className="text-white text-lg">{detail}</span>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </section>
         )
      })}
    </div>
  )
}
