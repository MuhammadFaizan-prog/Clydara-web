import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, DollarSign, Briefcase, Layers, BarChart, Settings } from "lucide-react";
import PageLayout from "../../components/layout/PageLayout";
import { scrollToContact } from "@/utils/scrollToContact";

const ResourceOutsourcing = () => {
  const models = [
    {
      title: "Dedicated Team",
      description: "A full-time team dedicated exclusively to your project, managed by you or us.",
      icon: <UsersIcon />
    },
    {
      title: "Staff Augmentation",
      description: "Extend your existing team with specific experts for a defined period.",
      icon: <Briefcase size={32} />
    },
    {
      title: "Project Outsourcing",
      description: "End-to-end development of a specific project with fixed scope and budget.",
      icon: <Layers size={32} />
    },
    {
      title: "Managed Services",
      description: "Ongoing support and maintenance for your applications and infrastructure.",
      icon: <Settings size={32} />
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      value: "40-60%",
      description: "Save on salaries, benefits, office space, and equipment."
    },
    {
      title: "Time to Market",
      value: "2x Faster",
      description: "Accelerate development cycles with ready-to-go teams."
    },
    {
      title: "Talent Access",
      value: "Global",
      description: "Tap into a worldwide pool of specialized skills."
    }
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-pale-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black uppercase transform -rotate-1">
              Resource <span className="bg-brand-yellow px-4 border-2 border-black shadow-neo transform rotate-2 inline-block">Outsourcing</span>
            </h1>
            <p className="text-xl md:text-2xl text-black font-bold bg-white inline-block px-6 py-3 border-2 border-black shadow-neo transform rotate-1">
              Optimize your operations and reduce costs with strategic outsourcing
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
                Focus on Your <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Core Business</span>
              </h2>
              
              <div className="bg-brand-yellow border-2 border-black shadow-neo p-6 mb-8">
                <p className="text-black font-medium text-lg mb-4">
                  Outsourcing non-core functions allows you to concentrate on what matters most: growing your business.
                </p>
                <p className="text-black font-medium text-lg">
                  We handle the recruitment, onboarding, and management of resources, ensuring you get high-quality deliverables without the administrative burden.
                </p>
              </div>

              <button 
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-black text-white font-black uppercase border-2 border-black shadow-neo hover:bg-gray-900 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg"
              >
                Start Outsourcing <ArrowRight className="ml-2" size={24} />
              </button>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 border-2 border-black shadow-neo flex items-center gap-6 transform hover:-translate-y-1 transition-transform">
                    <div className="bg-brand-blue text-white p-4 border-2 border-black shadow-neo font-black text-xl w-24 text-center">
                      {benefit.value}
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase mb-1">{benefit.title}</h3>
                      <p className="font-medium text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="section-padding bg-brand-yellow border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-black transform -rotate-1">
              Engagement <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Models</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model, index) => (
              <motion.div
                key={model.title}
                className="bg-white p-6 border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-brand-pale-blue p-3 border-2 border-black shadow-neo inline-flex mb-4">
                  {model.icon}
                </div>
                <h3 className="text-xl font-black mb-3 uppercase">{model.title}</h3>
                <p className="font-medium">{model.description}</p>
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
              Maximize <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Efficiency</span>
            </h2>
            <p className="text-xl text-black font-bold mb-8 max-w-2xl mx-auto">
              Partner with us to streamline your operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-black text-white font-black uppercase border-2 border-black shadow-neo hover:bg-gray-900 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

function UsersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default ResourceOutsourcing;
