"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, Menu, X, Shield, Trophy, FileText, Files, MapPin, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchResults } from "@/components/search-results"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchResults, setShowSearchResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const navigationLinks = [
    { href: "/", label: "Home", icon: Shield },
    { href: "/about", label: "About", icon: Users },
    { href: "/challenges", label: "Challenges", icon: Trophy },
    { href: "/past-winners", label: "Past Winners", icon: Award },
    { href: "https://s3.us-west-2.amazonaws.com/media.blueteamvillage.org/index.html", label: "Download Files", icon: Files },
    { href: "/location", label: "Location", icon: MapPin },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setShowSearchResults(true)
    }
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    setShowSearchResults(value.trim().length > 0)
  }

  const closeSearchResults = () => {
    setShowSearchResults(false)
  }

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close search results when pressing Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowSearchResults(false)
        setSearchQuery("")
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Closed Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 border-b border-orange-400/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-white font-semibold text-sm md:text-base">
              🚫 Closed till DEF CON 34, see y'all next year! 🚫
            </span>
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Main Header Navigation */}
      <div className="bg-black/90 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/obsidian.png"
                alt="Project Obsidian Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                BTV CTF
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center relative" ref={searchRef}>
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search challenges, rules..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onFocus={() => searchQuery.trim() && setShowSearchResults(true)}
                  className="pl-10 pr-4 py-2 w-64 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                />
              </form>

              {showSearchResults && <SearchResults query={searchQuery} onClose={closeSearchResults} />}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 hover:text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {/* Mobile Search */}
              <div className="relative mb-4" ref={searchRef}>
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search challenges, rules..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    onFocus={() => searchQuery.trim() && setShowSearchResults(true)}
                    className="pl-10 pr-4 py-2 w-full bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                  />
                </form>

                {showSearchResults && <SearchResults query={searchQuery} onClose={closeSearchResults} />}
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                {navigationLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center space-x-2 px-2 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-900/50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
