import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/images/logo-ace-foundation.png" className="h-24" alt="Ace Foundation Logo" />
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-white">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/get-involved#donate" className="hover:text-white">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/get-involved#partner" className="hover:text-white">
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved#volunteer" className="hover:text-white">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-gray-400 space-y-2">
              <p>Email: hello@acefoundation.org</p>
              <p>Phone: +234 (0) 123-4567890</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ace Foundation - Advancing Legacy. Transforming Lives. Building Inclusive Futures.
 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
