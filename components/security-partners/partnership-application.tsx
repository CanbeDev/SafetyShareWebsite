"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Building, Send, FileText, Shield } from "lucide-react"

export function PartnershipApplication() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    licenseNumber: "",
    insuranceAmount: "",
    yearsInBusiness: "",
    numberOfEmployees: "",
    serviceAreas: "",
    responseCapability: "",
    specializations: "",
    additionalInfo: "",
    hasLicense: false,
    hasInsurance: false,
    hasTrainedPersonnel: false,
    agreesToTerms: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form or show success message
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Building className="mr-2 h-4 w-4" />
            Partnership Application
          </Badge>
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-balance mb-6">
            Apply to Become a SafetyShare Partner
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Complete the application below to join our network of professional security companies. 
            Our team will review your application and contact you within 48 hours.
          </p>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="font-space-grotesk text-2xl flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Security Company Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Details */}
              <div className="space-y-6">
                <h3 className="font-semibold text-lg border-b border-border/50 pb-2">Company Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      placeholder="Your Security Company LLC"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber">Security License Number *</Label>
                    <Input
                      id="licenseNumber"
                      placeholder="SEC-12345-2024"
                      value={formData.licenseNumber}
                      onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                    <Select onValueChange={(value) => handleInputChange("yearsInBusiness", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="11-20">11-20 years</SelectItem>
                        <SelectItem value="20+">20+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="numberOfEmployees">Number of Employees *</Label>
                    <Select onValueChange={(value) => handleInputChange("numberOfEmployees", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 employees</SelectItem>
                        <SelectItem value="6-15">6-15 employees</SelectItem>
                        <SelectItem value="16-50">16-50 employees</SelectItem>
                        <SelectItem value="51-100">51-100 employees</SelectItem>
                        <SelectItem value="100+">100+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="insuranceAmount">Insurance Coverage Amount *</Label>
                  <Input
                    id="insuranceAmount"
                    placeholder="e.g., $2,000,000"
                    value={formData.insuranceAmount}
                    onChange={(e) => handleInputChange("insuranceAmount", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="font-semibold text-lg border-b border-border/50 pb-2">Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Primary Contact Name *</Label>
                    <Input
                      id="contactName"
                      placeholder="John Smith"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange("contactName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="contact@yourcompany.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Business Address *</Label>
                    <Input
                      id="address"
                      placeholder="123 Security Blvd"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      placeholder="New York"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      placeholder="NY"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      placeholder="10001"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Service Information */}
              <div className="space-y-6">
                <h3 className="font-semibold text-lg border-b border-border/50 pb-2">Service Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="serviceAreas">Service Areas *</Label>
                  <Textarea
                    id="serviceAreas"
                    placeholder="List the cities, counties, or regions you serve..."
                    rows={3}
                    value={formData.serviceAreas}
                    onChange={(e) => handleInputChange("serviceAreas", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="responseCapability">Response Capability *</Label>
                  <Select onValueChange={(value) => handleInputChange("responseCapability", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select response capability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24/7">24/7 Response</SelectItem>
                      <SelectItem value="business-hours">Business Hours Only</SelectItem>
                      <SelectItem value="extended">Extended Hours (6 AM - 10 PM)</SelectItem>
                      <SelectItem value="weekends">Weekends Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specializations">Specializations</Label>
                  <Textarea
                    id="specializations"
                    placeholder="List your specializations (e.g., VIP protection, corporate security, emergency response...)"
                    rows={3}
                    value={formData.specializations}
                    onChange={(e) => handleInputChange("specializations", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Any additional information about your company, certifications, or capabilities..."
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  />
                </div>
              </div>

              {/* Requirements Checklist */}
              <div className="space-y-6">
                <h3 className="font-semibold text-lg border-b border-border/50 pb-2">Requirements Checklist</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasLicense"
                      checked={formData.hasLicense}
                      onCheckedChange={(checked) => handleInputChange("hasLicense", checked as boolean)}
                      required
                    />
                    <Label htmlFor="hasLicense" className="text-sm">
                      We have a valid security company license in our operating jurisdiction *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasInsurance"
                      checked={formData.hasInsurance}
                      onCheckedChange={(checked) => handleInputChange("hasInsurance", checked as boolean)}
                      required
                    />
                    <Label htmlFor="hasInsurance" className="text-sm">
                      We maintain minimum $1M general liability insurance *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasTrainedPersonnel"
                      checked={formData.hasTrainedPersonnel}
                      onCheckedChange={(checked) => handleInputChange("hasTrainedPersonnel", checked as boolean)}
                      required
                    />
                    <Label htmlFor="hasTrainedPersonnel" className="text-sm">
                      Our personnel are trained and certified for emergency response *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreesToTerms"
                      checked={formData.agreesToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreesToTerms", checked as boolean)}
                      required
                    />
                    <Label htmlFor="agreesToTerms" className="text-sm">
                      I agree to the SafetyShare Partner Terms and Conditions *
                    </Label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting Application..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Partnership Application
                    </>
                  )}
                </Button>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>We'll review your application within 48 hours</span>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
