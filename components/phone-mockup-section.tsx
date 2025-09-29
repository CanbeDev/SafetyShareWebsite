"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, AlertTriangle, Users, Sun, Moon, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Image from "next/image"

export function PhoneMockupSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentScreenshot, setCurrentScreenshot] = useState<'light' | 'dark'>('light')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Define mockupSlides before useEffect hooks
  const mockupSlides = [
    {
      title: "Home Dashboard",
      description: "Quick access to emergency features and safety status",
      features: ["Emergency SOS", "Safety Status", "Quick Actions"]
    },
    {
      title: "Real-time Map",
      description: "Live safety alerts and route optimization in your area",
      features: ["Live Alerts", "Safe Routes", "Community Reports"]
    },
    {
      title: "Family Safety",
      description: "Keep track of your loved ones with shared location",
      features: ["Family Tracking", "Check-ins", "Group Alerts"]
    },
    {
      title: "Security Response",
      description: "Professional security companies ready to respond",
      features: ["24/7 Response", "Verified Partners", "Instant Dispatch"]
    }
  ]

  const screenshots = {
    light: "/App-screenshots/PhoneMockup_64da6d41-light -mode.jpg",
    dark: "/App-screenshots/Phone-Mockup_14_12_3_8e37bf58-DarkMode.jpg"
  }

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

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockupSlides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, mockupSlides.length])

  if (!mounted) {
    return null // Avoid hydration mismatch
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockupSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockupSlides.length) % mockupSlides.length)
    setIsAutoPlaying(false)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Dynamic Header */}
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                {mockupSlides[currentSlide].title}
              </Badge>
              <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance">
                Your Safety Command Center
              </h2>
              <p className="text-xl text-muted-foreground text-balance">
                {mockupSlides[currentSlide].description}
              </p>
            </div>

            {/* Dynamic Features */}
            <div className="space-y-4">
              {mockupSlides[currentSlide].features.map((feature, index) => (
                <div 
                  key={feature}
                  className={`flex items-center gap-3 animate-in slide-in-from-left duration-500 ${
                    index === 0 ? 'animation-delay-0' : 
                    index === 1 ? 'animation-delay-100' : 
                    'animation-delay-200'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-secondary/10">
                    {index === 0 && <AlertTriangle className="h-5 w-5 text-secondary" />}
                    {index === 1 && <MapPin className="h-5 w-5 text-accent" />}
                    {index === 2 && <Users className="h-5 w-5 text-primary" />}
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature}</h3>
                    <p className="text-sm text-muted-foreground">
                      {index === 0 && "Instant emergency response at your fingertips"}
                      {index === 1 && "Real-time safety information and updates"}
                      {index === 2 && "Connect with your safety network"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">App Preview:</span>
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

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={prevSlide}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={toggleAutoPlay}>
                  {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button variant="outline" size="sm" onClick={nextSlide}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {mockupSlides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsAutoPlaying(false)
                  }}
                  title={`Go to ${slide.title}`}
                  aria-label={`Go to ${slide.title} slide`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-secondary w-8' 
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              {/* Phone Frame with enhanced styling */}
              <div className="w-80 h-[600px] bg-gradient-to-b from-primary to-primary/80 rounded-[3rem] p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  
                  {/* Phone Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[2.5rem] pointer-events-none z-10" />
                  
                  {/* App Screenshot with transition */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 transition-all duration-500">
                      <Image
                        src={screenshots[currentScreenshot]}
                        alt={`SafetyShare App - ${currentScreenshot} mode - ${mockupSlides[currentSlide].title}`}
                        fill
                        className="object-cover rounded-[2.5rem] transition-opacity duration-300"
                        sizes="(max-width: 320px) 100vw, 320px"
                        priority
                      />
                    </div>
                    
                    {/* Overlay content for interactivity */}
                    <div className="absolute inset-0 rounded-[2.5rem] bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  </div>
                  
                  {/* Phone notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30" />
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                  Live
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                24/7 Active
              </div>
              
              {/* Dynamic slide indicator */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border px-3 py-1 rounded-full text-xs font-medium shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2">
                  {currentScreenshot === 'light' ? '☀️' : '🌙'} 
                  <span className="hidden sm:inline">{mockupSlides[currentSlide].title}</span>
                </div>
              </div>

              {/* Slide progress indicator */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-1">
                {mockupSlides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-secondary w-8' 
                        : 'bg-muted w-2'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play progress bar */}
              {isAutoPlaying && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full progress-bar-animation" />
                </div>
              )}

              {/* Floating feature badges */}
              <div className="absolute -left-8 top-1/4 hidden lg:block">
                <div className="bg-card border border-border rounded-lg p-3 shadow-lg animate-bounce">
                  <AlertTriangle className="h-5 w-5 text-accent mb-1" />
                  <div className="text-xs font-medium">SOS Ready</div>
                </div>
              </div>
              
              <div className="absolute -right-8 top-1/2 hidden lg:block">
                <div className="bg-card border border-border rounded-lg p-3 shadow-lg animate-bounce animation-delay-1000">
                  <Users className="h-5 w-5 text-primary mb-1" />
                  <div className="text-xs font-medium">Connected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
