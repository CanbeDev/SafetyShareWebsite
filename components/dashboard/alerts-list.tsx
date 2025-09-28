import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, Clock, MapPin, Filter, Search } from "lucide-react"

const alerts = [
  {
    id: "ALT-001",
    type: "Emergency SOS",
    location: "Central Park, NYC",
    time: "2 minutes ago",
    status: "active",
    severity: "high",
    user: "Sarah M.",
  },
  {
    id: "ALT-002",
    type: "Incident Report",
    location: "Times Square, NYC",
    time: "15 minutes ago",
    status: "investigating",
    severity: "medium",
    user: "Community Report",
  },
  {
    id: "ALT-003",
    type: "Safety Alert",
    location: "Brooklyn Bridge, NYC",
    time: "1 hour ago",
    status: "resolved",
    severity: "low",
    user: "Mike R.",
  },
  {
    id: "ALT-004",
    type: "Emergency SOS",
    location: "Wall Street, NYC",
    time: "2 hours ago",
    status: "resolved",
    severity: "high",
    user: "Anonymous",
  },
]

export function AlertsList() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-space-grotesk">Recent Alerts</CardTitle>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-2 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search alerts..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="investigating">Investigating</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center justify-between p-4 border border-border/50 rounded-lg hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    alert.severity === "high"
                      ? "bg-accent/10"
                      : alert.severity === "medium"
                        ? "bg-yellow-100"
                        : "bg-secondary/10"
                  }`}
                >
                  <AlertTriangle
                    className={`h-4 w-4 ${
                      alert.severity === "high"
                        ? "text-accent"
                        : alert.severity === "medium"
                          ? "text-yellow-600"
                          : "text-secondary"
                    }`}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{alert.type}</h4>
                    <Badge
                      variant={
                        alert.status === "active"
                          ? "destructive"
                          : alert.status === "investigating"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {alert.status}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{alert.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{alert.time}</span>
                    </div>
                    <span>by {alert.user}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  View
                </Button>
                {alert.status === "active" && (
                  <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                    Respond
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground">Showing 4 of 47 alerts</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
