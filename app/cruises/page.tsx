import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ship, Anchor, Compass, Waves } from "lucide-react"

export default function Cruises() {
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
              <Link href="/cruises" className="transition-colors hover:text-luxury-gold text-luxury-gold">
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
              src="/images/cruise-ship.png"
              alt="Luxury cruise ship at sunset"
              className="object-cover w-full h-full brightness-[0.7]"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 bg-background/20 text-white border-white">
                  Cruise Vacations
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Sail Into Luxury
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  Discover the world's most beautiful destinations aboard premium cruise ships with world-class
                  amenities and exceptional service.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Find Your Perfect Cruise</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cruise Destinations */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 border-luxury-gold text-luxury-gold">
                  Popular Itineraries
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Extraordinary Cruise Experiences</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  From Mediterranean adventures to Arctic expeditions, discover the perfect cruise for your dream
                  vacation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Mediterranean Splendor",
                  image: "/images/mediterranean-cruise.png",
                  description:
                    "Explore ancient cities, pristine beaches, and world-class cuisine across the Mediterranean.",
                  features: ["7-14 Days", "Multiple Ports", "Cultural Excursions"],
                  duration: "7-14 Days",
                },
                {
                  title: "Alaska Glacier Bay",
                  image: "/images/alaska-glacier.png",
                  description:
                    "Witness massive glaciers, wildlife, and breathtaking landscapes in America's last frontier.",
                  features: ["7-10 Days", "Glacier Viewing", "Wildlife Spotting"],
                  duration: "7-10 Days",
                },
                {
                  title: "Caribbean Paradise",
                  image: "/images/caribbean-islands.png",
                  description: "Island hop through crystal-clear waters with pristine beaches and tropical adventures.",
                  features: ["7-14 Days", "Private Beaches", "Water Sports"],
                  duration: "7-14 Days",
                },
                {
                  title: "Northern Lights",
                  image: "/images/northern-lights.png",
                  description: "Chase the Aurora Borealis through Norwegian fjords and Arctic landscapes.",
                  features: ["10-14 Days", "Aurora Viewing", "Fjord Cruising"],
                  duration: "10-14 Days",
                },
                {
                  title: "Asian Cultural Journey",
                  image: "/images/asian-cultural.png",
                  description: "Discover ancient temples, modern cities, and diverse cultures across Asia.",
                  features: ["12-21 Days", "Cultural Sites", "Culinary Tours"],
                  duration: "12-21 Days",
                },
                {
                  title: "Transatlantic Crossing",
                  image: "/images/transatlantic.png",
                  description: "Experience the golden age of cruising on a classic ocean crossing voyage.",
                  features: ["7-14 Days", "Sea Days", "Formal Nights"],
                  duration: "7-14 Days",
                },
              ].map((cruise, index) => (
                <Card key={index} className="luxury-card overflow-hidden">
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img
                      src={cruise.image || "/placeholder.svg"}
                      alt={cruise.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{cruise.title}</h3>
                      <p className="text-sm text-luxury-gold font-semibold">{cruise.duration}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{cruise.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cruise.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cruise Lines */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 border-luxury-gold text-luxury-gold">
                  Premium Partners
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">World-Class Cruise Lines</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We partner with the world's finest cruise lines to ensure exceptional experiences at sea.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <Card className="luxury-card">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Ship className="h-12 w-12 text-luxury-gold" />
                  <h3 className="text-lg font-bold">Luxury Lines</h3>
                  <p className="text-muted-foreground text-sm">Premium ships with exceptional service and amenities</p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Anchor className="h-12 w-12 text-luxury-gold" />
                  <h3 className="text-lg font-bold">Expedition</h3>
                  <p className="text-muted-foreground text-sm">Adventure cruises to remote and exotic destinations</p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Compass className="h-12 w-12 text-luxury-gold" />
                  <h3 className="text-lg font-bold">River Cruises</h3>
                  <p className="text-muted-foreground text-sm">Intimate journeys through Europe's historic waterways</p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Waves className="h-12 w-12 text-luxury-gold" />
                  <h3 className="text-lg font-bold">Ocean Cruises</h3>
                  <p className="text-muted-foreground text-sm">Classic ocean voyages with modern luxury amenities</p>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Set Sail?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Let us help you find the perfect cruise experience with exclusive amenities and personalized service.
                </p>
              </div>
              <Button asChild size="lg" className="luxury-button">
                <Link href="/contact">Book Your Cruise</Link>
              </Button>
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
                Crafting extraordinary travel experiences for discerning travelers since 2008.
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
