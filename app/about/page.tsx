import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Flashlight, HandCoins, Heart, Users } from "lucide-react"
import { CallToAction } from "@/components/call-to-action"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}      
      <section
        className="relative py-32 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 8, 112, 0.8), rgba(15, 8, 112, 0.8)), url('/images/outreach.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
          {/* <p className="text-2xl md:text-3xl font-light mb-8">Together, we are shaping a world where dignity is restored, potential is realized, and legacies live on.</p> */}
        </div>
      </section>

      {/* Organization Description */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              <strong>The ACE Adrian Christopher Okpere Foundation</strong> is a global humanitarian initiative established in honor of the late Adrian Christopher Ehiremen Okpere — a visionary leader, engineer, husband, and father whose life embodied purpose, service, and excellence.</p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-2">Anchored on six core pillars — Faith, Fortitude, Fitness, Family, Fun, and Food — the foundation is committed to uplifting underserved communities, empowering the vulnerable, and fostering inclusion across borders. Adrian’s legacy now lives on through a movement of impact that transcends geographical and cultural boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Vision and Mission */}
            <div className="space-y-12">

              {/* Mission */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <div className="w-12 h-1 bg-brand-500 mb-6"></div>
                <p className="text-lg text-gray-700 leading-relaxed">                  
                  To design and deliver inclusive, sustainable initiatives that:
                </p>
                <ul className="text-lg text-gray-700 leading-relaxed space-y-3 list-disc ml-8">
                  <li>
                    Empower widows to achieve financial independence and social reintegration.
                  </li>
                  <li>
                    Enable special-needs youth to thrive through education and sport.
                  </li>
                  <li>
                    Advance responsible innovation in the oil and energy industry.
                  </li>
                  <li>
                    Promote wellness, dignity, and holistic care in every community we serve.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:sticky lg:top-8">
              <div className="relative">
                <Image
                  src="/images/outreach.jpeg"
                  alt="Ace Foundation team members working with community members and children in a healthcare setting"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50" id="areas-of-impact">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Strategic Areas of Impact</h2>
            <div className="w-12 h-1 bg-brand-500 mb-12 mx-auto"></div>

            <div className="prose prose-lg max-w-none text-gray-700"></div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <HandCoins className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Economic Empowerment for Widows</h4>
                  <p className="text-gray-600">
                  We invest in widows through structured vocational training, access to micro-financing, and entrepreneurship development. By fostering self-reliance and restoring dignity, we break cycles of poverty and dependency, enabling women to rebuild their lives and communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <BookOpen className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Education and Athletic Development for Special Needs Youth (Ages 7–27)</h4>
                  <p className="text-gray-600">
                  The foundation provides educational support, therapeutic services, and professional sports development programs for children and young adults with special needs. Our goal is to promote equity, nurture potential, and champion inclusive pathways in both learning and athletic achievement.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Flashlight className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Research Advancement in the Oil & Energy Sector</h4>
                  <p className="text-gray-600">
                  In tribute to Adrian’s professional legacy in the energy industry, we support innovative research, academic fellowships, and policy-driven projects that promote sustainability, local capacity development, and technological advancement within the oil and gas sector.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="hidden by-zeelz py-20 bg-white" id="leadership">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Leadership</h2>
            <div className="w-12 h-1 bg-brand-500 mb-12 mx-auto"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Leadership cards would go here */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
                <p className="text-brand-500 font-medium mb-3">Executive Director</p>
                <p className="text-gray-600 text-sm">
                  Leading Ace Foundation's strategic vision and community outreach programs with over 15 years of experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Chen</h3>
                <p className="text-brand-500 font-medium mb-3">Program Director</p>
                <p className="text-gray-600 text-sm">
                  Overseeing healthcare initiatives and community support programs across multiple regions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Amara Okafor</h3>
                <p className="text-brand-500 font-medium mb-3">Medical Advisor</p>
                <p className="text-gray-600 text-sm">
                  Providing clinical expertise and guidance for our healthcare and research initiatives.
                </p>
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
