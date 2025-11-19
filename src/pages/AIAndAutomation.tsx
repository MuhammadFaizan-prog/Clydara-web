import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Bot, MessageSquare, Database, ChartLine, Bug, Wrench, Zap, Cpu, Target, TrendingUp } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { scrollToContact } from "@/utils/scrollToContact";
import aiServiceImg from '../assets/services/ai-service.png';

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
      <div className="bg-brand-yellow p-3 border-2 border-black inline-flex items-center justify-center text-black w-12 h-12 mb-4 shadow-neo-sm">
        {icon}
      </div>
      <h3 className="text-xl font-black uppercase mb-2">{title}</h3>
      <p className="text-black font-medium">{description}</p>
    </motion.div>
  );
};

const AIAndAutomation = () => {
  const aiServices = [
    {
      title: "AI & ML Integrations",
      description: "Seamlessly integrate cutting-edge AI and machine learning capabilities into your existing systems to enhance functionality and decision-making processes.",
      icon: <Brain size={24} />
    },
    {
      title: "Intelligent Automation",
      description: "Automate routine tasks and complex workflows with AI systems that learn, adapt, and improve over time to maximize efficiency.",
      icon: <Bot size={24} />
    },
    {
      title: "Chatbot Development",
      description: "Create intelligent conversational agents that engage with customers, answer questions, and provide 24/7 assistance across multiple channels.",
      icon: <MessageSquare size={24} />
    },
    {
      title: "Data Processing & Analytics",
      description: "Process and analyze large datasets with AI-powered tools that extract valuable insights, patterns, and actionable intelligence.",
      icon: <Database size={24} />
    },
    {
      title: "Predictive Analytics",
      description: "Leverage AI to forecast trends, behaviors, and outcomes based on historical data patterns for strategic decision-making.",
      icon: <ChartLine size={24} />
    },
    {
      title: "AI-Powered Testing",
      description: "Ensure software quality with AI-driven testing methodologies that identify issues before they impact users.",
      icon: <Bug size={24} />
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and streamline workflows to boost productivity by up to 60%",
      icon: <Zap size={24} />
    },
    {
      title: "Enhanced Decision Making",
      description: "Leverage AI insights to make data-driven decisions with higher accuracy and confidence",
      icon: <Target size={24} />
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation and optimized resource allocation",
      icon: <TrendingUp size={24} />
    },
    {
      title: "24/7 Availability",
      description: "Provide round-the-clock service and support through AI-powered systems",
      icon: <Cpu size={24} />
    }
  ];

  const technologies = [
    "OpenAI GPT Models", "TensorFlow", "PyTorch", "Natural Language Processing",
    "Computer Vision", "Machine Learning", "Deep Learning", "Neural Networks",
    "Predictive Modeling", "Data Mining", "Automated Testing", "Process Automation"
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ textShadow: '4px 4px 0 #000' }}>
              AI & Automation Services
            </h1>
            <p className="text-xl md:text-2xl font-bold text-black bg-white inline-block px-4 py-2 border-2 border-black shadow-neo transform -rotate-1">
              Transform your business with intelligent automation and cutting-edge AI solutions
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
                Harness the Power of <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo-sm">Artificial Intelligence</span>
              </h2>
              
              <div className="bg-white p-6 border-2 border-black shadow-neo mb-8">
                <p className="text-black font-medium text-lg mb-4">
                  Our AI & Automation services empower businesses to leverage the latest advancements in artificial intelligence and machine learning. We help organizations automate complex processes, gain valuable insights from data, and create intelligent systems that adapt and improve over time.
                </p>
                
                <p className="text-black font-medium text-lg">
                  From intelligent chatbots that enhance customer experience to predictive analytics that drive strategic decisions, our AI solutions are designed to deliver measurable business impact and competitive advantage.
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
                    src={aiServiceImg}
                    alt="AI Technology" 
                    className="rounded-none border-2 border-black grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                <div className="absolute -top-6 -left-6 bg-brand-yellow p-4 border-2 border-black shadow-neo transform rotate-2">
                  <div className="font-black text-black uppercase">AI POWERED</div>
                  <div className="text-sm font-bold text-black">Innovation</div>
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
              Our AI & Automation <span className="text-brand-blue underline decoration-4 underline-offset-4">Solutions</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Comprehensive AI services designed to transform your business operations and drive innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
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
              Why Choose Our <span className="bg-white px-2 border-2 border-black shadow-neo-sm">AI Solutions</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Discover the transformative benefits of implementing AI and automation in your business
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

      {/* Technologies Section */}
      <section className="section-padding bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-6">
              AI <span className="text-brand-blue">Technologies</span> We Use
            </h2>
            <p className="text-xl font-bold text-black">
              Cutting-edge technologies and frameworks to build robust AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-brand-pale-blue p-4 border-2 border-black shadow-neo text-center hover:bg-brand-blue hover:text-white transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold uppercase">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-brand-pale-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-6">
              Our AI Implementation <span className="bg-brand-yellow px-2 border-2 border-black">Process</span>
            </h2>
            <p className="text-xl font-bold text-black">
              A systematic approach to delivering successful AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Understand your business needs and identify AI opportunities"
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "Develop a comprehensive AI implementation roadmap"
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build and rigorously test AI models and systems"
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description: "Deploy solutions and continuously optimize performance"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center bg-white p-6 border-2 border-black shadow-neo h-full"
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

      {/* CTA Section */}
      <section className="py-20 bg-black text-white border-t-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Ready to Transform Your Business with <span className="text-brand-blue">AI & Automation</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
              Let's discuss how our AI solutions can help you automate processes, gain insights, and achieve your business goals.
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

export default AIAndAutomation;
