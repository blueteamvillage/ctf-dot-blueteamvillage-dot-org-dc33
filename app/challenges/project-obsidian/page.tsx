import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
  Search,
  Database,
  Network,
  Lock,
} from "lucide-react"
import Link from "next/link"

export default function ProjectObsidianPage() {
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
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">Flagship Incident Response CTF</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Immerse yourself in realistic security incidents that mirror real-world threats. Practice containment, 
              analysis, and remediation techniques used by professional incident response teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4">
              <Shield className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">224 Challenges</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4">
              <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">48 Hours</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
              <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">1-4 Members</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
              <Target className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">All Levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-gray-900/50 mb-8">
              <TabsTrigger value="overview" className="data-[state=active]:bg-purple-500 text-gray-300 hover:text-white">
                <BookOpen className="w-4 h-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="killchain1" className="data-[state=active]:bg-red-500 text-gray-300 hover:text-white">
                <Target className="w-4 h-4 mr-2" />
                Kill Chain 1
              </TabsTrigger>
              <TabsTrigger value="killchain2" className="data-[state=active]:bg-orange-500 text-gray-300 hover:text-white">
                <Target className="w-4 h-4 mr-2" />
                Kill Chain 2
              </TabsTrigger>
              <TabsTrigger value="killchain3" className="data-[state=active]:bg-yellow-500 text-gray-300 hover:text-white">
                <Target className="w-4 h-4 mr-2" />
                Kill Chain 3
              </TabsTrigger>
              <TabsTrigger value="killchain4" className="data-[state=active]:bg-green-500 text-gray-300 hover:text-white">
                <Target className="w-4 h-4 mr-2" />
                Kill Chain 4
              </TabsTrigger>
              <TabsTrigger value="killchain5" className="data-[state=active]:bg-blue-500 text-gray-300 hover:text-white">
                <Target className="w-4 h-4 mr-2" />
                Kill Chain 5
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="space-y-8">
                {/* Introduction */}
                <Card className="bg-gray-900/50 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      About Project Obsidian
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Developed by BTV&apos;s Project Obsidian team, this CTF offers an immersive incident response exercise
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
                            This year, we&apos;re enhancing the experience with the{" "}
                            <strong className="text-cyan-300">Digital Breadcrumbs and Village Voyages</strong>, partnering with the OWASP and Red Team Rumble village to provide a more immersive experience.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      Whether you&apos;re new to cybersecurity or a seasoned expert, join us for a dynamic and rewarding
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
                      <CardTitle className="text-cyan-300">Downloadable Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Access downloadable content from our S3 bucket for offline analysis. If you prefer to use your own 
                        SIEM or search capabilities, you can download the data and analyze it with your preferred tools.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• S3 bucket data access</li>
                        <li>• Offline analysis support</li>
                        <li>• Custom SIEM integration</li>
                        <li>• Flexible investigation tools</li>
                      </ul>
                      <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                        <p className="text-sm text-cyan-300 font-semibold mb-1">Data Source:</p>
                        <a 
                          href="https://s3.us-west-2.amazonaws.com/media.blueteamvillage.org/index.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-cyan-400 hover:text-cyan-300 underline"
                        >
                          https://s3.us-west-2.amazonaws.com/media.blueteamvillage.org/index.html
                        </a>
                      </div>
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

            {/* Kill Chain Tabs */}
            <TabsContent value="killchain1">
              <Card className="bg-gray-900/50 border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-300">Kill Chain 1: Initial Compromise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Uncover an adversary&apos;s full compromise of multiple Windows workstations. Investigate the adversary&apos;s 
                      activities from reconnaissance to credential theft, persistence, and privilege escalation while defenders 
                      trace their steps through forensic artifacts, browser activity, and Active Directory abuse.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-2">Focus Areas</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Windows forensics</li>
                          <li>• Browser artifact analysis</li>
                          <li>• Active Directory investigation</li>
                          <li>• Credential theft detection</li>
                        </ul>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-2">Challenges</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• 25+ challenges</li>
                          <li>• Progressive difficulty</li>
                          <li>• Real-world scenarios</li>
                          <li>• Hands-on practice</li>
                        </ul>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-2">Skills Developed</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Incident response</li>
                          <li>• Digital forensics</li>
                          <li>• Threat hunting</li>
                          <li>• Analysis techniques</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="killchain2">
              <Card className="bg-gray-900/50 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-orange-300">Kill Chain 2: RAT & Social Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Track a remote access trojan (RAT) enabled social engineering attack, uses phishing, RMM tools, 
                      and AD recon to compromise a user and explore lateral movement.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h4 className="text-orange-300 font-semibold mb-2">Focus Areas</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• RAT analysis</li>
                          <li>• Social engineering detection</li>
                          <li>• Phishing investigation</li>
                          <li>• Lateral movement tracking</li>
                        </ul>
                      </div>
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h4 className="text-orange-300 font-semibold mb-2">Challenges</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• 20+ challenges</li>
                          <li>• Network analysis</li>
                          <li>• Malware reverse engineering</li>
                          <li>• Behavioral analysis</li>
                        </ul>
                      </div>
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h4 className="text-orange-300 font-semibold mb-2">Skills Developed</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Malware analysis</li>
                          <li>• Network forensics</li>
                          <li>• Threat intelligence</li>
                          <li>• Incident containment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="killchain3">
              <Card className="bg-gray-900/50 border-yellow-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-yellow-300">Kill Chain 3: Web Application Attack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Challenges players to investigate a web application attack targeting a vulnerable web application, 
                      where the adversary exploits vulnerabilities, all while evading detection across proxy headers 
                      and misaligned logs.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="text-yellow-300 font-semibold mb-2">Focus Areas</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Web application security</li>
                          <li>• Log analysis</li>
                          <li>• Proxy investigation</li>
                          <li>• Vulnerability assessment</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="text-yellow-300 font-semibold mb-2">Challenges</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• 15+ challenges</li>
                          <li>• Web exploitation</li>
                          <li>• Detection evasion</li>
                          <li>• Advanced persistence</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="text-yellow-300 font-semibold mb-2">Skills Developed</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Web security</li>
                          <li>• Log correlation</li>
                          <li>• Attack detection</li>
                          <li>• Security monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="killchain4">
              <Card className="bg-gray-900/50 border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-green-300">Kill Chain 4: Phishing & Exfiltration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Follows a convincing phishing attack that tricks a corporate employee into opening a malicious 
                      attachment, triggering macro-based malware, persistence via scheduled tasks, DNS tunneling, 
                      and stealthy exfiltration. Challenging defenders to trace every log cleared, service modified, 
                      and file exfiltrated in the wake of the compromise.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-2">Focus Areas</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Phishing investigation</li>
                          <li>• Macro malware analysis</li>
                          <li>• DNS tunneling detection</li>
                          <li>• Data exfiltration tracking</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-2">Challenges</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• 16+ challenges</li>
                          <li>• Advanced persistence</li>
                          <li>• Covert communication</li>
                          <li>• Evidence preservation</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-2">Skills Developed</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Advanced forensics</li>
                          <li>• Threat hunting</li>
                          <li>• Incident response</li>
                          <li>• Evidence analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Kill Chain 5 Tab */}
            <TabsContent value="killchain5">
              <Card className="bg-gray-900/50 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-blue-300">Digital Breadcrumbs and Village Voyages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Kill Chain #5 takes players on a journey across multiple village domains, challenging them to uncover 
                      user behaviors, downloaded files, browser artifacts, and security community trivia—all while stitching 
                      together clues from file servers, local activity, and curiosity-fueled internet footprints.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                        <h4 className="text-blue-300 font-semibold mb-3">Investigation Domains</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Multiple village domains</li>
                          <li>• User behavior analysis</li>
                          <li>• Downloaded file tracking</li>
                          <li>• Browser artifact examination</li>
                          <li>• Security community research</li>
                        </ul>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                        <h4 className="text-blue-300 font-semibold mb-3">Evidence Sources</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• File server analysis</li>
                          <li>• Local activity logs</li>
                          <li>• Internet footprint tracking</li>
                          <li>• Cross-domain correlation</li>
                          <li>• Digital breadcrumb trails</li>
                        </ul>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                        <h4 className="text-blue-300 font-semibold mb-3">Challenge Focus</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Clue stitching and correlation</li>
                          <li>• Multi-domain investigation</li>
                          <li>• Curiosity-driven research</li>
                          <li>• Community knowledge application</li>
                          <li>• Pattern recognition across sources</li>
                        </ul>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                        <h4 className="text-blue-300 font-semibold mb-3">Skills Developed</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          <li>• Cross-domain analysis</li>
                          <li>• Digital footprint tracking</li>
                          <li>• Evidence correlation</li>
                          <li>• Community intelligence</li>
                          <li>• Multi-source investigation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
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
      </section> */}

      <Footer />
    </div>
  )
}
