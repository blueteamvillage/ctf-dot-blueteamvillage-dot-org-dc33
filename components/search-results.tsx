"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { type SearchResult, searchContent } from "@/lib/search"
import { Search, ExternalLink, FileText, Trophy, Shield, Users } from "lucide-react"
import Link from "next/link"

interface SearchResultsProps {
  query: string
  onClose: () => void
}

const typeIcons = {
  page: FileText,
  challenge: Trophy,
  rule: Shield,
  sponsor: Users,
}

const typeColors = {
  page: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  challenge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  rule: "bg-green-500/20 text-green-300 border-green-500/30",
  sponsor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
}

export function SearchResults({ query, onClose }: SearchResultsProps) {
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)
    // Simulate search delay for better UX
    const timer = setTimeout(() => {
      const searchResults = searchContent(query)
      setResults(searchResults)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  if (!query.trim()) {
    return null
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-2xl z-50 max-h-96 overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <Search className="w-5 h-5 mr-2 text-cyan-400" />
            Search Results
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white">
            ×
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full mx-auto mb-2" />
            <p className="text-gray-400">Searching...</p>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-3">
            {results.map((result) => {
              const Icon = typeIcons[result.type]
              return (
                <Link
                  key={result.id}
                  href={result.url}
                  onClick={onClose}
                  className="block hover:bg-gray-800/50 rounded-lg p-3 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Icon className="w-4 h-4 mr-2 text-gray-400" />
                        <h4 className="font-semibold text-white text-sm">{result.title}</h4>
                        <ExternalLink className="w-3 h-3 ml-2 text-gray-500" />
                      </div>
                      <p className="text-xs text-gray-400 mb-2 line-clamp-2">{result.content.slice(0, 120)}...</p>
                      <div className="flex items-center space-x-2">
                        <Badge className={typeColors[result.type]} variant="outline">
                          {result.type}
                        </Badge>
                        <span className="text-xs text-gray-500">{result.section}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-8">
            <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 mb-2">No results found for "{query}"</p>
            <p className="text-sm text-gray-500">Try searching for "incident response", "challenges", or "rules"</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="mt-4 pt-3 border-t border-gray-700">
            <p className="text-xs text-gray-500 text-center">
              Found {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
