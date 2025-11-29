
import { Globe, Smartphone, Code, Database, Link, Cloud, Cog } from "lucide-react";
import ServiceCard from "../services/ServiceCard";
import { motion } from "framer-motion";

const DevelopmentServiceSection = () => {
  const devServices = [
    {
      title: "Web Development",
      description: "Create responsive, modern web applications with cutting-edge technologies and user-centric design.",
      icon: <Globe />,
      link: "/services/development/web"
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      icon: <Smartphone />,
      link: "/services/mobile"
    },
    {
      title: "Custom Software Development",
      description: "Develop bespoke software solutions tailored to your specific business requirements and challenges.",
      icon: <Code />,
      link: "/services/development/custom"
    },
    {
      title: "CRM & ERP Solutions",
      description: "Implement and customize enterprise systems to streamline operations and enhance business efficiency.",
      icon: <Database />,
      link: "/services/development/crm-erp"
    },
    {
      title: "API Development & Integration",
      description: "Create and integrate APIs to connect your systems and enable seamless data exchange between applications.",
      icon: <Link />,
      link: "/services/development/api"
    },
    {
      title: "Cloud Solutions",
      description: "Harness the power of cloud technology for scalable, secure, and cost-effective infrastructure solutions.",
      icon: <Cloud />,
      link: "/services/cloud"
    },
    {
      title: "DevOps Services",
      description: "Implement DevOps practices to improve collaboration, increase deployment frequency, and ensure product quality.",
      icon: <Cog />,
      link: "/services/development/devops"
    }
  ];

  return (
    <section className="section-padding bg-white border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            Software <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo transform rotate-1 inline-block">Development</span>
          </h2>
          <p className="text-xl text-black font-bold">
            From concept to deployment, we deliver robust software solutions tailored to your unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devServices.map((service, index) => (
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
                category="Development"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentServiceSection;
