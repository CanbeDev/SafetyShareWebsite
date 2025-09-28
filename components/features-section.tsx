import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Brain, Users, MapPin, Shield, Zap } from "lucide-react"

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
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-4">
            Advanced Safety Features
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Cutting-edge technology meets community-driven safety to provide comprehensive protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-border transition-colors duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-muted">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="font-space-grotesk text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
