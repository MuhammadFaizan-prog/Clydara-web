import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Bot, MessageSquare, Database, ChartLine, Bug, Wrench, CheckCircle2, ArrowLeft } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { scrollToContact } from "@/utils/scrollToContact";

// Data for each service
const serviceData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  features: string[];
}> = {
  "integrations": {
    title: "AI & ML Integrations",
    subtitle: "Enhance Your Systems with Intelligence",
    description: "Integrate cutting-edge AI and Machine Learning capabilities directly into your existing software ecosystem. We help you bridge the gap between traditional software and modern intelligence, enabling your applications to learn, adapt, and make smarter decisions.",
    icon: <Brain size={48} />,
    benefits: [
      "Seamless integration with existing infrastructure",
      "Enhanced decision-making capabilities",
      "Automated pattern recognition",
      "Scalable AI architecture"
    ],
    features: [
      "Custom ML Model Deployment",
      "API-based AI Integration",
      "Legacy System Modernization",
      "Real-time Inference Engines"
    ]
  },
  "automation": {
    title: "AI Automation Solutions",
    subtitle: "Streamline Operations Intelligently",
    description: "Transform your business operations by automating routine tasks and complex workflows. Our intelligent automation solutions learn from your processes to improve efficiency, reduce errors, and free up your team to focus on strategic initiatives.",
    icon: <Bot size={48} />,
    benefits: [
      "Significant reduction in manual labor",
      "24/7 operational capability",
      "Consistent execution quality",
      "Rapid ROI through efficiency gains"
    ],
    features: [
      "Robotic Process Automation (RPA)",
      "Intelligent Document Processing",
      "Workflow Optimization",
      "Autonomous Agents"
    ]
  },
  "chatbots": {
    title: "Chatbot Development",
    subtitle: "Next-Gen Conversational AI",
    description: "Build sophisticated conversational agents that understand context, sentiment, and intent. Our chatbots go beyond simple scripts to provide genuine assistance, resolve support tickets, and guide users through complex processes.",
    icon: <MessageSquare size={48} />,
    benefits: [
      "Instant customer support response",
      "Reduced support team workload",
      "Multi-channel presence",
      "Personalized user interactions"
    ],
    features: [
      "NLP/NLU Integration",
      "Multi-platform Deployment",
      "Context-aware Conversations",
      "Sentiment Analysis"
    ]
  },
  "data-processing": {
    title: "Intelligent Data Processing",
    subtitle: "Turn Data into Actionable Insights",
    description: "Unlock the value hidden in your data. We use advanced AI algorithms to process, clean, and analyze large datasets, transforming raw information into structured, actionable intelligence that drives business growth.",
    icon: <Database size={48} />,
    benefits: [
      "Faster data throughput",
      "Higher data accuracy",
      "Automated anomaly detection",
      "Real-time processing capabilities"
    ],
    features: [
      "Unstructured Data Analysis",
      "Automated ETL Pipelines",
      "Computer Vision for Documents",
      "Natural Language Understanding"
    ]
  },
  "predictive-analytics": {
    title: "Predictive Analytics",
    subtitle: "Forecast the Future with Data",
    description: "Stop reacting and start predicting. Our predictive analytics solutions leverage historical data and advanced modeling to forecast trends, customer behaviors, and market shifts, giving you a decisive competitive edge.",
    icon: <ChartLine size={48} />,
    benefits: [
      "Proactive decision making",
      "Risk mitigation",
      "Optimized resource allocation",
      "Accurate demand forecasting"
    ],
    features: [
      "Time-series Forecasting",
      "Customer Churn Prediction",
      "Market Trend Analysis",
      "Risk Modeling"
    ]
  },
  "testing": {
    title: "Software Testing & QA",
    subtitle: "AI-Driven Quality Assurance",
    description: "Revolutionize your QA process with AI. We implement intelligent testing frameworks that automatically generate test cases, detect visual regressions, and identify potential bugs before they reach production.",
    icon: <Bug size={48} />,
    benefits: [
      "Faster release cycles",
      "Broader test coverage",
      "Early bug detection",
      "Reduced QA costs"
    ],
    features: [
      "Automated Test Generation",
      "Visual Regression Testing",
      "Self-healing Test Scripts",
      "Performance Anomaly Detection"
    ]
  },
  "maintenance": {
    title: "App Maintenance & Support",
    subtitle: "Proactive AI-Powered Care",
    description: "Keep your applications healthy with predictive maintenance. Our AI tools monitor system health, predict potential failures, and automate routine maintenance tasks to ensure maximum uptime and performance.",
    icon: <Wrench size={48} />,
    benefits: [
      "Minimized downtime",
      "Extended application lifespan",
      "Predictive issue resolution",
      "Optimized performance"
    ],
    features: [
      "Predictive Maintenance",
      "Automated Log Analysis",
      "Performance Monitoring",
      "Security Threat Detection"
    ]
  }
};

const AIServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return <Navigate to="/services/ai" replace />;
  }

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/services/ai" className="inline-flex items-center text-white font-bold mb-6 hover:underline">
              <ArrowLeft className="mr-2" size={20} /> Back to AI Services
            </Link>
            <div className="flex justify-center mb-6">
              <div className="bg-brand-yellow p-4 border-2 border-black shadow-neo transform -rotate-2">
                {service.icon}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ textShadow: '4px 4px 0 #000' }}>
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl font-bold text-black bg-white inline-block px-4 py-2 border-2 border-black shadow-neo transform rotate-1">
              {service.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Description & Features */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-black uppercase mb-6">Overview</h2>
                <p className="text-lg text-black font-medium mb-8 leading-relaxed border-l-4 border-brand-yellow pl-6">
                  {service.description}
                </p>

                <h3 className="text-2xl font-black uppercase mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, index) => (
                    <div key={index} className="bg-brand-pale-blue p-4 border-2 border-black shadow-neo flex items-center">
                      <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                      <span className="font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Benefits Sidebar */}
            <div className="lg:w-1/3">
              <motion.div
                className="bg-brand-yellow p-6 border-2 border-black shadow-neo sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-black uppercase mb-6 flex items-center">
                  <CheckCircle2 className="mr-2" /> Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start bg-white p-3 border-2 border-black">
                      <CheckCircle2 className="text-brand-blue mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="font-bold text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t-2 border-black">
                  <p className="font-bold mb-4">Ready to get started?</p>
                  <button
                    onClick={scrollToContact}
                    className="w-full py-3 bg-black text-white font-black uppercase border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all"
                  >
                    Contact Us
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-pale-blue border-t-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">
            Need a custom <span className="text-brand-blue">AI Solution?</span>
          </h2>
          <p className="text-xl font-bold mb-8 max-w-2xl mx-auto">
            We specialize in building tailored AI solutions that address your unique business challenges.
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-brand-blue text-white font-black uppercase border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            Let's Talk
          </button>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIServiceDetail;
