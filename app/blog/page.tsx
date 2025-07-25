import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "ai-tennis-coach",
      title: "What a Real AI Tennis Coach Should Look Like",
      excerpt: "Beyond just launching balls: The case for a machine that actually thinks.",
      date: "2025-06-15",
      readTime: "6 min read",
      author: "Sophie Chen",
      authorRole: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=400&text=AI+Tennis+Coach",
      slug: "ai-tennis-coach",
    },
    {
      id: "field-test-success",
      title: "First Field Test Success: Mavio in Action",
      excerpt: "Our breakthrough moment testing topspin and backspin generation in real court conditions.",
      date: "2025-06-23",
      readTime: "4 min read",
      author: "Sophie Chen",
      authorRole: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=400&text=Field+Test",
      slug: "field-test-success",
    },
    {
      id: "team-growth",
      title: "Building the Dream Team: New Engineers Join Mavio",
      excerpt: "Introducing our new co-founder and hardware engineer as we scale towards production.",
      date: "2025-06-20",
      readTime: "3 min read",
      author: "Sophie Chen",
      authorRole: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=400&text=Team+Growth",
      slug: "team-growth",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-orange-200 text-gray-900">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-gray-900 mb-4">MAVIO BLOG</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, updates, and stories from the future of tennis training.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center text-gray-500 mb-4 space-x-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-orange-500" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-blue-500" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-light text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                      {index === 0 ? (
                        <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                          {post.title}
                        </Link>
                      ) : (
                        post.title
                      )}
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.authorRole}</p>
                        </div>
                      </div>

                      {index === 0 ? (
                        <Link href={`/blog/${post.slug}`}>
                          <Button
                            variant="outline"
                            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg bg-transparent"
                          >
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant="outline"
                          disabled
                          className="border-2 border-gray-200 text-gray-400 font-medium rounded-lg cursor-not-allowed bg-transparent"
                        >
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-sm text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get the latest updates on Mavio's development, new blog posts, and exclusive insights delivered to your
              inbox.
            </p>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-8 py-3">
                Join Our Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
