import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Clock, Award, Heart, Globe } from "lucide-react"

export default function About() {
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
              <Link href="/about" className="transition-colors hover:text-luxury-gold text-luxury-gold">
                About Us
              </Link>
              <Link href="/contact" className="transition-colors hover:text-luxury-gold">
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
              src="/images/travel-agency-team.png"
              alt="Travel agency team"
              className="object-cover w-full h-full brightness-[0.6]"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 bg-background/20 text-white border-white">
                  About Us
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Trusted Travel Partners
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  We've been crafting extraordinary travel experiences for discerning travelers who seek the
                  exceptional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="px-3 py-1">
                    Our Story
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl luxury-text-gradient">
                    Passion for Extraordinary Travel
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    At Luxe Atlas Travel, we believe that travel is more than just visiting new places—it's about
                    creating transformative experiences that enrich your life and broaden your perspective.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    As an Independent Advisor of Fora Travel, we combine the personal touch of boutique service with the
                    resources and expertise of a leading travel network. Our commitment to excellence means every detail
                    of your journey is carefully curated to exceed your expectations.
                  </p>
                  <p className="text-muted-foreground">
                    Whether you're seeking a romantic escape, a family adventure, or a luxury retreat, we craft
                    personalized itineraries that reflect your unique interests and travel style.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/luxury-resort.png"
                  alt="Luxury travel experience"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Our Values
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl luxury-text-gradient">What Drives Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our core values guide every interaction and ensure that your travel experience is nothing short of
                  exceptional.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 md:grid-cols-2">
              <Card className="luxury-card">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-6 w-6 text-luxury-gold" />
                    <CardTitle className="luxury-text-gradient">Personalized Service</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every client is unique, and we tailor each travel experience to match your individual preferences,
                    interests, and dreams.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-luxury-gold" />
                    <CardTitle className="luxury-text-gradient">Excellence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We maintain the highest standards in everything we do, from destination selection to accommodation
                    choices and service delivery.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-luxury-gold" />
                    <CardTitle className="luxury-text-gradient">Trust & Reliability</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your peace of mind is our priority. We provide comprehensive support and protection throughout your
                    entire journey.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-6 w-6 text-luxury-gold" />
                    <CardTitle className="luxury-text-gradient">Global Expertise</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our extensive network and destination knowledge ensure authentic, insider access to the world's most
                    remarkable places.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-luxury-gold" />
                    <CardTitle className="luxury-text-gradient">Relationship Focus</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We build lasting relationships with our clients, becoming your trusted travel advisor for all future
                    adventures.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-luxury-gold" />
                    <CardTitle className="luxury-text-gradient">24/7 Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Travel doesn't follow business hours, and neither do we. Our support is available whenever you need
                    it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Why Choose Us
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl luxury-text-gradient">
                  The Luxe Atlas Difference
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the advantages of working with a dedicated travel professional who puts your dreams first.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 md:grid-cols-1">
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="luxury-text-gradient">Exclusive Access & Perks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    As a Fora advisor, we provide access to exclusive amenities, room upgrades, resort credits, and VIP
                    treatment that you can't get booking online.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="luxury-text-gradient">No Additional Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our services come at no extra cost to you. We're compensated by our travel partners, so you get
                    expert planning without additional fees.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="luxury-text-gradient">Time-Saving Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Skip the hours of research and planning. We handle all the details, from flights and accommodations
                    to activities and dining reservations.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="luxury-text-gradient">Travel Protection & Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    When things don't go as planned, we're here to help. Our support extends throughout your entire
                    journey, ensuring peace of mind.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl luxury-text-gradient">
                  Ready to Start Your Journey?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's create an unforgettable travel experience that exceeds your expectations and creates memories to
                  last a lifetime.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="luxury-button text-lg px-8 py-6">
                  <Link href="/contact">Start Planning</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  <Link href="/vacations">Explore Options</Link>
                </Button>
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
