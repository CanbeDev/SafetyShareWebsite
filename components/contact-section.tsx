"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, Clock, Shield } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get in Touch
          </Badge>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            Contact Our Safety Team
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Have questions about SafetyShare? Need support? Our dedicated team is here to help you stay safe and
            connected.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-sm text-muted-foreground">Get help via email</p>
                  </div>
                </div>
                <p className="text-sm">support@safetyshare.com</p>
                <p className="text-xs text-muted-foreground mt-1">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Emergency Hotline</h3>
                    <p className="text-sm text-muted-foreground">24/7 emergency support</p>
                  </div>
                </div>
                <p className="text-sm">+27 11 123-SAFE</p>
                <p className="text-xs text-muted-foreground mt-1">Available 24/7</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Headquarters</h3>
                    <p className="text-sm text-muted-foreground">Visit our main office</p>
                  </div>
                </div>
                <p className="text-sm">123 Safety Street</p>
                <p className="text-sm">Johannesburg, 2000</p>
                <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9AM-6PM SAST</p>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="bg-card rounded-lg p-4 border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="font-semibold text-sm">Average Response Time</span>
              </div>
              <div className="text-2xl font-space-grotesk font-bold text-secondary mb-1">Less than 2 hours</div>
              <p className="text-xs text-muted-foreground">For non-emergency inquiries</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What can we help you with?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your inquiry in detail..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Your information is secure and will never be shared with third parties.</span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
