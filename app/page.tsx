"use client"

import { useEffect, useState } from "react"

const redacted = [
  "kripswips.xyz",
  "Building cool stuff",
]

export default function Home() {
  const [angle, setAngle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => (prev + 1) % 360)
    }, 10)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center font-mono px-6">

      {/* Spinning loader */}
      <div className="mb-12 relative w-16 h-16">
        <div
          className="absolute inset-0 rounded-full border-4 border-black border-t-transparent"
          style={{ transform: `rotate(${angle}deg)` }}
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-2 tracking-tight">
        site under construction
      </h1>
      <p className="text-sm text-gray-500 mb-12 text-center">
        something is brewing. check back soon. <br /><br />
        <span className="font-bold text-red-500">sooooooooooooooooooooooooooooooooon</span> 
      </p>

    </main>
  )
}