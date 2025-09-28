import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, MapPin, Car, CheckCircle } from "lucide-react"

const steps = [
  {
    step: 1,
    icon: AlertTriangle,
    title: "Emergency Alert Received",
    description: "When a premium user triggers an SOS, all certified security partners in the area receive an instant notification with location details and emergency context."
  },
  {
    step: 2,
    icon: MapPin,
    title: "Location & Assessment",
    description: "Your team receives precise GPS coordinates, user profile information, and any additional context provided by the user or our AI system."
  },
  {
    step: 3,
    icon: Car,
    title: "Response Dispatch",
    description: "Deploy your nearest available team to the location. Our system tracks response times and provides real-time updates to the user and their emergency contacts."
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Resolution & Payment",
    description: "Once the situation is resolved, document the response in our system. Automatic payment processing ensures you receive compensation quickly and transparently."
  }
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Partnership Process
          </Badge>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            How SafetyShare Partnership Works
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Our streamlined process ensures efficient emergency response coordination 
            while maximizing revenue opportunities for security partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300 relative">
              <CardContent className="p-6 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mt-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-space-grotesk font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Features */}
        <div className="bg-card rounded-2xl p-8">
          <h3 className="font-space-grotesk font-bold text-2xl text-center mb-8">
            Seamless Integration Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-4">
                <AlertTriangle className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Real-time Alerts</h4>
              <p className="text-sm text-muted-foreground">
                Instant push notifications to your mobile devices and dispatch systems
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">GPS Integration</h4>
              <p className="text-sm text-muted-foreground">
                Precise location data with turn-by-turn navigation to emergency sites
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Automated Billing</h4>
              <p className="text-sm text-muted-foreground">
                Transparent payment processing with detailed response documentation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
