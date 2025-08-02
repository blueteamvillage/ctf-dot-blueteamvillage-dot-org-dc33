import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { EventDetails } from "@/components/event-details"
import { ChallengeCategories } from "@/components/challenge-categories"
import { Rules } from "@/components/rules"
import { Sponsors } from "@/components/sponsors"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <EventDetails />
      <ChallengeCategories />
      <Rules />
      <Sponsors />
      <Footer />
    </div>
  )
}
