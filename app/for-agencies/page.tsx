import AboutAgencies from "@/components/aboutAgencies";
import AgencyHero from "@/components/agenciesHero/page";
import FaqAgencies from "@/components/faqAgencies/page";
import FeaturesAgency from "@/components/featuresAgencies";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LeadingAgencies from "@/components/leadingAgencies";
import Pricing from "@/components/pricing";
import WorksAgency from "@/components/worksAgency";

const Agencies = () => {
  return (
    <div>
      <Header />
      <AgencyHero />
      <LeadingAgencies />
      <AboutAgencies />
      <FeaturesAgency />
      <WorksAgency />
      <Pricing />
      <FaqAgencies />
      <Footer />
    </div>
  );
};

export default Agencies;
