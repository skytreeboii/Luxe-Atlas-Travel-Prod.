import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Camera, Sparkles } from "lucide-react"

export default function Disney() {
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
              <Link href="/disney" className="transition-colors hover:text-luxury-gold text-luxury-gold">
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
              src="/images/disney-castle.png"
              alt="Disney castle with fireworks"
              className="object-cover w-full h-full brightness-[0.7]"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 bg-background/20 text-white border-white">
                  Disney Vacations
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Where Dreams Come True
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  Experience the magic of Disney with VIP access, Lightning Lane privileges, and exclusive character
                  dining experiences.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Plan Your Disney Magic</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Disney Destinations */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 border-luxury-gold text-luxury-gold">
                  Disney Destinations
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Magical Experiences Worldwide</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  From Walt Disney World to international Disney parks, create unforgettable memories with your family.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Walt Disney World",
                  image: "/images/disney-world.png",
                  description:
                    "Four magical theme parks, luxury resorts, and endless entertainment in Orlando, Florida.",
                  features: ["4 Theme Parks", "Lightning Lane", "Character Dining"],
                  location: "Orlando, Florida",
                },
                {
                  title: "Disneyland Resort",
                  image: "/images/disneyland.png",
                  description:
                    "Where it all began - the original Disney magic in sunny California with two theme parks.",
                  features: ["2 Theme Parks", "VIP Tours", "Premium Hotels"],
                  location: "Anaheim, California",
                },
                {
                  title: "Disney Cruise Line",
                  image: "/images/disney-cruise.png",
                  description: "Sail away with Disney magic on the high seas with character meet-and-greets at sea.",
                  features: ["Character Shows", "Kids Clubs", "Adult Areas"],
                  location: "Various Itineraries",
                },
                {
                  title: "Disneyland Paris",
                  image: "/images/disneyland-paris.png",
                  description: "European Disney magic with unique attractions and French flair in the heart of Europe.",
                  features: ["2 Parks", "European Style", "Unique Attractions"],
                  location: "Paris, France",
                },
                {
                  title: "Tokyo Disney Resort",
                  image: "/images/tokyo-disney.png",
                  description:
                    "Japanese hospitality meets Disney magic with incredible attention to detail and service.",
                  features: ["2 Parks", "Japanese Culture", "Seasonal Events"],
                  location: "Tokyo, Japan",
                },
                {
                  title: "Adventures by Disney",
                  image: "/images/adventures-disney.png",
                  description: "Guided family adventures around the world with Disney's signature storytelling.",
                  features: ["Guided Tours", "Family Adventures", "Cultural Immersion"],
                  location: "Worldwide",
                },
              ].map((destination, index) => (
                <Card key={index} className="luxury-card overflow-hidden">
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{destination.title}</h3>
                      <p className="text-sm text-luxury-gold font-semibold">{destination.location}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{destination.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.features.map((feature, idx) => (
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

        {/* Disney Services */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 border-luxury-gold text-luxury-gold">
                  VIP Services
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Enhanced Disney Experiences</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Skip the lines and maximize your magic with our exclusive Disney planning services and VIP access.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <Card className="luxury-card">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Star className="h-12 w-12 text-luxury-gold" />
                  <h3 className="text-lg font-bold">Lightning Lane</h3>
                  <p className="text-muted-foreground text-sm">
                    Skip the regular lines with premium Lightning Lane access
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Heart className="h-12 w-12 text-luxury-gold" />
                  <h3 className="text-lg font-bold">Character Dining</h3>
                  <p className="text-muted-foreground text-sm">
                    Reserved character dining experiences and meet-and-greets
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Camera className="h-12 w-12 text-luxury-gold" />
                  <h3 className="text-lg font-bold">PhotoPass+</h3>
                  <p className="text-muted-foreground text-sm">Professional photos throughout your Disney vacation</p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Sparkles className="h-12 w-12 text-luxury-gold" />
                  <h3 className="text-lg font-bold">VIP Tours</h3>
                  <p className="text-muted-foreground text-sm">
                    Private guided tours with exclusive behind-the-scenes access
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready for Disney Magic?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Let us plan your perfect Disney vacation with VIP access, character dining, and magical memories.
                </p>
              </div>
              <Button asChild size="lg" className="luxury-button">
                <Link href="/contact">Start Planning Your Disney Trip</Link>
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
