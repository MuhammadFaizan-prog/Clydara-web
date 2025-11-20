
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import emailjs from "@emailjs/browser";

const Contact = () => {
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
        "service_6ntqen4",
        "template_cvxf8le",
        templateParams,
        "6r6N8V6VRCJrRGRex"
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

  const contactInfo = [
    {
      icon: <Mail className="text-black" />,
      title: "Email Us",
      details: "clydara1@gmail.com",
      link: "mailto:clydara1@gmail.com"
    },
    {
      icon: <Phone className="text-black" />,
      title: "Call Us",
      details: "+923314207359",
      link: "tel:+923314207359"
    },
    {
      icon: <MapPin className="text-black" />,
      title: "Visit Us",
      details: "14 township Lahore, Punjab 54000, Pakistan",
      link: "#"
    }
  ];
  

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-yellow text-black py-20 border-b-4 border-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">Contact Us</h1>
            <p className="text-xl text-black font-bold">
              Get in touch with our team to discuss how we can help transform your business
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Info Cards */}
      <section className="py-16 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white p-6 rounded-none border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto bg-brand-blue text-white border-2 border-black shadow-neo rounded-none flex items-center justify-center mb-4 group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                  {info.icon}
                </div>
                <h3 className="font-black text-xl mb-2 text-black uppercase">{info.title}</h3>
                <a 
                  href={info.link} 
                  className="text-black font-bold hover:text-brand-blue hover:underline decoration-2 underline-offset-4 transition-colors"
                >
                  {info.details}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white p-8 rounded-none border-2 border-black shadow-neo-xl h-full">
                  <h2 className="text-3xl font-black text-black mb-6 uppercase">
                    Send Us a <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo transform -rotate-1 inline-block">Message</span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-black text-black uppercase">
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
                        <label htmlFor="email" className="text-sm font-black text-black uppercase">
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
                        <label htmlFor="phone" className="text-sm font-black text-black uppercase">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (xxx) xxx-xxxx"
                          className="bg-white"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-black text-black uppercase">
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
                        <label htmlFor="subject" className="text-sm font-black text-black uppercase">
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
                        <label htmlFor="service" className="text-sm font-black text-black uppercase">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="flex h-12 w-full rounded-none border-2 border-black bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out shadow-neo focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] font-bold"
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
                      <label htmlFor="message" className="text-sm font-black text-black uppercase">
                        Message <span className="text-red-600">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please tell us how we can help you..."
                        rows={5}
                        required
                        className="bg-white"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="bg-brand-blue text-white w-full border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] rounded-none font-black text-lg py-6 transition-all uppercase disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5 mr-2" /> {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-black text-white h-full rounded-none border-2 border-black shadow-neo-xl overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-3xl font-black mb-6 uppercase text-brand-yellow">
                      How Can We <span className="text-white border-b-4 border-brand-blue">Help?</span>
                    </h2>
                    
                    <div className="space-y-8 text-white">
                      <p className="text-lg font-medium">
                        Whether you're looking to implement AI solutions, need development expertise, or want to scale your team, we're here to help you succeed.
                      </p>
                      
                      <div className="border-l-4 border-brand-blue pl-4">
                        <h3 className="font-black text-xl mb-2 text-brand-blue uppercase">Office Hours</h3>
                        <p className="font-bold">Monday-Saturday 9AM-10PM</p>
                        <p className="font-bold">Sunday: Closed</p>
                      </div>
                      
                      <div>
  <h3 className="font-black text-xl mb-4 text-brand-yellow uppercase border-b-2 border-white inline-block pb-1">Our Office</h3>
  <div className="space-y-6">
                         <div className="bg-white/10 p-4 border-2 border-white/20">
                       <h4 className="font-black text-brand-blue mb-1 uppercase">Head Quarter</h4>
                       <p className="text-sm font-bold">
                         14 township Lahore, Punjab 54000, Pakistan<br />
                         <a href="tel:+923314207359" className="text-brand-yellow hover:underline decoration-2 underline-offset-4">+923314207359</a>
                       </p>
                     </div>
  </div>
</div>

                    </div>
                    <div className="mt-8 border-t-4 border-white pt-8">
  <h3 className="font-black text-xl mb-4 text-white uppercase">Connect With Us</h3>
  <div className="flex space-x-4">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/1CyEuwNCBD/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-none bg-white text-black border-2 border-black shadow-neo flex items-center justify-center hover:bg-brand-blue hover:text-white hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/Clydara"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-none bg-white text-black border-2 border-black shadow-neo flex items-center justify-center hover:bg-brand-blue hover:text-white hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    </a>
  </div>
</div>

                  </div>
                  


                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-6 uppercase">
                Frequently Asked <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo transform rotate-1 inline-block">Questions</span>
              </h2>
              <p className="text-xl text-black font-bold">
                Find answers to some common questions about our services
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What industries do you specialize in?",
                  answer: "We work with clients across diverse industries including healthcare, finance, e-commerce, education, manufacturing, and more. Our solutions are tailored to meet the specific needs of each industry sector."
                },
                {
                  question: "How quickly can you assemble a development team?",
                  answer: "Depending on your specific requirements, we can typically assemble a skilled development team within 1-2 weeks. For more specialized roles or larger teams, the timeline might extend slightly."
                },
                {
                  question: "Do you offer maintenance and support after project completion?",
                  answer: "Yes, we offer comprehensive maintenance and support services to ensure your applications continue running smoothly after launch. We offer various support packages tailored to different needs and budgets."
                },
                {
                  question: "How do you ensure the security of AI implementations?",
                  answer: "Security is paramount in all our AI implementations. We employ industry best practices including data encryption, secure APIs, regular security audits, and compliance with relevant regulations such as GDPR or HIPAA when applicable."
                },
                {
                  question: "Can you integrate AI into our existing systems?",
                  answer: "Absolutely! Our team specializes in seamlessly integrating AI capabilities into existing systems and workflows, minimizing disruption while maximizing the benefits of intelligent automation and insights."
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-none border-2 border-black shadow-neo p-6 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-black text-black mb-3 uppercase">{faq.question}</h3>
                  <p className="text-black font-medium">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
