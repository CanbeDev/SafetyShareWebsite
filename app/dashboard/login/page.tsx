import { LoginForm } from "@/components/dashboard/login-form"
import { Shield } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <Shield className="h-8 w-8 text-secondary" />
            <span className="font-space-grotesk font-bold text-2xl text-foreground">SafetyShare</span>
          </Link>
          <h1 className="font-space-grotesk font-bold text-2xl mb-2">Security Dashboard</h1>
          <p className="text-muted-foreground">Access your security management portal</p>
        </div>

        <LoginForm />

        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to SafetyShare
          </Link>
        </div>
      </div>
    </div>
  )
}
