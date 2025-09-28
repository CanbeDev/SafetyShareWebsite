import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "College Student",
    content:
      "SafetyShare gave me peace of mind walking home late from the library. The AI route suggestions helped me avoid unsafe areas.",
    rating: 5,
    avatar: "/professional-woman.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Security Manager",
    content:
      "The dashboard integration transformed our response times. We can now coordinate with the community in real-time.",
    rating: 5,
    avatar: "/man-security-professional.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Parent",
    content:
      "Knowing my teenager has SafetyShare installed gives me incredible peace of mind. The family sharing features are excellent.",
    rating: 5,
    avatar: "/woman-parent.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-4">
            Trusted by Our Community
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Join thousands of users who trust SafetyShare to keep them and their loved ones safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Trust Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-card rounded-full border border-border/50">
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-2xl text-secondary">50K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-2xl text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-2xl text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
