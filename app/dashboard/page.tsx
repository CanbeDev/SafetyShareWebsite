import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { MapView } from "@/components/dashboard/map-view"
import { AlertsList } from "@/components/dashboard/alerts-list"
import { UserManagement } from "@/components/dashboard/user-management"
import { StatsOverview } from "@/components/dashboard/stats-overview"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <StatsOverview />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MapView />
            <AlertsList />
          </div>

          <UserManagement />
        </div>
      </main>
    </div>
  )
}
