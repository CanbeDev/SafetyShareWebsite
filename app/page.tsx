import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PhoneMockupSection } from "@/components/phone-mockup-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ComingSoonSection } from "@/components/coming-soon-section"
import { DownloadSection } from "@/components/download-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PhoneMockupSection />
        <TestimonialsSection />
        <AboutSection />
        <ComingSoonSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
