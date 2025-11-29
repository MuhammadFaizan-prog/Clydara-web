import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Database, Users, BarChart3, Settings, RefreshCw, Shield, Target, TrendingUp, Briefcase, Layers, Box } from "lucide-react";
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

const CrmErpSolutions = () => {
  const crmErpServices = [
    {
      title: "Custom CRM Development",
      description: "Tailored Customer Relationship Management systems to manage interactions, sales pipelines, and customer data.",
      icon: <Users size={32} />
    },
    {
      title: "ERP Implementation",
      description: "Comprehensive Enterprise Resource Planning solutions to integrate and manage core business processes.",
      icon: <Database size={32} />
    },
    {
      title: "Salesforce Solutions",
      description: "Implementation, customization, and integration of Salesforce CRM to optimize your sales and marketing efforts.",
      icon: <Briefcase size={32} />
    },
    {
      title: "SAP Integration",
      description: "Expert SAP consulting and integration services to streamline your enterprise operations.",
      icon: <Layers size={32} />
    },
    {
      title: "Data Migration",
      description: "Secure and efficient migration of data from legacy systems to modern CRM and ERP platforms.",
      icon: <RefreshCw size={32} />
    },
    {
      title: "Process Automation",
      description: "Automating manual workflows within your CRM/ERP to save time and reduce errors.",
      icon: <Settings size={32} />
    },
    {
      title: "Reporting & Analytics",
      description: "Custom dashboards and reports to provide actionable insights into your business performance.",
      icon: <BarChart3 size={32} />
    },
    {
      title: "Inventory Management",
      description: "Solutions to track inventory, manage supply chains, and optimize stock levels.",
      icon: <Box size={32} />
    }
  ];

  const benefits = [
    {
      title: "Centralized Data",
      description: "A single source of truth for all your business data, accessible across departments",
      icon: <Database size={32} />
    },
    {
      title: "Improved Efficiency",
      description: "Streamlined processes and automation reduce manual work and bottlenecks",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Better Insights",
      description: "Real-time analytics and reporting enable data-driven decision making",
      icon: <Target size={32} />
    },
    {
      title: "Enhanced CX",
      description: "Better customer data management leads to improved customer service and satisfaction",
      icon: <Users size={32} />
    }
  ];

  const platforms = [
    "Salesforce", "HubSpot", "Microsoft Dynamics 365", "SAP", "Oracle NetSuite",
    "Zoho CRM", "Odoo", "Custom Solutions"
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase transform -rotate-1">
              CRM & ERP Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold bg-black inline-block px-4 py-2 transform rotate-1 border-2 border-white shadow-neo">
              Streamline operations and empower your business
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
                Optimize Your <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Business Core</span>
              </h2>
              
              <div className="bg-white border-2 border-black shadow-neo p-6 mb-8 transform rotate-1">
                <p className="text-black font-medium text-lg mb-4">
                  Efficient management of customer relationships and enterprise resources is crucial for growth. Our CRM and ERP solutions help you centralize data, automate workflows, and gain valuable insights.
                </p>
                
                <p className="text-black font-medium text-lg">
                  Whether you need a custom-built solution or implementation of leading platforms like Salesforce or SAP, we ensure your systems work seamlessly to support your business goals.
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
                    alt="CRM & ERP Solutions" 
                    className="w-full border-2 border-black grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white p-4 border-2 border-black shadow-neo transform -rotate-2 z-10">
                  <div className="font-black text-brand-blue text-xl uppercase">ENTERPRISE</div>
                  <div className="text-sm font-bold text-black">System Solutions</div>
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
              Our Enterprise <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2 text-brand-blue">Services</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Comprehensive solutions for managing your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmErpServices.map((service, index) => (
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
              Why Invest in <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform -rotate-2">CRM & ERP</span>?
            </h2>
            <p className="text-xl font-bold text-black">
              Transform your operations and drive efficiency
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

      {/* Platforms Section */}
      <section className="section-padding bg-brand-yellow border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-black transform -rotate-1">
              Platforms We <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Support</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Expertise in leading enterprise software ecosystems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center border-4 border-black p-8 md:p-12 shadow-neo-xl bg-brand-pale-blue">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase transform -rotate-1">
              Ready to Streamline Your <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Operations</span>?
            </h2>
            
            <p className="text-xl text-black font-bold mb-8 max-w-2xl mx-auto">
              Let's discuss how our CRM & ERP solutions can help you achieve operational excellence.
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

export default CrmErpSolutions;
