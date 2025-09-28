import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Crown, Shield } from "lucide-react"

const premiumTestimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Premium Family Plan",
    plan: "Family",
    content: "The professional security response saved my daughter when she was in trouble downtown. Within 2 minutes, trained security professionals were on scene. Worth every penny.",
    rating: 5,
    avatar: "/professional-woman.png",
    responseTime: "< 2 min",
    incident: "Downtown Emergency"
  },
  {
    name: "James Rodriguez",
    role: "Premium Individual",
    plan: "Individual", 
    content: "As a night shift worker, the 24/7 monitoring gives me incredible peace of mind. The AI safety insights helped me avoid a dangerous area last month.",
    rating: 5,
    avatar: "/man-security-professional.jpg",
    responseTime: "< 1 min",
    incident: "Route Optimization Alert"
  },
  {
    name: "Lisa Chen",
    role: "Premium Enterprise",
    plan: "Enterprise",
    content: "Our company's employee safety has improved dramatically. The enterprise dashboard lets us monitor our field teams in real-time and coordinate responses instantly.",
    rating: 5,
    avatar: "/woman-parent.jpg",
    responseTime: "< 30 sec",
    incident: "Employee Safety Incident"
  }
]

const planColors = {
  Individual: { bg: "bg-secondary/10", text: "text-secondary", icon: Shield },
  Family: { bg: "bg-accent/10", text: "text-accent", icon: Crown },
  Enterprise: { bg: "bg-primary/10", text: "text-primary", icon: Crown }
}

export function PremiumTestimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Crown className="mr-2 h-4 w-4" />
            Premium Success Stories
          </Badge>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            Real Protection, Real Results
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            See how premium members have benefited from professional security response and advanced safety features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {premiumTestimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Plan Badge */}
              <div className="absolute top-4 right-4">
                <Badge className={`${planColors[testimonial.plan as keyof typeof planColors].bg} ${planColors[testimonial.plan as keyof typeof planColors].text} border-0`}>
                  {React.createElement(planColors[testimonial.plan as keyof typeof planColors].icon, { className: "mr-1 h-3 w-3" })}
                  {testimonial.plan}
                </Badge>
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Incident Details */}
                <div className="bg-muted/30 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Response Time</p>
                      <p className="font-semibold text-secondary">{testimonial.responseTime}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Incident Type</p>
                      <p className="font-semibold">{testimonial.incident}</p>
                    </div>
                  </div>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium Impact Stats */}
        <div className="bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 rounded-2xl p-8">
          <h3 className="font-space-grotesk font-bold text-2xl text-center mb-8">Premium Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl text-secondary mb-2">15,247</div>
              <div className="text-sm text-muted-foreground">Premium Members Protected</div>
            </div>
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl text-accent mb-2">3,892</div>
              <div className="text-sm text-muted-foreground">Emergency Responses</div>
            </div>
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl text-primary mb-2">99.7%</div>
              <div className="text-sm text-muted-foreground">Successful Resolutions</div>
            </div>
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl text-secondary mb-2">28s</div>
              <div className="text-sm text-muted-foreground">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
