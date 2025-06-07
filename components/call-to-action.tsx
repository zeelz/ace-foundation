import Link from "next/link"
import { Button } from "./ui/button"

export function CallToAction() {
  return (
    
    <section className="py-20 bg-brand-500 text-white">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-4xl font-bold mb-6">Join Our Mission</h3>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
      Together, we are shaping a world where dignity is restored, potential is realized, and legacies live on.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/get-involved#donate">
          <Button className="bg-white text-brand-500 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
            Make a Donation
          </Button>
        </Link>
        <Link href="/get-involved#partner">
          <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-500 px-8 py-3 rounded-full text-lg">
            Partner with Us
          </Button>
        </Link>
      </div>
    </div>
  </section>
  )
}
