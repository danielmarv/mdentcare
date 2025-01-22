"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Search } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import logo from "../../public/images/log.png"

const treatments = [
  { title: "COSMETIC DENTISTRY", href: "/treatments/cosmetic-dentistry" },
  { title: "ROOT CANAL TREATMENT", href: "/treatments/root-canal" },
  { title: "DENTAL IMPLANT", href: "/treatments/dental-implant" },
  { title: "FULL MOUTH REHABILITATION", href: "/treatments/full-mouth-rehabilitation" },
]

export default function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn("w-full bg-white transition-all duration-300", isScrolled && "fixed top-0 shadow-md z-50")}>
      {/* Top Bar */}
      <div className="hidden md:block bg-indigo-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span>Equatoria Mall Shop No4, Kampala, Uganda.</span>
              <span>info@identalcare.ug</span>
            </div>
            <div>
              <span>+256 701 999907</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Image
              src={logo || "/placeholder.svg"}
              alt="Logo"
              width={150}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Link href="/" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    HOME
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    ABOUT
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">TREATMENT</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-64 p-4 bg-white rounded-lg shadow-lg">
                      {treatments.map((treatment) => (
                        <li key={treatment.href}>
                          <Link
                            href={treatment.href}
                            className="block px-4 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                          >
                            {treatment.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    CONTACT
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    BLOG
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden lg:inline-flex bg-primary text-white hover:bg-primary/90">
              <Link href="/book-appointment">BOOK APPOINTMENT</Link>
            </Button>

            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    HOME
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ABOUT
                  </Link>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="treatments">
                      <AccordionTrigger className="px-4 text-sm font-medium">TREATMENT</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 ml-4">
                          {treatments.map((treatment) => (
                            <Link
                              key={treatment.href}
                              href={treatment.href}
                              className="block px-4 py-2 text-sm hover:bg-muted rounded-md"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {treatment.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Link
                    href="/contact"
                    className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CONTACT
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    BLOG
                  </Link>

                  <div className="px-4 pt-4">
                    <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
                      <Link href="/book-appointment" onClick={() => setIsMobileMenuOpen(false)}>
                        BOOK APPOINTMENT
                      </Link>
                    </Button>
                  </div>

                  <div className="px-4 pt-6 space-y-4">
                    <div className="space-y-2 text-sm">
                      <h3 className="font-semibold">Contact Info</h3>
                      <p>Equatoria Mall Shop No4, Kampala, Uganda.</p>
                      <p>info@identalcare.ug</p>
                      <p>+256 701 999907</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

