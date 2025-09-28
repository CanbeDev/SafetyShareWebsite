import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Zap, 
  Brain, 
  Users, 
  Clock, 
  Phone, 
  MapPin, 
  Lock,
  AlertTriangle,
  Headphones
} from "lucide-react"

const premiumFeatures = [
  {
    icon: Shield,
    title: "Professional Security Response",
    description: "Direct connection to certified security companies with trained professionals ready to respond to your emergency within 30 seconds.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Zap,
    title: "Priority Alert Processing",
    description: "Skip the queue with priority processing of your SOS alerts, ensuring faster response times when every second counts.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Brain,
    title: "Advanced AI Safety Insights",
    description: "Machine learning algorithms provide personalized safety recommendations based on your location, time, and historical incident data.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Users,
    title: "Family Safety Network",
    description: "Connect unlimited family members with shared location tracking, coordinated emergency responses, and parental safety controls.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Clock,
    title: "24/7 Monitoring Center",
    description: "Round-the-clock monitoring by trained safety professionals who can assess situations and coordinate appropriate responses.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Phone,
    title: "Emergency Conference Calling",
    description: "Automatically connect with emergency contacts, family members, and security professionals in a coordinated response call.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: MapPin,
    title: "Precise Location Tracking",
    description: "Enhanced GPS accuracy with indoor positioning and automatic location sharing with authorized responders during emergencies.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Lock,
    title: "Advanced Biometric Security",
    description: "Multi-factor biometric authentication including fingerprint, facial recognition, and voice verification for secure access.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: AlertTriangle,
    title: "Smart Threat Detection",
    description: "AI-powered threat analysis that can detect potential dangers before they escalate and provide proactive safety alerts.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Headphones,
    title: "Dedicated Support Line",
    description: "Direct access to premium support specialists available 24/7 for technical assistance and safety consultations.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  }
]

export function PremiumFeatures() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Premium Features
          </Badge>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            Professional-Grade Safety Technology
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Upgrade to premium and unlock advanced safety features designed for serious protection. 
            Every feature is crafted to provide you with the highest level of safety and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiumFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-space-grotesk font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium Benefits Summary */}
        <div className="mt-20 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="font-space-grotesk font-bold text-2xl mb-4">Why Choose Premium?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium members receive priority treatment, professional-grade features, and direct access to our network of certified security professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl text-secondary mb-2">99.7%</div>
              <div className="text-sm text-muted-foreground">Emergency Response Success Rate</div>
            </div>
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl text-accent mb-2">&lt; 30s</div>
              <div className="text-sm text-muted-foreground">Average Professional Response Time</div>
            </div>
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Certified Security Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
