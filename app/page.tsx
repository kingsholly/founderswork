import AboutFounders from "@/components/about";
import FaqFounder from "@/components/faqFounder";
import Features from "@/components/featuresFounder";
import Footer from "@/components/footer";
import FounderHero from "@/components/founderHero";
import Header from "@/components/header";
import HowItWorks from "@/components/howitworks";
import Others from "@/components/others";
import ProductCycle from "@/components/productCycle";
import React from "react";

const Founders = () => {
  return (
    <div>
      <Header />
      <FounderHero />
      <AboutFounders />
      <ProductCycle />
      <HowItWorks />
      <Features />
      <Others />
      <FaqFounder />
      <Footer />
    </div>
  );
};

export default Founders;
