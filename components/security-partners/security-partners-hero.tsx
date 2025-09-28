import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, Handshake, TrendingUp, Users } from "lucide-react"

export function SecurityPartnersHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5 pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary">
            <Building className="mr-2 h-4 w-4" />
            Partnership Program
          </Badge>
          
          <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-balance mb-6">
            Partner with SafetyShare
            <br />
            <span className="text-primary">Expand Your Reach</span>
          </h1>
          
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
            Join our network of certified security companies and access thousands of premium users who need professional 
            emergency response services. Grow your business while making communities safer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Handshake className="mr-2 h-5 w-5" />
              Apply for Partnership
            </Button>
            <Button size="lg" variant="outline">
              <Building className="mr-2 h-5 w-5" />
              Download Partner Kit
            </Button>
          </div>

          {/* Partnership Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="font-space-grotesk font-bold text-3xl text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Average Revenue Increase</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <div className="font-space-grotesk font-bold text-3xl text-secondary mb-2">15K+</div>
              <div className="text-sm text-muted-foreground">Premium Users Served</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Building className="h-8 w-8 text-accent" />
              </div>
              <div className="font-space-grotesk font-bold text-3xl text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Partner Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
