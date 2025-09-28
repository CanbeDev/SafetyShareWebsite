import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Smartphone } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-balance mb-6">
            Stay Safe. <span className="text-secondary">Stay Connected.</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
            Join the community-driven safety network that keeps you protected with real-time SOS alerts, AI-powered
            safety insights, and smart route recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Download className="mr-2 h-5 w-5" />
              Download App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard">
                <Smartphone className="mr-2 h-5 w-5" />
                Security Dashboard
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>50K+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>24/7 Emergency Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>AI-Powered Safety</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
