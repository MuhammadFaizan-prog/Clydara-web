import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase, Monitor, Globe, Search, Clock, Shield, TrendingUp, Zap, Target, Award } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { scrollToContact } from "@/utils/scrollToContact";
import staffAugmentationImg from '../assets/services/staff-augmentation.png';

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

const StaffAugmentation = () => {
  const staffingServices = [
    {
      title: "Hire Developers & Tech Teams",
      description: "Access skilled developers and complete tech teams on demand to scale your projects quickly and efficiently.",
      icon: <Users size={32} />
    },
    {
      title: "HR Recruitment Solutions",
      description: "Find the perfect talent with our specialized tech recruitment services tailored to your company's needs.",
      icon: <Briefcase size={32} />
    },
    {
      title: "Remote Team Management",
      description: "Efficiently manage distributed teams with our tools and methodologies designed for remote collaboration.",
      icon: <Monitor size={32} />
    },
    {
      title: "Resource Outsourcing",
      description: "Reduce operational costs and focus on your core business by outsourcing specific roles and projects.",
      icon: <Globe size={32} />
    },
    {
      title: "Talent Acquisition",
      description: "Streamlined hiring process with pre-vetted candidates and comprehensive skill assessments.",
      icon: <Search size={32} />
    },
    {
      title: "Project-Based Staffing",
      description: "Flexible staffing solutions for specific projects with defined timelines and deliverables.",
      icon: <Clock size={32} />
    }
  ];

  const benefits = [
    {
      title: "Rapid Scaling",
      description: "Scale your team up or down quickly based on project requirements and business needs",
      icon: <Zap size={32} />
    },
    {
      title: "Cost Efficiency",
      description: "Reduce hiring costs, overhead, and training expenses while maintaining quality",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Expert Talent",
      description: "Access to pre-vetted, experienced professionals with proven track records",
      icon: <Award size={32} />
    },
    {
      title: "Risk Mitigation",
      description: "Minimize hiring risks with our comprehensive screening and guarantee processes",
      icon: <Shield size={32} />
    }
  ];

  const roles = [
    "Frontend Developers", "Backend Developers", "Full-Stack Developers", "Mobile Developers",
    "DevOps Engineers", "Data Scientists", "UI/UX Designers", "Project Managers",
    "QA Engineers", "System Architects", "Cloud Engineers", "AI/ML Engineers"
  ];

  const technologies = [
    "React", "Node.js", "Python", "Java", "C#", "PHP", "Ruby", "Go",
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "MongoDB",
    "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "TensorFlow", "PyTorch"
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase transform -rotate-1">
              Staff Augmentation
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold bg-black inline-block px-4 py-2 transform rotate-1 border-2 border-white shadow-neo">
              Build your ideal tech team with flexible staffing solutions
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
                Scale Your Team with <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Top Talent</span>
              </h2>
              
              <div className="bg-white border-2 border-black shadow-neo p-6 mb-8 transform rotate-1">
                <p className="text-black font-medium text-lg mb-4">
                  Our Staff Augmentation and Recruitment services provide you with access to world-class technical talent when you need it most. Whether you're looking to scale your development team, fill specialized roles, or manage remote teams effectively.
                </p>
                
                <p className="text-black font-medium text-lg">
                  With our extensive network of pre-vetted professionals and proven recruitment processes, we help you build high-performing teams that drive innovation and deliver exceptional results.
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
                    src={staffAugmentationImg}
                    alt="Team Collaboration" 
                    className="w-full border-2 border-black grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white p-4 border-2 border-black shadow-neo transform -rotate-2 z-10">
                  <div className="font-black text-brand-blue text-xl uppercase">EXPERT TEAM</div>
                  <div className="text-sm font-bold text-black">Talent Solutions</div>
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
              Our Staffing <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2 text-brand-blue">Solutions</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Comprehensive staffing and recruitment services designed to meet your unique business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffingServices.map((service, index) => (
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
              Why Choose Our <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform -rotate-2">Staffing</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Discover the advantages of partnering with us for your staffing and recruitment needs
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

      {/* Roles Section */}
      <section className="section-padding bg-black text-white border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-white">
              Roles We <span className="text-brand-yellow">Specialize In</span>
            </h2>
            <p className="text-xl font-bold text-gray-300">
              Access to a diverse pool of skilled professionals across all technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={role}
                className="bg-white p-4 border-2 border-white shadow-[4px_4px_0px_#2563EB] text-center hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-black text-black uppercase">{role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-brand-yellow border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-black transform -rotate-1">
              <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Technologies</span> Our Experts Master
            </h2>
            <p className="text-xl font-bold text-black">
              Our professionals are proficient in the latest technologies and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-white p-4 border-2 border-black shadow-neo text-center hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
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

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase transform rotate-1">
              Our Recruitment <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform -rotate-2">Process</span>
            </h2>
            <p className="text-xl font-bold text-black">
              A streamlined approach to finding and placing the perfect talent for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Analysis",
                description: "Understand your specific needs, culture, and project requirements"
              },
              {
                step: "02",
                title: "Sourcing",
                description: "Source and screen candidates from our extensive network"
              },
              {
                step: "03",
                title: "Matching",
                description: "Evaluate skills and ensure cultural fit with your team"
              },
              {
                step: "04",
                title: "Onboarding",
                description: "Facilitate smooth integration and provide ongoing support"
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
              Our <span className="bg-brand-yellow text-black px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Success</span> in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "200+", label: "Skilled Developers" },
              { number: "50+", label: "Companies Served" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "2-3", label: "Weeks Avg Time" }
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
              Ready to Build Your <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Dream Team</span>?
            </h2>
            
            <p className="text-xl text-black font-bold mb-8 max-w-2xl mx-auto">
              Let's discuss how our staffing solutions can help you scale your team, fill critical roles, and achieve your business objectives.
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

export default StaffAugmentation;
