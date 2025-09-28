import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users, MapPin, TrendingUp, Clock, Shield } from "lucide-react"

const stats = [
  {
    title: "Active Alerts",
    value: "12",
    change: "+3 from last hour",
    icon: AlertTriangle,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Premium Users",
    value: "2,847",
    change: "+127 this week",
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Coverage Areas",
    value: "156",
    change: "+5 new zones",
    icon: MapPin,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Response Time",
    value: "2.3s",
    change: "-0.5s improvement",
    icon: Clock,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
]

export function StatsOverview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-space-grotesk font-bold text-2xl">Overview</h2>
        <Badge variant="secondary" className="bg-green-100 text-green-800">
          <Shield className="h-3 w-3 mr-1" />
          All Systems Operational
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-border/50 hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-space-grotesk font-bold mb-1">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
