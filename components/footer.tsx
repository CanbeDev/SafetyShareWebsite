import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Mail, Twitter, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Security", href: "#about" },
    { name: "Pricing", href: "#download" },
    { name: "API", href: "/api" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact", href: "#contact" },
    { name: "Status", href: "/status" },
    { name: "Community", href: "/community" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/safetyshare", icon: Twitter },
  { name: "Facebook", href: "https://facebook.com/safetyshare", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com/safetyshare", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/company/safetyshare", icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-foreground/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-space-grotesk font-bold text-2xl mb-2">Stay Safe, Stay Informed</h3>
              <p className="text-primary-foreground/80">
                Get the latest safety tips, product updates, and community insights delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-primary-foreground/60" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
              <Button variant="secondary" className="bg-secondary hover:bg-secondary/90">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-secondary" />
                <span className="font-space-grotesk font-bold text-2xl">SafetyShare</span>
              </Link>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Building safer communities through technology. Join thousands of users who trust SafetyShare to keep
                them and their loved ones protected.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
              <span>© 2024 SafetyShare. All rights reserved.</span>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
              <span>Made with ❤️ in South Africa 🇿🇦 for safer communities</span>
              <Link href="/dashboard" className="hover:text-primary-foreground transition-colors">
                Security Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
