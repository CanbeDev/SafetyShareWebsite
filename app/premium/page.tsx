import { PremiumHero } from "@/components/premium/premium-hero"
import { PricingPlans } from "@/components/premium/pricing-plans"
import { PremiumFeatures } from "@/components/premium/premium-features"
import { SecurityPartnership } from "@/components/premium/security-partnership"
import { PremiumTestimonials } from "@/components/premium/premium-testimonials"
import { PremiumFAQ } from "@/components/premium/premium-faq"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PremiumPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PremiumHero />
        <PricingPlans />
        <PremiumFeatures />
        <SecurityPartnership />
        <PremiumTestimonials />
        <PremiumFAQ />
      </main>
      <Footer />
    </div>
  )
}
