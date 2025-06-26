import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-white py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <Link href="/" className="flex items-center">
              <Image src="/images/rallie-logo-black.png" alt="Rallie Logo" width={120} height={40} className="mr-2" />
            </Link>
            <p className="text-gray-600 mt-4 text-sm">
              Rallie is an AI-powered tennis training system combining smart hardware and adaptive software to help
              players train smarter—anytime, anywhere.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h6 className="font-semibold text-gray-800 mb-4">Quick Links</h6>
            <ul className="text-gray-600">
              <li className="mb-2">
                <Link href="/brand-story" className="hover:text-blue-500 cursor-pointer block">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-blue-500 cursor-pointer block">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/faq" className="hover:text-blue-500 cursor-pointer block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h6 className="font-semibold text-gray-800 mb-4">Resources</h6>
            <ul className="text-gray-600">
              <li className="mb-2">
                <Link href="/blog" className="hover:text-blue-500 cursor-pointer block">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/progress" className="hover:text-blue-500 cursor-pointer block">
                  Progress Updates
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/survey" className="hover:text-blue-500 cursor-pointer block">
                  Beta Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div>
            <h6 className="font-semibold text-gray-800 mb-4">Join Beta Program</h6>
            <p className="text-gray-600 mb-4 text-sm">
              Take our survey to join the beta program and help shape the future of tennis training.
            </p>
            <Link href="/survey" className="block">
              <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer">
                Take Survey to Win $100
              </button>
            </Link>
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
