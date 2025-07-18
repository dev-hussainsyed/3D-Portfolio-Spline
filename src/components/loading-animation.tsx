"use client"

import { useState, useEffect } from "react"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(progressInterval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="text-center relative z-10">
        {/* Animated Logo/Icon */}
        <div className="relative mb-8">
          <div className="w-24 h-24 border-4 border-blue-200 dark:border-gray-700 rounded-lg animate-pulse mb-4 mx-auto flex items-center justify-center">
            <div className="text-4xl">⚡</div>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full animate-ping"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Initializing Portfolio</h2>
        <p className="text-gray-600 dark:text-gray-300 font-mono text-sm">
          {progress < 30 && "Loading components..."}
          {progress >= 30 && progress < 60 && "Compiling skills..."}
          {progress >= 60 && progress < 90 && "Rendering projects..."}
          {progress >= 90 && "Almost ready!"}
        </p>

        {/* Tech Elements */}
        <div className="flex justify-center space-x-4 mt-6 opacity-50">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  )
}
