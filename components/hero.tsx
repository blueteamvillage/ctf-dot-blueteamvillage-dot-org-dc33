import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Trophy } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse delay-500" />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-pulse">
            BTV CTF
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-cyan-300">DEF CON 33</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Access Everywhere • Defend Everything</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400/50 transition-colors">
            <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300">August 8-10, 2025</p>
            <p className="text-xs text-gray-400">Las Vegas, NV</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 hover:border-purple-400/50 transition-colors">
            <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300">Blue Team Village</p>
            <p className="text-xs text-gray-400">DEF CON 33</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 hover:border-green-400/50 transition-colors">
            <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300">Team Based</p>
            <p className="text-xs text-gray-400">1-4 Members</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-400/50 transition-colors">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300">Prizes</p>
            <p className="text-xs text-gray-400">TBA</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
          >
            View Challenges
          </Button>
        </div>
      </div>
    </section>
  )
}
