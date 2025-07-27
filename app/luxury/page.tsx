import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Luxury() {
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
              <Link href="/luxury" className="transition-colors hover:text-luxury-gold text-luxury-gold">
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
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/luxury-resort.png"
              alt="Luxury resort"
              className="object-cover w-full h-full brightness-[0.6]"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 bg-background/20 text-white border-white">
                  Luxury Travel
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Indulge in Extraordinary Luxury
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  Experience the world's most exclusive destinations with unparalleled service, privacy, and
                  sophistication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Destinations Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Exclusive Destinations
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl luxury-text-gradient">
                  World's Most Luxurious Escapes
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover handpicked destinations that epitomize luxury, offering unmatched experiences and world-class
                  accommodations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-3 md:grid-cols-2">
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/maldives-villa.png"
                      alt="Maldives overwater villa"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="luxury-text-gradient">Maldives Overwater Villas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Private overwater sanctuaries with direct lagoon access, personal butler service, and world-class
                    spa treatments.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/tuscany-villa.png"
                      alt="Tuscany luxury villa"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="luxury-text-gradient">Tuscany Private Estates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Historic villas surrounded by vineyards, featuring private chefs, wine tastings, and exclusive
                    cultural experiences.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/japanese-ryokan.png"
                      alt="Japanese luxury ryokan"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="luxury-text-gradient">Japanese Luxury Ryokans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Traditional Japanese hospitality meets modern luxury with private hot springs, kaiseki dining, and
                    serene gardens.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/swiss-chalet.png"
                      alt="Swiss luxury chalet"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="luxury-text-gradient">Swiss Alpine Chalets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Exclusive mountain retreats with panoramic Alpine views, private ski access, and Michelin-starred
                    dining.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/african-safari.png"
                      alt="African luxury safari"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="luxury-text-gradient">African Safari Lodges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Luxury tented camps and lodges offering exclusive wildlife encounters, private game drives, and
                    conservation experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Luxury Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Premium Services
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl luxury-text-gradient">
                  White-Glove Service Excellence
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Every detail meticulously planned and executed to ensure your luxury travel experience exceeds all
                  expectations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 md:grid-cols-1">
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="luxury-text-gradient">Private Jet & Helicopter Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Skip the crowds with private aviation services, including chartered jets, helicopters, and luxury
                    ground transportation.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="luxury-text-gradient">Personal Concierge Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Dedicated concierge available 24/7 to handle reservations, special requests, and any needs during
                    your journey.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="luxury-text-gradient">Exclusive Access & Experiences</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Private museum tours, behind-the-scenes access, celebrity chef experiences, and invitation-only
                    events.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="luxury-text-gradient">Luxury Yacht & Villa Rentals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access to the world's most exclusive private yachts, villas, and estates with full staff and
                    amenities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl luxury-text-gradient">
                  Ready for the Ultimate Luxury Experience?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let us craft a bespoke luxury travel experience that surpasses your highest expectations.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="luxury-button text-lg px-8 py-6">
                  <Link href="/contact">Plan My Luxury Trip</Link>
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
