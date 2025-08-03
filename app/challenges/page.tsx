import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Target,
  Users,
  Clock,
  AlertCircle,
  ArrowRight,
  Trophy,
  Star,
  Building,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { CountdownTimer } from "@/components/countdown-timer"

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
              Blue Team Village Presents
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              CTF Challenges
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">Multiple Competitions, One Platform</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience a variety of cybersecurity challenges from sponsored competitions and Blue Team Village&apos;s own CTFs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4">
              <Shield className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Multiple CTFs</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4">
              <Target className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">All Skill Levels</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
              <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Team Based</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
              <Clock className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Various Durations</p>
            </div>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      {/* CTF Categories Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Available CTFs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our curated selection of sponsored competitions and Blue Team Village&apos;s signature CTFs.
            </p>
          </div>

          {/* BTV CTFs */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Building className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-3xl font-bold text-purple-300">Blue Team Village CTFs</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project Obsidian */}
              <Card className="bg-gray-900/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Shield className="w-8 h-8 text-purple-400" />
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl text-purple-300">Project Obsidian</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    Our flagship incident response CTF featuring realistic security scenarios, digital forensics challenges, 
                    and comprehensive kill chain investigations.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>48 Hours</span>
                    <span>1-4 Members</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>All Levels</span>
                    <span>224 Challenges</span>
                  </div>
                  <Link href="/challenges/project-obsidian">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View CTF
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Digital Breadcrumbs */}
              <Card className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Globe className="w-8 h-8 text-cyan-400" />
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Puzzle</Badge>
                  </div>
                  <CardTitle className="text-xl text-cyan-300">Venator Aurum</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    An enigmatic puzzle challenge that takes players through cryptography, code-breaking, and physical 
                    security challenges in a thrilling labyrinth of mysteries.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>48 Hours</span>
                    <span>1-4 Members</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>All Levels</span>
                    <span>25 Puzzles</span>
                  </div>
                  <Link href="/challenges/digital-breadcrumbs">
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View CTF
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Geolocation OSINT */}
              {/* <Card className="bg-gray-900/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Target className="w-8 h-8 text-green-400" />
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Advanced</Badge>
                  </div>
                  <CardTitle className="text-xl text-green-300">Geolocation OSINT</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    Advanced OSINT challenges focused on identifying threat actor locations and tracking their activities 
                    through geolocation techniques and open-source intelligence.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>12 Hours</span>
                    <span>1-4 Members</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Intermediate+</span>
                    <span>8 Challenges</span>
                  </div>
                  <Link href="/challenges/geolocation-osint">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View CTF
                    </Button>
                  </Link>
                </CardContent>
              </Card> */}
            </div>
          </div>

          {/* Sponsored CTFs */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Star className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-3xl font-bold text-yellow-300">Sponsored CTFs</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* A Cyber Guru */}
              <Card className="bg-gray-900/50 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Trophy className="w-8 h-8 text-red-400" />
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Sponsored</Badge>
                  </div>
                  <CardTitle className="text-xl text-red-300">A Cyber Guru CTF</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    The CTF is designed for cybersecurity professionals and blue teamers ready to challenge themselves in realistic, high-pressure scenarios.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>48 Hours</span>
                    <span>1-4 Members</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Professional</span>
                    <span>Multiple Domains</span>
                  </div>
                  <Link href="/challenges/a-cyber-guru">
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View CTF
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Cyberbit */}
              <Card className="bg-gray-900/50 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Shield className="w-8 h-8 text-blue-400" />
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Sponsored</Badge>
                  </div>
                  <CardTitle className="text-xl text-blue-300">Cyberbit Operation 33</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    Two-day cyber defense challenge with 14 timed missions, live environments, and team tournament 
                    featuring full-scale investigations and championship finals.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>2 Days</span>
                    <span>Solo & Teams</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Advanced</span>
                    <span>14 Missions</span>
                  </div>
                  <Link href="/challenges/cyberbit">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View CTF
                    </Button>
                  </Link>
                </CardContent>
              </Card>


              {/* More Sponsored CTFs */}
              <Card className="bg-gray-900/50 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Star className="w-8 h-8 text-blue-400" />
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Coming Soon</Badge>
                  </div>
                  <CardTitle className="text-xl text-blue-300">More Sponsored CTFs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    Additional sponsored CTFs will be announced as we partner with more cybersecurity companies 
                    and organizations.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>TBA</span>
                    <span>Various</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>All Levels</span>
                    <span>Multiple</span>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" disabled>
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Information Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">About Our CTF Platform</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">BTV CTFs</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Our signature CTFs are designed by Blue Team Village&apos;s expert team, focusing on defensive security, 
                  incident response, and real-world scenarios that mirror actual cybersecurity challenges.
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Incident response scenarios</li>
                  <li>• Digital forensics challenges</li>
                  <li>• OSINT investigations</li>
                  <li>• Blue team skill development</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-300 mb-2">Sponsored CTFs</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Partner with leading cybersecurity companies and platforms to bring you diverse challenges 
                  covering various aspects of offensive and defensive security.
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Industry-standard tools</li>
                  <li>• Real-world attack scenarios</li>
                  <li>• Professional skill validation</li>
                  <li>• Networking opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your CTF Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose your preferred CTF and begin developing your cybersecurity skills today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/challenges/project-obsidian">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start with Project Obsidian
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Need Help?
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
