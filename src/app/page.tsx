import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import LoadingAnimation from "@/components/loading-animation"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <>
    <ThemeProvider>
      <LoadingAnimation />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
    </>
  )
}
