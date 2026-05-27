import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingButtons from "@/components/FloatingButtons";
import SectionDivider from "@/components/SectionDivider";
import LoadingScreen from "@/components/LoadingScreen";

// Lazy load sections below the fold for performance
const WhyStorytelling = lazy(() => import("@/components/WhyStorytelling"));
const Services = lazy(() => import("@/components/Services"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const About = lazy(() => import("@/components/About"));
const Process = lazy(() => import("@/components/Process"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const CallToAction = lazy(() => import("@/components/CallToAction"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-950 text-gray-200">
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* Film grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Hero — always loaded immediately */}
      <Hero />

      {/* Lazy-loaded sections */}
      <Suspense fallback={<SectionLoader />}>
        <SectionDivider />
        <WhyStorytelling />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <CallToAction />
        <SectionDivider />
        <Contact />
        <Footer />
      </Suspense>

      {/* Floating UI Elements */}
      <FloatingButtons />
    </div>
  );
}
