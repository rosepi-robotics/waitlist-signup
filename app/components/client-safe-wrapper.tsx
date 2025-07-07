"use client"

import { Suspense, useState, useEffect, type ReactNode } from "react"

interface ClientSafeWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

export function ClientSafeWrapper({ children, fallback = null }: ClientSafeWrapperProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <>{fallback}</>
  }

  return <Suspense fallback={fallback}>{children}</Suspense>
}
