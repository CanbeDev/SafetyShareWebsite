"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, AlertTriangle, Users, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Image from "next/image"

export function PhoneMockupSection() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentScreenshot, setCurrentScreenshot] = useState<'light' | 'dark'>('light')

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Update screenshot based on theme
  useEffect(() => {
    if (mounted) {
      setCurrentScreenshot(theme === 'dark' ? 'dark' : 'light')
    }
  }, [theme, mounted])

  if (!mounted) {
    return null // Avoid hydration mismatch
  }

  const screenshots = {
    light: "/App-screenshots/PhoneMockup_64da6d41-light -mode.jpg",
    dark: "/App-screenshots/Phone-Mockup_14_12_3_8e37bf58-DarkMode.jpg"
  }

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
              Your Safety Command Center
            </h2>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Experience the intuitive interface that puts powerful safety tools at your fingertips. Monitor real-time
              alerts, track safe routes, and stay connected with your community.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Real-time Location Tracking</h3>
                  <p className="text-sm text-muted-foreground">Precise GPS monitoring with privacy controls</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Emergency Activation</h3>
                  <p className="text-sm text-muted-foreground">One-tap SOS with automatic location sharing</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Community Network</h3>
                  <p className="text-sm text-muted-foreground">Connect with verified safety partners</p>
                </div>
              </div>
            </div>

            {/* Theme Toggle for Screenshots */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">View app in:</span>
              <div className="flex items-center gap-2">
                <Button
                  variant={currentScreenshot === 'light' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentScreenshot('light')}
                  className="flex items-center gap-2"
                >
                  <Sun className="h-4 w-4" />
                  Light
                </Button>
                <Button
                  variant={currentScreenshot === 'dark' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentScreenshot('dark')}
                  className="flex items-center gap-2"
                >
                  <Moon className="h-4 w-4" />
                  Dark
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-primary rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  {/* App Screenshot */}
                  <div className="relative w-full h-full">
                    <Image
                      src={screenshots[currentScreenshot]}
                      alt={`SafetyShare App - ${currentScreenshot} mode`}
                      fill
                      className="object-cover rounded-[2.5rem]"
                      sizes="(max-width: 320px) 100vw, 320px"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                Live
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                24/7 Active
              </div>
              
              {/* Screenshot Mode Indicator */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                {currentScreenshot === 'light' ? '☀️' : '🌙'} {currentScreenshot} mode
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
