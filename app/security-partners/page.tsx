import { SecurityPartnersHero } from "@/components/security-partners/security-partners-hero"
import { PartnershipBenefits } from "@/components/security-partners/partnership-benefits"
import { HowItWorks } from "@/components/security-partners/how-it-works"
import { PartnerRequirements } from "@/components/security-partners/partner-requirements"
import { PartnerTestimonials } from "@/components/security-partners/partner-testimonials"
import { PartnershipApplication } from "@/components/security-partners/partnership-application"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SecurityPartnersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SecurityPartnersHero />
        <PartnershipBenefits />
        <HowItWorks />
        <PartnerRequirements />
        <PartnerTestimonials />
        <PartnershipApplication />
      </main>
      <Footer />
    </div>
  )
}
