import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Who We Are?</h1>
          <p className="text-2xl md:text-3xl font-light mb-8">Together, we are shaping a world where dignity is restored, potential is realized, and legacies live on.</p>
        </div>
      </section>

      {/* Organization Description */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              <strong>Sickle Cell Advocacy and Management Initiative (Ace Foundation)</strong> is a non-governmental organisation
              established in 2008 and registered under the Corporate Affairs Commission Incorporated Trustees Act
              (28606).
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
              {/* Vision */}
              <div>
                <h2 className="text-4xl font-bold text-brand-500 mb-6">Our VISION</h2>
                <div className="w-12 h-1 bg-brand-500 mb-6"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Is to have a society where sickle cell disorder is reduced, and people with sickle cell and their
                  families are able to live healthy, positive, and productive lives.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <div className="w-12 h-1 bg-brand-500 mb-6"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To advocate for improved healthcare services, provide comprehensive support, and raise awareness about
                  sickle cell disease while empowering individuals and families affected by this condition through
                  education, community engagement, and policy advocacy.
                </p>
              </div>

              {/* Values */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
                <div className="w-12 h-1 bg-brand-500 mb-6"></div>
                <ul className="text-lg text-gray-700 leading-relaxed space-y-3">
                  <li>
                    <strong>Compassion:</strong> We approach every individual with empathy and understanding
                  </li>
                  <li>
                    <strong>Advocacy:</strong> We fight tirelessly for the rights and needs of our community
                  </li>
                  <li>
                    <strong>Excellence:</strong> We strive for the highest standards in all our programs
                  </li>
                  <li>
                    <strong>Integrity:</strong> We operate with transparency and accountability
                  </li>
                  <li>
                    <strong>Community:</strong> We believe in the power of collective action and support
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:sticky lg:top-8">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Ace Foundation team members working with community members and children in a healthcare setting"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50" id="our-story">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="w-12 h-1 bg-brand-500 mb-12 mx-auto"></div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Founded in 2008, Ace Foundation emerged from a deep recognition of the challenges faced by individuals and
                families living with sickle cell disease in our communities. What started as a small group of passionate
                advocates has grown into a comprehensive organization serving thousands across the region.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Over the past decade and more, we have witnessed firsthand the transformative power of advocacy,
                education, and community support. Our journey has been marked by significant milestones, from
                establishing our first support groups to launching comprehensive healthcare programs and influencing
                policy changes at local and national levels.
              </p>

              <p className="text-lg leading-relaxed">
                Today, Ace Foundation stands as a beacon of hope for the sickle cell community, continuing to break barriers,
                challenge stigma, and create pathways to better health outcomes and quality of life for all those we
                serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white" id="leadership">
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
      <section className="py-20 bg-brand-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Join Our Mission</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our story. Together, we can continue to make a lasting impact in the lives of those affected by
            sickle cell disease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button className="bg-white text-brand-500 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
                Get Involved
              </Button>
            </Link>
            <Link href="/programs">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-500 px-8 py-3 rounded-full text-lg">
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
