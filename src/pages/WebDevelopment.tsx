import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Layout, ShoppingCart, Database, Zap, Shield, Target, TrendingUp, Code, Smartphone, Search } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { scrollToContact } from "@/utils/scrollToContact";
import softwareDevImg from '../assets/services/software-development.png'; // Reusing image for now, or should I use a different one if available? I'll stick to this one or maybe check assets later.

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

const WebDevelopment = () => {
  const webServices = [
    {
      title: "Custom Website Design",
      description: "Unique, brand-centric designs that captivate your audience and communicate your message effectively.",
      icon: <Layout size={32} />
    },
    {
      title: "E-commerce Solutions",
      description: "Robust online stores with secure payment gateways, inventory management, and seamless checkout experiences.",
      icon: <ShoppingCart size={32} />
    },
    {
      title: "Content Management Systems (CMS)",
      description: "Easy-to-manage websites using platforms like WordPress, Strapi, or custom-built CMS solutions.",
      icon: <Database size={32} />
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Web applications that offer a native app-like experience with offline capabilities and fast performance.",
      icon: <Smartphone size={32} />
    },
    {
      title: "Single Page Applications (SPA)",
      description: "Fast, responsive applications that load a single HTML page and dynamically update content as the user interacts.",
      icon: <Zap size={32} />
    },
    {
      title: "SEO Optimization",
      description: "Websites built with SEO best practices to ensure high visibility and ranking on search engines.",
      icon: <Search size={32} />
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support, updates, and security checks to keep your website running smoothly and securely.",
      icon: <Shield size={32} />
    },
    {
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs to extend the functionality of your website.",
      icon: <Code size={32} />
    }
  ];

  const benefits = [
    {
      title: "Responsive Design",
      description: "Websites that look and perform perfectly on all devices, from desktops to smartphones",
      icon: <Smartphone size={32} />
    },
    {
      title: "High Performance",
      description: "Optimized code and assets for lightning-fast load times and smooth user interactions",
      icon: <Zap size={32} />
    },
    {
      title: "Scalability",
      description: "Architectures designed to grow with your business and handle increasing traffic",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Conversion Focused",
      description: "Designs and layouts optimized to convert visitors into customers and leads",
      icon: <Target size={32} />
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PHP", "WordPress", "Shopify",
    "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS", "Vercel", "Framer Motion", "Three.js"
  ];

  const platforms = [
    "Corporate Websites", "E-commerce Stores", "Portfolios", "Blogs & News Portals",
    "Educational Platforms", "Real Estate Listings", "Booking Systems", "Social Networks"
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase transform -rotate-1">
              Web Development
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold bg-black inline-block px-4 py-2 transform rotate-1 border-2 border-white shadow-neo">
              Crafting digital experiences that drive growth and engagement
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
                Your Vision, <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Our Code</span>
              </h2>
              
              <div className="bg-white border-2 border-black shadow-neo p-6 mb-8 transform rotate-1">
                <p className="text-black font-medium text-lg mb-4">
                  In today's digital-first world, your website is often the first point of contact for potential customers. We build websites that not only look stunning but also perform exceptionally well, driving conversions and business growth.
                </p>
                
                <p className="text-black font-medium text-lg">
                  From simple brochure sites to complex web applications, our team of expert developers and designers works closely with you to bring your vision to life using the latest web technologies.
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
                    alt="Web Development" 
                    className="w-full border-2 border-black grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white p-4 border-2 border-black shadow-neo transform -rotate-2 z-10">
                  <div className="font-black text-brand-blue text-xl uppercase">WEB EXPERTS</div>
                  <div className="text-sm font-bold text-black">Digital Solutions</div>
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
              Our Web <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2 text-brand-blue">Services</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Comprehensive web development solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
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
              Why Choose Our <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform -rotate-2">Web Dev</span>
            </h2>
            <p className="text-xl font-bold text-black">
              We deliver websites that make a lasting impact
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
              Cutting-edge tools for modern web experiences
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
              What We <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Build</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Diverse web solutions for every business need
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
              Our Web <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform -rotate-2">Process</span>
            </h2>
            <p className="text-xl font-bold text-black">
              From concept to launch, we're with you every step of the way
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Strategy",
                description: "We analyze your goals and target audience to create a winning strategy."
              },
              {
                step: "02",
                title: "Design",
                description: "We craft beautiful, user-centric designs that align with your brand."
              },
              {
                step: "03",
                title: "Development",
                description: "We build your site using clean, efficient code and modern best practices."
              },
              {
                step: "04",
                title: "Launch",
                description: "We deploy your site and ensure everything runs smoothly."
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center border-4 border-black p-8 md:p-12 shadow-neo-xl bg-brand-pale-blue">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase transform -rotate-1">
              Ready to Launch Your <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Website</span>?
            </h2>
            
            <p className="text-xl text-black font-bold mb-8 max-w-2xl mx-auto">
              Let's discuss how we can build a website that drives results for your business.
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

export default WebDevelopment;
