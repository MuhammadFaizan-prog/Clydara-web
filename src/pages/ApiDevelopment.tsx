import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Link as LinkIcon, Server, Database, Shield, Zap, Target, TrendingUp, Globe, Code, Layers, Lock } from "lucide-react";
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

const ApiDevelopment = () => {
  const apiServices = [
    {
      title: "RESTful API Development",
      description: "Design and build scalable, secure, and efficient REST APIs for your web and mobile applications.",
      icon: <Server size={32} />
    },
    {
      title: "GraphQL API Development",
      description: "Create flexible and efficient GraphQL APIs that allow clients to request exactly the data they need.",
      icon: <Database size={32} />
    },
    {
      title: "Third-Party Integration",
      description: "Seamlessly integrate third-party services like payment gateways, social media, and maps into your apps.",
      icon: <LinkIcon size={32} />
    },
    {
      title: "Microservices Architecture",
      description: "Decompose complex applications into smaller, independent services that communicate via APIs.",
      icon: <Layers size={32} />
    },
    {
      title: "API Security",
      description: "Implement robust authentication (OAuth, JWT) and authorization mechanisms to protect your APIs.",
      icon: <Shield size={32} />
    },
    {
      title: "API Documentation",
      description: "Create comprehensive and interactive API documentation using tools like Swagger/OpenAPI.",
      icon: <Code size={32} />
    },
    {
      title: "Legacy System Integration",
      description: "Connect modern applications with legacy systems through custom API layers.",
      icon: <RefreshCw size={32} />
    },
    {
      title: "Real-time APIs",
      description: "Build real-time features using WebSockets and Server-Sent Events for instant data updates.",
      icon: <Zap size={32} />
    }
  ];

  const benefits = [
    {
      title: "Connectivity",
      description: "Enable seamless communication between different software systems and devices",
      icon: <LinkIcon size={32} />
    },
    {
      title: "Scalability",
      description: "Decoupled architectures allow individual components to scale independently",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Efficiency",
      description: "Reuse existing functionality and data across multiple applications",
      icon: <Zap size={32} />
    },
    {
      title: "Innovation",
      description: "Easily integrate new technologies and services to enhance your offerings",
      icon: <Target size={32} />
    }
  ];

  const technologies = [
    "Node.js", "Express", "NestJS", "Python", "Django REST Framework", "FastAPI",
    "Java", "Spring Boot", "Go", "GraphQL", "Apollo", "REST", "gRPC", "WebSockets"
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase transform -rotate-1">
              API Development
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold bg-black inline-block px-4 py-2 transform rotate-1 border-2 border-white shadow-neo">
              Connecting your digital ecosystem
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
                The Backbone of <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Modern Software</span>
              </h2>
              
              <div className="bg-white border-2 border-black shadow-neo p-6 mb-8 transform rotate-1">
                <p className="text-black font-medium text-lg mb-4">
                  APIs (Application Programming Interfaces) are the bridges that allow different software systems to talk to each other. Robust API development is essential for building scalable, interconnected, and feature-rich applications.
                </p>
                
                <p className="text-black font-medium text-lg">
                  We specialize in designing and building high-performance APIs that power your mobile apps, web platforms, and internal systems, ensuring seamless data flow and integration.
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
                    alt="API Development" 
                    className="w-full border-2 border-black grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white p-4 border-2 border-black shadow-neo transform -rotate-2 z-10">
                  <div className="font-black text-brand-blue text-xl uppercase">INTEGRATION</div>
                  <div className="text-sm font-bold text-black">Seamless Connectivity</div>
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
              Our API <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2 text-brand-blue">Services</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Comprehensive API solutions for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiServices.map((service, index) => (
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
              Why Prioritize <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform -rotate-2">APIs</span>?
            </h2>
            <p className="text-xl font-bold text-black">
              Unlock the power of connectivity and modularity
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
              <span className="text-brand-yellow">Technologies</span> We Use
            </h2>
            <p className="text-xl font-bold text-gray-300">
              Best-in-class tools for API development
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center border-4 border-black p-8 md:p-12 shadow-neo-xl bg-brand-pale-blue">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase transform -rotate-1">
              Ready to Connect Your <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Systems</span>?
            </h2>
            
            <p className="text-xl text-black font-bold mb-8 max-w-2xl mx-auto">
              Let's discuss how our API development services can help you build a more connected and efficient business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-black text-white font-black uppercase border-2 border-black shadow-neo hover:bg-gray-900 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg"
              >
                Get Started
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

// Need to import RefreshCw as it was used in the services array
import { RefreshCw } from "lucide-react";

export default ApiDevelopment;
