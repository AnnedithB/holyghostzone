import Image from 'next/image'
import Link from 'next/link'

export default function NewToTown() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/newtomilton.jpg"
              alt="New to Holy Ghost Zone"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              New to Milton Keynes?
              <br />
              <span className="italic text-gray-600 font-normal">Or </span>
              <span className="font-bold">Already Here, Visiting, and Looking to Connect?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              If you are new to our community, visiting, or have been here for a while, we would love to share more about our church family and the ways you can get involved.
            </p>

            <div>
              <Link 
                href="/about"
              >
                <button className="border-2 border-black text-black px-6 md:px-8 py-3 text-xs md:text-sm font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

