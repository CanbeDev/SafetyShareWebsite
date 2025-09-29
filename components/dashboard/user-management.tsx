"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MoreHorizontal, Shield, Crown, MapPin } from "lucide-react"
import { useState, useMemo } from "react"

const users = [
  {
    id: 1,
    name: "Thabo Mthembu",
    email: "thabo.mthembu@email.com",
    plan: "Premium",
    status: "Active",
    joinDate: "Jan 2024",
    alerts: 3,
    avatar: "/professional-woman.png",
    location: "Sandton, Johannesburg"
  },
  {
    id: 2,
    name: "Nomsa Dlamini",
    email: "nomsa.dlamini@email.com",
    plan: "Enterprise",
    status: "Active",
    joinDate: "Dec 2023",
    alerts: 12,
    avatar: "/man-security-professional.jpg",
    location: "Rosebank, Johannesburg"
  },
  {
    id: 3,
    name: "Lerato Khumalo",
    email: "lerato.khumalo@email.com",
    plan: "Premium",
    status: "Active",
    joinDate: "Feb 2024",
    alerts: 1,
    avatar: "/woman-parent.jpg",
    location: "Melville, Johannesburg"
  },
  {
    id: 4,
    name: "Sipho Nkosi",
    email: "sipho.nkosi@email.com",
    plan: "Basic",
    status: "Inactive",
    joinDate: "Mar 2024",
    alerts: 0,
    avatar: null,
    location: "Fourways, Johannesburg"
  },
  {
    id: 5,
    name: "Zanele Mokoena",
    email: "zanele.mokoena@email.com",
    plan: "Premium",
    status: "Active",
    joinDate: "Apr 2024",
    alerts: 5,
    avatar: null,
    location: "Maboneng, Johannesburg"
  },
]

export function UserManagement() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-space-grotesk">Johannesburg Premium Users</CardTitle>
          <Button className="bg-secondary hover:bg-secondary/90">Add User</Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search users by name, email, or location..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredUsers.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No users found matching your search</p>
            </div>
          ) : (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 border border-border/50 rounded-lg hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar || undefined} alt={user.name} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{user.name}</h4>
                      {user.plan === "Enterprise" && <Crown className="h-4 w-4 text-yellow-500" />}
                      {user.plan === "Premium" && <Shield className="h-4 w-4 text-secondary" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{user.location}</span>
                    </div>
                  </div>
                </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-sm font-medium">{user.plan}</div>
                  <div className="text-xs text-muted-foreground">Plan</div>
                </div>

                <div className="text-center">
                  <div className="text-sm font-medium">{user.alerts}</div>
                  <div className="text-xs text-muted-foreground">Alerts</div>
                </div>

                <div className="text-center">
                  <Badge variant={user.status === "Active" ? "secondary" : "outline"} className="text-xs">
                    {user.status}
                  </Badge>
                </div>

                <div className="text-center">
                  <div className="text-sm font-medium">{user.joinDate}</div>
                  <div className="text-xs text-muted-foreground">Joined</div>
                </div>

                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
            ))
          )}
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground">Showing {filteredUsers.length} of {users.length} premium users</p>
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
