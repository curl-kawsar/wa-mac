import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';
import { servicesData } from '../../data/homeData';

const ServiceCard = ({ img, heading, text }) => (
  <div 
    className="bg-white rounded-md h-full w-full flex flex-col items-start p-6 md:p-8 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg"
    style={{
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    }}
  >
    <div className="mb-5 group">
      <Image
        src={img || "/placeholder.svg"}
        width={60}
        height={60}
        alt={heading || "Service icon"}
        className="w-[60px] h-[60px] transition-transform duration-300 group-hover:scale-125 group-hover:animate-float"
        style={{ objectFit: 'contain' }}
      />
    </div>
    <h3 className="poppins font-semibold text-lg md:text-xl text-[#5C1010] mb-3 transition-colors duration-300 hover:text-[#D4AF37]">
      {heading}
    </h3>
    <p className="text-left poppins font-normal text-sm md:text-base text-[#000000] leading-relaxed">
      {text}
    </p>
  </div>
);

const ServicesSection = () => {
  return (
    <div className="relative flex items-center justify-center flex-col bg-[#FCEEEE] w-full py-16 md:py-20">
      {/* Gradient transition from white at the top */}
      <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-white to-[#FCEEEE] z-0"></div>
      
      <div className="w-full max-w-7xl px-4 md:px-6 mx-auto relative z-10">
        <h1 className="poppins font-bold text-3xl md:text-4xl lg:text-5xl text-[#5C1010] text-center mb-12 md:mb-16 animate-fade-in">
          Your Property <br /> Our Priority
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {servicesData.map((card, index) => (
            <div 
              key={card.heading} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ServiceCard
                img={card.img}
                heading={card.heading}
                text={card.text}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 flex justify-center">
          <Button
            href="/contact-us"
            type="primary"
            className="font-semibold text-lg px-8 py-3 hover:scale-105 transition-transform duration-300"
          >
            Get A Quote!
          </Button>
        </div>
      </div>
      
      {/* Gradient transition to white at the bottom */}
      <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-b from-[#FCEEEE] to-white"></div>
    </div>
  );
};

export default ServicesSection; 