import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-orange-200 text-gray-900 overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
      linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
    `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Organic Flowing Shapes with Bright Colors */}
      <div
        className="absolute top-0 left-1/4 w-[700px] h-[500px] blur-3xl animate-slow-pulse opacity-80 transform rotate-12"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 30% 40%, 
      rgba(251, 146, 60, 1.0) 0%, 
      rgba(59, 130, 246, 0.8) 45%, 
      rgba(34, 197, 94, 0.8) 100%)`,
          borderRadius: "60% 40% 30% 70%",
        }}
      />

      <div
        className="absolute top-1/3 right-1/6 w-[600px] h-[400px] blur-3xl opacity-85 transform -rotate-45"
        style={{
          background: `radial-gradient(ellipse 70% 90% at 60% 30%, 
      rgba(59, 130, 246, 1.0) 0%, 
      rgba(251, 146, 60, 1.0) 60%, 
      rgba(168, 85, 247, 0.8) 100%)`,
          borderRadius: "30% 70% 70% 30%",
        }}
      />

      <div
        className="absolute bottom-1/4 left-1/3 w-[550px] h-[450px] blur-3xl animate-slow-pulse opacity-75 transform rotate-45"
        style={{
          background: `radial-gradient(ellipse 85% 65% at 40% 60%, 
      rgba(34, 197, 94, 1.0) 0%, 
      rgba(59, 130, 246, 0.8) 50%, 
      rgba(251, 146, 60, 0.8) 100%)`,
          borderRadius: "40% 60% 60% 40%",
        }}
      />

      <div
        className="absolute bottom-0 right-1/4 w-[480px] h-[380px] blur-3xl opacity-80 transform -rotate-30"
        style={{
          background: `radial-gradient(ellipse 75% 85% at 50% 70%, 
      rgba(251, 146, 60, 1.0) 0%, 
      rgba(34, 197, 94, 0.8) 40%, 
      rgba(59, 130, 246, 0.8) 100%)`,
          borderRadius: "70% 30% 30% 70%",
        }}
      />

      <div
        className="absolute top-1/2 left-0 w-[420px] h-[350px] blur-3xl animate-slow-pulse opacity-70 transform rotate-75"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 20% 50%, 
      rgba(168, 85, 247, 1.0) 0%, 
      rgba(251, 146, 60, 1.0) 80%)`,
          borderRadius: "50% 50% 80% 20%",
        }}
      />

      <div
        className="absolute bottom-1/2 right-0 w-[460px] h-[320px] blur-3xl opacity-75 transform -rotate-60"
        style={{
          background: `radial-gradient(ellipse 80% 95% at 70% 30%, 
      rgba(34, 197, 94, 1.0) 0%, 
      rgba(59, 130, 246, 0.8) 70%)`,
          borderRadius: "20% 80% 40% 60%",
        }}
      />

      <div
        className="absolute top-3/4 left-1/2 w-[380px] h-[280px] blur-3xl animate-slow-pulse opacity-70 transform rotate-15"
        style={{
          background: `radial-gradient(ellipse 65% 85% at 60% 40%, 
      rgba(251, 146, 60, 1.0) 0%, 
      rgba(168, 85, 247, 0.8) 100%)`,
          borderRadius: "80% 20% 60% 40%",
        }}
      />

      <div
        className="absolute top-1/6 right-1/2 w-[340px] h-[260px] blur-3xl opacity-75 transform -rotate-75"
        style={{
          background: `radial-gradient(ellipse 70% 80% at 40% 60%, 
      rgba(59, 130, 246, 0.8) 0%, 
      rgba(34, 197, 94, 1.0) 50%, 
      rgba(251, 146, 60, 0.8) 100%)`,
          borderRadius: "60% 40% 20% 80%",
        }}
      />

      {/* Grid pattern overlay */}
      {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" /> */}

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
