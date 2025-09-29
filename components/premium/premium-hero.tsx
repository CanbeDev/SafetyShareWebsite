"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Shield, Crown, Zap, Users } from "lucide-react"
import Link from "next/link"

export function PremiumHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-background to-accent/5 pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 bg-secondary/20 text-secondary">
            <Crown className="mr-2 h-4 w-4" />
            Premium Protection
          </Badge>
          
          <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-balance mb-6">
            Upgrade to <span className="text-secondary">Professional Safety</span>
          </h1>
          
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
            Get instant access to professional security companies, priority response times, and advanced AI safety features. 
            Your safety is our priority - now with 24/7 professional monitoring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Crown className="mr-2 h-5 w-5" />
              Start Premium Trial
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#pricing">
                <Shield className="mr-2 h-5 w-5" />
                View Pricing Plans
              </Link>
            </Button>
          </div>

          {/* Premium Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              {mounted ? (
                <div className="font-space-grotesk font-bold text-3xl text-secondary mb-2">&lt; 30s</div>
              ) : (
                <div className="h-9 w-16 bg-muted animate-pulse rounded mx-auto mb-2"></div>
              )}
              <div className="text-sm text-muted-foreground">Professional Response Time</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              {mounted ? (
                <AnimatedCounter 
                  end={85} 
                  suffix="+" 
                  className="font-space-grotesk font-bold text-3xl text-accent mb-2"
                />
              ) : (
                <div className="h-9 w-16 bg-muted animate-pulse rounded mx-auto mb-2"></div>
              )}
              <div className="text-sm text-muted-foreground">SA Partner Security Companies</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              {mounted ? (
                <AnimatedCounter 
                  end={3200} 
                  suffix="+" 
                  className="font-space-grotesk font-bold text-3xl text-primary mb-2"
                />
              ) : (
                <div className="h-9 w-16 bg-muted animate-pulse rounded mx-auto mb-2"></div>
              )}
              <div className="text-sm text-muted-foreground">Premium Members Protected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
