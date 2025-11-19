
import { Users, Briefcase, Monitor, Globe } from "lucide-react";
import ServiceCard from "../services/ServiceCard";
import { motion } from "framer-motion";

const StaffAugmentationSection = () => {
  const staffServices = [
    {
      title: "Hire Developers & Tech Teams",
      description: "Access skilled developers and complete tech teams on demand to scale your projects quickly and efficiently.",
      icon: <Users />,
      link: "/services/staff/developers"
    },
    {
      title: "HR Recruitment Solutions",
      description: "Find the perfect talent with our specialized tech recruitment services tailored to your company's needs.",
      icon: <Briefcase />,
      link: "/services/staff/recruitment"
    },
    {
      title: "Remote Team Management",
      description: "Efficiently manage distributed teams with our tools and methodologies designed for remote collaboration.",
      icon: <Monitor />,
      link: "/services/staff/remote-teams"
    },
    {
      title: "Resource Outsourcing",
      description: "Reduce operational costs and focus on your core business by outsourcing specific roles and projects.",
      icon: <Globe />,
      link: "/services/staff/outsourcing"
    }
  ];

  return (
    <section className="section-padding bg-brand-yellow border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            Staff Augmentation & <span className="bg-white px-2 border-2 border-black shadow-neo transform -rotate-1 inline-block">Recruitment</span>
          </h2>
          <p className="text-xl text-black font-bold">
            Build your ideal tech team with our flexible staffing solutions and expert recruitment services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {staffServices.map((service, index) => (
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
                category="Staffing"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentationSection;
