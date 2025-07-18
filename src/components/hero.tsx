"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Spline from "@splinetool/react-spline"

import AnimatedBackground from "./animated-background"
import MatrixRain from "./matrix-rain"
import TechGeometry from "./tech-geometry"
// import SplineNext from "@splinetool/react-spline/next"

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Tech Background Animations */}
      <AnimatedBackground />
      <MatrixRain />
      <TechGeometry />

      {/* Original Background Animation - keep this too */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
         Hussain S. < br/><span className="text-blue-600">Software Engineer</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
          Web, App, AI & ML Expert
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          I craft seamless web applications, mobile apps, and develop cutting-edge AI solutions with deep learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
          >
            Get in Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/dev-hussainsyed/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/syed-hussain-iqrar-71388b236/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <Linkedin size={24} />
          </a>
          <a href="https://www.linkedin.com/in/syed-hussain-iqrar-71388b236/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400 dark:text-gray-500" size={32} />
        </div>
      </div>


      {/* Spline in react js */}
        <Spline
        className="absolute xl: right-[-28%] opacity-30"
        scene="https://prod.spline.design/9VKPwbyv729JpYXF/scene.splinecode" 
      />

      {/* Spline in next js */}
      {/* <SplineNext
        className="absolute xl: right-[-28%] opacity-30"
        scene="https://prod.spline.design/ne5zpBWMxntEeuLZ/scene.splinecode" 
      /> */}
    </section>
  )
}
