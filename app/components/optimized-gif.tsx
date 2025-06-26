"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface OptimizedGifProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  placeholder?: string
  autoPlay?: boolean
}

export function OptimizedGif({
  src,
  alt,
  width = 400,
  height = 300,
  className = "",
  placeholder = "/videos/field_test_preview.jpg",
  autoPlay = true,
}: OptimizedGifProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [showGif, setShowGif] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !showGif) {
            setShowGif(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [showGif])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ width, height }}>
      {/* Placeholder/Preview Image */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse">
          <Image
            src={placeholder || "/placeholder.svg"}
            alt={`${alt} preview`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="bg-white bg-opacity-80 rounded-full p-3">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Optimized GIF */}
      {showGif && (
        <img
          ref={imgRef}
          src={isPlaying ? src : placeholder}
          alt={alt}
          width={width}
          height={height}
          className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={handleLoad}
          loading="lazy"
        />
      )}

      {/* Play/Pause Control */}
      {isLoaded && (
        <button
          onClick={togglePlay}
          className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
          aria-label={isPlaying ? "Pause GIF" : "Play GIF"}
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      )}

      {/* Loading indicator */}
      {showGif && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
        </div>
      )}
    </div>
  )
}
