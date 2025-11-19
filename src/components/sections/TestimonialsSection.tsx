
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechVision Inc.",
    content: "Clydara transformed our customer support with their AI chatbot solution. The implementation was smooth, and our customer satisfaction scores have increased by 35%.",
    image: "/images/testimonials/sarah.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateSoft",
    content: "The developers we hired through Clydara's staff augmentation service integrated seamlessly with our team and helped us deliver our project ahead of schedule.",
    image: "/images/testimonials/michael.png",
  },
  {
    id: 3,
    name: "Laura Patel",
    role: "Director of Operations",
    company: "GlobalTech Solutions",
    content: "Their predictive analytics solution has given us invaluable insights that have directly contributed to a 28% increase in our operational efficiency.",
    image: "/images/testimonials/sarah.png",
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-white border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            What Our <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo transform rotate-1 inline-block">Clients</span> Say
          </h2>
          <p className="text-xl text-black font-bold">
            Hear from the companies that have transformed their businesses with our solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-none p-8 md:p-12 border-2 border-black shadow-neo-xl">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 16H16V32H32V16Z" fill="#000" fillOpacity="0.1" />
                <path d="M64 16H48V32H64V16Z" fill="#000" fillOpacity="0.1" />
                <path d="M32 48H16V64H32V48Z" fill="#000" fillOpacity="0.1" />
                <path d="M64 48H48V64H64V48Z" fill="#000" fillOpacity="0.1" />
              </svg>
            </div>

            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="mb-8">
                <svg className="text-brand-blue w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-2.2 0-4 1.8-4 4v10h10V12H6c0-1.1 0.9-2 2-2h2V8h-0zM22 8c-2.2 0-4 1.8-4 4v10h10V12h-10c0-1.1 0.9-2 2-2h2V8h-0z" />
                </svg>
              </div>
              
              <blockquote className="text-2xl font-bold text-black mb-8 italic">
                "{currentTestimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-none border-2 border-black bg-gray-300 overflow-hidden mr-4 shadow-neo">
                  <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <div className="font-black text-black text-lg uppercase">{currentTestimonial.name}</div>
                  <div className="text-gray-800 text-sm font-bold">{currentTestimonial.role}, {currentTestimonial.company}</div>
                </div>
              </div>
            </motion.div>
            
            <div className="absolute bottom-6 right-6 flex space-x-3">
              <button 
                onClick={prevTestimonial}
                className="bg-white border-2 border-black hover:bg-brand-blue hover:text-white text-black p-2 rounded-none transition-colors shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white border-2 border-black hover:bg-brand-blue hover:text-white text-black p-2 rounded-none transition-colors shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                className={`w-4 h-4 border-2 border-black mx-2 transition-all duration-200 hover:scale-125 ${
                  idx === currentIndex ? "bg-brand-blue" : "bg-white hover:bg-gray-200"
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
