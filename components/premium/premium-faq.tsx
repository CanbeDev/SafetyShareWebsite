"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, HelpCircle, Search } from "lucide-react"

const faqs = [
  {
    question: "How quickly do security companies respond to premium alerts?",
    answer: "Premium users receive guaranteed response times of under 30 seconds for alert processing and professional security dispatch within 2-15 minutes depending on location. Our network of 500+ security partners ensures rapid response coverage nationwide."
  },
  {
    question: "What's the difference between free and premium SafetyShare?",
    answer: "Free users get basic SOS alerts to emergency contacts. Premium users get professional security company response, 24/7 monitoring, advanced AI safety features, family sharing, priority processing, and dedicated support. It's the difference between basic alerts and professional protection."
  },
  {
    question: "Can I cancel my premium subscription anytime?",
    answer: "Yes, you can cancel your premium subscription at any time with no cancellation fees. Your premium features will remain active until the end of your current billing period. We also offer a 30-day money-back guarantee for new subscribers."
  },
  {
    question: "How do you verify security companies in your network?",
    answer: "All security partners undergo rigorous vetting including license verification, insurance confirmation, background checks, and training certification. We regularly audit our partners and maintain strict quality standards to ensure professional service."
  },
  {
    question: "What happens if I'm in an area without security coverage?",
    answer: "Our network covers 95% of populated areas. In areas without direct security coverage, we escalate to local emergency services while maintaining our monitoring and coordination services. We're continuously expanding our partner network."
  },
  {
    question: "Is my location data secure with premium monitoring?",
    answer: "Absolutely. Location data is encrypted end-to-end and only shared with authorized security partners during active emergencies. We maintain bank-level security standards and never sell or share your personal information with third parties."
  },
  {
    question: "Can I add family members to my premium plan?",
    answer: "Yes! Our Family plan covers unlimited family members with shared location tracking, coordinated emergency responses, and parental controls. Each family member gets their own app access while sharing premium benefits."
  },
  {
    question: "What if I accidentally trigger an SOS alert?",
    answer: "You have a 10-second countdown to cancel accidental alerts. If not cancelled, our monitoring center will contact you first to verify the emergency before dispatching security. This prevents false alarms while ensuring real emergencies get immediate response."
  }
]

export function PremiumFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) return faqs
    
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto mb-8">
            Get answers to common questions about SafetyShare Premium and our professional security services.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No FAQs found matching your search.</p>
            </div>
          ) : (
            filteredFAQs.map((faq, index) => (
            <Card key={index} className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full p-6 justify-between text-left h-auto hover:bg-muted/50"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-base pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </Button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border/50 pt-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            ))
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <h3 className="font-space-grotesk font-bold text-xl mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our premium support team is available 24/7 to help you understand how SafetyShare Premium can protect you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Contact Premium Support
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
