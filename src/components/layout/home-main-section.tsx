import React from "react";
import Hero from "../layout/hero";
import AboutUs from "../sections/about-us";
import ClientsSection from "../sections/clients-section";
import ContactUs from "../sections/contact-us";
import CountSection from "../sections/count-section";
import FaqSection from "../sections/faq-section";
import PortfolioSection from "../sections/portfolio-section";
import PricingSection from "../sections/pricing-section";
import ServicesSection from "../sections/services-section";
import TabSection from "../sections/tab-section";
import TeamSection from "../sections/team-section";
import TestimonialsSection from "../sections/testimonials-section";

const HomeMainSection = () => {
  return (
    <>
      <Hero />
      <ClientsSection />
      <AboutUs />
      <CountSection />
      <TabSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <TeamSection />
      <ContactUs />
    </>
  );
};

export default HomeMainSection;
