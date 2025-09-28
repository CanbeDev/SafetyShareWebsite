import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Clock, DollarSign, Shield, Globe } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Revenue",
    description: "Partners see an average 40% increase in revenue within the first 6 months of joining our network.",
    stat: "40%",
    statLabel: "Revenue Increase"
  },
  {
    icon: Users,
    title: "Access to Premium Users",
    description: "Connect with thousands of premium SafetyShare users who are actively seeking professional security services.",
    stat: "15K+",
    statLabel: "Premium Users"
  },
  {
    icon: Clock,
    title: "24/7 Alert System",
    description: "Receive instant notifications for emergency situations in your coverage area, ensuring rapid response capabilities.",
    stat: "< 10s",
    statLabel: "Alert Processing"
  },
  {
    icon: DollarSign,
    title: "Competitive Revenue Share",
    description: "Earn competitive rates for every response with transparent pricing and no hidden fees.",
    stat: "70%",
    statLabel: "Revenue Share"
  },
  {
    icon: Shield,
    title: "Brand Recognition",
    description: "Enhance your company's reputation as a certified SafetyShare security partner with marketing support.",
    stat: "500+",
    statLabel: "Partner Companies"
  },
  {
    icon: Globe,
    title: "Geographic Expansion",
    description: "Expand your service area and reach new markets through our nationwide network coverage.",
    stat: "95%",
    statLabel: "Area Coverage"
  }
]

export function PartnershipBenefits() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Partnership Benefits
          </Badge>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            Why Security Companies Choose SafetyShare
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Join our growing network of professional security companies and unlock new revenue streams 
            while helping keep communities safer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-space-grotesk font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-center">
                    <div className="font-space-grotesk font-bold text-2xl text-primary mb-1">{benefit.stat}</div>
                    <div className="text-xs text-muted-foreground">{benefit.statLabel}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
