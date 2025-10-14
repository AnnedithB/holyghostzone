import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import BornAgainSection from '@/components/born-again-section'

export default function FollowJesusPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BornAgainSection />
      </main>
      <Footer />
    </div>
  )
}

