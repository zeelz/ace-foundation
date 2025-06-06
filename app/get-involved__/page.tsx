import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Handshake, DollarSign, Building, UserPlus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section
        className="relative py-32 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 8, 112, 0.8), rgba(15, 8, 112, 0.8)), url('/images/get-involved.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get Involved</h1>
          <p className="text-2xl md:text-3xl font-light mb-8">Be a Catalyst for Wellness. Hope. Healing.</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Ace Foundation, we are building more than just facilities—we're building safe spaces where individuals with
              sickle cell disease can thrive in dignity and young people can grow with mental strength and support.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-brand-500 mb-4">Our Current Focus:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Establishing and equipping Wellness Homes for sickle cell patients—safe, nurturing spaces where
                      they can access specialized care, community, and dignity.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Promoting wellness and mental health among young people affected by sickle cell disease through
                      outreach, workshops, and safe dialogue platforms.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Ace Foundation community members supporting each other"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-xl font-semibold text-gray-900 mt-12">
              To make this vision a reality, we need people like you.
            </p>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-20 bg-white" id="donate">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl">🌍</span>
                  <h2 className="text-3xl font-bold text-gray-900">Donate</h2>
                </div>

                <p className="text-xl text-brand-500 font-semibold mb-6">Fuel the future of care and healing.</p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Your gift helps us build and run our wellness homes, train specialized care providers, supply
                  medications and nutritional support, and host mental health programs for youth affected by sickle cell
                  disease.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="bg-brand-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      <span className="font-bold text-brand-500">$50</span> can fund specialized meals for a sickle cell
                      patient for a week
                    </p>
                  </div>

                  <div className="bg-brand-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      <span className="font-bold text-brand-500">$125</span> can sponsor therapy sessions for struggling
                      teens with sickle cell disease
                    </p>
                  </div>

                  <div className="bg-brand-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      <span className="font-bold text-brand-500">$500</span> contributes toward wellness facility
                      development and equipment
                    </p>
                  </div>
                </div>

                <div className="bg-brand-500 text-white p-6 rounded-lg mb-6">
                  <p className="text-lg font-semibold mb-4">👉 Every contribution accelerates progress.</p>
                  <Button className="bg-white text-brand-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                    Donate Now →
                  </Button>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Donation impact - helping sickle cell patients"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>

                {/* Impact Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-brand-500">1,200+</p>
                        <p className="text-xs text-gray-600">Patients Supported</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-brand-500">$250K</p>
                        <p className="text-xs text-gray-600">Raised This Year</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 bg-gray-50" id="partner">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Partnership collaboration in healthcare"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>

                {/* Partnership Types */}
                <div className="absolute top-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-sm font-semibold text-brand-500 text-center">
                      50+ Active Partnerships Worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl">🤝</span>
                  <h2 className="text-3xl font-bold text-gray-900">Partner With Us</h2>
                </div>

                <p className="text-xl text-brand-500 font-semibold mb-6">Together, we can do more.</p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We collaborate with organizations that share our commitment to improving lives affected by sickle cell
                  disease. Your partnership helps us scale our impact across borders and generations.
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">We collaborate with:</h3>

                  <div className="grid gap-4">
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                      <Building className="w-6 h-6 text-brand-500" />
                      <span className="text-gray-700">Healthcare institutions and hospitals</span>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                      <Heart className="w-6 h-6 text-brand-500" />
                      <span className="text-gray-700">Mental health professionals and counselors</span>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                      <Users className="w-6 h-6 text-brand-500" />
                      <span className="text-gray-700">Research bodies and academic institutions</span>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                      <Handshake className="w-6 h-6 text-brand-500" />
                      <span className="text-gray-700">Faith-based and nonprofit organizations</span>
                    </div>
                  </div>
                </div>

                <Button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-semibold">
                  Become a Partner →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-white" id="volunteer">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center">
                    <UserPlus className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl">🌱</span>
                  <h2 className="text-3xl font-bold text-gray-900">Volunteer</h2>
                </div>

                <p className="text-xl text-brand-500 font-semibold mb-6">Serve with your heart, hands, and skill.</p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Join a growing network of compassionate individuals bringing light and support to communities affected
                  by sickle cell disease. Whether you're a healthcare worker, mental health advocate, youth leader, or
                  simply passionate about making a difference—there's a place for you here.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <Card className="p-4">
                    <CardContent className="pt-4">
                      <Heart className="w-8 h-8 text-brand-500 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Healthcare Support</h4>
                      <p className="text-sm text-gray-600">
                        Assist with patient care, wellness programs, and medical outreach
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-4">
                    <CardContent className="pt-4">
                      <Users className="w-8 h-8 text-brand-500 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Community Outreach</h4>
                      <p className="text-sm text-gray-600">
                        Help with awareness campaigns, education, and community events
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-4">
                    <CardContent className="pt-4">
                      <Building className="w-8 h-8 text-brand-500 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Administrative Support</h4>
                      <p className="text-sm text-gray-600">
                        Assist with operations, fundraising, and organizational development
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-4">
                    <CardContent className="pt-4">
                      <Handshake className="w-8 h-8 text-brand-500 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Mentorship</h4>
                      <p className="text-sm text-gray-600">
                        Guide and support young people affected by sickle cell disease
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-semibold">
                  Join Our Global Volunteer Network →
                </Button>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Volunteers working together in the community"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>

                {/* Volunteer Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-xl font-bold text-brand-500">500+</p>
                        <p className="text-xs text-gray-600">Active Volunteers</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-brand-500">25</p>
                        <p className="text-xs text-gray-600">Countries</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-brand-500">10K+</p>
                        <p className="text-xs text-gray-600">Hours Served</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-brand-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">This is your invitation.</h3>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            Ace Foundation welcomes global citizens, partners, and institutions who share our passion for impact.
          </p>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Your support powers transformative change.</p>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto mb-8">
            <p className="text-2xl font-semibold mb-4">
              Together, let's build a future where no person with sickle cell disease suffers alone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-brand-500 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
                Contact Us
              </Button>
            </Link>
            <Link href="/programs">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-500 px-8 py-3 rounded-full text-lg font-semibold">
                Learn More
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
