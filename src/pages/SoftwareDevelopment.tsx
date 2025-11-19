import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Code, Database, Link as LinkIcon, Cloud, Cog, Zap, Shield, Target, TrendingUp } from "lucide-react";
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

const SoftwareDevelopment = () => {
  const devServices = [
    {
      title: "Web Development",
      description: "Create responsive, modern web applications with cutting-edge technologies and user-centric design principles.",
      icon: <Globe size={32} />
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      icon: <Smartphone size={32} />
    },
    {
      title: "Custom Software Development",
      description: "Develop bespoke software solutions tailored to your specific business requirements and challenges.",
      icon: <Code size={32} />
    },
    {
      title: "CRM & ERP Solutions",
      description: "Implement and customize enterprise systems to streamline operations and enhance business efficiency.",
      icon: <Database size={32} />
    },
    {
      title: "API Development & Integration",
      description: "Create and integrate APIs to connect your systems and enable seamless data exchange between applications.",
      icon: <LinkIcon size={32} />
    },
    {
      title: "Cloud Solutions",
      description: "Harness the power of cloud technology for scalable, secure, and cost-effective infrastructure solutions.",
      icon: <Cloud size={32} />
    },
    {
      title: "DevOps Services",
      description: "Implement DevOps practices to improve collaboration, increase deployment frequency, and ensure product quality.",
      icon: <Cog size={32} />
    },
    {
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, efficient applications that meet current business needs.",
      icon: <Zap size={32} />
    }
  ];

  const benefits = [
    {
      title: "Scalable Solutions",
      description: "Build applications that grow with your business and handle increasing user demands",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Security First",
      description: "Implement robust security measures to protect your data and applications",
      icon: <Shield size={32} />
    },
    {
      title: "Performance Optimized",
      description: "Create high-performance applications that deliver exceptional user experiences",
      icon: <Zap size={32} />
    },
    {
      title: "Future-Ready",
      description: "Develop with modern technologies that ensure long-term maintainability and growth",
      icon: <Target size={32} />
    }
  ];

  const technologies = [
    "React", "Next.js", "Vue.js", "Angular", "Node.js", "Python", "Django", "Flask",
    "Java", "Spring Boot", "C#", ".NET", "PHP", "Laravel", "Ruby", "Rails",
    "PostgreSQL", "MongoDB", "MySQL", "Redis", "AWS", "Azure", "Google Cloud",
    "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD"
  ];

  const platforms = [
    "Web Applications", "Mobile Apps (iOS/Android)", "Desktop Applications", "Progressive Web Apps",
    "Microservices", "Serverless Applications", "E-commerce Platforms", "Content Management Systems",
    "Business Intelligence Tools", "Workflow Automation", "Real-time Applications", "IoT Solutions"
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase transform -rotate-1">
              Software Development
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold bg-black inline-block px-4 py-2 transform rotate-1 border-2 border-white shadow-neo">
              From concept to deployment, we deliver robust software solutions
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
                Building the Future with <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Custom Software</span>
              </h2>
              
              <div className="bg-white border-2 border-black shadow-neo p-6 mb-8 transform rotate-1">
                <p className="text-black font-medium text-lg mb-4">
                  Our Software Development services encompass the entire spectrum of application development, from initial concept and design to deployment and ongoing maintenance. We specialize in creating scalable, secure, and high-performance solutions.
                </p>
                
                <p className="text-black font-medium text-lg">
                  Whether you need a web application, mobile app, enterprise system, or custom software solution, our experienced development team uses cutting-edge technologies and best practices to deliver exceptional results.
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
                    alt="Software Development" 
                    className="w-full border-2 border-black grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white p-4 border-2 border-black shadow-neo transform -rotate-2 z-10">
                  <div className="font-black text-brand-blue text-xl uppercase">CUSTOM CODE</div>
                  <div className="text-sm font-bold text-black">Tailored Solutions</div>
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
              Our Development <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2 text-brand-blue">Services</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Comprehensive software development solutions designed to meet your business objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devServices.map((service, index) => (
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
              Why Choose Our <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform -rotate-2">Dev Services</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Discover the advantages of partnering with us for your software development needs
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
              Modern technologies and frameworks to build robust and scalable applications
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

      {/* Platforms Section */}
      <section className="section-padding bg-brand-yellow border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-black transform -rotate-1">
              Platforms We <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Develop For</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Comprehensive development across all major platforms and application types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform}
                className="bg-white p-4 border-2 border-black shadow-neo text-center hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-black text-black uppercase">{platform}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase transform rotate-1">
              Our Development <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform -rotate-2">Process</span>
            </h2>
            <p className="text-xl font-bold text-black">
              A proven methodology to deliver high-quality software solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understand requirements, define scope, and create detailed project roadmap"
              },
              {
                step: "02",
                title: "Design",
                description: "Create UI/UX designs and establish technical architecture"
              },
              {
                step: "03",
                title: "Development",
                description: "Build features with continuous testing and quality assurance"
              },
              {
                step: "04",
                title: "Deployment",
                description: "Deploy to production and provide ongoing maintenance"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center bg-white p-6 border-2 border-black shadow-neo h-full flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-brand-yellow border-2 border-black shadow-neo flex items-center justify-center text-2xl font-black text-black mb-6 transform -rotate-3">
                  {process.step}
                </div>
                <h3 className="text-xl font-black text-black mb-3 uppercase">{process.title}</h3>
                <p className="text-black font-medium text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-brand-blue border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-white transform -rotate-1">
              Our <span className="bg-brand-yellow text-black px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Development</span> Success
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center p-6 bg-white border-2 border-black shadow-neo"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-brand-blue text-4xl font-black mb-2">{stat.number}</div>
                <div className="text-black font-bold uppercase text-sm">{stat.label}</div>
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
              Ready to Build Your <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Software Solution</span>?
            </h2>
            
            <p className="text-xl text-black font-bold mb-8 max-w-2xl mx-auto">
              Let's discuss how our development expertise can help you create innovative software solutions that drive your business forward.
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

export default SoftwareDevelopment;
