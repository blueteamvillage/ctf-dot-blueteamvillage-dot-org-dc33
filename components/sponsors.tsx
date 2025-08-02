import { Card, CardContent } from "@/components/ui/card"

export function Sponsors() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Special thanks to our amazing sponsors who make this event possible.
          </p>
        </div>

        {/* Blue Tier Sponsor */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-300 text-center mb-8">Blue Sponsor</h3>
          <Card className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-colors max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="bg-white rounded-lg p-8 mb-4">
                <img
                  src="/images/sponsors/graylog-logo.png"
                  alt="Graylog"
                  className="h-20 mx-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <p className="text-cyan-300 font-semibold text-lg">Graylog</p>
              <p className="text-gray-400 text-sm">Log Management & SIEM Platform</p>
            </CardContent>
          </Card>
        </div>

        {/* Platinum Tier Sponsor */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-yellow-300 text-center mb-8">Platinum Sponsor</h3>
          <Card className="bg-gray-900/50 border-yellow-500/30 hover:border-yellow-400/50 transition-colors max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="bg-black rounded-lg p-8 mb-4">
                <img
                  src="/placeholder.svg?height=80&width=300&text=HACKTHEBOX&bg=00ff00&color=000000"
                  alt="HackTheBox"
                  className="h-20 mx-auto object-contain"
                />
              </div>
              <p className="text-yellow-300 font-semibold text-lg">HackTheBox</p>
              <p className="text-gray-400 text-sm">Cybersecurity Training Platform</p>
            </CardContent>
          </Card>
        </div>

        {/* Gold Tier Sponsors */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-orange-300 text-center mb-8">Gold Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900/50 border-orange-500/30 hover:border-orange-400/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=120&text=flare&color=8b5cf6"
                    alt="Flare"
                    className="h-12 mx-auto object-contain"
                  />
                </div>
                <p className="text-orange-300 font-semibold">Flare</p>
                <p className="text-gray-400 text-xs">Security Solutions</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-orange-500/30 hover:border-orange-400/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=120&text=TryHackMe&color=dc2626"
                    alt="TryHackMe"
                    className="h-12 mx-auto object-contain"
                  />
                </div>
                <p className="text-orange-300 font-semibold">TryHackMe</p>
                <p className="text-gray-400 text-xs">Cybersecurity Learning</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-orange-500/30 hover:border-orange-400/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-black rounded-lg p-4 mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=120&text=DeepTempo&bg=000000&color=ffffff"
                    alt="DeepTempo"
                    className="h-12 mx-auto object-contain"
                  />
                </div>
                <p className="text-orange-300 font-semibold">DeepTempo</p>
                <p className="text-gray-400 text-xs">Threat Intelligence</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-orange-500/30 hover:border-orange-400/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <img
                    src="/placeholder.svg?height=60&width=120&text=ACyberGuru&color=8b5cf6"
                    alt="A Cyber Guru"
                    className="h-12 mx-auto object-contain"
                  />
                </div>
                <p className="text-orange-300 font-semibold">A Cyber Guru</p>
                <p className="text-gray-400 text-xs">Security Training</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Interested in sponsoring our CTF?</p>
          <a
            href="mailto:sponsors@blueteamvillage.org"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
