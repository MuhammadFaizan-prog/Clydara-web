import { Brain, Bot, MessageSquare, Database, ChartLine, Bug, Wrench } from "lucide-react";
import ServiceCard from "../services/ServiceCard";
import { motion } from "framer-motion";

const AIServiceSection = () => {
  const aiServices = [
    {
      title: "AI & ML Integrations",
      description: "Integrate cutting-edge AI and ML capabilities into your existing systems to enhance functionality and decision-making.",
      icon: <Brain />,
      link: "/services/ai/integrations"
    },
    {
      title: "AI Automation Solutions",
      description: "Automate routine tasks and workflows with intelligent AI systems that learn and improve over time.",
      icon: <Bot />,
      link: "/services/ai/automation"
    },
    {
      title: "Chatbot Development",
      description: "Create intelligent conversational agents that engage with your customers, answer questions, and provide assistance.",
      icon: <MessageSquare />,
      link: "/services/ai/chatbots"
    },
    {
      title: "Intelligent Data Processing",
      description: "Process and analyze large datasets with AI-powered tools that extract valuable insights and patterns.",
      icon: <Database />,
      link: "/services/ai/data-processing"
    },
    {
      title: "Predictive Analytics",
      description: "Leverage AI to forecast trends, behaviors, and outcomes based on historical data patterns.",
      icon: <ChartLine />,
      link: "/services/ai/predictive-analytics"
    },
    {
      title: "Software Testing & QA",
      description: "Ensure software quality with AI-driven testing methodologies that identify issues before they impact users.",
      icon: <Bug />,
      link: "/services/ai/testing"
    },
    {
      title: "App Maintenance & Support",
      description: "Keep your applications running smoothly with proactive AI-powered maintenance and support services.",
      icon: <Wrench />,
      link: "/services/ai/maintenance"
    }
  ];

  return (
    <section className="section-padding bg-brand-yellow border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            AI & Automation <span className="bg-white px-2 border-2 border-black shadow-neo transform -rotate-2 inline-block">Solutions</span>
          </h2>
          <p className="text-xl text-black font-bold">
            Harness the power of artificial intelligence to automate tasks, gain insights, and create smarter solutions for your business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                category="AI"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServiceSection;
