
import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import { RollerCoaster } from "lucide-react";

const About = () => {
  const teamMembers = [
    { name: "Faizan", role: "CEO & Co-founder" },
    { name: "Rohan", role: "COO & Co-founder" },
    { name: "Subhan", role: "CGO" },
  ];
  const getInitials = (name) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase();
  };
  

  return (
    <PageLayout>
      {/* Header Banner */}
      <div className="relative bg-brand-blue text-white py-20 border-b-4 border-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">About Clydara</h1>
            <p className="text-xl text-white font-bold drop-shadow-md">
              We build intelligent software solutions that empower businesses to thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="section-padding bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-6 uppercase">
                Our <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo transform -rotate-2 inline-block">Story</span>
              </h2>
              
              <p className="text-black font-medium text-lg mb-4 border-l-4 border-black pl-4">
                Founded in 2024, Clydara began with a vision to bridge the gap between advanced AI technologies and practical business applications. Our founders, with backgrounds in software engineering and data science, saw the potential for AI to transform businesses across industries.
              </p>
              
              <p className="text-black font-medium text-lg mb-4">
                What started as a small team of passionate technologists has grown into a comprehensive software company offering cutting-edge AI solutions, custom software development, and specialized staff augmentation services to clients worldwide.
              </p>
              
              <p className="text-black font-medium text-lg">
                Today, we're proud to have helped over 100 companies across 15 countries implement AI-powered solutions that drive growth, efficiency, and innovation.
              </p>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="bg-black rounded-none p-0 border-2 border-black shadow-neo-xl">
                  <img 
                    src="/images/blog/ai-future.png" 
                    alt="Clydara Team" 
                    className="rounded-none border-2 border-black grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-none border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer">
                  <div className="font-black text-brand-blue text-xl">EST. 2024</div>
                  <div className="text-sm text-black font-bold uppercase">Innovation Journey</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="section-padding bg-brand-yellow border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-6 uppercase">
              Our Mission & <span className="bg-white px-2 border-2 border-black shadow-neo transform rotate-1 inline-block">Values</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-none border-2 border-black shadow-neo-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-black mb-4 uppercase border-b-4 border-brand-blue inline-block">Our Mission</h3>
              <p className="text-black font-medium text-lg">
                To empower businesses through intelligent technology solutions that solve real-world problems, drive growth, and create value. We aim to make advanced AI capabilities accessible and practical for companies of all sizes across industries.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-black text-white p-8 rounded-none border-2 border-black shadow-neo-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-brand-yellow mb-4 uppercase border-b-4 border-white inline-block">Our Vision</h3>
              <p className="text-white font-medium text-lg">
                To be the premier provider of AI-powered software solutions and tech talent, recognized globally for our innovation, expertise, and the measurable business impact we create for our clients. We envision a world where technology enhances human potential.
              </p>
            </motion.div>
          </div>
          
          <div className="mt-12 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-none border-2 border-black shadow-neo-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-black mb-6 uppercase">Our Core Values</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l-4 border-black pl-4 hover:bg-gray-50 transition-colors p-2">
                  <h4 className="font-black text-brand-blue mb-2 uppercase text-lg">Innovation</h4>
                  <p className="text-black font-medium">We constantly explore new technologies and methodologies to deliver cutting-edge solutions.</p>
                </div>
                
                <div className="border-l-4 border-black pl-4 hover:bg-gray-50 transition-colors p-2">
                  <h4 className="font-black text-brand-blue mb-2 uppercase text-lg">Excellence</h4>
                  <p className="text-black font-medium">We set high standards for our work and strive to exceed client expectations in everything we do.</p>
                </div>
                
                <div className="border-l-4 border-black pl-4 hover:bg-gray-50 transition-colors p-2">
                  <h4 className="font-black text-brand-blue mb-2 uppercase text-lg">Collaboration</h4>
                  <p className="text-black font-medium">We believe in the power of teamwork, both internally and with our clients, to achieve the best results.</p>
                </div>
                
                <div className="border-l-4 border-black pl-4 hover:bg-gray-50 transition-colors p-2">
                  <h4 className="font-black text-brand-blue mb-2 uppercase text-lg">Integrity</h4>
                  <p className="text-black font-medium">We operate with transparency, honesty, and ethical conduct in all our business dealings.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
     {/* Leadership Team */}
<section className="section-padding bg-white border-b-4 border-black">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-black mb-6 uppercase">
        Our <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo transform -rotate-1 inline-block">Leadership</span> Team
      </h2>
      <p className="text-xl text-black font-bold">
        Meet the experts leading our innovation and growth.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
      {teamMembers.map((member, index) => (
        <motion.div
          key={member.name}
          className="text-center w-64"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="relative mb-6 mx-auto w-48 h-48">
            {/* Background square */}
            <div className="absolute inset-0 bg-brand-blue border-2 border-black shadow-neo transform rotate-3"></div>

            {/* Initials-based Avatar */}
            <div className="relative z-10 w-full h-full bg-white border-2 border-black flex items-center justify-center hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-200">
              <span className="text-brand-dark-blue font-black text-6xl uppercase tracking-tighter">
                {getInitials(member.name)}
              </span>
            </div>

          </div>
          <h3 className="font-black text-2xl text-black mb-1 uppercase">{member.name}</h3>
          <p className="text-black font-bold border-b-2 border-brand-yellow inline-block pb-1">{member.role}</p>
        </motion.div>
      ))}
    </div>

  </div>
</section>


      
      {/* Company Stats */}
      <section className="section-padding bg-black text-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-6 uppercase">
              Our <span className="text-brand-yellow border-b-4 border-brand-blue">Impact</span> in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              className="text-center p-6 bg-white border-2 border-white shadow-[4px_4px_0px_#2563EB] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-black text-5xl font-black mb-2">50+</div>
              <div className="text-black font-bold uppercase text-sm">AI Projects Delivered</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-brand-blue border-2 border-white shadow-[4px_4px_0px_#FACC15] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-white text-5xl font-black mb-2">200+</div>
              <div className="text-white font-bold uppercase text-sm">Skilled Developers</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-brand-yellow border-2 border-white shadow-[4px_4px_0px_#2563EB] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-black text-5xl font-black mb-2">15+</div>
              <div className="text-black font-bold uppercase text-sm">Countries Served</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white border-2 border-white shadow-[4px_4px_0px_#FACC15] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-black text-5xl font-black mb-2">96%</div>
              <div className="text-black font-bold uppercase text-sm">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-6 uppercase">
              Ready to Work with <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo transform rotate-1 inline-block">Clydara</span>?
            </h2>
            <p className="text-xl text-black font-bold mb-8">
              Partner with Clydara to build innovative AI and technology solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/contact" className="inline-block px-8 py-4 bg-brand-blue text-white font-black uppercase border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg">
                  Contact Us
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/services" className="inline-block px-8 py-4 bg-white text-black font-black uppercase border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg">
                  Explore Services
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
