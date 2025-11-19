import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Server, Shield, Zap, Target, TrendingUp, Database, Globe, Lock, Settings, BarChart3 } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { scrollToContact } from "@/utils/scrollToContact";
import cloudSolutionsImg from '../assets/services/cloud-solutions.png';

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceFeature = ({ title, description, icon, delay = 0 }: ServiceFeatureProps) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-none border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="bg-brand-blue p-3 border-2 border-black inline-flex items-center justify-center text-white w-12 h-12 mb-4 shadow-neo-sm">
        {icon}
      </div>
      <h3 className="text-xl font-black uppercase mb-2">{title}</h3>
      <p className="text-black font-medium">{description}</p>
    </motion.div>
  );
};

const CloudSolutions = () => {
  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your existing infrastructure to the cloud with minimal downtime and maximum efficiency.",
      icon: <Cloud size={24} />
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "Design and implement scalable cloud infrastructure using AWS, Azure, or Google Cloud Platform.",
      icon: <Server size={24} />
    },
    {
      title: "DevOps & CI/CD",
      description: "Implement automated deployment pipelines and DevOps practices for faster, more reliable releases.",
      icon: <Settings size={24} />
    },
    {
      title: "Cloud Security",
      description: "Implement robust security measures to protect your cloud infrastructure and data.",
      icon: <Shield size={24} />
    },
    {
      title: "Database Management",
      description: "Set up and manage cloud databases with high availability, backup, and disaster recovery.",
      icon: <Database size={24} />
    },
    {
      title: "Load Balancing & Auto-scaling",
      description: "Ensure optimal performance with intelligent load balancing and automatic scaling capabilities.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Cloud Monitoring",
      description: "Monitor your cloud infrastructure with real-time analytics and proactive alerting systems.",
      icon: <Target size={24} />
    },
    {
      title: "Cost Optimization",
      description: "Optimize cloud costs while maintaining performance and reliability for your applications.",
      icon: <TrendingUp size={24} />
    }
  ];

  const benefits = [
    {
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand without upfront investments",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Cost Efficiency",
      description: "Reduce infrastructure costs with pay-as-you-go pricing and optimized resource usage",
      icon: <Target size={24} />
    },
    {
      title: "High Availability",
      description: "Ensure 99.9% uptime with redundant systems and disaster recovery solutions",
      icon: <Shield size={24} />
    },
    {
      title: "Global Reach",
      description: "Deploy applications globally with low-latency access for users worldwide",
      icon: <Globe size={24} />
    }
  ];

  const platforms = [
    "Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "DigitalOcean",
    "Heroku", "Vercel", "Netlify", "Cloudflare", "Alibaba Cloud", "IBM Cloud", "Oracle Cloud", "Linode"
  ];

  const services = [
    "Compute Services", "Storage Solutions", "Networking", "Database Services",
    "Security & Identity", "Monitoring & Logging", "Content Delivery", "API Management",
    "Serverless Computing", "Container Services", "Machine Learning", "IoT Platforms"
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ textShadow: '4px 4px 0 #000' }}>
              Cloud Solutions
            </h1>
            <p className="text-xl md:text-2xl font-bold text-black bg-white inline-block px-4 py-2 border-2 border-black shadow-neo transform rotate-1">
              Harness the power of cloud technology for scalable, secure, and cost-effective infrastructure solutions
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="section-padding bg-brand-pale-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black uppercase mb-6 transform -rotate-1">
                Cloud Infrastructure That <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo-sm">Scales</span> With You
              </h2>
              
              <div className="bg-white p-6 border-2 border-black shadow-neo mb-8">
                <p className="text-black font-medium text-lg mb-4">
                  Our Cloud Solutions services help businesses leverage the full potential of cloud computing to build scalable, secure, and cost-effective infrastructure. We specialize in cloud migration, infrastructure setup, and ongoing optimization across major cloud platforms.
                </p>
                
                <p className="text-black font-medium text-lg">
                  From initial cloud strategy to implementation and ongoing management, our cloud experts ensure your applications run efficiently in the cloud while maintaining security, performance, and cost optimization.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-black uppercase border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                  Get Started <ArrowRight className="ml-2" size={20} />
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
                <div className="bg-black p-0 rounded-none border-2 border-black shadow-neo-xl">
                  <img 
                    src={cloudSolutionsImg}
                    alt="Cloud Infrastructure" 
                    className="rounded-none border-2 border-black grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                <div className="absolute -top-6 -left-6 bg-brand-yellow p-4 border-2 border-black shadow-neo transform rotate-2">
                  <div className="font-black text-black uppercase">CLOUD FIRST</div>
                  <div className="text-sm font-bold text-black">Infrastructure</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 transform rotate-1">
              Our Cloud <span className="text-brand-blue underline decoration-4 underline-offset-4">Services</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Comprehensive cloud solutions designed to optimize your infrastructure and operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
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
      <section className="section-padding bg-brand-yellow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-black">
              Why Choose <span className="bg-white px-2 border-2 border-black shadow-neo-sm">Cloud Solutions</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Discover the transformative benefits of cloud computing for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex items-start space-x-4 bg-white p-6 border-2 border-black shadow-neo"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-brand-blue p-3 border-2 border-black text-white flex-shrink-0 shadow-neo-sm">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase mb-2">{benefit.title}</h3>
                  <p className="text-black font-medium">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section-padding bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-6">
              Cloud <span className="text-brand-blue">Platforms</span> We Work With
            </h2>
            <p className="text-xl font-bold text-black">
              Expertise across all major cloud platforms to provide the best solution for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform}
                className="bg-brand-pale-blue p-4 border-2 border-black shadow-neo text-center hover:bg-brand-blue hover:text-white transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold uppercase">{platform}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-brand-pale-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-6">
              Cloud <span className="bg-brand-yellow px-2 border-2 border-black">Services</span> We Provide
            </h2>
            <p className="text-xl font-bold text-black">
              Comprehensive cloud services to meet all your infrastructure and application needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service}
                className="bg-white p-4 border-2 border-black shadow-neo text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold uppercase">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-6">
              Our Cloud Implementation <span className="text-brand-blue underline decoration-4 underline-offset-4">Process</span>
            </h2>
            <p className="text-xl font-bold text-black">
              A systematic approach to successful cloud migration and implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description: "Evaluate current infrastructure and create comprehensive cloud migration strategy"
              },
              {
                step: "02",
                title: "Architecture Design",
                description: "Design scalable cloud architecture optimized for your specific requirements"
              },
              {
                step: "03",
                title: "Migration & Setup",
                description: "Execute migration with minimal downtime and implement security measures"
              },
              {
                step: "04",
                title: "Optimization & Support",
                description: "Monitor performance, optimize costs, and provide ongoing support"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center bg-brand-pale-blue p-6 border-2 border-black shadow-neo h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-brand-blue text-white border-2 border-black flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-neo-sm">
                  {process.step}
                </div>
                <h3 className="text-lg font-black uppercase mb-2">{process.title}</h3>
                <p className="text-black font-medium text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-brand-blue text-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ textShadow: '4px 4px 0 #000' }}>
              Our Cloud <span className="text-brand-yellow">Success</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "200+", label: "Cloud Projects" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "40%", label: "Cost Reduction" },
              { number: "24/7", label: "Monitoring" }
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
      <section className="py-20 bg-black text-white border-t-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Ready to Move to the <span className="text-brand-blue">Cloud</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
              Let's discuss how our cloud solutions can help you build scalable, secure, and cost-effective infrastructure for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-brand-blue text-white font-black uppercase border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 bg-transparent text-white font-black uppercase border-2 border-white hover:bg-white hover:text-black transition-colors"
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

export default CloudSolutions;
