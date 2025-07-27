"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelType: "",
    destination: "",
    budget: "",
    travelers: "",
    timeframe: "",
    message: "",
  })

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://formspree.io/f/movlebzd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          travelType: formData.travelType,
          destination: formData.destination,
          budget: formData.budget,
          travelers: formData.travelers,
          timeframe: formData.timeframe,
          message: formData.message,
          _subject: `New Travel Inquiry from ${formData.firstName} ${formData.lastName}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          travelType: "",
          destination: "",
          budget: "",
          travelers: "",
          timeframe: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b border-luxury-gold/20 glass-effect">
        <div className="container flex h-20 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-8 flex items-center space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-full-U31Nd5AUR6sTnzx9kkpmx5XMB2CKto.png"
                alt="Luxe Atlas Travel"
                className="h-12 w-12"
              />
              <span className="hidden font-bold text-xl luxury-text-gradient sm:inline-block">Luxe Atlas Travel</span>
            </Link>
            <nav className="flex items-center space-x-8 text-sm font-medium">
              <Link href="/luxury" className="transition-colors hover:text-luxury-gold">
                Luxury Travel
              </Link>
              <Link href="/cruises" className="transition-colors hover:text-luxury-gold">
                Cruises
              </Link>
              <Link href="/disney" className="transition-colors hover:text-luxury-gold">
                Disney
              </Link>
              <Link href="/vacations" className="transition-colors hover:text-luxury-gold">
                Vacations
              </Link>
              <Link href="/about" className="transition-colors hover:text-luxury-gold">
                About Us
              </Link>
              <Link href="/contact" className="transition-colors hover:text-luxury-gold text-luxury-gold">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button asChild className="hidden md:inline-flex luxury-button">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/contact-hero.png"
              alt="Contact us"
              className="object-cover w-full h-full brightness-[0.6]"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 bg-background/20 text-white border-white">
                  Contact Us
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Let's Plan Your Perfect Trip
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  Ready to start your next adventure? Get in touch with our travel experts today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-2xl luxury-text-gradient">Start Planning Your Journey</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we aim to get back to you within 24 hours to discuss your travel dreams.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {submitStatus === "success" && (
                    <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800 dark:text-green-200">
                        Thank you for your inquiry! We aim to get back to you within 24 hours to start planning your
                        perfect trip.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert className="border-red-500 bg-red-50 dark:bg-red-950">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800 dark:text-red-200">
                        There was an error sending your message. Please try again or call us directly at (267) 225-3423.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="travelType">Type of Travel *</Label>
                      <Select
                        name="travelType"
                        required
                        value={formData.travelType}
                        onValueChange={(value) => handleInputChange("travelType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select travel type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="luxury">Luxury Travel</SelectItem>
                          <SelectItem value="cruise">Cruise Vacation</SelectItem>
                          <SelectItem value="disney">Disney Vacation</SelectItem>
                          <SelectItem value="family">Family Vacation</SelectItem>
                          <SelectItem value="romantic">Romantic Getaway</SelectItem>
                          <SelectItem value="adventure">Adventure Travel</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="destination">Preferred Destination</Label>
                        <Input
                          id="destination"
                          name="destination"
                          placeholder="e.g., Maldives, Europe, Caribbean"
                          value={formData.destination}
                          onChange={(e) => handleInputChange("destination", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select
                          name="budget"
                          value={formData.budget}
                          onValueChange={(value) => handleInputChange("budget", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="over-50k">Over $50,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="travelers">Number of Travelers</Label>
                        <Select
                          name="travelers"
                          value={formData.travelers}
                          onValueChange={(value) => handleInputChange("travelers", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select travelers" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Traveler</SelectItem>
                            <SelectItem value="2">2 Travelers</SelectItem>
                            <SelectItem value="3-4">3-4 Travelers</SelectItem>
                            <SelectItem value="5-8">5-8 Travelers</SelectItem>
                            <SelectItem value="9+">9+ Travelers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeframe">Travel Timeframe</Label>
                        <Select
                          name="timeframe"
                          value={formData.timeframe}
                          onValueChange={(value) => handleInputChange("timeframe", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="When do you want to travel?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-3months">1-3 months</SelectItem>
                            <SelectItem value="3-6months">3-6 months</SelectItem>
                            <SelectItem value="6-12months">6-12 months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your dream trip *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Share any specific requests, interests, or questions you have about your upcoming travel..."
                        className="min-h-[120px]"
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="w-full luxury-button text-lg py-6" disabled={isSubmitting}>
                      {isSubmitting ? "Sending Your Request..." : "Send My Travel Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="luxury-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6 luxury-text-gradient">Get In Touch</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-luxury-gold mt-1" />
                        <div>
                          <h4 className="font-semibold">Phone</h4>
                          <p className="text-muted-foreground">Call us for immediate assistance</p>
                          <p className="text-luxury-gold font-medium">(267) 225-3423</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-luxury-gold mt-1" />
                        <div>
                          <h4 className="font-semibold">Email</h4>
                          <p className="text-muted-foreground">Send us your travel inquiries</p>
                          <p className="text-luxury-gold font-medium">sawyer.roman@fora.travel</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-luxury-gold mt-1" />
                        <div>
                          <h4 className="font-semibold">Business Hours</h4>
                          <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 4:00 PM EST</p>
                          <p className="text-muted-foreground">Saturday & Sunday: Closed</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-luxury-gold mt-1" />
                        <div>
                          <h4 className="font-semibold">Emergency Support</h4>
                          <p className="text-muted-foreground">24/7 support while you travel</p>
                          <p className="text-luxury-gold font-medium">Available to all clients</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6 luxury-text-gradient">Why Work With Us?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">Personalized service tailored to your preferences</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">Exclusive access to luxury properties and experiences</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">Expert knowledge of destinations worldwide</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">24/7 support during your travels</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">No fees - we're paid by our travel partners</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 luxury-text-gradient">Quick Response Promise</h3>
                    <p className="text-muted-foreground mb-4">
                      We understand that planning your dream vacation is exciting! That's why we aim to respond to all
                      inquiries within 24 hours during business days.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      For urgent travel needs, please call us directly at (267) 225-3423.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-luxury-gold/20 bg-card/50 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-full-U31Nd5AUR6sTnzx9kkpmx5XMB2CKto.png"
                  alt="Luxe Atlas Travel"
                  className="h-8 w-8"
                />
                <span className="font-bold luxury-text-gradient">Luxe Atlas Travel</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Crafting extraordinary travel experiences for discerning travelers.
              </p>
              <p className="text-xs text-luxury-gold">Independent Advisor of Fora Travel</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-luxury-gold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/luxury" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Luxury Travel
                  </Link>
                </li>
                <li>
                  <Link href="/cruises" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Cruise Vacations
                  </Link>
                </li>
                <li>
                  <Link href="/disney" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Disney Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/vacations" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    All Vacations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-luxury-gold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-luxury-gold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-luxury-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground mb-4 md:mb-0">© 2025 Luxe Atlas Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
