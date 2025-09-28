import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Building,
  Award
} from "lucide-react"

const partnershipBenefits = [
  {
    icon: Shield,
    title: "Certified Security Companies",
    description: "All our security partners are licensed, insured, and undergo rigorous background checks and training programs."
  },
  {
    icon: MapPin,
    title: "Local Response Teams",
    description: "Strategically positioned response teams ensure rapid deployment to your exact location within minutes."
  },
  {
    icon: Clock,
    title: "Guaranteed Response Times",
    description: "Premium users receive guaranteed response times with automatic escalation if initial response is delayed."
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Our security partners employ certified professionals trained in emergency response and de-escalation techniques."
  }
]

const securityCompanies = [
  {
    name: "SecureGuard Pro",
    location: "National Coverage",
    responseTime: "< 15 min",
    specialties: ["Emergency Response", "Corporate Security", "Event Security"]
  },
  {
    name: "RapidResponse Security",
    location: "Urban Areas",
    responseTime: "< 10 min",
    specialties: ["Mobile Patrols", "Alarm Response", "Personal Protection"]
  },
  {
    name: "Elite Safety Solutions",
    location: "Metro Regions",
    responseTime: "< 12 min",
    specialties: ["VIP Protection", "Threat Assessment", "Emergency Medical"]
  },
  {
    name: "Guardian Security Network",
    location: "Nationwide",
    responseTime: "< 20 min",
    specialties: ["Family Protection", "School Safety", "Community Watch"]
  }
]

export function SecurityPartnership() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Building className="mr-2 h-4 w-4" />
            Security Partnership Network
          </Badge>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            Professional Security Companies at Your Service
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            When you trigger an SOS alert, our network of certified security professionals receives instant notifications 
            and can dispatch trained responders to your location within minutes.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnershipBenefits.map((benefit, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-space-grotesk font-bold text-lg mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-card rounded-2xl p-8 mb-16">
          <h3 className="font-space-grotesk font-bold text-2xl text-center mb-8">How Premium Security Response Works</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full text-accent-foreground font-bold text-lg mb-4">
                1
              </div>
              <h4 className="font-semibold mb-2">SOS Triggered</h4>
              <p className="text-sm text-muted-foreground">You trigger an emergency alert through the SafetyShare app</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full text-secondary-foreground font-bold text-lg mb-4">
                2
              </div>
              <h4 className="font-semibold mb-2">Instant Notification</h4>
              <p className="text-sm text-muted-foreground">Nearest security companies receive immediate alert with your location</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground font-bold text-lg mb-4">
                3
              </div>
              <h4 className="font-semibold mb-2">Response Dispatch</h4>
              <p className="text-sm text-muted-foreground">Trained professionals are dispatched to your exact location</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full text-accent-foreground font-bold text-lg mb-4">
                4
              </div>
              <h4 className="font-semibold mb-2">Professional Help</h4>
              <p className="text-sm text-muted-foreground">Security professionals arrive to assess and handle the situation</p>
            </div>
          </div>
        </div>

        {/* Partner Companies Showcase */}
        <div>
          <h3 className="font-space-grotesk font-bold text-2xl text-center mb-8">Our Trusted Security Partners</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {securityCompanies.map((company, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-space-grotesk font-bold text-lg">{company.name}</h4>
                      <p className="text-sm text-muted-foreground">{company.location}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Verified
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium">{company.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Certified</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {company.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Are you a security company interested in joining our network?
            </p>
            <Button variant="outline" size="lg">
              <Building className="mr-2 h-5 w-5" />
              Partner With SafetyShare
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
