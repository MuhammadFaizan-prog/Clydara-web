import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Settings, Layers, Database, Lock, Zap, Target, TrendingUp, Monitor, Cpu, Briefcase } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { scrollToContact } from "@/utils/scrollToContact";
import softwareDevImg from '../assets/services/software-development.png';

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceFeature = ({ title, description, icon, delay = 0 }: ServiceFeatureProps) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-none border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="bg-brand-yellow p-3 rounded-none border-2 border-black shadow-neo inline-flex items-center justify-center text-black w-16 h-16 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-black text-black mb-3 uppercase">{title}</h3>
      <p className="text-black font-medium">{description}</p>
    </motion.div>
  );
};

const CustomSoftwareDevelopment = () => {
  const customServices = [
    {
      title: "Enterprise Software",
      description: "Scalable, secure, and robust software solutions designed to meet the complex needs of large organizations.",
      icon: <Briefcase size={32} />
    },
    {
      title: "SaaS Development",
      description: "End-to-end development of Software-as-a-Service platforms, from architecture to deployment and scaling.",
      icon: <Cloud size={32} />
    },
    {
      title: "Legacy Modernization",
      description: "Upgrading and migrating outdated systems to modern technologies to improve performance and security.",
      icon: <Zap size={32} />
    },
    {
      title: "Workflow Automation",
      description: "Custom tools to automate repetitive tasks, streamline processes, and increase operational efficiency.",
      icon: <Settings size={32} />
    },
    {
      title: "Database Design",
      description: "Efficient and secure database architectures optimized for your specific data needs and performance requirements.",
      icon: <Database size={32} />
    },
    {
      title: "System Integration",
      description: "Connecting disparate systems and applications to ensure seamless data flow and unified operations.",
      icon: <Layers size={32} />
    },
    {
      title: "MVP Development",
      description: "Rapid development of Minimum Viable Products to test ideas and gather user feedback quickly.",
      icon: <Target size={32} />
    },
    {
      title: "Security Solutions",
      description: "Implementing advanced security measures to protect your software and data from threats.",
      icon: <Lock size={32} />
    }
  ];

  const benefits = [
    {
      title: "Tailored Fit",
      description: "Software built specifically for your unique business processes and requirements",
      icon: <Target size={32} />
    },
    {
      title: "Competitive Edge",
      description: "Unique features and capabilities that differentiate you from competitors",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Full Ownership",
      description: "You own the code and intellectual property, giving you complete control",
      icon: <Lock size={32} />
    },
    {
      title: "Scalability",
      description: "Solutions designed to grow and adapt as your business evolves",
      icon: <Zap size={32} />
    }
  ];

  const technologies = [
    "Python", "Java", "C#", ".NET", "Node.js", "Go", "Rust", "React",
    "Angular", "Vue.js", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "Kubernetes"
  ];

  const industries = [
    "Healthcare", "Finance & Banking", "Retail & E-commerce", "Logistics & Supply Chain",
    "Education", "Real Estate", "Manufacturing", "Energy & Utilities"
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase transform -rotate-1">
              Custom Software
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold bg-black inline-block px-4 py-2 transform rotate-1 border-2 border-white shadow-neo">
              Solutions built precisely for your business needs
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
                Solve Complex Problems with <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Custom Code</span>
              </h2>
              
              <div className="bg-white border-2 border-black shadow-neo p-6 mb-8 transform rotate-1">
                <p className="text-black font-medium text-lg mb-4">
                  Off-the-shelf software often falls short of meeting unique business requirements. Our custom software development services provide you with tailored solutions that fit your workflows perfectly.
                </p>
                
                <p className="text-black font-medium text-lg">
                  We analyze your specific challenges and goals to design, build, and deploy software that drives efficiency, innovation, and growth for your organization.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-black uppercase border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg"
                >
                  Get Started <ArrowRight className="ml-2" size={24} />
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="bg-brand-yellow border-2 border-black shadow-neo-xl p-2 rounded-none transform rotate-2">
                  <img 
                    src={softwareDevImg}
                    alt="Custom Software Development" 
                    className="w-full border-2 border-black grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white p-4 border-2 border-black shadow-neo transform -rotate-2 z-10">
                  <div className="font-black text-brand-blue text-xl uppercase">BESPOKE</div>
                  <div className="text-sm font-bold text-black">Tailored Engineering</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-brand-pale-blue border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase transform -rotate-1">
              Our Custom <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2 text-brand-blue">Services</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Specialized development services for your unique challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customServices.map((service, index) => (
              <ServiceFeature
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase transform rotate-1">
              Why Go <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform -rotate-2">Custom</span>?
            </h2>
            <p className="text-xl font-bold text-black">
              The strategic advantages of bespoke software
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex items-start space-x-6 bg-white p-6 border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-brand-yellow p-3 border-2 border-black shadow-neo flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-black mb-2 uppercase">{benefit.title}</h3>
                  <p className="text-black font-medium">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-black text-white border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-white">
              <span className="text-brand-yellow">Tech Stack</span> Flexibility
            </h2>
            <p className="text-xl font-bold text-gray-300">
              We choose the right tools for your specific problem
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-white p-4 border-2 border-white shadow-[4px_4px_0px_#2563EB] text-center hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-black text-black uppercase">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-brand-yellow border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-black transform -rotate-1">
              Industries We <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Serve</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Experience across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-white p-4 border-2 border-black shadow-neo text-center hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-black text-black uppercase">{industry}</span>
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
              Have a Unique <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Challenge</span>?
            </h2>
            
            <p className="text-xl text-black font-bold mb-8 max-w-2xl mx-auto">
              Tell us about your project. We love solving complex problems with elegant code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-black text-white font-black uppercase border-2 border-black shadow-neo hover:bg-gray-900 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg"
              >
                Start Project
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 bg-white text-black font-black uppercase border-2 border-black shadow-neo hover:bg-gray-50 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// Need to import Cloud icon as it was used in the services array
import { Cloud } from "lucide-react";

export default CustomSoftwareDevelopment;
