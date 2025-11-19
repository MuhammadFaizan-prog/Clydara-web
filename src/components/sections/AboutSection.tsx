
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
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
            <div className="relative p-2">
              <div className="bg-black rounded-none p-0 border-2 border-black shadow-neo-lg">
                <img 
                  src="/images/about_bg.png" 
                  alt="Team collaboration" 
                  className="rounded-none border-2 border-black grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-brand-yellow border-2 border-black p-4 shadow-neo hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 border-2 border-black bg-brand-blue flex items-center justify-center text-white text-xs font-bold">AI</div>
                    <div className="w-10 h-10 border-2 border-black bg-black flex items-center justify-center text-white text-xs font-bold">Dev</div>
                    <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center text-black text-xs font-bold">HR</div>
                  </div>
                  <div className="text-sm font-black uppercase leading-tight ml-4 relative z-10">
                    Complete<br />Solutions
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
              About <span className="bg-brand-blue text-white px-2">Clydara</span>
            </h2>
            
            <p className="text-black font-medium text-lg mb-4 border-l-4 border-black pl-4">
              At Clydara, we're at the forefront of technological innovation, combining cutting-edge AI solutions with exceptional software development and flexible talent resources.
            </p>
            
            <p className="text-black mb-8 text-lg">
              Our mission is to empower businesses through intelligent automation, custom software solutions, and access to world-class technical talent—all designed to drive your growth and success in the digital age.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4 shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer">
                <div className="text-brand-blue font-black text-3xl md:text-4xl mb-1">50+</div>
                <div className="text-black font-bold text-sm uppercase">AI Projects Delivered</div>
              </div>
              <div className="bg-white border-2 border-black p-4 shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer">
                <div className="text-brand-blue font-black text-3xl md:text-4xl mb-1">200+</div>
                <div className="text-black font-bold text-sm uppercase">Experienced Developers</div>
              </div>
              <div className="bg-white border-2 border-black p-4 shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer">
                <div className="text-brand-blue font-black text-3xl md:text-4xl mb-1">96%</div>
                <div className="text-black font-bold text-sm uppercase">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
