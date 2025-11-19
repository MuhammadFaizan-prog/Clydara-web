import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Bot, MessageSquare, Database, ChartLine, Bug, Wrench, Users, Briefcase, Monitor, Globe, Smartphone, Code, Link as LinkIcon, Cloud, Cog, Server, Shield } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: "teal" | "navy" | "blue";
  delay?: number;
}

const ServiceItem = ({ title, description, icon, link, color, delay = 0 }: ServiceItemProps) => {
  const bgColorClass = {
    teal: "bg-brand-blue text-white",
    navy: "bg-brand-blue text-white",
    blue: "bg-brand-blue text-white"
  };

  const hoverColorClass = {
    teal: "group-hover:bg-black group-hover:text-white",
    navy: "group-hover:bg-black group-hover:text-white",
    blue: "group-hover:bg-black group-hover:text-white"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Link 
        to={link}
        className="group bg-white rounded-none p-6 border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-full flex flex-col"
      >
        <div className={`${bgColorClass[color]} ${hoverColorClass[color]} w-16 h-16 rounded-none border-2 border-black shadow-neo flex items-center justify-center mb-6 transition-all group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-black text-black mb-3 uppercase">{title}</h3>
        <p className="text-black font-medium mb-6 flex-grow">{description}</p>
        
        <div className="flex items-center text-brand-blue font-bold uppercase group-hover:underline decoration-2 underline-offset-4 mt-auto">
          Learn more <ArrowRight size={20} className="ml-2" />
        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const aiServices = [
    {
      title: "AI & ML Integrations",
      description: "Integrate AI capabilities into existing systems for enhanced functionality.",
      icon: <Brain size={32} />,
      link: "/services/ai/integrations",
      color: "teal" as const
    },
    {
      title: "AI Automation Solutions",
      description: "Automate routine tasks with intelligent AI systems.",
      icon: <Bot size={32} />,
      link: "/services/ai/automation",
      color: "teal" as const
    },
    {
      title: "Chatbot Development",
      description: "Build intelligent conversational agents for customer engagement.",
      icon: <MessageSquare size={32} />,
      link: "/services/ai/chatbots",
      color: "teal" as const
    },
    {
      title: "Intelligent Data Processing",
      description: "Process large datasets using AI to extract valuable insights.",
      icon: <Database size={32} />,
      link: "/services/ai/data-processing",
      color: "teal" as const
    }
  ];

  const staffingServices = [
    {
      title: "Hire Developers & Tech Teams",
      description: "Access skilled developers and complete tech teams on demand.",
      icon: <Users size={32} />,
      link: "/services/staff/developers",
      color: "navy" as const
    },
    {
      title: "HR Recruitment Solutions",
      description: "Find the perfect talent with specialized tech recruitment.",
      icon: <Briefcase size={32} />,
      link: "/services/staff/recruitment",
      color: "navy" as const
    },
    {
      title: "Remote Team Management",
      description: "Efficiently manage distributed teams with specialized tools.",
      icon: <Monitor size={32} />,
      link: "/services/staff/remote-teams",
      color: "navy" as const
    },
    {
      title: "Resource Outsourcing",
      description: "Reduce costs by outsourcing roles and specialized projects.",
      icon: <Globe size={32} />,
      link: "/services/staff/outsourcing",
      color: "navy" as const
    }
  ];

  const developmentServices = [
    {
      title: "Web Development",
      description: "Create responsive, modern web applications with cutting-edge technologies.",
      icon: <Globe size={32} />,
      link: "/services/development",
      color: "blue" as const
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone size={32} />,
      link: "/services/mobile",
      color: "blue" as const
    },
    {
      title: "Custom Software Development",
      description: "Develop bespoke software solutions tailored to your requirements.",
      icon: <Code size={32} />,
      link: "/services/development",
      color: "blue" as const
    },
    {
      title: "API Development & Integration",
      description: "Create and integrate APIs to connect your systems seamlessly.",
      icon: <LinkIcon size={32} />,
      link: "/services/development",
      color: "blue" as const
    }
  ];

  const mobileServices = [
    {
      title: "iOS App Development",
      description: "Create native iOS applications with Swift and SwiftUI.",
      icon: <Smartphone size={32} />,
      link: "/services/mobile",
      color: "teal" as const
    },
    {
      title: "Android App Development",
      description: "Build native Android applications using Kotlin and Jetpack Compose.",
      icon: <Smartphone size={32} />,
      link: "/services/mobile",
      color: "teal" as const
    },
    {
      title: "Cross-Platform Development",
      description: "Develop apps that work seamlessly across iOS and Android.",
      icon: <Globe size={32} />,
      link: "/services/mobile",
      color: "teal" as const
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Create web applications that provide native app-like experiences.",
      icon: <Monitor size={32} />,
      link: "/services/mobile",
      color: "teal" as const
    }
  ];

  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your existing infrastructure to the cloud.",
      icon: <Cloud size={32} />,
      link: "/services/cloud",
      color: "blue" as const
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "Design and implement scalable cloud infrastructure.",
      icon: <Server size={32} />,
      link: "/services/cloud",
      color: "blue" as const
    },
    {
      title: "DevOps & CI/CD",
      description: "Implement automated deployment pipelines and DevOps practices.",
      icon: <Cog size={32} />,
      link: "/services/cloud",
      color: "blue" as const
    },
    {
      title: "Cloud Security",
      description: "Implement robust security measures to protect your cloud infrastructure.",
      icon: <Shield size={32} />,
      link: "/services/cloud",
      color: "blue" as const
    }
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue text-white py-20 border-b-4 border-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Our Services</h1>
            <p className="text-xl text-white font-bold drop-shadow-md">
              Comprehensive solutions to power your business growth and digital transformation
            </p>
          </div>
        </div>
      </div>
      
      {/* AI & Automation Services */}
      <section className="section-padding bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 bg-black text-white text-sm font-bold uppercase border-2 border-black shadow-neo transform -rotate-2 mb-4">
              Core Service 1
            </div>
            <h2 className="text-4xl font-black mb-6 uppercase">
              AI & <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo transform rotate-1 inline-block">Automation</span> Services
            </h2>
            <p className="text-xl text-black font-bold">
              Harness the power of artificial intelligence to automate tasks, gain insights, and create intelligent solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service, index) => (
              <ServiceItem 
                key={service.title}
                {...service}
                delay={index * 0.1} 
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services/ai"
              className="inline-flex items-center text-brand-blue hover:text-black hover:underline decoration-2 underline-offset-4 font-black uppercase text-lg"
            >
              View all AI & Automation services <ArrowRight size={24} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Staff Augmentation & Recruitment Services */}
      <section className="section-padding bg-brand-yellow border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 bg-white text-black text-sm font-bold uppercase border-2 border-black shadow-neo transform rotate-2 mb-4">
              Core Service 2
            </div>
            <h2 className="text-4xl font-black mb-6 uppercase">
              Staff Augmentation & <span className="bg-white px-2 border-2 border-black shadow-neo transform -rotate-1 inline-block">Recruitment</span>
            </h2>
            <p className="text-xl text-black font-bold">
              Build your ideal tech team with our flexible staffing solutions and expert recruitment services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffingServices.map((service, index) => (
              <ServiceItem 
                key={service.title}
                {...service}
                delay={index * 0.1} 
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services/staff-augmentation"
              className="inline-flex items-center text-black hover:text-white hover:underline decoration-2 underline-offset-4 font-black uppercase text-lg"
            >
              View all Staffing & Recruitment services <ArrowRight size={24} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Software Development Services */}
      <section className="section-padding bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 bg-black text-white text-sm font-bold uppercase border-2 border-black shadow-neo transform -rotate-2 mb-4">
              Core Service 3
            </div>
            <h2 className="text-4xl font-black mb-6 uppercase">
              Software <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo transform rotate-1 inline-block">Development</span> Services
            </h2>
            <p className="text-xl text-black font-bold">
              From concept to deployment, we deliver robust software solutions tailored to your unique business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentServices.map((service, index) => (
              <ServiceItem 
                key={service.title}
                {...service}
                delay={index * 0.1} 
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services/development"
              className="inline-flex items-center text-brand-blue hover:text-black hover:underline decoration-2 underline-offset-4 font-black uppercase text-lg"
            >
              View all Development services <ArrowRight size={24} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Mobile Development Services */}
      <section className="section-padding bg-gray-100 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 bg-white text-black text-sm font-bold uppercase border-2 border-black shadow-neo transform rotate-2 mb-4">
              Core Service 4
            </div>
            <h2 className="text-4xl font-black mb-6 uppercase">
              Mobile <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo transform -rotate-1 inline-block">Development</span> Services
            </h2>
            <p className="text-xl text-black font-bold">
              Create powerful, engaging mobile applications that connect with your users and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileServices.map((service, index) => (
              <ServiceItem 
                key={service.title}
                {...service}
                delay={index * 0.1} 
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services/mobile"
              className="inline-flex items-center text-brand-blue hover:text-black hover:underline decoration-2 underline-offset-4 font-black uppercase text-lg"
            >
              View all Mobile Development services <ArrowRight size={24} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Cloud Solutions Services */}
      <section className="section-padding bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 bg-black text-white text-sm font-bold uppercase border-2 border-black shadow-neo transform -rotate-2 mb-4">
              Core Service 5
            </div>
            <h2 className="text-4xl font-black mb-6 uppercase">
              Cloud <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo transform rotate-1 inline-block">Solutions</span> Services
            </h2>
            <p className="text-xl text-black font-bold">
              Harness the power of cloud technology for scalable, secure, and cost-effective infrastructure solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudServices.map((service, index) => (
              <ServiceItem 
                key={service.title}
                {...service}
                delay={index * 0.1} 
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services/cloud"
              className="inline-flex items-center text-brand-blue hover:text-black hover:underline decoration-2 underline-offset-4 font-black uppercase text-lg"
            >
              View all Cloud Solutions services <ArrowRight size={24} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="section-padding bg-brand-blue border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black mb-6 uppercase text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              Our Service <span className="bg-brand-yellow text-black px-2 border-2 border-black shadow-neo transform rotate-1 inline-block">Process</span>
            </h2>
            <p className="text-xl text-white font-bold drop-shadow-md">
              A streamlined approach to delivering high-quality solutions
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Connection line */}
            <div className="absolute top-24 left-1/2 w-1 h-[calc(100%-120px)] bg-black hidden md:block transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white p-6 rounded-none border-2 border-black shadow-neo-lg md:text-right relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="md:ml-auto md:mr-0 w-16 h-16 bg-brand-yellow text-black border-2 border-black shadow-neo flex items-center justify-center rounded-none mb-4 relative">
                  <div className="font-black text-2xl">1</div>
                  <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 w-8 h-1 bg-black"></div>
                </div>
                <h3 className="text-xl font-black text-black mb-2 uppercase">Discovery & Consultation</h3>
                <p className="text-black font-medium">
                  We begin by understanding your business needs, challenges, and objectives to craft the perfect solution.
                </p>
              </motion.div>
              
              <div className="md:mt-48"></div>
              
              <div className="md:mt-48"></div>
              
              <motion.div
                className="bg-white p-6 rounded-none border-2 border-black shadow-neo-lg relative z-10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-brand-yellow text-black border-2 border-black shadow-neo flex items-center justify-center rounded-none mb-4 relative">
                  <div className="font-black text-2xl">2</div>
                  <div className="hidden md:block absolute top-1/2 right-full transform -translate-y-1/2 w-8 h-1 bg-black"></div>
                </div>
                <h3 className="text-xl font-black text-black mb-2 uppercase">Planning & Strategy</h3>
                <p className="text-black font-medium">
                  Our experts develop a tailored strategy with clear milestones, resources, and timelines for your project.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-white p-6 rounded-none border-2 border-black shadow-neo-lg md:text-right relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="md:ml-auto md:mr-0 w-16 h-16 bg-brand-yellow text-black border-2 border-black shadow-neo flex items-center justify-center rounded-none mb-4 relative">
                  <div className="font-black text-2xl">3</div>
                  <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 w-8 h-1 bg-black"></div>
                </div>
                <h3 className="text-xl font-black text-black mb-2 uppercase">Development & Implementation</h3>
                <p className="text-black font-medium">
                  Our skilled team executes the plan with regular updates, allowing for agile adjustments when needed.
                </p>
              </motion.div>
              
              <div className="md:mt-48"></div>
              
              <div className="md:mt-48"></div>
              
              <motion.div
                className="bg-white p-6 rounded-none border-2 border-black shadow-neo-lg relative z-10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-brand-yellow text-black border-2 border-black shadow-neo flex items-center justify-center rounded-none mb-4 relative">
                  <div className="font-black text-2xl">4</div>
                  <div className="hidden md:block absolute top-1/2 right-full transform -translate-y-1/2 w-8 h-1 bg-black"></div>
                </div>
                <h3 className="text-xl font-black text-black mb-2 uppercase">Testing & Refinement</h3>
                <p className="text-black font-medium">
                  We thoroughly test all deliverables to ensure they meet our high standards of quality and your requirements.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-white p-6 rounded-none border-2 border-black shadow-neo-lg md:text-right relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="md:ml-auto md:mr-0 w-16 h-16 bg-brand-yellow text-black border-2 border-black shadow-neo flex items-center justify-center rounded-none mb-4">
                  <div className="font-black text-2xl">5</div>
                </div>
                <h3 className="text-xl font-black text-black mb-2 uppercase">Deployment & Ongoing Support</h3>
                <p className="text-black font-medium">
                  We deploy your solution and provide ongoing maintenance and support to ensure its continued success.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-black text-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
              Ready to Transform Your Business with Our <span className="text-brand-yellow border-b-4 border-brand-blue">Expert Services</span>?
            </h2>
            
            <p className="text-xl text-white font-bold mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our AI solutions, talent resources, and development expertise can help you achieve your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white font-black uppercase border-2 border-white shadow-[4px_4px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg rounded-none"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
