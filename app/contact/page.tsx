import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Have questions about Rallie? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-700">hello@rallie.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Follow Us</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Instagram
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Twitter
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Facebook
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Join Our Community</h3>
                  <p className="text-gray-700">
                    Join our waitlist to be the first to know about Rallie updates and get early access.
                  </p>
                  <a
                    href="/#waitlist"
                    className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Join Waitlist
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
