export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white text-center max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
        <p className="text-xl mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-black bg-white hover:bg-white/90 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  )
}
