import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Shield, Clock, Ship, Castle, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-sm text-white border-b border-luxury-gold/20">
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
        <section className="w-full pt-28 py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-luxury-beach.png"
              alt="Luxury beach resort"
              className="object-cover w-full h-full brightness-[0.6]"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 bg-background/20 text-white border-white">
                  Independent Advisor of Fora Travel
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Extraordinary Travel Experiences
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  Discover the world's most exclusive destinations with personalized luxury travel planning. From
                  private villas to once-in-a-lifetime adventures.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="luxury-button text-lg px-8 py-6">
                  <Link href="/contact">Start Planning</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Our Services
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl luxury-text-gradient">
                  Curated Travel Experiences
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From luxury escapes to family adventures, we craft personalized journeys that exceed expectations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Link href="/luxury" className="group">
                <Card className="luxury-card h-full transition-all duration-300 group-hover:scale-105 cursor-pointer">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/images/luxury-resort.png"
                        alt="Luxury resort"
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-6 w-6 text-luxury-gold" />
                      <CardTitle className="luxury-text-gradient">Luxury Travel</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Indulge in the world's finest accommodations, exclusive experiences, and personalized service that
                      defines true luxury travel.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/cruises" className="group">
                <Card className="luxury-card h-full transition-all duration-300 group-hover:scale-105 cursor-pointer">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/images/cruise-ship.png"
                        alt="Cruise ship"
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Ship className="h-6 w-6 text-luxury-gold" />
                      <CardTitle className="luxury-text-gradient">Cruise Vacations</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Sail to breathtaking destinations aboard the world's most luxurious cruise ships with expertly
                      planned itineraries.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/disney" className="group">
                <Card className="luxury-card h-full transition-all duration-300 group-hover:scale-105 cursor-pointer">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/images/disney-castle.png"
                        alt="Disney castle"
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Castle className="h-6 w-6 text-luxury-gold" />
                      <CardTitle className="luxury-text-gradient">Disney Experiences</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Create magical memories with expertly planned Disney vacations, from theme parks to cruise
                      adventures worldwide.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/vacations" className="group">
                <Card className="luxury-card h-full transition-all duration-300 group-hover:scale-105 cursor-pointer">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/images/vacation-beach.png"
                        alt="Beach vacation"
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-6 w-6 text-luxury-gold" />
                      <CardTitle className="luxury-text-gradient">All Vacations</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Discover our complete range of vacation options, from romantic getaways to family adventures and
                      everything in between.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Fora Perks Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Exclusive Benefits
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl luxury-text-gradient">
                  Fora Advisor Perks
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enjoy exclusive benefits and VIP treatment as our valued client
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-2 text-center">
                <Star className="h-12 w-12 text-luxury-gold" />
                <h3 className="text-lg font-bold">VIP Treatment</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Users className="h-12 w-12 text-luxury-gold" />
                <h3 className="text-lg font-bold">Exclusive Access</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Shield className="h-12 w-12 text-luxury-gold" />
                <h3 className="text-lg font-bold">Travel Protection</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Clock className="h-12 w-12 text-luxury-gold" />
                <h3 className="text-lg font-bold">24/7 Support</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="px-3 py-1">
                    Why Choose Us
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl luxury-text-gradient">
                    Your Travel Dreams, Our Expertise
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With years of experience and a passion for creating unforgettable journeys, we turn your travel
                    dreams into reality.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-luxury-gold" />
                    <span>Personalized itineraries tailored to your preferences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-luxury-gold" />
                    <span>Exclusive access to luxury properties and experiences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-luxury-gold" />
                    <span>Comprehensive travel protection and support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-luxury-gold" />
                    <span>24/7 assistance during your travels</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="luxury-button">
                    <Link href="/contact">Start Planning</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/beach-paradise.png"
                  alt="Paradise beach"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
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
                  Let's create an unforgettable travel experience tailored just for you. Contact us today to begin
                  planning your dream vacation.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="luxury-button text-lg px-8 py-6">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  <Link href="/about">Learn More</Link>
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
