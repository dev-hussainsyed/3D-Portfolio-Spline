"use client"

import { useEffect, useState } from "react"

interface GeometricShape {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  rotationSpeed: number
  opacity: number
  type: "triangle" | "square" | "hexagon" | "circle"
}

export default function TechGeometry() {
  const [shapes, setShapes] = useState<GeometricShape[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const initialShapes: GeometricShape[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 60 + 20,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.3 + 0.1,
      type: ["triangle", "square", "hexagon", "circle"][Math.floor(Math.random() * 4)] as GeometricShape["type"],
    }))

    setShapes(initialShapes)

    const animateShapes = () => {
      setShapes((prev) =>
        prev.map((shape) => ({
          ...shape,
          rotation: shape.rotation + shape.rotationSpeed,
        })),
      )
    }

    const interval = setInterval(animateShapes, 50)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const renderShape = (shape: GeometricShape) => {
    const baseClasses = "absolute border-2 border-blue-400 dark:border-blue-600"
    const style = {
      left: `${shape.x}px`,
      top: `${shape.y}px`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: shape.opacity,
      transform: `rotate(${shape.rotation}deg)`,
      transition: "transform 0.1s linear",
    }

    switch (shape.type) {
      case "triangle":
        return (
          <div
            key={shape.id}
            className={`${baseClasses} border-transparent border-b-blue-400 dark:border-b-blue-600`}
            style={{
              ...style,
              borderBottomWidth: `${shape.size}px`,
              borderLeftWidth: `${shape.size / 2}px`,
              borderRightWidth: `${shape.size / 2}px`,
              width: 0,
              height: 0,
            }}
          />
        )
      case "square":
        return <div key={shape.id} className={baseClasses} style={style} />
      case "hexagon":
        return (
          <div
            key={shape.id}
            className="absolute"
            style={{
              left: `${shape.x}px`,
              top: `${shape.y}px`,
              opacity: shape.opacity,
              transform: `rotate(${shape.rotation}deg)`,
            }}
          >
            <div
              className="border-2 border-blue-400 dark:border-blue-600"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size * 0.866}px`,
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
          </div>
        )
      case "circle":
        return <div key={shape.id} className={`${baseClasses} rounded-full`} style={style} />
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-15 z-0">
      {shapes.map(renderShape)}
    </div>
  )
}
