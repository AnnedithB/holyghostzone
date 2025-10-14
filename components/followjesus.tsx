import Image from 'next/image'
import Link from 'next/link'

export default function FollowJesus() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/followjesus.jpg"
          alt="Practice the way of Jesus"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 md:mb-12 leading-tight">
          Practice the way
          <br />
          of <span className="text-primary">Jesus</span>
        </h2>

        <Link href="/follow-jesus">
          <button className="border-2 border-white text-white px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            FOLLOW JESUS
          </button>
        </Link>
      </div>
    </section>
  )
}

