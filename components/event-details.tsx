import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Target, Shield, Zap } from "lucide-react"

export function EventDetails() {
  return (
    <section className="py-20 px-6 sm:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Event Details
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for an intense cybersecurity competition focused on defensive strategies, incident response, and
            blue team operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-colors">
            <CardHeader className="text-center">
              <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
              <CardTitle className="text-cyan-300">Duration</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300">48 Hours</p>
              <p className="text-sm text-gray-400">Non-stop competition</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-500/30 hover:border-purple-400/50 transition-colors">
            <CardHeader className="text-center">
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-2" />
              <CardTitle className="text-purple-300">Format</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300">CTFd Platform</p>
              <p className="text-sm text-gray-400">Multiple categories</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-green-500/30 hover:border-green-400/50 transition-colors">
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-2" />
              <CardTitle className="text-green-300">Focus</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300">Blue Team</p>
              <p className="text-sm text-gray-400">Defensive security</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-yellow-500/30 hover:border-yellow-400/50 transition-colors">
            <CardHeader className="text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
              <CardTitle className="text-yellow-300">Difficulty</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300">All Levels</p>
              <p className="text-sm text-gray-400">Beginner to Expert</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Real-World Scenarios</h4>
              <p className="text-gray-300 text-sm">
                Face challenges based on actual cybersecurity incidents and defensive strategies used by security
                professionals.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-2">Team Collaboration</h4>
              <p className="text-gray-300 text-sm">
                Work together with your team to solve complex security challenges and defend against simulated attacks.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-yellow-300 mb-2">Learning Opportunities</h4>
              <p className="text-gray-300 text-sm">
                Gain hands-on experience with cutting-edge security tools and techniques used in modern SOCs.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-2">Networking</h4>
              <p className="text-gray-300 text-sm">
                Connect with cybersecurity professionals, researchers, and enthusiasts from around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
