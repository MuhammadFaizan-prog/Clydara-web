
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { scrollToContact } from "@/utils/scrollToContact";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white text-black min-h-[80vh] flex items-center border-b-4 border-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 uppercase tracking-tight">
                Where{" "}
                <span className="bg-brand-blue text-white px-2 inline-block transform -skew-x-6 border-2 border-black shadow-neo">
                  Innovation
                </span>{" "}
                Meets Simplicity
              </h1>
              
              <p className="text-xl md:text-2xl text-black font-bold mb-8 max-w-lg border-l-4 border-brand-blue pl-4">
                Clydara transforms businesses with cutting-edge AI solutions, expert software development, and flexible talent resources.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-blue text-white font-bold text-lg border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded-none h-14 px-8"
                  onClick={scrollToContact}
                >
                  <div className="flex items-center">
                    Get Started <ArrowRight className="ml-2" size={20} />
                  </div>
                </Button>
                <Button variant="outline" size="lg" className="bg-white text-black font-bold text-lg border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded-none h-14 px-8">
                  <Link to="/services">Explore Services</Link>
                </Button>

              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative p-4">
              <div className="bg-brand-blue rounded-none border-2 border-black shadow-neo-xl p-0">
                <div className="bg-white border-2 border-black overflow-hidden">
                  <img 
                    src="/images/hero_bg.png" 
                    alt="AI Technology" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 bg-brand-yellow border-2 border-black px-4 py-3 shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer z-20">
                <div className="text-sm font-black uppercase">AI POWERED</div>
                <div className="flex items-center mt-1">
                  <div className="w-3 h-3 bg-black border border-black mr-2 animate-pulse"></div>
                  <span className="text-xs font-bold">Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-2 -left-2 bg-white text-black border-2 border-black px-4 py-3 shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer z-20">
                <div className="text-sm font-black uppercase">FUTURE READY</div>
                <div className="flex items-center mt-1">
                  <div className="w-3 h-3 bg-brand-blue border border-black mr-2"></div>
                  <span className="text-xs font-bold">Innovation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
