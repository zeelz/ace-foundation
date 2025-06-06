import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Activity, Home, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      {/* <section className="bg-gray-400 py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Our Programs</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Comprehensive initiatives designed to support, heal, and empower the sickle cell community
          </p>
        </div>
      </section> */}

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
          <p className="text-2xl md:text-3xl font-light mb-8">Comprehensive initiatives designed to support, heal, and empower the sickle cell community</p>
        </div>
      </section>

      {/* Program 1: Ace Foundation Wellness Home */}
      <section className="py-20 bg-white" id="wellness-home">
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
                  Ace Foundation is developing a flagship project — the Ace Foundation Wellness Home — an environmentally conscious facility
                  dedicated to physical, mental, and emotional well-being. Tailored to support individuals with sickle
                  cell disease and their families, this inclusive sanctuary will serve as a model for global
                  replication.
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Planned Features Include:</h3>

                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Gender-specific, fully equipped fitness centers designed for individuals with sickle cell
                        disease
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Certified coaches, athletic therapists, psychologists, and nutritionists specializing in sickle
                        cell care
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Aromatherapy and holistic wellness programs for pain management</p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Structured aerobic dance and physical therapy sessions adapted for sickle cell patients
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Sensory-sensitive design with tranquil environments, including live piano music for relaxation
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
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Ace Foundation Wellness Home - A modern, inclusive healthcare facility"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-8 h-8 text-brand-500" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">24/7</p>
                      <p className="text-sm text-gray-600">Care Available</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8 text-brand-500" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">500+</p>
                      <p className="text-sm text-gray-600">Families Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program 2: 44km Challenge */}
      <section className="py-20 bg-gray-50" id="44km-challenge">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="People participating in the 44km Challenge for sickle cell awareness"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>

                {/* Challenge Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-brand-500">44km</p>
                        <p className="text-xs text-gray-600">Distance Goal</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-brand-500">June</p>
                        <p className="text-xs text-gray-600">Challenge Month</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-brand-500">Global</p>
                        <p className="text-xs text-gray-600">Participation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <Activity className="w-8 h-8 text-brand-500" />
                  <span className="text-brand-500 font-semibold text-lg">Global Initiative</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The 44km Challenge</h2>

                <p className="text-xl text-brand-500 font-semibold mb-6">
                  A Global Tribute of Movement for Sickle Cell Awareness
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  In celebration of our community's resilience and the 44 million people worldwide affected by sickle
                  cell disease, Ace Foundation has launched the "44km in June" Global Challenge — a fitness and wellness
                  initiative inviting individuals across the world to walk or run 44 kilometers during the month of
                  June.
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
                        Every step taken honors our commitment to health, perseverance, and raising awareness for sickle
                        cell disease.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-500 text-white p-6 rounded-lg mb-8">
                  <p className="text-lg font-medium mb-4">
                    Join thousands of changemakers worldwide as we move for legacy, wellness, and unity.
                  </p>
                  <Button className="bg-white text-brand-500 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
                    Join the Challenge
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center">
                    <CardContent className="pt-4">
                      <p className="text-2xl font-bold text-brand-500 mb-1">2,500+</p>
                      <p className="text-sm text-gray-600">Global Participants</p>
                    </CardContent>
                  </Card>

                  <Card className="p-4 text-center">
                    <CardContent className="pt-4">
                      <p className="text-2xl font-bold text-brand-500 mb-1">110,000km</p>
                      <p className="text-sm text-gray-600">Total Distance Covered</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Get Involved in Our Programs</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're interested in our wellness facilities or joining our global challenge, there's a place for
            you in the Ace Foundation community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button className="bg-white text-brand-500 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
                Get Involved
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-500 px-8 py-3 rounded-full text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
