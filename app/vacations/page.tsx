import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Vacations() {
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
              <Link href="/vacations" className="transition-colors hover:text-luxury-gold text-luxury-gold">
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
              src="/images/vacation-beach.png"
              alt="Beautiful vacation destination"
              className="object-cover w-full h-full brightness-[0.6]"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 bg-background/20 text-white border-white">
                  All Vacations
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Every Journey Tells a Story
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  From romantic getaways to family adventures, discover the perfect vacation experience tailored to your
                  dreams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vacation Types Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Vacation Types
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl luxury-text-gradient">
                  Find Your Perfect Escape
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you're seeking adventure, relaxation, or cultural immersion, we have the perfect vacation type
                  for you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 md:grid-cols-2">
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img src="/images/beach-paradise.png" alt="Beach paradise" className="object-cover w-full h-full" />
                  </div>
                  <CardTitle className="luxury-text-gradient">Beach & Island Getaways</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Escape to pristine beaches and tropical islands where crystal-clear waters meet white sand shores.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/mountain-adventure.png"
                      alt="Mountain adventure"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="luxury-text-gradient">Mountain & Adventure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Discover breathtaking mountain landscapes and thrilling outdoor adventures in nature's playground.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img src="/images/city-skyline.png" alt="City skyline" className="object-cover w-full h-full" />
                  </div>
                  <CardTitle className="luxury-text-gradient">City & Cultural</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Immerse yourself in vibrant cities rich with history, culture, and world-class dining experiences.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/family-vacation.png"
                      alt="Family vacation"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="luxury-text-gradient">Family Adventures</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create lasting memories with family-friendly destinations and activities for all ages.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/romantic-sunset.png"
                      alt="Romantic sunset"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="luxury-text-gradient">Romantic Escapes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Celebrate love with intimate getaways designed for couples seeking romance and connection.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/adventure-travel.png"
                      alt="Adventure travel"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="luxury-text-gradient">Adventure & Expedition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Push your boundaries with expedition-style travel to remote and extraordinary destinations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Destinations Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Popular Destinations
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl luxury-text-gradient">
                  Trending Travel Destinations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the world's most sought-after destinations, each offering unique experiences and unforgettable
                  memories.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-4 md:grid-cols-2">
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="/images/hawaii-destination.png" alt="Hawaii" className="object-cover w-full h-full" />
                  </div>
                  <CardTitle className="text-lg luxury-text-gradient">Hawaii</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tropical paradise with pristine beaches, volcanic landscapes, and rich Polynesian culture.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="/images/europe-destination.png" alt="Europe" className="object-cover w-full h-full" />
                  </div>
                  <CardTitle className="text-lg luxury-text-gradient">Europe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Historic cities, stunning architecture, world-class cuisine, and diverse cultural experiences.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/caribbean-destination.png"
                      alt="Caribbean"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-lg luxury-text-gradient">Caribbean</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Crystal-clear waters, white sand beaches, and vibrant island culture in tropical paradise.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="/images/mexico-destination.png" alt="Mexico" className="object-cover w-full h-full" />
                  </div>
                  <CardTitle className="text-lg luxury-text-gradient">Mexico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Rich history, beautiful beaches, delicious cuisine, and warm hospitality in diverse landscapes.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/costa-rica-destination.png"
                      alt="Costa Rica"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-lg luxury-text-gradient">Costa Rica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Biodiversity hotspot with rainforests, wildlife, adventure activities, and eco-luxury resorts.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="/images/japan-destination.png" alt="Japan" className="object-cover w-full h-full" />
                  </div>
                  <CardTitle className="text-lg luxury-text-gradient">Japan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ancient traditions meet modern innovation in a land of cherry blossoms and cultural wonders.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/australia-destination.png"
                      alt="Australia"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-lg luxury-text-gradient">Australia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Diverse landscapes from the Outback to the Great Barrier Reef, with unique wildlife and culture.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card">
                <CardHeader>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="/images/iceland-destination.png" alt="Iceland" className="object-cover w-full h-full" />
                  </div>
                  <CardTitle className="text-lg luxury-text-gradient">Iceland</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Land of fire and ice with glaciers, geysers, Northern Lights, and dramatic volcanic landscapes.
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
                  Ready to Plan Your Perfect Vacation?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let our travel experts create a personalized itinerary that matches your dreams and exceeds your
                  expectations.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="luxury-button text-lg px-8 py-6">
                  <Link href="/contact">Start Planning</Link>
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
