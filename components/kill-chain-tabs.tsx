"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Target,
  BookOpen,
} from "lucide-react"

interface KillChainData {
  id: string
  title: string
  description: string
  color: string
  focusAreas: string[]
  challenges: string[]
  skillsDeveloped: string[]
}

interface KillChainTabsProps {
  killChains: KillChainData[]
  className?: string
}

export function KillChainTabs({ killChains, className = "" }: KillChainTabsProps) {
  return (
    <Tabs defaultValue="overview" className={`w-full ${className}`}>
      <TabsList className={`grid w-full grid-cols-${killChains.length + 1} bg-gray-900/50 mb-8`}>
        <TabsTrigger value="overview" className="data-[state=active]:bg-purple-500 text-gray-300 hover:text-white">
          <BookOpen className="w-4 h-4 mr-2" />
          Overview
        </TabsTrigger>
        {killChains.map((chain, index) => (
          <TabsTrigger 
            key={chain.id}
            value={chain.id} 
            className={`data-[state=active]:bg-${chain.color}-500 text-gray-300 hover:text-white`}
          >
            <Target className="w-4 h-4 mr-2" />
            {chain.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Overview Tab - This will be handled by the parent component */}
      <TabsContent value="overview">
        {/* Overview content will be passed as children */}
      </TabsContent>

      {/* Kill Chain Tabs */}
      {killChains.map((chain) => (
        <TabsContent key={chain.id} value={chain.id}>
          <Card className={`bg-gray-900/50 border-${chain.color}-500/30`}>
            <CardHeader>
              <CardTitle className={`text-3xl font-bold text-${chain.color}-300`}>
                {chain.id === "killchain5" ? "Digital Breadcrumbs and Village Voyages" : chain.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-300">
                  {chain.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`bg-${chain.color}-500/10 border border-${chain.color}-500/30 rounded-lg p-4`}>
                    <h4 className={`text-${chain.color}-300 font-semibold mb-2`}>Focus Areas</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {chain.focusAreas.map((area, index) => (
                        <li key={index}>• {area}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-${chain.color}-500/10 border border-${chain.color}-500/30 rounded-lg p-4`}>
                    <h4 className={`text-${chain.color}-300 font-semibold mb-2`}>Challenges</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {chain.challenges.map((challenge, index) => (
                        <li key={index}>• {challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-${chain.color}-500/10 border border-${chain.color}-500/30 rounded-lg p-4`}>
                    <h4 className={`text-${chain.color}-300 font-semibold mb-2`}>Skills Developed</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {chain.skillsDeveloped.map((skill, index) => (
                        <li key={index}>• {skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}

// Predefined kill chain data for Project Obsidian
export const projectObsidianKillChains: KillChainData[] = [
  {
    id: "killchain1",
    title: "Kill Chain 1",
    description: "Uncover an adversary's full compromise of multiple Windows workstations. Investigate the adversary's activities from reconnaissance to credential theft, persistence, and privilege escalation while defenders trace their steps through forensic artifacts, browser activity, and Active Directory abuse.",
    color: "red",
    focusAreas: [
      "Windows forensics",
      "Browser artifact analysis", 
      "Active Directory investigation",
      "Credential theft detection"
    ],
    challenges: [
      "25+ challenges",
      "Progressive difficulty",
      "Real-world scenarios",
      "Hands-on practice"
    ],
    skillsDeveloped: [
      "Incident response",
      "Digital forensics",
      "Threat hunting",
      "Analysis techniques"
    ]
  },
  {
    id: "killchain2",
    title: "Kill Chain 2", 
    description: "Track a remote access trojan (RAT) enabled social engineering attack, uses phishing, RMM tools, and AD recon to compromise a user and explore lateral movement.",
    color: "orange",
    focusAreas: [
      "RAT analysis",
      "Social engineering detection",
      "Phishing investigation", 
      "Lateral movement tracking"
    ],
    challenges: [
      "20+ challenges",
      "Network analysis",
      "Malware reverse engineering",
      "Behavioral analysis"
    ],
    skillsDeveloped: [
      "Malware analysis",
      "Network forensics",
      "Threat intelligence",
      "Incident containment"
    ]
  },
  {
    id: "killchain3",
    title: "Kill Chain 3",
    description: "Challenges players to investigate a web application attack targeting a vulnerable web application, where the adversary exploits vulnerabilities, all while evading detection across proxy headers and misaligned logs.",
    color: "yellow",
    focusAreas: [
      "Web application security",
      "Log analysis",
      "Proxy investigation",
      "Vulnerability assessment"
    ],
    challenges: [
      "15+ challenges",
      "Web exploitation",
      "Detection evasion",
      "Advanced persistence"
    ],
    skillsDeveloped: [
      "Web security",
      "Log correlation",
      "Attack detection",
      "Security monitoring"
    ]
  },
  {
    id: "killchain4",
    title: "Kill Chain 4",
    description: "Follows a convincing phishing attack that tricks a corporate employee into opening a malicious attachment, triggering macro-based malware, persistence via scheduled tasks, DNS tunneling, and stealthy exfiltration. Challenging defenders to trace every log cleared, service modified, and file exfiltrated in the wake of the compromise.",
    color: "green",
    focusAreas: [
      "Phishing investigation",
      "Macro malware analysis",
      "DNS tunneling detection",
      "Data exfiltration tracking"
    ],
    challenges: [
      "16+ challenges",
      "Advanced persistence",
      "Covert communication",
      "Evidence preservation"
    ],
    skillsDeveloped: [
      "Advanced forensics",
      "Threat hunting",
      "Incident response",
      "Evidence analysis"
    ]
  },
  {
    id: "killchain5",
    title: "Kill Chain #5",
    description: "Kill Chain #5 takes players on a journey across multiple village domains, challenging them to uncover user behaviors, downloaded files, browser artifacts, and security community trivia—all while stitching together clues from file servers, local activity, and curiosity-fueled internet footprints.",
    color: "blue",
    focusAreas: [
      "Multiple village domains",
      "User behavior analysis",
      "Downloaded file tracking",
      "Browser artifact examination",
      "Security community research"
    ],
    challenges: [
      "Cross-domain investigation",
      "Digital footprint analysis",
      "Evidence correlation",
      "Community intelligence",
      "Multi-source investigation"
    ],
    skillsDeveloped: [
      "Cross-domain analysis",
      "Digital footprint tracking",
      "Evidence correlation",
      "Community intelligence",
      "Multi-source investigation"
    ]
  }
] 