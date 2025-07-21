import { Download, User } from "lucide-react"
import { Button } from "@/components/ui/button"
// import Image1 from "@/assets/Profile1.jpeg"
import Image2 from "@/assets/Profile2.jpg"
// import Resume from "@/assets/Syed.Hussain.Iqrar.pdf"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <User className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hussain Syed</h3>
                <h5 className="text-lg text-gray-700 dark:text-gray-300">Software Engineer</h5>
                <p className="text-gray-600 dark:text-gray-300">Passionate about creating innovative solutions</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m a passionate Software Engineer with over 5 years of experience in web development, mobile applications, 
              and artificial intelligence. My journey in technology began with a deep curiosity about how things work, 
              which has grown into a strong commitment to building impactful, user-focused solutions. Currently, 
              I’m working as a Software Developer at <b>HeuristicSol Pvt. Ltd.</b>, where I contribute to the development of 
              scalable and innovative software products across diverse domains.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I stay at the forefront of industry trends, constantly learning and adapting to new technologies. Whether
              it's building responsive web applications, developing cross-platform mobile apps, or implementing machine
              learning models, I approach each project with dedication and attention to detail.
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
              <p className="text-lg italic text-gray-800 dark:text-gray-200">
                "Code is poetry written in logic, and every line should tell a story of innovation."
              </p>
            </blockquote>

            {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Download className="mr-2" size={20} />
              Download Resume
            </Button> */}
              <a
                className="inline-block mt-6"
                href="/assets/Syed.Hussain.Iqrar.pdf"
                download="Syed.Hussain.Iqrar.pdf"
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
              </a>


          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-700">
                <Image
                  src={Image2}
                  alt="Professional headshot"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
