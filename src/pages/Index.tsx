
import PageLayout from "../components/layout/PageLayout";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import RecentBlogsSection from "../components/sections/RecentBlogsSection";
import AIServiceSection from "../components/sections/AIServiceSection";
import StaffAugmentationSection from "../components/sections/StaffAugmentationSection";
import DevelopmentServiceSection from "../components/sections/DevelopmentServiceSection";
import TechnologySection from "../components/sections/TechnologySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";
import CtaSection from "../components/sections/CtaSection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <AIServiceSection />
      <StaffAugmentationSection />
      <DevelopmentServiceSection />
      <TechnologySection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <RecentBlogsSection />
    </PageLayout>
  );
};

export default Index;
