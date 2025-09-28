import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, AlertTriangle, Users, Maximize2 } from "lucide-react"

const alerts = [
  { id: 1, lat: -26.2041, lng: 28.0473, type: "emergency", severity: "high" },
  { id: 2, lat: -26.1367, lng: 28.0835, type: "incident", severity: "medium" },
  { id: 3, lat: -26.1715, lng: 28.0293, type: "safety", severity: "low" },
]

export function MapView() {
  return (
    <Card className="border-border/50">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-space-grotesk">Real-time Alert Map</CardTitle>
        <Button variant="ghost" size="sm">
          <Maximize2 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="relative h-80 bg-muted rounded-lg overflow-hidden">
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-muted to-accent/10" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 h-full">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="border border-border/30" />
              ))}
            </div>
          </div>

          {/* Alert Markers */}
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`absolute w-4 h-4 rounded-full border-2 border-white shadow-lg animate-pulse ${
                alert.severity === "high" ? "bg-accent" : alert.severity === "medium" ? "bg-yellow-500" : "bg-secondary"
              }`}
              style={{
                left: `${20 + alert.id * 25}%`,
                top: `${30 + alert.id * 15}%`,
              }}
            />
          ))}

          {/* Map Controls */}
          <div className="absolute top-4 right-4 space-y-2">
            <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
              +
            </Button>
            <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
              -
            </Button>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 bg-accent rounded-full" />
              <span>High Priority</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span>Medium Priority</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 bg-secondary rounded-full" />
              <span>Low Priority</span>
            </div>
          </div>
        </div>

        {/* Map Stats */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <AlertTriangle className="h-4 w-4" />
              <span>12 Active</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>2.8K Users</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Johannesburg</span>
            </div>
          </div>
          <Badge variant="secondary">Live</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
