import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Globe, Clock, Shield, MessageSquare, Layout } from "lucide-react";
import PageLayout from "../../components/layout/PageLayout";
import { scrollToContact } from "@/utils/scrollToContact";

const RemoteTeamManagement = () => {
  const tools = [
    {
      title: "Communication",
      items: ["Slack", "Microsoft Teams", "Discord", "Zoom"],
      icon: <MessageSquare size={32} />
    },
    {
      title: "Project Management",
      items: ["Jira", "Trello", "Asana", "Linear"],
      icon: <Layout size={32} />
    },
    {
      title: "Time Tracking",
      items: ["Hubstaff", "Harvest", "Toggl", "Clockify"],
      icon: <Clock size={32} />
    },
    {
      title: "Security",
      items: ["VPN", "2FA", "SSO", "Data Encryption"],
      icon: <Shield size={32} />
    }
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-pale-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black uppercase transform -rotate-1">
              Remote Team <span className="bg-brand-yellow px-4 border-2 border-black shadow-neo transform rotate-2 inline-block">Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-black font-bold bg-white inline-block px-6 py-3 border-2 border-black shadow-neo transform rotate-1">
              Efficiently manage distributed teams with our proven methodologies
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
                Seamless <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Collaboration</span>
              </h2>
              
              <div className="bg-brand-yellow border-2 border-black shadow-neo p-6 mb-8">
                <p className="text-black font-medium text-lg mb-4">
                  Managing a remote team comes with its own set of challenges. We provide the infrastructure, tools, and processes to make it feel like everyone is in the same room.
                </p>
                <p className="text-black font-medium text-lg">
                  From onboarding to daily standups, we ensure your distributed team operates at peak efficiency with complete transparency.
                </p>
              </div>

              <button 
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-black text-white font-black uppercase border-2 border-black shadow-neo hover:bg-gray-900 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg"
              >
                Optimize Your Team <ArrowRight className="ml-2" size={24} />
              </button>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border-2 border-black shadow-neo-xl p-8 transform rotate-1">
                <Globe size={64} className="mb-6 text-brand-blue" />
                <h3 className="text-2xl font-black mb-4 uppercase">The Remote Advantage</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Monitor className="text-brand-blue" />
                    <span className="font-bold">Access Global Talent Pools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="text-brand-blue" />
                    <span className="font-bold">24/7 Productivity Cycle</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="text-brand-blue" />
                    <span className="font-bold">Reduced Overhead Costs</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding bg-black text-white border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-white transform -rotate-1">
              Tools We <span className="text-brand-yellow">Master</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                className="bg-white text-black p-6 border-2 border-white shadow-[4px_4px_0px_#2563EB] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-brand-pale-blue p-3 border-2 border-black shadow-neo inline-flex mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-black mb-3 uppercase">{tool.title}</h3>
                <ul className="space-y-2">
                  {tool.items.map(item => (
                    <li key={item} className="font-medium border-b border-gray-200 pb-1 last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center border-4 border-black p-8 md:p-12 shadow-neo-xl bg-brand-yellow">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase transform -rotate-1">
              Go Remote <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Confidently</span>
            </h2>
            <p className="text-xl text-black font-bold mb-8 max-w-2xl mx-auto">
              Let us handle the logistics so you can focus on the results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-black text-white font-black uppercase border-2 border-black shadow-neo hover:bg-gray-900 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg"
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

export default RemoteTeamManagement;
