import Link from "next/link"
import { Trophy, Calendar, Users, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PastWinnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-4">
              Past Champions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Past Winners
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-300 mb-6">Celebrating CTF Champions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the exceptional teams and individuals who have conquered our Capture The Flag challenges in previous years.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-cyan-300 flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Total Participants
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white">457</div>
                <p className="text-gray-400 text-sm">Across DEF CON 31 & 32</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-purple-300 flex items-center justify-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Teams Competed
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white">244</div>
                <p className="text-gray-400 text-sm">From solo to 4-person teams</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-yellow-300 flex items-center justify-center">
                  <Award className="w-5 h-5 mr-2" />
                  Champions Crowned
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white">6</div>
                <p className="text-gray-400 text-sm">Top 3 teams each year</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Winners Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DEF CON 31 */}
          <Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/30 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-cyan-300">DEF CON 31</CardTitle>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Calendar className="w-3 h-3 mr-1" />
                  2023
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 1st Place */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-yellow-300">🥇 1st Place</h3>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Champions</Badge>
                </div>
                <div className="text-white font-semibold">GhidraGoons</div>
                <div className="text-gray-400 text-sm mt-1">
                  obnoxious_goat, _marctheshark_, so1arf1ar3z, eddo
                </div>
              </div>

              {/* 2nd Place */}
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 border border-gray-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-300">🥈 2nd Place</h3>
                  <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">Runner-up</Badge>
                </div>
                <div className="text-white font-semibold">AMBUSH</div>
              </div>

              {/* 3rd Place */}
              <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-orange-300">🥉 3rd Place</h3>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Third</Badge>
                </div>
                <div className="text-white font-semibold">TheCancelledCrewxXqc</div>
              </div>

              <Link 
                href="/past-winners/defcon-31" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View Full Results
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </CardContent>
          </Card>

          {/* DEF CON 32 */}
          <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/30 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-purple-300">DEF CON 32</CardTitle>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Calendar className="w-3 h-3 mr-1" />
                  2024
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 1st Place */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-yellow-300">🥇 1st Place</h3>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Champions</Badge>
                </div>
                <div className="text-white font-semibold">Def con dans mison</div>
                <div className="text-gray-400 text-sm mt-1">GhidraGoons</div>
              </div>

              {/* 2nd Place */}
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 border border-gray-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-300">🥈 2nd Place</h3>
                  <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">Runner-up</Badge>
                </div>
                <div className="text-white font-semibold">N1t3_Tr@1n</div>
              </div>

              {/* 3rd Place */}
              <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-orange-300">🥉 3rd Place</h3>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Third</Badge>
                </div>
                <div className="text-white font-semibold">Slept4Day</div>
              </div>

              <Link 
                href="/past-winners/defcon-32" 
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                View Full Results
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join the Challenge?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Think you have what it takes to be the next champion? Register now for DEF CON 33 and compete against the best cybersecurity professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://ctfd.dc33.blueteamvillage.org/register"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Register for CTF
              </Link>
              <Link 
                href="/challenges"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                View Challenges
              </Link>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  )
} 