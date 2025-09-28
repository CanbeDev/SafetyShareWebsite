import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, AlertTriangle, Users } from "lucide-react"

export function PhoneMockupSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
              Your Safety Command Center
            </h2>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Experience the intuitive interface that puts powerful safety tools at your fingertips. Monitor real-time
              alerts, track safe routes, and stay connected with your community.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Real-time Location Tracking</h3>
                  <p className="text-sm text-muted-foreground">Precise GPS monitoring with privacy controls</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Emergency Activation</h3>
                  <p className="text-sm text-muted-foreground">One-tap SOS with automatic location sharing</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Community Network</h3>
                  <p className="text-sm text-muted-foreground">Connect with verified safety partners</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-primary rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 bg-muted/30">
                    <span className="text-sm font-medium">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-primary rounded-sm" />
                      <div className="w-4 h-2 bg-primary rounded-sm" />
                      <div className="w-4 h-2 bg-muted rounded-sm" />
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-space-grotesk font-bold text-lg">SafetyShare</h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Safe Zone
                      </Badge>
                    </div>

                    {/* Emergency Button */}
                    <Card className="p-6 text-center bg-accent/5 border-accent/20">
                      <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                        <AlertTriangle className="h-10 w-10 text-accent-foreground" />
                      </div>
                      <p className="font-semibold text-accent">Emergency SOS</p>
                      <p className="text-xs text-muted-foreground">Hold for 3 seconds</p>
                    </Card>

                    {/* Recent Alerts */}
                    <div>
                      <h4 className="font-semibold mb-3">Recent Activity</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <div className="flex-1">
                            <p className="text-sm font-medium">Safe arrival confirmed</p>
                            <p className="text-xs text-muted-foreground">2 minutes ago</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                          <div className="flex-1">
                            <p className="text-sm font-medium">Route optimized</p>
                            <p className="text-xs text-muted-foreground">5 minutes ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                Live
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                24/7 Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
