"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { SheetTrigger, SheetContent, Sheet } from "./ui/sheet"

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  return (
    <header className="bg-brand-500 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/images/logo-ace-foundation.png" alt="Ace Foundation Logo"  className="h-16"/>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[#e6ce85]">
            <Link href="/" className="hover:text-[#e6ce85]/50">
              Home
            </Link>
            <div className="relative group py-2">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-[#e6ce85]/50">
                <span>About</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6ce85]/50">
                  About Us
                </Link>
                <Link href="/about#areas-of-impact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6ce85]/50">
                  Areas of Impact
                </Link>
              </div>
            </div>
            <div className="relative group py-2">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-[#e6ce85]/50">
                <span>Programs</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/programs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6ce85]/50">
                  All Programs
                </Link>
                <Link
                  href="/programs#wellness-home"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6ce85]/50"
                >
                  Ace Foundation Wellness Home
                </Link>
                <Link
                  href="/programs#44km-challenge"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6ce85]/50"
                >
                  44km Challenge
                </Link>
              </div>
            </div>
            <Link href="/contact" className="hover:text-[#e6ce85]/50">
              Contact
            </Link>
            <Link href="/get-involved">
              <Button className="bg-[#e6ce85] text-brand-500 hover:bg-transparent border border-[#e6ce85] hover:text-[#e6ce85] px-6 py-2 rounded-full">
                GET INVOLVED
              </Button>
            </Link>
          </nav>

            {/* Mobile menu button */}
          <nav className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-brand-500">
                  <Menu size={20} className="h-8 w-8 text-[#e6ce85]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-brand-500 text-white border-brand-500">
                <div className="flex flex-col space-y-6 mt-8">
                  <a href="/" className="text-lg hover:text-[#e6ce85] transition-colors">
                    Home
                  </a>

                  {/* Mobile About Section */}
                  <div>
                    <button
                      onClick={() => setAboutOpen(!aboutOpen)}
                      className="flex items-center justify-between w-full text-lg hover:text-[#e6ce85] transition-colors"
                    >
                      About
                      <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                    </button>
                    {aboutOpen && (
                      <div className="mt-2 ml-4 space-y-2">
                        <a href="/about" className="block text-gray-300 hover:text-[#e6ce85]">
                          About Us
                        </a>
                        <a href="/about#areas-of-impact" className="block text-gray-300 hover:text-[#e6ce85]">
                          Areas of Impact
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Mobile Programs Section */}
                  <div>
                    <button
                      onClick={() => setProgramsOpen(!programsOpen)}
                      className="flex items-center justify-between w-full text-lg hover:text-[#e6ce85] transition-colors"
                    >
                      Programs
                      <ChevronDown className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {programsOpen && (
                      <div className="mt-2 ml-4 space-y-2">
                        <a href="/programs" className="block text-gray-300 hover:text-[#e6ce85]">
                          All Programs
                        </a>
                        <a href="/programs#wellness-home" className="block text-gray-300 hover:text-[#e6ce85]">
                          Ace Foundation Wellness Home
                        </a>
                        <a href="/programs#44km-challenge" className="block text-gray-300 hover:text-[#e6ce85]">
                          44km Challenge
                        </a>
                      </div>
                    )}
                  </div>

                  <a href="/contact" className="text-lg hover:text-[#e6ce85] transition-colors">
                    Contact
                  </a>
                  <Link href="/get-involved">
                    <Button className="bg-[#e6ce85] hover:bg-[#e6ce85]/50 text-brand-500 font-semibold px-6 py-2 rounded-full mt-6">
                      GET INVOLVED
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
