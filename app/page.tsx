import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartPulse, MessageSquare, Users, CalendarClock, Globe, ShieldCheck } from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { LanguageSelector } from "@/components/language-selector"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="space-y-8 flex-1">
            <div className="space-y-4 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text">
                Your AI Friend for Mental Wellness
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                AITALKS is here to provide emotional support, track your well-being journey, and connect you with mental
                health professionals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-slideUp">
              <Button size="lg" asChild>
                <Link href="/ai-chat">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Talk to AI Therapist
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/connect">
                  <Users className="mr-2 h-5 w-5" />
                  Connect with a Professional
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 animate-slideUp delay-150">
              <LanguageSelector />
              <p className="text-sm text-muted-foreground">Available in 20+ languages</p>
            </div>
          </div>
          <div className="flex-1 relative min-h-[400px] w-full rounded-2xl overflow-hidden shadow-xl animate-fadeIn">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="AITALKS therapy session visualization"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How AITALKS Can Help You</h2>
            <p className="text-xl text-muted-foreground">
              Our AI-powered platform offers multiple ways to support your mental well-being journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="card-hover">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mb-2" />
                <CardTitle>AI Therapy Chat</CardTitle>
                <CardDescription>
                  Chat with our AI therapist anytime, anywhere. No judgment, complete privacy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Express your feelings freely and receive compassionate responses. Our AI is trained to provide
                  supportive conversations.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/ai-chat">Try Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 2 */}
            <Card className="card-hover">
              <CardHeader>
                <HeartPulse className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Emotional Journey Mapping</CardTitle>
                <CardDescription>Visualize your emotional patterns and track progress over time.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Gain insights into your emotional patterns with our interactive dashboard that helps you understand
                  your mental health trends.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/tracker">View Tracker</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 3 */}
            <Card className="card-hover">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Professional Connections</CardTitle>
                <CardDescription>Connect with licensed therapists when you need human guidance.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Browse profiles of certified mental health professionals and book secure video consultations easily.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/connect">Find Therapists</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 4 */}
            <Card className="card-hover">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Multi-language Support</CardTitle>
                <CardDescription>Communicate in your native language for better expression.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our AI therapist understands and responds in multiple languages, breaking down barriers to mental
                  health support.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/languages">Explore Languages</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 5 */}
            <Card className="card-hover">
              <CardHeader>
                <CalendarClock className="h-12 w-12 text-primary mb-2" />
                <CardTitle>24/7 Availability</CardTitle>
                <CardDescription>Access support whenever you need it, day or night.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Mental health challenges don't follow a schedule. Our AI is available around the clock to provide
                  support when you need it most.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/ai-chat">Chat Anytime</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 6 */}
            <Card className="card-hover">
              <CardHeader>
                <ShieldCheck className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Privacy Assured</CardTitle>
                <CardDescription>Your data is encrypted and your conversations are confidential.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We prioritize your privacy with end-to-end encryption and strict data policies that comply with mental
                  health regulations.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/privacy">Privacy Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting started with AITALKS is simple and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Sign Up</h3>
              <p className="text-muted-foreground">
                Create your account in less than a minute. No credit card required for basic access.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Share Your Feelings</h3>
              <p className="text-muted-foreground">
                Talk to our AI therapist about what's on your mind in your preferred language.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Track & Grow</h3>
              <p className="text-muted-foreground">
                Monitor your emotional journey and connect with professionals if needed.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" asChild>
              <Link href="/signup">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from people on their mental wellness journey with AITALKS
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Wellness Journey Today</h2>
            <p className="text-xl mb-8">
              Take the first step toward better mental health with AI-powered support that's always there for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/ai-chat">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Chatting Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
