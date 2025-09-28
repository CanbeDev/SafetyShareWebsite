import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Brain, Zap, Globe, Lock } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "Real-time SOS",
    description: "Instant emergency alerts with precise location data sent to trusted contacts and authorities.",
    stat: "< 3 sec",
    statLabel: "Response Time",
  },
  {
    icon: Brain,
    title: "AI Hotspot Mapping",
    description: "Machine learning algorithms analyze crime patterns to identify and avoid high-risk areas.",
    stat: "95%",
    statLabel: "Accuracy Rate",
  },
  {
    icon: Lock,
    title: "Biometric Login",
    description: "Advanced fingerprint and facial recognition ensures secure access to your safety profile.",
    stat: "Bank-level",
    statLabel: "Security",
  },
  {
    icon: Zap,
    title: "Push Alerts",
    description: "Instant notifications about nearby incidents, weather alerts, and community safety updates.",
    stat: "24/7",
    statLabel: "Monitoring",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4">
            Our Mission
          </Badge>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            Building Safer Communities Through Technology
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-4xl mx-auto leading-relaxed">
            SafetyShare was founded on the belief that everyone deserves to feel safe in their community. We combine
            cutting-edge AI technology with the power of community collaboration to create a comprehensive safety
            network that protects individuals and strengthens neighborhoods.
          </p>
        </div>

        {/* Infographic Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                  <highlight.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-space-grotesk font-bold text-lg mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{highlight.description}</p>
                <div className="border-t border-border/50 pt-4">
                  <div className="font-space-grotesk font-bold text-2xl text-accent">{highlight.stat}</div>
                  <div className="text-xs text-muted-foreground">{highlight.statLabel}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              Our Values
            </Badge>
            <h3 className="font-space-grotesk font-bold text-2xl sm:text-3xl mb-6">Privacy-First Safety Solutions</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary/10 mt-1">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Community-Driven</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our platform thrives on community participation, with verified users contributing to a safer
                    environment for everyone.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10 mt-1">
                  <Lock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Privacy Protected</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Your personal data is encrypted and never shared without explicit consent. You control what
                    information is visible to others.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 mt-1">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Globally Accessible</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Available in multiple languages and designed to work across different cultures and safety
                    requirements worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-space-grotesk font-bold text-3xl text-secondary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Cities Covered</div>
                </div>
                <div className="text-center">
                  <div className="font-space-grotesk font-bold text-3xl text-accent mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Lives Protected</div>
                </div>
                <div className="text-center">
                  <div className="font-space-grotesk font-bold text-3xl text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="font-space-grotesk font-bold text-3xl text-secondary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full opacity-20" />
            <div className="absolute top-1/2 -left-2 w-6 h-6 bg-primary rounded-full opacity-20" />
          </div>
        </div>
      </div>
    </section>
  )
}
