"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import logo from "../../public/images/logo.jpeg"

export default function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`w-full bg-white transition-all duration-300 ${isScrolled ? "fixed top-0 shadow-md z-50" : ""}`}>
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className="px-4 py-2 hover:text-primary">
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 p-4">
                    <li className="hover:bg-muted px-2 py-1 rounded-md">
                      <Link href="/about/mission">Our Mission</Link>
                    </li>
                    <li className="hover:bg-muted px-2 py-1 rounded-md">
                      <Link href="/about/team">Our Team</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 p-4">
                    <li className="hover:bg-muted px-2 py-1 rounded-md">
                      <Link href="/services/medical">Medical Services</Link>
                    </li>
                    <li className="hover:bg-muted px-2 py-1 rounded-md">
                      <Link href="/services/emergency">Emergency Care</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Add other navigation items similarly */}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            {/* <Input type="search" placeholder="Search..." className="w-64" /> */}
            <button >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

