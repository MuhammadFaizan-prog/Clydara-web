
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AIAndAutomation from "./pages/AIAndAutomation";
import AIServiceDetail from "./pages/AIServiceDetail";
import StaffAugmentation from "./pages/StaffAugmentation";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import MobileDevelopment from "./pages/MobileDevelopment";
import CloudSolutions from "./pages/CloudSolutions";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import WebDevelopment from "./pages/WebDevelopment";
import CustomSoftwareDevelopment from "./pages/CustomSoftwareDevelopment";
import CrmErpSolutions from "./pages/CrmErpSolutions";
import ApiDevelopment from "./pages/ApiDevelopment";
import DevOpsServices from "./pages/DevOpsServices";
import NotFound from "./pages/NotFound";
import HireDevelopers from "./pages/staff/HireDevelopers";
import RecruitmentSolutions from "./pages/staff/RecruitmentSolutions";
import RemoteTeamManagement from "./pages/staff/RemoteTeamManagement";
import ResourceOutsourcing from "./pages/staff/ResourceOutsourcing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/ai" element={<AIAndAutomation />} />
          <Route path="/services/ai/:serviceId" element={<AIServiceDetail />} />
          <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
          <Route path="/services/staff/developers" element={<HireDevelopers />} />
          <Route path="/services/staff/recruitment" element={<RecruitmentSolutions />} />
          <Route path="/services/staff/remote-teams" element={<RemoteTeamManagement />} />
          <Route path="/services/staff/outsourcing" element={<ResourceOutsourcing />} />
          <Route path="/services/development" element={<SoftwareDevelopment />} />
          <Route path="/services/mobile" element={<MobileDevelopment />} />
          <Route path="/services/cloud" element={<CloudSolutions />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/services/development/web" element={<WebDevelopment />} />
          <Route path="/services/development/custom" element={<CustomSoftwareDevelopment />} />
          <Route path="/services/development/crm-erp" element={<CrmErpSolutions />} />
          <Route path="/services/development/api" element={<ApiDevelopment />} />
          <Route path="/services/development/devops" element={<DevOpsServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
