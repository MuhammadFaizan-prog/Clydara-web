
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scrollToContact } from "@/utils/scrollToContact";

const CtaSection = () => {
  return (
    <section className="py-16 bg-brand-blue text-white border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Ready to Transform Your Business with <span className="bg-white text-black px-2 border-2 border-black shadow-neo inline-block transform rotate-1">AI Solutions?</span>
          </h2>
          
          <p className="text-xl text-white font-bold mb-8 max-w-2xl mx-auto drop-shadow-md">
            Partner with Clydara to harness the power of AI, gain access to top development talent, and accelerate your business growth with innovative technology solutions.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-yellow text-black border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] rounded-none font-bold text-lg py-6"
              onClick={scrollToContact}
            >
              <div className="flex items-center">
                Get Started <ArrowRight className="ml-2" size={20} />
              </div>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-black border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] rounded-none font-bold text-lg py-6 hover:bg-gray-100">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
