"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AlertTriangle, Brain, Users, MapPin, Shield, Zap, Search } from "lucide-react"

const features = [
  {
    icon: AlertTriangle,
    title: "SOS Alerts",
    description:
      "Instant emergency alerts sent to your trusted contacts and local authorities with precise location data.",
    color: "text-accent",
  },
  {
    icon: Brain,
    title: "AI Safety Insights",
    description:
      "Machine learning algorithms analyze local crime patterns and provide personalized safety recommendations.",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Community Reporting",
    description: "Real-time incident reporting from verified community members to keep everyone informed.",
    color: "text-primary",
  },
  {
    icon: MapPin,
    title: "Smart Routes",
    description: "AI-optimized route suggestions that avoid high-risk areas and prioritize your safety.",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Biometric Security",
    description: "Advanced biometric authentication ensures only you can access your safety profile.",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Sub-second emergency response times with automated dispatch to nearest responders.",
    color: "text-primary",
  },
]

export function FeaturesSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFeatures = useMemo(() => {
    if (!searchQuery.trim()) return features
    
    return features.filter(
      (feature) =>
        feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-4">
            Advanced Safety Features
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto mb-8">
            Cutting-edge technology meets community-driven safety to provide comprehensive protection.
          </p>
          
          {/* Feature Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">No features found matching your search.</p>
            </div>
          ) : (
            filteredFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-border transition-colors duration-300 hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="font-space-grotesk text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
