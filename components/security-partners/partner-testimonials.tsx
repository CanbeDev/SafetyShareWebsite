import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Building, TrendingUp } from "lucide-react"

const partnerTestimonials = [
  {
    company: "SecureGuard Pro",
    location: "New York, NY",
    representative: "Michael Torres",
    role: "Operations Director",
    content: "SafetyShare has transformed our business. We've seen a 45% increase in revenue and our response teams are constantly busy with high-quality emergency calls. The platform is intuitive and the payment system is transparent.",
    rating: 5,
    revenueIncrease: "45%",
    monthsPartner: "18",
    responsesHandled: "2,847"
  },
  {
    company: "Guardian Security Network",
    location: "Los Angeles, CA",
    representative: "Sarah Chen",
    role: "CEO",
    content: "The quality of leads from SafetyShare is exceptional. Premium users are genuinely in need of professional security services, and our teams feel proud knowing they're making a real difference in people's lives.",
    rating: 5,
    revenueIncrease: "38%",
    monthsPartner: "12",
    responsesHandled: "1,923"
  },
  {
    company: "Elite Response Solutions",
    location: "Chicago, IL",
    representative: "David Rodriguez",
    role: "Partner Manager",
    content: "The technology integration was seamless, and the support team helped us every step of the way. Our dispatchers love the detailed information provided with each alert, making our responses more effective.",
    rating: 5,
    revenueIncrease: "52%",
    monthsPartner: "24",
    responsesHandled: "3,156"
  }
]

export function PartnerTestimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Building className="mr-2 h-4 w-4" />
            Partner Success Stories
          </Badge>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            What Our Security Partners Say
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Discover how security companies across the nation have grown their business 
            and made a meaningful impact through the SafetyShare network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partnerTestimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Performance Metrics */}
                <div className="bg-muted/30 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-space-grotesk font-bold text-lg text-secondary">
                        {testimonial.revenueIncrease}
                      </div>
                      <div className="text-muted-foreground text-xs">Revenue Growth</div>
                    </div>
                    <div>
                      <div className="font-space-grotesk font-bold text-lg text-accent">
                        {testimonial.responsesHandled}
                      </div>
                      <div className="text-muted-foreground text-xs">Responses</div>
                    </div>
                    <div>
                      <div className="font-space-grotesk font-bold text-lg text-primary">
                        {testimonial.monthsPartner}mo
                      </div>
                      <div className="text-muted-foreground text-xs">Partnership</div>
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="border-t border-border/50 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-sm">{testimonial.company}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">{testimonial.representative}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Success Stats */}
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="font-space-grotesk font-bold text-2xl text-center mb-8">Partnership Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Active Partners</div>
            </div>
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl text-secondary mb-2">42%</div>
              <div className="text-sm text-muted-foreground">Average Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl text-accent mb-2">89K+</div>
              <div className="text-sm text-muted-foreground">Emergency Responses</div>
            </div>
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Partner Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
