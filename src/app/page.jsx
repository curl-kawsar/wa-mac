"use client"
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BenefitsSection from '../components/home/BenefitsSection';
import ServicesSection from '../components/home/ServicesSection';
import DelegationSection from '../components/home/DelegationSection';
import TestimonialSection from '../components/home/TestimonialSection';
import WhoWeServeSection from '../components/home/WhoWeServeSection';
import HeroSliderAnimation from '../components/home/HeroSliderAnimation';
const Home = () => {
  return (
    <div className="bg-white relative">
      <div className="relative">
        <HeroSection />
        <BenefitsSection />
      </div>
      <WhoWeServeSection />
      <ServicesSection />
      <DelegationSection />
      <HeroSliderAnimation />
      <TestimonialSection />
    </div>
  );
};

export default Home;