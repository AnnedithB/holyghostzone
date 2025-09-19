// CMS Integration Layer for Holy Ghost Zone Website
// This provides a flexible content management system for church administrators

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  category: "worship" | "youth" | "outreach" | "fellowship" | "special"
  image?: string
  attendees?: number
  featured?: boolean
  registrationRequired?: boolean
  registrationUrl?: string
}

export interface Teaching {
  id: string
  title: string
  speaker: string
  description: string
  date: string
  duration: string
  series?: string
  videoUrl?: string
  audioUrl?: string
  thumbnail?: string
  scripture?: string
  tags: string[]
  featured?: boolean
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  title: string
  category: "worship" | "youth" | "outreach" | "fellowship" | "sacraments" | "ministry" | "facility"
  date?: string
  photographer?: string
}

export interface ChurchInfo {
  name: string
  tagline: string
  description: string
  address: {
    street: string
    city: string
    country: string
    postalCode: string
  }
  contact: {
    phone: string
    email: string
    website?: string
  }
  serviceTimes: {
    sunday: string[]
    wednesday: string
    friday: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    youtube?: string
    twitter?: string
  }
}

// Mock CMS Data - In production, this would come from a headless CMS like Strapi, Contentful, or Sanity
export const mockChurchInfo: ChurchInfo = {
  name: "Holy Ghost Zone MK",
  tagline: "Experience God's Presence",
  description:
    "A vibrant community of believers dedicated to experiencing God's presence, growing in faith, and serving others with love and compassion.",
  address: {
    street: "123 Faith Street",
    city: "Lusaka",
    country: "Zambia",
    postalCode: "10101",
  },
  contact: {
    phone: "+260 123 456 789",
    email: "info@holyghostzonemk.org",
    website: "https://holyghostzonemk.org",
  },
  serviceTimes: {
    sunday: ["9:00 AM", "11:30 AM"],
    wednesday: "7:00 PM",
    friday: "6:30 PM",
  },
  socialMedia: {
    facebook: "https://facebook.com/holyghostzonemk",
    instagram: "https://instagram.com/holyghostzonemk",
    youtube: "https://youtube.com/@holyghostzonemk",
    twitter: "https://twitter.com/holyghostzonemk",
  },
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Sunday Worship Service",
    description:
      "Join us for a powerful time of worship, prayer, and biblical teaching as we gather to honor God together.",
    date: "2024-01-21",
    time: "9:00 AM",
    location: "Main Sanctuary",
    category: "worship",
    image: "/church-worship.png",
    attendees: 250,
    featured: true,
  },
  {
    id: "2",
    title: "Youth Conference 2024",
    description:
      "A transformative weekend for young people featuring dynamic speakers, worship, and fellowship opportunities.",
    date: "2024-02-15",
    time: "6:00 PM",
    location: "Youth Center",
    category: "youth",
    image: "/youth-conference-church-event.jpg",
    attendees: 120,
    featured: true,
    registrationRequired: true,
    registrationUrl: "/register/youth-conference",
  },
  {
    id: "3",
    title: "Community Outreach",
    description:
      "Serving our local community with food distribution, prayer, and practical support for families in need.",
    date: "2024-01-28",
    time: "10:00 AM",
    location: "Community Center",
    category: "outreach",
    image: "/community-outreach-volunteer-service.jpg",
    attendees: 80,
  },
]

export const mockTeachings: Teaching[] = [
  {
    id: "1",
    title: "Walking in Faith",
    speaker: "Pastor John Smith",
    description: "Discover how to live a life of unwavering faith, trusting God through every season and circumstance.",
    date: "2024-01-14",
    duration: "45 min",
    series: "Faith Foundations",
    videoUrl: "https://youtube.com/watch?v=example1",
    thumbnail: "/pastor-preaching-faith-sermon.jpg",
    scripture: "Hebrews 11:1",
    tags: ["faith", "trust", "christian-living"],
    featured: true,
  },
  {
    id: "2",
    title: "The Power of Prayer",
    speaker: "Pastor Sarah Johnson",
    description: "Learn about the transformative power of prayer and how to develop a deeper prayer life with God.",
    date: "2024-01-07",
    duration: "38 min",
    series: "Spiritual Disciplines",
    videoUrl: "https://youtube.com/watch?v=example2",
    thumbnail: "/prayer-worship-teaching.jpg",
    scripture: "Matthew 6:9-13",
    tags: ["prayer", "spiritual-growth", "devotion"],
    featured: true,
  },
  {
    id: "3",
    title: "Love in Action",
    speaker: "Pastor Michael Brown",
    description: "Exploring how God's love transforms us and empowers us to love others unconditionally.",
    date: "2023-12-31",
    duration: "42 min",
    series: "Love Series",
    videoUrl: "https://youtube.com/watch?v=example3",
    thumbnail: "/love-compassion-sermon.jpg",
    scripture: "1 Corinthians 13:4-7",
    tags: ["love", "compassion", "relationships"],
  },
]

// CMS API Functions - These would integrate with your chosen CMS
export class CMSService {
  // Events
  static async getEvents(featured?: boolean): Promise<Event[]> {
    // In production: return await fetch('/api/events').then(res => res.json())
    return featured ? mockEvents.filter((event) => event.featured) : mockEvents
  }

  static async getEvent(id: string): Promise<Event | null> {
    // In production: return await fetch(`/api/events/${id}`).then(res => res.json())
    return mockEvents.find((event) => event.id === id) || null
  }

  // Teachings
  static async getTeachings(featured?: boolean): Promise<Teaching[]> {
    // In production: return await fetch('/api/teachings').then(res => res.json())
    return featured ? mockTeachings.filter((teaching) => teaching.featured) : mockTeachings
  }

  static async getTeaching(id: string): Promise<Teaching | null> {
    // In production: return await fetch(`/api/teachings/${id}`).then(res => res.json())
    return mockTeachings.find((teaching) => teaching.id === id) || null
  }

  static async getTeachingsBySeries(series: string): Promise<Teaching[]> {
    // In production: return await fetch(`/api/teachings?series=${series}`).then(res => res.json())
    return mockTeachings.filter((teaching) => teaching.series === series)
  }

  // Church Info
  static async getChurchInfo(): Promise<ChurchInfo> {
    // In production: return await fetch('/api/church-info').then(res => res.json())
    return mockChurchInfo
  }

  // Newsletter Subscription
  static async subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    // In production: integrate with email service like Mailchimp, ConvertKit, etc.
    console.log(`Subscribing email: ${email}`)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Successfully subscribed to newsletter!",
    }
  }

  // Contact Form
  static async submitContactForm(data: {
    name: string
    email: string
    subject: string
    message: string
  }): Promise<{ success: boolean; message: string }> {
    // In production: integrate with email service or CRM
    console.log("Contact form submission:", data)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Your message has been sent successfully!",
    }
  }
}

// Utility functions for content management
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const formatTime = (timeString: string): string => {
  const [time, period] = timeString.split(" ")
  return `${time} ${period}`
}

export const getCategoryColor = (category: string): string => {
  const colors = {
    worship: "bg-primary text-primary-foreground",
    youth: "bg-secondary text-secondary-foreground",
    outreach: "bg-green-500 text-white",
    fellowship: "bg-blue-500 text-white",
    special: "bg-purple-500 text-white",
    sacraments: "bg-amber-500 text-white",
    ministry: "bg-teal-500 text-white",
    facility: "bg-gray-500 text-white",
  }
  return colors[category as keyof typeof colors] || "bg-gray-500 text-white"
}
