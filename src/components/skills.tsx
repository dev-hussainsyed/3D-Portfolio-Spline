"use client"

import { Code, Smartphone, Brain, Database, Globe, Cpu } from "lucide-react"
import SectionBackground from "./section-background"

const skillCategories = [
  {
    title: "Web Development",
    icon: <Globe className="text-blue-600" size={32} />,
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Next.js", level: 82 },
    ],
  },
  {
    title: "App Development",
    icon: <Smartphone className="text-green-600" size={32} />,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 80 },
      { name: "Native Android", level: 75 },
      { name: "iOS Development", level: 70 },
      { name: "Xamarin", level: 65 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="text-purple-600" size={32} />,
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Deep Learning", level: 82 },
      { name: "Neural Networks", level: 78 },
      { name: "Data Science", level: 75 },
    ],
  },
  {
    title: "Backend & Database",
    icon: <Database className="text-red-600" size={32} />,
    skills: [
      { name: "Python", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "GraphQL", level: 70 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      <SectionBackground variant="circuit" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills across different domains of software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "React", icon: <Code size={40} /> },
              { name: "Node.js", icon: <Cpu size={40} /> },
              { name: "Python", icon: <Brain size={40} /> },
              { name: "Mobile", icon: <Smartphone size={40} /> },
              { name: "Database", icon: <Database size={40} /> },
              { name: "Web", icon: <Globe size={40} /> },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-2">{tech.icon}</div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
