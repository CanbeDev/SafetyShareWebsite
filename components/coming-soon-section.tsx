import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Home, 
  Watch, 
  Users, 
  Phone, 
  MapPin, 
  Zap,
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react"

const comingSoonFeatures = [
  {
    icon: Brain,
    title: "AI Predictive Safety",
    description: "Advanced machine learning that predicts potential safety risks before they happen, providing proactive alerts and recommendations.",
    timeline: "Q1 2025",
    status: "In Development",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Home,
    title: "Smart Home Integration",
    description: "Seamlessly connect with your smart home security systems, cameras, and IoT devices for comprehensive protection.",
    timeline: "Q2 2025",
    status: "Beta Testing",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Watch,
    title: "Wearable Device Support",
    description: "Full integration with Apple Watch, fitness trackers, and smart jewelry for discrete emergency activation.",
    timeline: "Q1 2025",
    status: "Coming Soon",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Users,
    title: "Advanced Family Coordination",
    description: "Multi-device family safety coordination with automated check-ins, safe arrival confirmations, and group emergency protocols.",
    timeline: "Q2 2025",
    status: "In Development",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Phone,
    title: "Custom Emergency Contacts",
    description: "Tiered emergency response system with custom contact hierarchies and automated escalation procedures.",
    timeline: "Q1 2025",
    status: "Beta Testing",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: MapPin,
    title: "Enhanced Geofencing",
    description: "Smart geofencing with AI-powered safe zone recommendations and automatic family notifications for location changes.",
    timeline: "Q3 2025",
    status: "Planned",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
]

const statusColors = {
  "In Development": { bg: "bg-blue-100", text: "text-blue-800" },
  "Beta Testing": { bg: "bg-green-100", text: "text-green-800" },
  "Coming Soon": { bg: "bg-yellow-100", text: "text-yellow-800" },
  "Planned": { bg: "bg-gray-100", text: "text-gray-800" }
}

export function ComingSoonSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-2 h-4 w-4" />
            Innovation Pipeline
          </Badge>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            The Future of Personal Safety
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            We're constantly innovating to bring you the most advanced safety technology. 
            Here's what's coming next to make your world even safer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {comingSoonFeatures.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
              {/* Coming Soon Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <CardContent className="p-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <Badge 
                    className={`${statusColors[feature.status as keyof typeof statusColors].bg} ${statusColors[feature.status as keyof typeof statusColors].text} border-0`}
                  >
                    {feature.status}
                  </Badge>
                </div>

                <h3 className="font-space-grotesk font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{feature.timeline}</span>
                  </div>
                  <Zap className={`h-4 w-4 ${feature.color} opacity-60`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation Timeline */}
        <div className="bg-card rounded-2xl p-8 mb-16">
          <h3 className="font-space-grotesk font-bold text-2xl text-center mb-8">Development Timeline</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <span className="font-space-grotesk font-bold text-lg text-secondary">Q1</span>
              </div>
              <h4 className="font-semibold mb-2">Early 2025</h4>
              <p className="text-sm text-muted-foreground">AI Predictive Safety, Wearable Support, Custom Emergency Contacts</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <span className="font-space-grotesk font-bold text-lg text-accent">Q2</span>
              </div>
              <h4 className="font-semibold mb-2">Mid 2025</h4>
              <p className="text-sm text-muted-foreground">Smart Home Integration, Advanced Family Coordination</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <span className="font-space-grotesk font-bold text-lg text-primary">Q3</span>
              </div>
              <h4 className="font-semibold mb-2">Late 2025</h4>
              <p className="text-sm text-muted-foreground">Enhanced Geofencing, Additional Premium Features</p>
            </div>
          </div>
        </div>

        {/* Early Access CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-border/50">
            <h3 className="font-space-grotesk font-bold text-2xl mb-4">Get Early Access</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Premium members get first access to new features in beta. Upgrade now and be among the first to experience 
              the future of personal safety technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Sparkles className="mr-2 h-5 w-5" />
                Join Premium Beta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Notify Me About Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
