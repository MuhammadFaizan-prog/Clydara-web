
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: "AI & Automation"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      subject: formData.subject,
      service: formData.service,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Message sent successfully!",
            description: "We'll get back to you as soon as possible.",
          });
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            subject: "",
            message: "",
            service: "AI & Automation"
          });
        },
        (error) => {
          console.error("FAILED...", error);
          toast({
            title: "Error sending message",
            description: "Please try again later or contact us directly.",
            variant: "destructive",
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="section-padding bg-white border-b-4 border-black" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
              Ready to <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo transform -rotate-1 inline-block">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-black font-bold max-w-2xl mx-auto">
              Get in touch with our team to discuss how our AI solutions and services can help you achieve your business goals.
            </p>
          </div>
          
          <div className="bg-white rounded-none overflow-hidden border-2 border-black shadow-neo-xl">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="bg-black text-white p-8 lg:col-span-2 border-r-2 border-black">
                <h3 className="text-2xl font-black mb-6 uppercase text-brand-yellow">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-brand-blue mb-1 font-bold uppercase">Email</p>
                    <a href="mailto:clydara1@gmail.com" className="text-white hover:text-brand-yellow font-medium hover:underline decoration-2 underline-offset-4">
                      clydara1@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-brand-blue mb-1 font-bold uppercase">Phone</p>
                    <a href="tel:+16463498248" className="text-white hover:text-brand-yellow font-medium hover:underline decoration-2 underline-offset-4">
                    +923314207359
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-brand-blue mb-1 font-bold uppercase">Addresses</p>
                    <div className="space-y-4">
                      <div>
                        <p className="text-brand-yellow font-bold text-sm mb-1 uppercase">Head Quarter</p>
                        <address className="text-white not-italic text-sm font-medium">
                          14 township Lahore, Punjab 54000, Pakistan
                        </address>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-brand-blue mb-1 font-bold uppercase">Working Hours</p>
                    <p className="text-white font-medium">
                      Monday-Saturday 9AM-10PM<br />
                      Sunday:Closed
                    </p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/share/1CyEuwNCBD/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-yellow transition-colors border-2 border-transparent hover:border-white p-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://twitter.com/Clydara" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-yellow transition-colors border-2 border-transparent hover:border-white p-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://github.com/Clydara" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-yellow transition-colors border-2 border-transparent hover:border-white p-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@Clydara" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-yellow transition-colors border-2 border-transparent hover:border-white p-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:col-span-3 bg-white">
                <h3 className="text-2xl font-black text-black mb-6 uppercase">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-black uppercase">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-black uppercase">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-black uppercase">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (xxx) xxx-xxxx"
                        className="bg-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-bold text-black uppercase">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="bg-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-black uppercase">
                        Subject <span className="text-red-600">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="bg-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-bold text-black uppercase">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-none border-2 border-black bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out shadow-neo focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] font-bold"
                      >
                        <option>AI & Automation</option>
                        <option>Staff Augmentation</option>
                        <option>Software Development</option>
                        <option>Mobile Development</option>
                        <option>Cloud Solutions</option>
                        <option>Other Services</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-black uppercase">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please tell us how we can help you..."
                      rows={4}
                      required
                      className="bg-white"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full md:w-auto bg-brand-blue text-white border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] rounded-none font-bold text-lg py-6 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
