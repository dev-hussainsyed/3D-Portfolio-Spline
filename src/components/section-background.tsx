"use client"

interface SectionBackgroundProps {
  variant?: "dots" | "lines" | "grid" | "circuit"
  className?: string
}

export default function SectionBackground({ variant = "dots", className = "" }: SectionBackgroundProps) {
  const patterns = {
    dots: {
      backgroundImage: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    },
    lines: {
      backgroundImage: `
        linear-gradient(45deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
        linear-gradient(-45deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
      `,
      backgroundSize: "30px 30px",
    },
    grid: {
      backgroundImage: `
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    },
    circuit: {
      backgroundImage: `
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        radial-gradient(circle at 20px 20px, rgba(59, 130, 246, 0.2) 2px, transparent 2px)
      `,
      backgroundSize: "40px 40px, 40px 40px, 40px 40px",
    },
  }

  return (
    <div
      className={`absolute inset-0 opacity-30 dark:opacity-10 pointer-events-none ${className}`}
      style={patterns[variant]}
    />
  )
}
