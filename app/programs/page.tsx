import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Activity, Home, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallToAction } from "@/components/call-to-action"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader />

      <section
        className="relative py-32 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 8, 112, 0.8), rgba(15, 8, 112, 0.8)), url('/images/programs.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Programs</h1>
          <p className="text-2xl md:text-3xl font-light mb-8">Comprehensive initiatives designed to wellness and support community</p>
        </div>
      </section>

      {/* Program 1: Ace Foundation Wellness Home */}
      <section className="py-8 md:py-16 bg-white" id="wellness-home">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Home className="w-8 h-8 text-brand-500" />
                  <span className="text-brand-500 font-semibold text-lg">Flagship Program</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Ace Foundation Wellness Home</h2>

                <p className="text-xl text-brand-500 font-semibold mb-6">
                  A Global Model for Inclusive Healing and Growth
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The ACE Foundation is developing a flagship project <strong>The ACE Wellness Home</strong> an environmentally conscious facility dedicated to physical, mental, and emotional well-being. Tailored to support individuals with special needs and vulnerable groups, this inclusive sanctuary will serve as a model for global replication.
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Planned Features Include:</h3>

                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Gender-specific, fully equipped fitness centers.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Certified coaches, athletic therapists, psychologists, and nutritionists.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Aromatherapy and holistic wellness programs for pain management.</p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Structured aerobic dance and physical therapy sessions.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Sensory-sensitive design with tranquil environments, including live piano music for relaxation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-800 font-medium italic">
                    The Ace Foundation Wellness Home exemplifies our mission: to heal, empower, and inspire — through care that is
                    inclusive, innovative, and sustainable.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="shadow-xl">
                <Image
                  src="/images/spa.png"
                  alt="Ace Foundation Wellness Home - A modern, inclusive healthcare facility"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program 2: 44km Challenge */}
      <section className="py-8 md:py-16 bg-gray-50" id="44km-challenge">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 md:gap-12 items-center__">
              {/* Left Column - Image */}
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/adrian.jpeg"
                  alt=""
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full h-auto"
                />               
                
                <div className="grid grid-cols-2 bg-brand-500 text-white p-6 rounded-lg mt-4">
                  <div className="w-max-content">
                    <p className="text- font-medium mb-4">
                      Join thousands of changemakers worldwide as we move for legacy, wellness, and unity.
                    </p>
                    <Link href="https://nikerunclub.sng.link/A6sko/96h7/r_462c6ff850" target="_blank" className="bg-white text-brand-500 hover:bg-gray-100 px-4 py-3 rounded-full font-semibold whitespace-nowrap">
                      Join the Challenge
                    </Link>
                  </div>
                  <div className="ml-auto">
                    <img src="/images/nike-44km-challenge-qr.png" alt="nike 44km challenge QR code" className="h-36 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The 44km Challenge</h2>

                <p className="text-xl text-brand-500 font-semibold mb-6">
                A Global Tribute of Movement
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                In celebration of Adrian’s impactful 44 years, the foundation has launched the <strong>“44km in June” Global Challenge </strong>— a fitness and wellness initiative inviting individuals across the world to walk or run <strong>44 kilometers during the month of June.</strong>
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-brand-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Global Participation</h4>
                      <p className="text-gray-700">
                        The challenge is now live on the Nike Run Club App, enabling global participation and community
                        building.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-brand-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Flexible Timeline</h4>
                      <p className="text-gray-700">
                        Complete your 44km throughout June at your own pace - walk, run, or combine both activities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Heart className="w-6 h-6 text-brand-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Meaningful Impact</h4>
                      <p className="text-gray-700">
                        Every step taken honors our commitment to health, perseverance, and overal wellness.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
