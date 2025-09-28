"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, Crown, Shield, Users, Zap } from "lucide-react"

const plans = {
  monthly: [
    {
      name: "Free Plan",
      price: 0,
      description: "Basic safety features for everyone",
      icon: Shield,
      color: "muted",
      features: [
        "Basic SOS alerts",
        "Emergency contact notifications",
        "Location sharing with contacts",
        "Community safety reports",
        "Basic route planning",
        "Standard response time"
      ],
      popular: false,
      isFree: true
    },
    {
      name: "Premium Individual",
      price: 179.99,
      description: "Professional safety with security company response",
      icon: Shield,
      color: "secondary",
      features: [
        "Everything in Free Plan",
        "Professional security response",
        "Priority SOS alerts (< 30 seconds)",
        "Advanced AI safety insights",
        "Family sharing (up to 4 members)",
        "24/7 monitoring",
        "Biometric authentication",
        "Smart route optimization",
        "Emergency contact integration"
      ],
      popular: true
    },
    {
      name: "Security Company",
      price: 899.99,
      description: "Partner with us to serve premium users",
      icon: Crown,
      color: "primary",
      features: [
        "Access to premium user alerts",
        "Real-time emergency notifications",
        "Advanced dispatch dashboard",
        "Revenue sharing program",
        "Certified partner status",
        "Marketing support",
        "Training and certification",
        "24/7 technical support"
      ],
      popular: false,
      isPartner: true
    }
  ],
  annual: [
    {
      name: "Free Plan",
      price: 0,
      description: "Basic safety features for everyone",
      icon: Shield,
      color: "muted",
      features: [
        "Basic SOS alerts",
        "Emergency contact notifications",
        "Location sharing with contacts",
        "Community safety reports",
        "Basic route planning",
        "Standard response time"
      ],
      popular: false,
      isFree: true
    },
    {
      name: "Premium Individual",
      price: 1799.99,
      originalPrice: 2159.88,
      description: "Professional safety with security company response",
      icon: Shield,
      color: "secondary",
      features: [
        "Everything in Free Plan",
        "Professional security response",
        "Priority SOS alerts (< 30 seconds)",
        "Advanced AI safety insights",
        "Family sharing (up to 4 members)",
        "24/7 monitoring",
        "Biometric authentication",
        "Smart route optimization",
        "Emergency contact integration"
      ],
      popular: true
    },
    {
      name: "Security Company",
      price: 8999.99,
      originalPrice: 10799.88,
      description: "Partner with us to serve premium users",
      icon: Crown,
      color: "primary",
      features: [
        "Access to premium user alerts",
        "Real-time emergency notifications",
        "Advanced dispatch dashboard",
        "Revenue sharing program",
        "Certified partner status",
        "Marketing support",
        "Training and certification",
        "24/7 technical support"
      ],
      popular: false,
      isPartner: true
    }
  ]
}

export function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(false)
  const currentPlans = isAnnual ? plans.annual : plans.monthly

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-4">
            Choose Your Protection Level
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto mb-8">
            Professional security response, advanced AI features, and comprehensive family protection.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-secondary"
            />
            <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Annual
            </span>
            <Badge variant="secondary" className="ml-2">
              Save 20%
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-secondary shadow-lg scale-105' 
                  : 'border-border/50 hover:border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-secondary text-secondary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${plan.color}/10 rounded-full mb-4 mx-auto`}>
                  <plan.icon className={`h-8 w-8 text-${plan.color}`} />
                </div>
                <CardTitle className="font-space-grotesk text-2xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    {plan.price === 0 ? (
                      <span className="text-4xl font-space-grotesk font-bold">Free</span>
                    ) : (
                      <>
                        <span className="text-4xl font-space-grotesk font-bold">R{plan.price}</span>
                        <span className="text-muted-foreground">/{isAnnual ? 'year' : 'month'}</span>
                      </>
                    )}
                  </div>
                  {isAnnual && 'originalPrice' in plan && (plan as any).originalPrice ? (
                    <div className="text-sm text-muted-foreground">
                      <span className="line-through">R{(plan as any).originalPrice}</span>
                      <span className="text-secondary ml-2">Save R{((plan as any).originalPrice - plan.price).toFixed(2)}</span>
                    </div>
                  ) : null}
                </div>

                <Button 
                  className={`w-full ${
                    plan.price === 0 
                      ? 'bg-muted hover:bg-muted/90 text-muted-foreground'
                      : plan.popular 
                      ? 'bg-secondary hover:bg-secondary/90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  size="lg"
                  variant={plan.price === 0 ? "outline" : "default"}
                >
                  {plan.price === 0 ? (
                    "Download Free App"
                  ) : (plan as any).isPartner ? (
                    <>
                      <Crown className="mr-2 h-5 w-5" />
                      Apply for Partnership
                    </>
                  ) : plan.popular ? (
                    <>
                      <Shield className="mr-2 h-5 w-5" />
                      Start Premium Trial
                    </>
                  ) : (
                    "Get Started"
                  )}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border/50">
            <Shield className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}
