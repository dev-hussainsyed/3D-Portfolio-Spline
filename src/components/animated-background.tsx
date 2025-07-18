"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

interface CodeLine {
  id: number
  text: string
  x: number
  y: number
  speed: number
  opacity: number
}

const codeSnippets = [
  "const developer = 'passionate';",
  "function createInnovation() {",
  "import { skills } from 'expertise';",
  "class SoftwareEngineer {",
  "const projects = await fetch();",
  "export default Portfolio;",
  "npm install success",
  "git commit -m 'amazing'",
  "docker build -t future .",
  "kubectl apply -f dreams.yaml",
  "SELECT * FROM opportunities;",
  "machine_learning.predict()",
  "neural_network.train(data)",
  "React.createElement('magic')",
  "tensorflow.keras.Sequential()",
]

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [codeLines, setCodeLines] = useState<CodeLine[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    // Initialize code lines
    const initialCodeLines: CodeLine[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.3 + 0.05,
    }))

    setParticles(initialParticles)
    setCodeLines(initialCodeLines)

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY,
          x: particle.x > window.innerWidth ? 0 : particle.x < 0 ? window.innerWidth : particle.x,
          y: particle.y > window.innerHeight ? 0 : particle.y < 0 ? window.innerHeight : particle.y,
        })),
      )

      setCodeLines((prev) =>
        prev.map((line) => ({
          ...line,
          y: line.y + line.speed,
          y: line.y > window.innerHeight ? -50 : line.y,
          text: line.y > window.innerHeight ? codeSnippets[Math.floor(Math.random() * codeSnippets.length)] : line.text,
        })),
      )
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-20">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-500 dark:bg-blue-400"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Floating Code Lines */}
      {codeLines.map((line) => (
        <div
          key={line.id}
          className="absolute text-xs font-mono text-gray-600 dark:text-gray-400 whitespace-nowrap"
          style={{
            left: `${line.x}px`,
            top: `${line.y}px`,
            opacity: line.opacity,
            transform: `rotate(${Math.sin(line.y * 0.01) * 5}deg)`,
          }}
        >
          {line.text}
        </div>
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-blue-300 dark:border-blue-700 rotate-45 opacity-20 animate-pulse" />
      <div className="absolute bottom-40 right-32 w-24 h-24 border border-purple-300 dark:border-purple-700 rotate-12 opacity-20 animate-pulse" />
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-green-300 dark:border-green-700 rotate-45 opacity-20 animate-pulse" />
    </div>
  )
}
