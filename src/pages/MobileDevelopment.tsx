import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Tablet, Monitor, Zap, Shield, Target, TrendingUp, Code, Palette, Smartphone as Phone, Globe } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { scrollToContact } from "@/utils/scrollToContact";
import mobileDevImg from '../assets/services/mobile-development.png';

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

const MobileDevelopment = () => {
  const mobileServices = [
    {
      title: "iOS App Development",
      description: "Create native iOS applications with Swift and SwiftUI for iPhone and iPad with seamless user experiences.",
      icon: <Smartphone size={32} />
    },
    {
      title: "Android App Development",
      description: "Build native Android applications using Kotlin and Jetpack Compose for optimal performance and user engagement.",
      icon: <Phone size={32} />
    },
    {
      title: "Cross-Platform Development",
      description: "Develop apps that work seamlessly across iOS and Android using React Native, Flutter, or Xamarin.",
      icon: <Globe size={32} />
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Create web applications that provide native app-like experiences with offline capabilities and push notifications.",
      icon: <Monitor size={32} />
    },
    {
      title: "App UI/UX Design",
      description: "Design intuitive and engaging user interfaces that enhance user experience and drive app adoption.",
      icon: <Palette size={32} />
    },
    {
      title: "App Maintenance & Updates",
      description: "Provide ongoing support, maintenance, and regular updates to keep your mobile apps current and secure.",
      icon: <Code size={32} />
    },
    {
      title: "App Store Optimization",
      description: "Optimize your app for better visibility and higher rankings in the App Store and Google Play Store.",
      icon: <Target size={32} />
    },
    {
      title: "Mobile App Testing",
      description: "Comprehensive testing across devices and platforms to ensure quality and performance.",
      icon: <Shield size={32} />
    }
  ];

  const benefits = [
    {
      title: "Enhanced User Experience",
      description: "Create intuitive, responsive mobile experiences that keep users engaged and satisfied",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Increased Accessibility",
      description: "Reach users anywhere, anytime with mobile apps that work offline and sync when connected",
      icon: <Globe size={32} />
    },
    {
      title: "Better Performance",
      description: "Optimize apps for speed, battery efficiency, and smooth performance across devices",
      icon: <Zap size={32} />
    },
    {
      title: "Security & Privacy",
      description: "Implement robust security measures to protect user data and ensure compliance",
      icon: <Shield size={32} />
    }
  ];

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic", "Cordova",
    "Firebase", "AWS Mobile", "Google Cloud", "MongoDB", "SQLite", "Realm",
    "Redux", "MobX", "GraphQL", "REST APIs", "Push Notifications", "Analytics"
  ];

  const platforms = [
    "iOS (iPhone & iPad)", "Android", "Cross-Platform", "Progressive Web Apps",
    "Wearable Apps", "Smart TV Apps", "Enterprise Mobile Apps", "E-commerce Apps",
    "Social Media Apps", "Gaming Apps", "Utility Apps", "Business Apps"
  ];

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase transform -rotate-1">
              Mobile App Development
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold bg-black inline-block px-4 py-2 transform rotate-1 border-2 border-white shadow-neo">
              Create powerful, engaging mobile applications that connect with your users
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
                Mobile Apps That <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Transform</span> Your Business
              </h2>
              
              <div className="bg-white border-2 border-black shadow-neo p-6 mb-8 transform rotate-1">
                <p className="text-black font-medium text-lg mb-4">
                  Our Mobile App Development services help businesses create powerful, user-friendly applications that drive engagement and deliver measurable results. We specialize in native and cross-platform development for iOS and Android.
                </p>
                
                <p className="text-black font-medium text-lg">
                  From concept to launch and beyond, our experienced mobile development team uses cutting-edge technologies and best practices to create apps that not only look great but also perform exceptionally well.
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
                    src={mobileDevImg}
                    alt="Mobile App Development" 
                    className="w-full border-2 border-black grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white p-4 border-2 border-black shadow-neo transform -rotate-2 z-10">
                  <div className="font-black text-brand-blue text-xl uppercase">MOBILE FIRST</div>
                  <div className="text-sm font-bold text-black">User Experience</div>
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
              Our Mobile <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2 text-brand-blue">Services</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Comprehensive mobile app development solutions for all platforms and business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
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
              Why Choose Our <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform -rotate-2">Mobile Dev</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Discover the advantages of mobile apps for your business and users
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

      {/* Technologies Section */}
      <section className="section-padding bg-black text-white border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-white">
              <span className="text-brand-yellow">Technologies</span> We Use
            </h2>
            <p className="text-xl font-bold text-gray-300">
              Modern mobile development technologies and frameworks for optimal performance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-white p-4 border-2 border-white shadow-[4px_4px_0px_#2563EB] text-center hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
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

      {/* Platforms Section */}
      <section className="section-padding bg-brand-yellow border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-black transform -rotate-1">
              Platforms We <span className="bg-white px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Develop For</span>
            </h2>
            <p className="text-xl font-bold text-black">
              Comprehensive mobile development across all major platforms and device types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform}
                className="bg-white p-4 border-2 border-black shadow-neo text-center hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-black text-black uppercase">{platform}</span>
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
              Our Mobile <span className="bg-brand-blue text-white px-2 border-2 border-black shadow-neo inline-block transform -rotate-2">Process</span>
            </h2>
            <p className="text-xl font-bold text-black">
              A systematic approach to delivering successful mobile applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understand your business goals and define the app strategy"
              },
              {
                step: "02",
                title: "Design",
                description: "Create wireframes, UI/UX designs, and interactive prototypes"
              },
              {
                step: "03",
                title: "Development",
                description: "Build the app with continuous testing and quality assurance"
              },
              {
                step: "04",
                title: "Launch",
                description: "Deploy to app stores and provide ongoing support"
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
              Our Mobile <span className="bg-brand-yellow text-black px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Success</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Apps Developed" },
              { number: "1M+", label: "App Downloads" },
              { number: "4.8★", label: "Average Rating" },
              { number: "95%", label: "Client Satisfaction" }
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
              Ready to Build Your <span className="bg-brand-yellow px-2 border-2 border-black shadow-neo inline-block transform rotate-2">Mobile App</span>?
            </h2>
            
            <p className="text-xl text-black font-bold mb-8 max-w-2xl mx-auto">
              Let's discuss how our mobile development expertise can help you create engaging apps that connect with your users and drive business growth.
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

export default MobileDevelopment;
