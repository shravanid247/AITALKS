import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold gradient-text">AITALKS</h2>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Your AI Friend for Mental Wellness. We're here to provide support, track your emotional journey, and
              connect you with professionals.
            </p>
            <div className="flex mt-6 space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:support@aitalks.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-chat" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Therapy Chat
                </Link>
              </li>
              <li>
                <Link href="/tracker" className="text-muted-foreground hover:text-foreground transition-colors">
                  Emotional Journey
                </Link>
              </li>
              <li>
                <Link href="/connect" className="text-muted-foreground hover:text-foreground transition-colors">
                  Human Therapists
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-muted-foreground hover:text-foreground transition-colors">
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} AITALKS. All rights reserved.</p>
            <p className="text-muted-foreground text-sm mt-4 md:mt-0">Mental health support available 24/7</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
