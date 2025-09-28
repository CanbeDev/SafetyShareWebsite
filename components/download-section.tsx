import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Smartphone, QrCode, Star, Apple } from "lucide-react"

export function DownloadSection() {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get Started Today
          </Badge>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            Download SafetyShare Now
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Join thousands of users who trust SafetyShare to keep them safe. Available on all major platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Download Options */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
                <Apple className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>

              <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                <div className="mr-2 h-5 w-5 bg-green-500 rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm" />
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>

            {/* App Features */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">What's Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-sm">Emergency SOS Button</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">AI Route Planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Community Alerts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-sm">Family Sharing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Biometric Security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">24/7 Monitoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ratings */}
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.9 on App Store</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.8 on Google Play</span>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex justify-center">
            <Card className="p-8 text-center border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <div className="grid grid-cols-8 gap-1">
                    {[...Array(64)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-sm ${Math.random() > 0.5 ? "bg-primary" : "bg-transparent"}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <QrCode className="h-5 w-5 text-secondary" />
                  <h3 className="font-space-grotesk font-bold text-lg">Instant Download</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  Scan with your phone camera to download SafetyShare instantly
                </p>

                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Smartphone className="h-3 w-3" />
                    <span>iOS & Android</span>
                  </div>
                  <div className="w-px h-3 bg-border" />
                  <div className="flex items-center gap-1">
                    <Download className="h-3 w-3" />
                    <span>Free Download</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Join the safety revolution. Download now and get your first month of premium features free.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            <Download className="mr-2 h-5 w-5" />
            Get SafetyShare Free
          </Button>
        </div>
      </div>
    </section>
  )
}
