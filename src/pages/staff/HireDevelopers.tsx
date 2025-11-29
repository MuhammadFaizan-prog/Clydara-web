import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Layout, Smartphone, Server, Cloud, CheckCircle, Zap, Users } from "lucide-react";
import PageLayout from "../../components/layout/PageLayout";
import { scrollToContact } from "@/utils/scrollToContact";

const HireDevelopers = () => {
  const roles = [
    {
      title: "Frontend Developers",
      skills: ["React", "Vue", "Angular", "Next.js", "Tailwind CSS"],
      icon: <Layout size={32} />
    },
    {
      title: "Backend Developers",
      skills: ["Node.js", "Python", "Java", "Go", ".NET"],
      icon: <Server size={32} />
    },
    {
      title: "Mobile Developers",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      icon: <Smartphone size={32} />
    },
    {
      title: "Full Stack Developers",
      skills: ["MERN", "MEAN", "LAMP", "Jamstack"],
      icon: <Code size={32} />
    },
    {
      title: "DevOps Engineers",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      icon: <Cloud size={32} />
    },
    {
      title: "Database Experts",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      icon: <Database size={32} />
    }
  ];

  const benefits = [
    "Top 1% of Tech Talent",
    "Time-to-Hire < 48 Hours",
    "Risk-Free Trial Period",
    "Timezone Aligned",
    "Dedicated Success Manager",
    "Flexible Scaling"
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-yellow border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black uppercase transform -rotate-1">
              Hire Developers & <span className="text-white bg-black px-4 transform rotate-2 inline-block">Tech Teams</span>
            </h1>
            <p className="text-xl md:text-2xl text-black font-bold border-2 border-black bg-white shadow-neo inline-block px-6 py-3 transform rotate-1">
              Scale your engineering capacity with world-class talent
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
                Build Your <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Dream Team</span>
              </h2>
              
              <div className="bg-brand-pale-blue border-2 border-black shadow-neo p-6 mb-8">
                <p className="text-black font-medium text-lg mb-4">
                  Stop wasting time sifting through resumes. We provide pre-vetted, senior-level developers who are ready to join your team immediately.
                </p>
                <p className="text-black font-medium text-lg">
                  Whether you need a single developer or a complete cross-functional team, we match you with the right talent based on your tech stack, industry, and company culture.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 font-bold">
                    <CheckCircle className="text-brand-blue" size={24} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-black text-white font-black uppercase border-2 border-black shadow-neo hover:bg-gray-900 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg"
              >
                Start Hiring <ArrowRight className="ml-2" size={24} />
              </button>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border-2 border-black shadow-neo-xl p-8 transform rotate-2">
                <Users size={64} className="mb-6 text-brand-blue" />
                <h3 className="text-2xl font-black mb-4 uppercase">Why Choose Our Developers?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-brand-yellow p-1 border border-black rounded-full mt-1">
                      <Zap size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold">Technical Excellence</h4>
                      <p className="text-sm">Rigorous technical assessments and code reviews.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-brand-yellow p-1 border border-black rounded-full mt-1">
                      <Zap size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold">Communication Skills</h4>
                      <p className="text-sm">Fluent English and proactive communication style.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-brand-yellow p-1 border border-black rounded-full mt-1">
                      <Zap size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold">Cultural Fit</h4>
                      <p className="text-sm">Matched to align with your team's values and workflow.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="section-padding bg-brand-blue border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-white transform -rotate-1">
              Roles We <span className="bg-brand-yellow text-black px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Provide</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                className="bg-white p-6 border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-brand-pale-blue p-3 border-2 border-black shadow-neo inline-flex mb-4">
                  {role.icon}
                </div>
                <h3 className="text-xl font-black mb-3 uppercase">{role.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map(skill => (
                    <span key={skill} className="bg-gray-100 px-2 py-1 text-sm font-bold border border-black rounded-none">
                      {skill}
                    </span>
                  ))}
                </div>
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
              Ready to <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Scale?</span>
            </h2>
            <p className="text-xl text-black font-bold mb-8 max-w-2xl mx-auto">
              Get matched with the perfect developers for your project within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-black text-white font-black uppercase border-2 border-black shadow-neo hover:bg-gray-900 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg"
              >
                Hire Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HireDevelopers;
