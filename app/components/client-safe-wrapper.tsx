"use client"

import type React from "react"

interface ClientSafeWrapperProps {
  children: React.ReactNode
}

const ClientSafeWrapper: React.FC<ClientSafeWrapperProps> = ({ children }) => {
  return <>{children}</>
}

export default ClientSafeWrapper
