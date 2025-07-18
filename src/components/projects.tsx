import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SectionBackground from "./section-background"
import AiBot from "@/assets/AIChat.jpg"
import eComPic from "@/assets/image-277.webp"
import fitnessPic from "@/assets/fitness.webp"
import dashboard from "@/assets/dashboard.jpeg"
import patPic from "@/assets/PATPic.webp"
import ImageRec from "@/assets/ImageRec.png"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: eComPic,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development",
  },
  {
    title: "AI-Powered Chat App",
    description:
      "Mobile chat application with AI-powered responses using React Native and TensorFlow. Includes real-time messaging and smart reply suggestions.",
    image: AiBot,
    technologies: ["React Native", "TensorFlow", "Firebase", "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/dev-hussainsyed/",
    category: "Mobile & AI",
  },
  {
    title: "Image Recognition System",
    description:
      "Deep learning model for image classification using PyTorch. Achieved 95% accuracy on custom dataset with real-time processing capabilities.",
    image: ImageRec,
    technologies: ["PyTorch", "Python", "OpenCV", "Flask"],
    liveUrl: "#",
    githubUrl: "https://github.com/dev-hussainsyed/",
    category: "Machine Learning",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Responsive web dashboard for project management with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: dashboard,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development",
  },
  {
    title: "Fitness Tracking App",
    description:
      "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features built with Flutter.",
    image: fitnessPic,
    technologies: ["Flutter", "Dart", "Firebase", "Google Fit API"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile Development",
  },
  {
    title: "Predictive Analytics Tool",
    description:
      "Machine learning tool for business analytics with predictive modeling, data visualization, and automated reporting capabilities.",
    image: patPic,
    technologies: ["Python", "Scikit-learn", "Pandas", "Plotly"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Data Science",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative">
      <SectionBackground variant="grid" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work across web development, mobile applications, and machine learning projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Github className="mr-2" size={16} />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
