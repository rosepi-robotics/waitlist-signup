import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <Link href="/" className="flex items-center">
              <Image src="/images/rallie-logo-black.png" alt="Rallie Logo" width={120} height={40} className="mr-2" />
            </Link>
            <p className="text-gray-600 mt-4 text-sm">
              Rallie is a platform connecting students with shared interests. Join clubs, attend events, and build your
              community.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h6 className="font-semibold text-gray-800 mb-4">Quick Links</h6>
            <ul className="text-gray-600">
              <li className="mb-2">
                <Link href="/about" className="hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-blue-500">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/terms" className="hover:text-blue-500">
                  Terms of Service
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy" className="hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h6 className="font-semibold text-gray-800 mb-4">Resources</h6>
            <ul className="text-gray-600">
              <li className="mb-2">
                <Link href="/faq" className="hover:text-blue-500">
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="hover:text-blue-500">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/support" className="hover:text-blue-500">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div>
            <h6 className="font-semibold text-gray-800 mb-4">Subscribe</h6>
            <p className="text-gray-600 mb-4 text-sm">
              Subscribe to our newsletter to stay updated on the latest news and events.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Rallie. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
