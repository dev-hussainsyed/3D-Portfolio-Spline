import { Star, Quote } from "lucide-react"
import Image from "next/image"
import imageJimmy from "@/assets/Jimmy.jpg"
import imageSaad from "@/assets/SaadHashmani.jpg"
import imageSheikh from "@/assets/HSheikh.jpg"

const testimonials = [
  {
    name: "Jimmy Memon",
    role: "Product Manager",
    company: "TechCorp Inc.",
    image: imageJimmy,
    content:
      "Working with this developer was an absolute pleasure. The attention to detail and technical expertise delivered exceeded our expectations. The project was completed on time and within budget.",
    rating: 5,
  },
  {
    name: "Saad Hashman",
    role: "CTO",
    company: "StartupXYZ",
    image: imageSaad,
    content:
      "Exceptional work on our mobile application. The AI integration was seamless and the user experience is outstanding. Highly recommend for any complex technical projects.",
    rating: 5,
  },
  {
    name: "Hamza A. Sheikh",
    role: "Lead Developer",
    company: "HeuristicSol Pvt Ltd",
    image: imageSheikh,
    content:
      "The collaboration was smooth and professional. The developer understood our design requirements perfectly and implemented them with pixel-perfect precision.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonials from clients and collaborators who have experienced my work firsthand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="absolute top-4 right-4 text-blue-600 opacity-20">
                <Quote size={40} />
              </div>

              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
