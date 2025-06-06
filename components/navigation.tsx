"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  return (
    <nav className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold">
              <span className="text-yellow-300">ACE</span>
              <div className="text-xs text-gray-300 -mt-1">ACADEMIC EXCELLENCE PROGRAM</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Home
              </a>

              {/* About Dropdown */}
              <div className="relative group">
                <button className="flex items-center hover:text-yellow-300 transition-colors">
                  About
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Our Story
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Mission & Vision
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Team
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Testimonials
                    </a>
                  </div>
                </div>
              </div>

              {/* Programs Dropdown */}
              <div className="relative group">
                <button className="flex items-center hover:text-yellow-300 transition-colors">
                  Programs
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Tutoring
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Test Prep
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Summer Programs
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Workshops
                    </a>
                  </div>
                </div>
              </div>

              <a href="#" className="hover:text-yellow-300 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full">
              GET INVOLVED
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-indigo-800">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-indigo-900 text-white border-indigo-800">
                <div className="flex flex-col space-y-6 mt-8">
                  <a href="#" className="text-lg hover:text-yellow-300 transition-colors">
                    Home
                  </a>

                  {/* Mobile About Section */}
                  <div>
                    <button
                      onClick={() => setAboutOpen(!aboutOpen)}
                      className="flex items-center justify-between w-full text-lg hover:text-yellow-300 transition-colors"
                    >
                      About
                      <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                    </button>
                    {aboutOpen && (
                      <div className="mt-2 ml-4 space-y-2">
                        <a href="#" className="block text-gray-300 hover:text-yellow-300">
                          Our Story
                        </a>
                        <a href="#" className="block text-gray-300 hover:text-yellow-300">
                          Mission & Vision
                        </a>
                        <a href="#" className="block text-gray-300 hover:text-yellow-300">
                          Team
                        </a>
                        <a href="#" className="block text-gray-300 hover:text-yellow-300">
                          Testimonials
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Mobile Programs Section */}
                  <div>
                    <button
                      onClick={() => setProgramsOpen(!programsOpen)}
                      className="flex items-center justify-between w-full text-lg hover:text-yellow-300 transition-colors"
                    >
                      Programs
                      <ChevronDown className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {programsOpen && (
                      <div className="mt-2 ml-4 space-y-2">
                        <a href="#" className="block text-gray-300 hover:text-yellow-300">
                          Tutoring
                        </a>
                        <a href="#" className="block text-gray-300 hover:text-yellow-300">
                          Test Prep
                        </a>
                        <a href="#" className="block text-gray-300 hover:text-yellow-300">
                          Summer Programs
                        </a>
                        <a href="#" className="block text-gray-300 hover:text-yellow-300">
                          Workshops
                        </a>
                      </div>
                    )}
                  </div>

                  <a href="#" className="text-lg hover:text-yellow-300 transition-colors">
                    Contact
                  </a>

                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full mt-6">
                    GET INVOLVED
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
