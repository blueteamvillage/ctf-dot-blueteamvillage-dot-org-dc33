import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Search, AlertTriangle, Network, Database, Lock } from "lucide-react"

const categories = [
  {
    icon: Shield,
    title: "Incident Response",
    description: "Analyze security incidents, contain threats, and develop response strategies.",
    difficulty: "Medium",
    color: "cyan",
    challenges: 8,
  },
  {
    icon: Search,
    title: "Digital Forensics",
    description: "Investigate digital evidence, recover artifacts, and piece together attack timelines.",
    difficulty: "Hard",
    color: "purple",
    challenges: 6,
  },
  {
    icon: AlertTriangle,
    title: "Threat Hunting",
    description: "Proactively search for threats, analyze IOCs, and identify advanced persistent threats.",
    difficulty: "Hard",
    color: "red",
    challenges: 5,
  },
  {
    icon: Network,
    title: "Network Defense",
    description: "Monitor network traffic, detect anomalies, and implement defensive measures.",
    difficulty: "Medium",
    color: "green",
    challenges: 7,
  },
  {
    icon: Database,
    title: "Log Analysis",
    description: "Parse and analyze various log sources to identify security events and patterns.",
    difficulty: "Easy",
    color: "blue",
    challenges: 10,
  },
  {
    icon: Lock,
    title: "Malware Analysis",
    description: "Reverse engineer malware samples and understand attack techniques.",
    difficulty: "Hard",
    color: "yellow",
    challenges: 4,
  },
]

const difficultyColors = {
  Easy: "bg-green-500/20 text-green-300 border-green-500/30",
  Medium: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Hard: "bg-red-500/20 text-red-300 border-red-500/30",
}

const iconColors = {
  cyan: "text-cyan-400",
  purple: "text-purple-400",
  red: "text-red-400",
  green: "text-green-400",
  blue: "text-blue-400",
  yellow: "text-yellow-400",
}

export function ChallengeCategories() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Challenge Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Test your blue team skills across multiple domains of cybersecurity defense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-8 h-8 ${iconColors[category.color as keyof typeof iconColors]}`} />
                    <Badge className={difficultyColors[category.difficulty as keyof typeof difficultyColors]}>
                      {category.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">{category.challenges} challenges</span>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">More categories and challenges will be revealed closer to the event!</p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200" />
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
