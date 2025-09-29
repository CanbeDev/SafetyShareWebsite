"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Bell, Settings, LogOut, User } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function DashboardHeader() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-card border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-secondary" />
              <span className="font-space-grotesk font-bold text-lg">SafetyShare</span>
            </Link>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="hidden sm:block">
              <h1 className="font-semibold text-lg">Johannesburg Security Dashboard</h1>
              <Badge variant="secondary" className="text-xs">
                Live Monitoring - SAST
              </Badge>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full text-xs flex items-center justify-center text-accent-foreground">
                3
              </span>
            </Button>

            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>

            <div className="hidden sm:flex items-center space-x-3 pl-3 border-l border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div className="text-sm">
                  <div className="font-medium">Security Admin</div>
                  <div className="text-muted-foreground text-xs">admin@safetyshare.co.za</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/login">
                  <LogOut className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
