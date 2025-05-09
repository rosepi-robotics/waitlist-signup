// Type definitions for Google Analytics gtag.js
interface Window {
  gtag: (command: "config" | "event" | "set", targetId: string, config?: Record<string, any> | undefined) => void
}
