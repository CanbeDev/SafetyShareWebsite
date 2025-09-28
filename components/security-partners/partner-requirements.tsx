import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Clock, Award, Users, FileText } from "lucide-react"

const requirements = [
  {
    icon: Shield,
    title: "Valid Security License",
    description: "Current and valid security company license in your operating jurisdiction",
    mandatory: true
  },
  {
    icon: Award,
    title: "Insurance Coverage",
    description: "Minimum $1M general liability insurance and appropriate professional coverage",
    mandatory: true
  },
  {
    icon: Users,
    title: "Trained Personnel",
    description: "Certified security professionals with emergency response training",
    mandatory: true
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Ability to respond to emergency calls during your declared operating hours",
    mandatory: true
  },
  {
    icon: FileText,
    title: "Background Checks",
    description: "Complete background verification for all responding personnel",
    mandatory: true
  },
  {
    icon: CheckCircle,
    title: "Response Time Standards",
    description: "Commitment to meet agreed-upon response time standards in your coverage area",
    mandatory: false
  }
]

const certifications = [
  "Licensed Security Company",
  "Emergency Response Training",
  "First Aid/CPR Certification",
  "Professional Liability Insurance",
  "Background Check Clearance",
  "Communication Equipment",
  "GPS-Enabled Vehicles",
  "Incident Documentation System"
]

export function PartnerRequirements() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Partnership Requirements
          </Badge>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            Become a Certified SafetyShare Partner
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            We maintain high standards to ensure the safety and satisfaction of our premium users. 
            Here's what we require from our security partners.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {requirements.map((requirement, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <requirement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-space-grotesk font-bold text-lg">{requirement.title}</h3>
                      {requirement.mandatory && (
                        <Badge variant="destructive" className="text-xs">
                          Required
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{requirement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-space-grotesk font-bold text-2xl mb-6">Certification Checklist</h3>
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="font-space-grotesk font-bold text-2xl mb-6">Application Process</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Submit Application</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete our online application with company details and required documentation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-secondary rounded-full text-secondary-foreground font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Verification Process</h4>
                  <p className="text-sm text-muted-foreground">
                    Our team verifies licenses, insurance, and conducts background checks on personnel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-accent rounded-full text-accent-foreground font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Training & Onboarding</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete SafetyShare platform training and emergency response protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Go Live</h4>
                  <p className="text-sm text-muted-foreground">
                    Start receiving emergency alerts and serving SafetyShare premium users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
