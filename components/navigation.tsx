"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const smoothScroll = (targetId: string) => {
  const element = document.getElementById(targetId.replace('#', ''))
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-secondary" />
            <span className="font-space-grotesk font-bold text-xl text-foreground">SafetyShare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => smoothScroll('features')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <Link href="/premium" className="text-muted-foreground hover:text-foreground transition-colors">
              Premium
            </Link>
            <button 
              onClick={() => smoothScroll('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <Link href="/security-partners" className="text-muted-foreground hover:text-foreground transition-colors">
              Partners
            </Link>
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button asChild variant="outline">
              <Link href="/dashboard/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link href="/premium">Go Premium</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="h-9 w-9 p-0">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <button
                onClick={() => {
                  smoothScroll('features')
                  toggleMenu()
                }}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors text-left w-full"
              >
                Features
              </button>
              <Link
                href="/premium"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                Premium
              </Link>
              <button
                onClick={() => {
                  smoothScroll('about')
                  toggleMenu()
                }}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors text-left w-full"
              >
                About
              </button>
              <Link
                href="/security-partners"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                Partners
              </Link>
              <Link
                href="/dashboard"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dashboard/login">Sign In</Link>
                </Button>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                  <Link href="/premium">Go Premium</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
