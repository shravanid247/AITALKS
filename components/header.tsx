"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Talk to AI", href: "/ai-chat" },
  { title: "Connect", href: "/connect" },
  { title: "Tracker", href: "/tracker" },
  { title: "Blog", href: "/blog" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl gradient-text">AITALKS</span>
          </Link>

          {/* Desktop navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.slice(0, 6).map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === item.href}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    {navItems.slice(6).map((item) => (
                      <li key={item.title}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              pathname === item.href ? "bg-accent text-accent-foreground" : "",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button asChild size="sm" className="hidden md:flex">
              <Link href="/ai-chat">Talk Now</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="px-2 flex flex-col h-full">
                <div className="flex justify-between items-center">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <span className="font-bold text-xl gradient-text">AITALKS</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Button key={item.title} variant={pathname === item.href ? "secondary" : "ghost"} asChild>
                      <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="justify-start">
                        {item.title}
                      </Link>
                    </Button>
                  ))}
                </nav>
                <div className="mt-auto pb-8">
                  <Button className="w-full" asChild>
                    <Link href="/ai-chat" onClick={() => setIsMenuOpen(false)}>
                      Talk Now
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
