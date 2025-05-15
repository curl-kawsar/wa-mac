import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';
import { benefitsData } from '../../data/homeData';

const BenefitCard = ({ img, title, subtitle }) => (
  <div className="flex justify-center items-center flex-col space-y-5">
    <div>
      <Image
        src={img}
        width={45}
        height={45}
        alt={`${title} icon`}
        className="w-[45px] h-[45px] md:w-[45px] md:h-[45px] 2xl:w-[60px] 2xl:h-[60px]"
        style={{ objectFit: 'contain' }}
      />
    </div>
    <div className="poppins text-sm sm:text-base lg:text-lg 2xl:text-xl text-[#5C1010] font-bold text-center">
      {title} <br /> {subtitle}
    </div>
  </div>
);

const BenefitsSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Pink background */}
      <div className="absolute inset-0 bg-[#FCEEEE]"></div>
      
      {/* Content */}
      <div className="relative w-full max-w-[1445px] min-h-[565px] mx-auto flex flex-col justify-center items-center z-10 py-10 sm:py-12 md:py-16 lg:py-0 lg:h-[565px]">
        {/* Heading section */}
        <div className="w-full lg:w-[50%] px-4 lg:px-0 flex flex-col justify-center items-center mb-8 md:mb-10 lg:mb-0">
          <p className="poppins text-2xl sm:text-3xl md:text-4xl lg:text-[48px] 2xl:text-[54px] text-[#5C1010] leading-tight text-center">
            From <span className="font-bold">Chaos</span> To <span className="font-bold">Order</span>
          </p>
        </div>

        {/* Benefits section - Grid layout */}
        <div className="w-full flex justify-center items-center mt-4 md:mt-6 lg:mt-12">
          <div className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-[1225px] px-4 lg:px-0 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {benefitsData.map((benefit, index) => (
              <BenefitCard 
                key={index}
                img={benefit.img}
                title={benefit.title}
                subtitle={benefit.subtitle}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="z-10 mt-10 md:mt-12 lg:mt-8">
          <Button
            href="/contact-us"
            type="primary"
            className="font-semibold text-lg py-3 hover:scale-105 transition-transform duration-300 whitespace-nowrap"
          >
            Join the Journey
          </Button>
        </div>
      </div>
      
      {/* Building image at the bottom - full width */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <Image
          src="/buildings.svg"
          width={1920}
          height={200}
          alt="Buildings illustration"
          className="w-full h-auto object-contain object-bottom"
          priority
        />
      </div>
    </div>
  );
};

export default BenefitsSection; 