import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, UserCheck, Briefcase, FileText, Users, Target, CheckCircle } from "lucide-react";
import PageLayout from "../../components/layout/PageLayout";
import { scrollToContact } from "@/utils/scrollToContact";

const RecruitmentSolutions = () => {
  const services = [
    {
      title: "Executive Search",
      description: "Find top-tier leadership talent (CTOs, VPs of Engineering) to drive your technical vision.",
      icon: <Target size={32} />
    },
    {
      title: "Technical Recruitment",
      description: "End-to-end recruitment for hard-to-fill technical roles across all levels.",
      icon: <Search size={32} />
    },
    {
      title: "RPO Services",
      description: "Recruitment Process Outsourcing to handle your entire hiring function.",
      icon: <Users size={32} />
    },
    {
      title: "Contract Staffing",
      description: "Flexible staffing solutions for short-term projects and seasonal peaks.",
      icon: <FileText size={32} />
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your company culture, technical requirements, and business goals."
    },
    {
      step: "02",
      title: "Sourcing",
      description: "Our AI-powered sourcing tools and vast network identify passive candidates."
    },
    {
      step: "03",
      title: "Screening",
      description: " rigorous technical assessments and behavioral interviews to ensure quality."
    },
    {
      step: "04",
      title: "Selection",
      description: "We present only the top 3-5 candidates who perfectly match your criteria."
    }
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white uppercase transform -rotate-1">
              Recruitment <span className="bg-brand-yellow text-black px-4 border-2 border-black shadow-neo transform rotate-2 inline-block">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold bg-black inline-block px-6 py-3 border-2 border-white shadow-neo transform rotate-1">
              Find the perfect talent with our specialized tech recruitment services
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-6 uppercase transform -rotate-1">
                Hiring Made <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Simple</span>
              </h2>
              
              <div className="bg-brand-pale-blue border-2 border-black shadow-neo p-6 mb-8">
                <p className="text-black font-medium text-lg mb-4">
                  In today's competitive tech landscape, finding the right talent is harder than ever. We take the headache out of hiring.
                </p>
                <p className="text-black font-medium text-lg">
                  Our specialized recruitment team acts as an extension of your HR department, leveraging deep industry knowledge to connect you with exceptional candidates.
                </p>
              </div>

              <button 
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-black uppercase border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg"
              >
                Start Recruiting <ArrowRight className="ml-2" size={24} />
              </button>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-6 border-2 border-black shadow-neo flex items-start gap-4">
                    <div className="bg-brand-yellow p-2 border-2 border-black shadow-neo flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase mb-2">{service.title}</h3>
                      <p className="font-medium">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-brand-yellow border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-black transform -rotate-1">
              Our <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Process</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="bg-white p-6 border-2 border-black shadow-neo h-full flex flex-col relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -right-4 -top-4 text-8xl font-black text-gray-100 z-0">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4 uppercase">{item.title}</h3>
                  <p className="font-medium">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center border-4 border-black p-8 md:p-12 shadow-neo-xl bg-brand-pale-blue">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase transform -rotate-1">
              Find Your Next <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Superstar</span>
            </h2>
            <p className="text-xl text-black font-bold mb-8 max-w-2xl mx-auto">
              Don't settle for average. Let us help you build a world-class team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-black text-white font-black uppercase border-2 border-black shadow-neo hover:bg-gray-900 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RecruitmentSolutions;
