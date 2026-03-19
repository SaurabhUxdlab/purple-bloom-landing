import Navbar from "@/components/landing/Navbar";

import StatsSection from "./about/StatsSection";
import HistorySection from "./about/HistorySection";
import WhyTransitionSection from "./about/WhyTransitionSection";
import GetStartedSection from "./about/GetStartedSection";
import Aboutherosection from "./about/aboutherosection";


const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Aboutherosection/>
    <StatsSection/>
    <HistorySection/>
    <WhyTransitionSection/>
    <GetStartedSection/>
  </div>
);

export default Index;
