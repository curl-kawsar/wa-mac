import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { delegationStepsData } from '../../data/homeData';

const StepCard = ({ img, heading, text1, text2 }) => (
  <div className="w-full lg:w-auto mb-6 lg:mb-0">
    <div
      className="w-full lg:w-[320px] 2xl:w-[400px] h-auto lg:h-[220px] 2xl:h-[320px] 
                flex flex-col justify-center lg:justify-start 2xl:justify-center 
                items-center lg:items-start 2xl:items-start 
                gap-4 px-6 py-8 lg:py-6 rounded-xl 
                backdrop-blur-[15px] bg-white/10 border border-white/30
                transition-all duration-300 hover:bg-white/30"
      style={{ boxShadow: '0px 8px 30px rgba(92, 16, 16, 0.12)' }}
    >
      <div>
        <Image
          src={img}
          width={45}
          height={45}
          alt="Card icon"
          className="w-[45px] 2xl:w-[75px]"
        />
      </div>
      <h3 className="poppins text-xl lg:text-[28px] 2xl:text-[34px] text-[#161001] font-semibold">
        {heading}
      </h3>
      <p className="poppins text-base lg:text-[20px] 2xl:text-[24px] text-[#161001] font-light text-center lg:text-left">
        {text1} <br /> {text2}
      </p>
    </div>
  </div>
);

const DelegationSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 2xl:py-24">
      <div className="container mx-auto flex flex-col items-center">
        {/* Main content section */}
        <div className="relative overflow-visible w-full">
          {/* Text and image */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-0 mb-0">
            {/* Text content aligned with cards */}
            <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-4 text-center lg:text-left max-w-full lg:max-w-[90%] lg:ml-8 xl:ml-16">
              <h2 className="poppins text-[#5C1010] text-2xl md:text-3xl lg:text-[45px] 2xl:text-[55px] font-semibold">
                Why Delegation Matters
              </h2>
              <p className="poppins text-[#000] text-sm md:text-lg lg:text-[20px] 2xl:text-[24px]">
                The most effective companies in the world delegate, focusing on getting the right things done by the right people. Your home should run the same way.
              </p>
              <p className="poppins text-[#000000] text-xs md:text-base lg:text-[16px] 2xl:text-[20px] font-light">
                Smart systems, a competent team, and consistent supervision lead to the highest quality and results.
              </p>
              <p className="poppins text-[#000000] text-xs md:text-base lg:text-[16px] 2xl:text-[20px] font-light">
                Success is not about doing everything yourself. It's about knowing what to delegate and who you can trust to get it done right.
              </p>
            </div>
            
            {/* Image container */}
            <div className="flex justify-center lg:justify-end relative h-[220px] lg:h-[450px] mt-2 lg:mt-0">
              {isMobile ? (
                <Image
                  src="/deligation.png"
                  width={220}
                  height={220}
                  alt="Home manager"
                  className="relative"
                />
              ) : (
                <Image
                  src="/deligation.png"
                  width={500}
                  height={500}
                  alt="Home manager"
                  className="w-[450px] 2xl:w-[28vw] absolute bottom-[-15px] left-10 z-10"
                />
              )}
            </div>
          </div>

          {/* Cards section - positioned to overlap with image */}
          <div className="w-full relative z-20 mt-[-30px] lg:mt-[-80px] px-4 lg:px-8 xl:px-16">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-6 lg:gap-8">
              {delegationStepsData.map((card) => (
                <StepCard
                  key={card.heading}
                  img={card.img}
                  heading={card.heading}
                  text1={card.text1}
                  text2={card.text2}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="mt-32 lg:mt-20">
          <Link href="/contact-us">
            <button className="cursor-pointer font-semibold poppins 
                              text-lg lg:text-[20px] 2xl:text-[26px] 
                              w-[150px] 2xl:w-[200px] h-[50px] 2xl:h-[65px] 
                              px-4 py-2 
                              text-white capitalize transition-colors duration-300 
                              bg-[#5C1010] rounded hover:bg-[#7B1A1A] 
                              focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Book Now!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DelegationSection; 