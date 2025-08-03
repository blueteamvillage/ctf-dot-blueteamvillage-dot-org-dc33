export interface SearchResult {
  id: string
  title: string
  content: string
  url: string
  section: string
  type: "page" | "challenge" | "rule" | "sponsor"
}

// Search index data
const searchData: SearchResult[] = [
  // Home page content
  {
    id: "home-hero",
    title: "BTV CTF DEF CON 33",
    content:
      "Blue Team Village CTF Access Everywhere Defend Everything August 8-10 2025 Las Vegas Nevada team based incident response cybersecurity competition",
    url: "/",
    section: "Home",
    type: "page",
  },
  {
    id: "home-event-details",
    title: "Event Details",
    content:
      "Join us for an intense cybersecurity competition focused on defensive strategies incident response blue team operations 48 hours non-stop jeopardy style multiple categories all levels beginner to expert",
    url: "/",
    section: "Event Details",
    type: "page",
  },

  // Challenge categories
  {
    id: "challenge-incident-response",
    title: "Incident Response",
    content: "Analyze security incidents contain threats develop response strategies medium difficulty 8 challenges",
    url: "/",
    section: "Challenge Categories",
    type: "challenge",
  },
  {
    id: "challenge-digital-forensics",
    title: "Digital Forensics",
    content:
      "Investigate digital evidence recover artifacts piece together attack timelines hard difficulty 6 challenges",
    url: "/",
    section: "Challenge Categories",
    type: "challenge",
  },
  {
    id: "challenge-threat-hunting",
    title: "Threat Hunting",
    content:
      "Proactively search for threats analyze IOCs identify advanced persistent threats hard difficulty 5 challenges",
    url: "/",
    section: "Challenge Categories",
    type: "challenge",
  },
  {
    id: "challenge-network-defense",
    title: "Network Defense",
    content: "Monitor network traffic detect anomalies implement defensive measures medium difficulty 7 challenges",
    url: "/",
    section: "Challenge Categories",
    type: "challenge",
  },
  {
    id: "challenge-log-analysis",
    title: "Log Analysis",
    content: "Parse and analyze various log sources identify security events patterns easy difficulty 10 challenges",
    url: "/",
    section: "Challenge Categories",
    type: "challenge",
  },
  {
    id: "challenge-malware-analysis",
    title: "Malware Analysis",
    content: "Reverse engineer malware samples understand attack techniques hard difficulty 4 challenges",
    url: "/",
    section: "Challenge Categories",
    type: "challenge",
  },

  // Project Obsidian content
  {
    id: "project-obsidian-overview",
    title: "Project Obsidian CTF",
    content:
      "Developed by BTV Project Obsidian team immersive incident response exercise challenge engage participants all skill levels realistic scenario complex security incidents cyber defense skills OWASP JuiceShop platform web application security",
    url: "/challenges",
    section: "Project Obsidian",
    type: "page",
  },
  {
    id: "project-obsidian-getting-started",
    title: "Getting Started Guide",
    content:
      "Welcome to Project Obsidian before attempting challenges review each phase scenario series killchain 1 2 3 unique stage main investigation background objectives navigating platform sequence narrative context artifacts standalone challenges extra points practice tips skills information earlier scenarios clues files relevant task detailed rules flag formats support Discord facilitator contact hints policy",
    url: "/challenges",
    section: "Getting Started",
    type: "page",
  },
  {
    id: "killchain-1",
    title: "Kill Chain 1 - Initial Compromise",
    content:
      "Initial compromise phase incident response scenario first stage investigation entry point attack vector initial access",
    url: "/challenges",
    section: "Kill Chain 1",
    type: "challenge",
  },
  {
    id: "killchain-2",
    title: "Kill Chain 2 - Lateral Movement",
    content:
      "Lateral movement phase progression aspects incident network traversal privilege escalation persistence mechanisms",
    url: "/challenges",
    section: "Kill Chain 2",
    type: "challenge",
  },
  {
    id: "killchain-3",
    title: "Kill Chain 3 - Impact & Recovery",
    content:
      "Impact recovery phase final stages impact assessment recovery procedures containment eradication lessons learned",
    url: "/challenges",
    section: "Kill Chain 3",
    type: "challenge",
  },

  // Rules content
  {
    id: "competition-rules",
    title: "Competition Rules",
    content:
      "No attacking other teams competition infrastructure no sharing flags solutions respect participants organizers follow DEF CON code of conduct fair play learning priorities",
    url: "/",
    section: "Rules",
    type: "rule",
  },
  {
    id: "team-formation",
    title: "Team Formation",
    content:
      "Teams 1-4 members maximum solo participation encouraged welcome team registration required before competition starts all skill levels beginners",
    url: "/",
    section: "Rules",
    type: "rule",
  },
  {
    id: "timing-schedule",
    title: "Timing & Schedule",
    content:
      "Competition runs 48 hours straight challenges released waves throughout event scoreboard updates real-time final submissions accepted until closing ceremony",
    url: "/",
    section: "Rules",
    type: "rule",
  },
  {
    id: "scoring-prizes",
    title: "Scoring & Prizes",
    content:
      "Points awarded based challenge difficulty dynamic scoring points decrease more teams solve prizes top 3 teams special categories recognition certificates all participants",
    url: "/",
    section: "Rules",
    type: "rule",
  },

  // Sponsors
  {
    id: "sponsor-graylog",
    title: "Graylog",
    content: "Graylog blue sponsor log management SIEM platform security information event management",
    url: "/",
    section: "Sponsors",
    type: "sponsor",
  },
  {
    id: "sponsor-hackthebox",
    title: "HackTheBox",
    content: "HackTheBox platinum sponsor cybersecurity training platform hands-on learning penetration testing",
    url: "/",
    section: "Sponsors",
    type: "sponsor",
  },
  {
    id: "sponsor-flare",
    title: "Flare",
    content: "Flare gold sponsor security solutions threat detection incident response",
    url: "/",
    section: "Sponsors",
    type: "sponsor",
  },
  {
    id: "sponsor-tryhackme",
    title: "TryHackMe",
    content: "TryHackMe gold sponsor cybersecurity learning platform online training courses",
    url: "/",
    section: "Sponsors",
    type: "sponsor",
  },
  {
    id: "sponsor-deeptempo",
    title: "DeepTempo",
    content: "DeepTempo gold sponsor threat intelligence cyber threat analysis",
    url: "/",
    section: "Sponsors",
    type: "sponsor",
  },
  {
    id: "sponsor-acyberguru",
    title: "A Cyber Guru",
    content: "A Cyber Guru gold sponsor security training cybersecurity education professional development",
    url: "/",
    section: "Sponsors",
    type: "sponsor",
  },
]

export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) {
    return []
  }

  const searchTerms = query
    .toLowerCase()
    .split(" ")
    .filter((term) => term.length > 0)

  return searchData
    .map((item) => {
      let score = 0
      const titleLower = item.title.toLowerCase()
      const contentLower = item.content.toLowerCase()
      const sectionLower = item.section.toLowerCase()

      // Calculate relevance score
      searchTerms.forEach((term) => {
        // Title matches get highest score
        if (titleLower.includes(term)) {
          score += titleLower === term ? 10 : 5
        }

        // Section matches get medium score
        if (sectionLower.includes(term)) {
          score += 3
        }

        // Content matches get base score
        if (contentLower.includes(term)) {
          score += 1
        }
      })

      return { ...item, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10) // Limit to top 10 results
}

export function getSearchSuggestions(query: string): string[] {
  if (!query.trim()) {
    return ["incident response", "project obsidian", "kill chain", "challenges", "rules", "sponsors"]
  }

  const suggestions = new Set<string>()
  const queryLower = query.toLowerCase()

  searchData.forEach((item) => {
    const words = item.content.split(" ")
    words.forEach((word) => {
      const cleanWord = word.toLowerCase().replace(/[^\w]/g, "")
      if (cleanWord.length > 3 && cleanWord.startsWith(queryLower)) {
        suggestions.add(cleanWord)
      }
    })
  })

  return Array.from(suggestions).slice(0, 5)
}
