import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section
        className="min-h-[44rem] flex flex-col justify-center gap-20 py-0 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 8, 112, 0.8), rgba(15, 8, 112, 0.8)), url('/images/programs.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 ">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Ace Foundation</h1>
          <p className="text-2xl md:text-3xl font-light mb-8">Advancing Legacy. Transforming Lives. Building Inclusive Futures.</p>
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 space-x-4">
          <Link href="/get-involved#donate">
            <Button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-full flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>DONATE NOW</span>
            </Button>
          </Link>
          <Link href="/get-involved#volunteer">
            <Button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-full flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>CLICK TO VOLUNTEER</span>
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">

            <p className="text-xl text-gray-600 mb-12">
            The <span className="font-semibold"> ACE Adrian Christopher Okpere Foundation</span> is a global humanitarian initiative established in honor of the late Adrian Christopher Ehiremen Okpere — a visionary leader, engineer, husband, and father whose life embodied purpose, service, and excellence.
            </p>


            <h3 className="text-4xl font-bold text-gray-900 mb-12">Our Strategic Areas of Impact</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Heart className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Economic Empowerment for Widows</h4>
                  <p className="hidden text-gray-600">
                  We invest in widows through structured vocational training, access to micro-financing, and entrepreneurship development. By fostering self-reliance and restoring dignity, we break cycles of poverty and dependency, enabling women to rebuild their lives and communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <BookOpen className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Education and Athletic Development for Special Needs Youth (Ages 7–27)</h4>
                  <p className="hidden text-gray-600">
                  The foundation provides educational support, therapeutic services, and professional sports development programs for children and young adults with special needs. Our goal is to promote equity, nurture potential, and champion inclusive pathways in both learning and athletic achievement.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Research Advancement in the Oil & Energy Sector</h4>
                  <p className="hidden text-gray-600">
                  In tribute to Adrian’s professional legacy in the energy industry, we support innovative research, academic fellowships, and policy-driven projects that promote sustainability, local capacity development, and technological advancement within the oil and gas sector.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Link href="/get-involved#volunteer">
                <Button className="bg-brand-500 border-2 border-white text-white hover:bg-transparent border border-brand-500 hover:text-brand-500 px-8 py-3 rounded-full text-lg">
                  Learn more about Our Areas of Impact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Image Section */}
      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-4">

          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-12 __max-w-6xl mx-auto text-center">
            <div className="md:h-[28rem] overflow-hidden rounded-xl">
              <img src="/images/outreach.jpeg" alt="" className="" />
            </div>            
            <div className="md:h-[28rem] overflow-hidden rounded-xl">
              <img src="/images/outreach2.jpeg" alt="" className="" />

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
