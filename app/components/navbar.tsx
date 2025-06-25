import Link from "next/link"
import Image from "next/image"

export const Navbar = () => {
  return (
    <nav className="bg-black/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/images/rallie-logo-white.png" alt="Rallie logo" width={100} height={24} priority />
            </Link>
          </div>
          <div className="md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link
                href="/brand-story"
                className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link href="/contact" className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar // named export for `{ Navbar }` imports
