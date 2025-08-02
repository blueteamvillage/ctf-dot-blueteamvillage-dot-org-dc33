import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Target,
  Users,
  Clock,
  ExternalLink,
  Zap,
  BookOpen,
  LinkIcon,
  AlertCircle,
  HelpCircle,
  ArrowRight,
} from "lucide-react"

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
              Project Obsidian
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">CTF Challenge</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4">
              <Shield className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Incident Response</p>
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
              <p className="text-sm text-gray-300">48 Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-gray-900/50 mb-8">
              <TabsTrigger value="overview" className="data-[state=active]:bg-purple-500">
                <BookOpen className="w-4 h-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="getting-started" className="data-[state=active]:bg-cyan-500">
                <Target className="w-4 h-4 mr-2" />
                Getting Started
              </TabsTrigger>
              <TabsTrigger value="killchain1" className="data-[state=active]:bg-red-500">
                Kill Chain 1
              </TabsTrigger>
              <TabsTrigger value="killchain2" className="data-[state=active]:bg-orange-500">
                Kill Chain 2
              </TabsTrigger>
              <TabsTrigger value="killchain3" className="data-[state=active]:bg-yellow-500">
                Kill Chain 3
              </TabsTrigger>
              <TabsTrigger value="wiki" className="data-[state=active]:bg-green-500">
                <BookOpen className="w-4 h-4 mr-2" />
                Wiki
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="space-y-8">
                {/* Introduction */}
                <Card className="bg-gray-900/50 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Introduction
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Developed by BTV's Project Obsidian team, this CTF offers an immersive incident response exercise
                      designed to challenge and engage participants of all skill levels. Dive into a detailed, realistic
                      scenario that tests your ability to handle complex security incidents and sharpen your cyber
                      defense skills.
                    </p>

                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6">
                      <div className="flex items-start space-x-3">
                        <Zap className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Enhanced Experience</h3>
                          <p className="text-gray-300">
                            This year, we're enhancing the experience with the{" "}
                            <strong className="text-cyan-300">OWASP JuiceShop platform</strong>, adding an extra layer
                            of web application security challenges. While JuiceShop provides valuable additional
                            content, the core of Project Obsidian remains its rich, hands-on incident response
                            scenarios.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      Whether you're new to cybersecurity or a seasoned expert, join us for a dynamic and rewarding
                      experience.
                      <span className="text-cyan-300 font-semibold">
                        {" "}
                        Blue Team Village proudly presents… Project Obsidian!
                      </span>
                    </p>
                  </CardContent>
                </Card>

                {/* What to Expect Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-gray-900/50 border-purple-500/30 hover:border-purple-400/50 transition-colors">
                    <CardHeader>
                      <Shield className="w-12 h-12 text-purple-400 mb-4" />
                      <CardTitle className="text-purple-300">Incident Response Scenarios</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Immerse yourself in realistic security incidents that mirror real-world threats. Practice
                        containment, analysis, and remediation techniques used by professional incident response teams.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Malware analysis and containment</li>
                        <li>• Network intrusion investigation</li>
                        <li>• Digital forensics challenges</li>
                        <li>• Timeline reconstruction</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-colors">
                    <CardHeader>
                      <Target className="w-12 h-12 text-cyan-400 mb-4" />
                      <CardTitle className="text-cyan-300">OWASP JuiceShop Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Explore web application security through the popular OWASP JuiceShop platform. Discover
                        vulnerabilities, understand attack vectors, and learn defensive strategies.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• SQL injection detection</li>
                        <li>• XSS vulnerability analysis</li>
                        <li>• Authentication bypass scenarios</li>
                        <li>• Security misconfiguration identification</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-green-500/30 hover:border-green-400/50 transition-colors">
                    <CardHeader>
                      <Users className="w-12 h-12 text-green-400 mb-4" />
                      <CardTitle className="text-green-300">Skill Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Designed for all experience levels, from cybersecurity newcomers to seasoned professionals.
                        Progressive difficulty ensures everyone can learn and contribute.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Beginner-friendly introductory challenges</li>
                        <li>• Intermediate threat hunting exercises</li>
                        <li>• Advanced persistent threat scenarios</li>
                        <li>• Expert-level forensics investigations</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-yellow-500/30 hover:border-yellow-400/50 transition-colors">
                    <CardHeader>
                      <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                      <CardTitle className="text-yellow-300">Real-World Application</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Every challenge is based on actual security incidents and industry best practices. Gain
                        practical experience that directly applies to professional cybersecurity roles.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Industry-standard tools and techniques</li>
                        <li>• Current threat landscape scenarios</li>
                        <li>• Professional workflow simulation</li>
                        <li>• Career-relevant skill building</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Getting Started Tab */}
            <TabsContent value="getting-started">
              <Card className="bg-gray-900/50 border-cyan-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                    Getting Started
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Overview Section */}
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Overview</h3>
                    <p className="text-gray-300 mb-4">
                      Welcome to Project Obsidian. Before attempting any challenges, review each phase of our scenario
                      series at:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <Card className="bg-red-500/10 border-red-500/30 hover:border-red-400/50 transition-colors cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <h4 className="text-red-300 font-semibold mb-2">Killchain 1</h4>
                          <ArrowRight className="w-5 h-5 text-red-400 mx-auto" />
                        </CardContent>
                      </Card>

                      <Card className="bg-orange-500/10 border-orange-500/30 hover:border-orange-400/50 transition-colors cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <h4 className="text-orange-300 font-semibold mb-2">Killchain 2</h4>
                          <ArrowRight className="w-5 h-5 text-orange-400 mx-auto" />
                        </CardContent>
                      </Card>

                      <Card className="bg-yellow-500/10 border-yellow-500/30 hover:border-yellow-400/50 transition-colors cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <h4 className="text-yellow-300 font-semibold mb-2">Killchain 3</h4>
                          <ArrowRight className="w-5 h-5 text-yellow-400 mx-auto" />
                        </CardContent>
                      </Card>
                    </div>

                    <p className="text-gray-300">
                      Each of these pages outlines a unique stage of the main investigation, giving necessary background
                      and objectives.
                    </p>
                  </div>

                  {/* Navigating the Platform */}
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-purple-300 mb-4 flex items-center">
                      <LinkIcon className="w-6 h-6 mr-2" />
                      Navigating the Platform
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        Start with the kill chain scenarios in sequence using the links above.
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        Each scenario presents its own challenges that guide you through the narrative step by step.
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        Familiarize yourself with scenario context and artifacts before starting their associated
                        challenges.
                      </li>
                    </ul>
                  </div>

                  {/* Other Challenges */}
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-green-300 mb-4 flex items-center">
                      <Target className="w-6 h-6 mr-2" />
                      Other Challenges
                    </h3>
                    <p className="text-gray-300">
                      Beyond the kill chain, you'll find additional standalone challenges on the platform. These can be
                      accessed at any time for extra points and practice, and do not require completion of the main
                      narrative.
                    </p>
                  </div>

                  {/* Tips */}
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-yellow-300 mb-4 flex items-center">
                      <AlertCircle className="w-6 h-6 mr-2" />
                      Tips
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        Some challenges may rely on skills or information from earlier scenarios.
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        Not every clue or file is relevant to every task.
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        Check each scenario page for detailed rules and flag formats.
                      </li>
                    </ul>
                  </div>

                  {/* Support */}
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-cyan-300 mb-4 flex items-center">
                      <HelpCircle className="w-6 h-6 mr-2" />
                      Support
                    </h3>
                    <p className="text-gray-300">
                      If you have questions or encounter issues, consult the support options listed in the scenario
                      pages (such as a Discord channel, facilitator contact, or hints policy).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Kill Chain Tabs */}
            <TabsContent value="killchain1">
              <Card className="bg-gray-900/50 border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-300">Kill Chain 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-red-300 mb-4">Initial Compromise</h3>
                    <p className="text-gray-300 mb-6">
                      Content for Kill Chain 1 will be available here. This phase covers the initial stages of the
                      incident response scenario.
                    </p>
                    <Button className="bg-red-500 hover:bg-red-600">Coming Soon</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="killchain2">
              <Card className="bg-gray-900/50 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-orange-300">Kill Chain 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Target className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-orange-300 mb-4">Lateral Movement</h3>
                    <p className="text-gray-300 mb-6">
                      Content for Kill Chain 2 will be available here. This phase covers the progression and lateral
                      movement aspects of the incident.
                    </p>
                    <Button className="bg-orange-500 hover:bg-orange-600">Coming Soon</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="killchain3">
              <Card className="bg-gray-900/50 border-yellow-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-yellow-300">Kill Chain 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-yellow-300 mb-4">Impact & Recovery</h3>
                    <p className="text-gray-300 mb-6">
                      Content for Kill Chain 3 will be available here. This phase covers the final stages, impact
                      assessment, and recovery procedures.
                    </p>
                    <Button className="bg-yellow-500 hover:bg-yellow-600">Coming Soon</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Wiki Tab */}
            <TabsContent value="wiki">
              <Card className="bg-gray-900/50 border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-green-300">Project Obsidian Wiki</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BookOpen className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-300 mb-4">Knowledge Base</h3>
                    <p className="text-gray-300 mb-6">
                      The wiki will contain detailed documentation, tools references, and additional resources to help
                      you succeed in Project Obsidian.
                    </p>
                    <Button className="bg-green-500 hover:bg-green-600">Coming Soon</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Join Project Obsidian?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Register your team now and prepare for an unforgettable incident response experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Register Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Platform
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
