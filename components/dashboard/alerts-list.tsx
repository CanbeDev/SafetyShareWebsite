"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, Clock, MapPin, Filter, Search, Eye, Phone } from "lucide-react"
import { useState, useMemo } from "react"

const alerts = [
  {
    id: "ALT-001",
    type: "Emergency SOS",
    location: "Sandton City, Johannesburg",
    time: "2 minutes ago",
    status: "active",
    severity: "high",
    user: "Thabo M.",
    coordinates: { lat: -26.1076, lng: 28.0567 },
    phone: "+27 82 123 4567"
  },
  {
    id: "ALT-002",
    type: "Incident Report",
    location: "Rosebank Mall, Johannesburg",
    time: "15 minutes ago",
    status: "investigating",
    severity: "medium",
    user: "Community Report",
    coordinates: { lat: -26.1467, lng: 28.0436 },
    phone: "Anonymous"
  },
  {
    id: "ALT-003",
    type: "Safety Alert",
    location: "Melville, Johannesburg",
    time: "1 hour ago",
    status: "resolved",
    severity: "low",
    user: "Nomsa R.",
    coordinates: { lat: -26.1715, lng: 28.0293 },
    phone: "+27 83 987 6543"
  },
  {
    id: "ALT-004",
    type: "Emergency SOS",
    location: "Maboneng Precinct, Johannesburg",
    time: "2 hours ago",
    status: "resolved",
    severity: "high",
    user: "Anonymous",
    coordinates: { lat: -26.2041, lng: 28.0473 },
    phone: "Anonymous"
  },
  {
    id: "ALT-005",
    type: "Crime Alert",
    location: "Hillbrow, Johannesburg",
    time: "3 hours ago",
    status: "investigating",
    severity: "high",
    user: "Community Report",
    coordinates: { lat: -26.1906, lng: 28.0436 },
    phone: "Anonymous"
  },
  {
    id: "ALT-006",
    type: "Safety Check",
    location: "Fourways Mall, Johannesburg",
    time: "4 hours ago",
    status: "resolved",
    severity: "low",
    user: "Lerato K.",
    coordinates: { lat: -26.0112, lng: 28.0024 },
    phone: "+27 84 555 1234"
  }
]

export function AlertsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null)

  const filteredAlerts = useMemo(() => {
    return alerts.filter(alert => {
      const matchesSearch = alert.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           alert.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           alert.user.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesStatus = statusFilter === "all" || alert.status === statusFilter
      
      return matchesSearch && matchesStatus
    })
  }, [searchQuery, statusFilter])

  const handleViewAlert = (alertId: string) => {
    setSelectedAlert(selectedAlert === alertId ? null : alertId)
  }

  const handleCallUser = (phone: string) => {
    if (phone !== "Anonymous") {
      window.open(`tel:${phone}`, '_self')
    }
  }

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-space-grotesk">Johannesburg Alerts</CardTitle>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Live Monitoring
          </Badge>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-2 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search alerts by type, location, or user..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
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
          {filteredAlerts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <AlertTriangle className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No alerts found matching your criteria</p>
            </div>
          ) : (
            filteredAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`border border-border/50 rounded-lg transition-all duration-200 ${
                  selectedAlert === alert.id ? 'bg-muted/50 border-secondary' : 'hover:bg-muted/30'
                }`}
              >
                <div className="flex items-center justify-between p-4">
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
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleViewAlert(alert.id)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      {selectedAlert === alert.id ? 'Hide' : 'View'}
                    </Button>
                    {alert.status === "active" && (
                      <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                        Respond
                      </Button>
                    )}
                    {alert.phone !== "Anonymous" && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleCallUser(alert.phone)}
                        className="text-green-600 border-green-600 hover:bg-green-50"
                      >
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                    )}
                  </div>
                </div>

                {/* Expanded Alert Details */}
                {selectedAlert === alert.id && (
                  <div className="px-4 pb-4 border-t border-border/50 pt-4 bg-muted/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Alert Details</h5>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p><strong>ID:</strong> {alert.id}</p>
                          <p><strong>Coordinates:</strong> {alert.coordinates.lat.toFixed(4)}, {alert.coordinates.lng.toFixed(4)}</p>
                          <p><strong>Severity:</strong> {alert.severity.toUpperCase()}</p>
                          <p><strong>Phone:</strong> {alert.phone}</p>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Actions</h5>
                        <div className="space-y-2">
                          <Button variant="outline" size="sm" className="w-full">
                            View on Map
                          </Button>
                          <Button variant="outline" size="sm" className="w-full">
                            Assign Security Team
                          </Button>
                          <Button variant="outline" size="sm" className="w-full">
                            Send Update
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Showing {filteredAlerts.length} of {alerts.length} alerts
          </p>
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