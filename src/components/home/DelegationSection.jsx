import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { delegationStepsData } from '../../data/homeData';

const StepCard = ({ img, heading, text1, text2 }) => (
  <div className="w-full lg:w-auto mb-3 lg:mb-0">
    <div
      className="w-full lg:w-[320px] 2xl:w-[400px] h-auto lg:h-[220px] 2xl:h-[320px] flex justify-center items-center lg:items-start 2xl:items-start 2xl:justify-center flex-col space-y-2 px-6 py-5 lg:py-0 rounded backdrop-blur-[65px] bg-white/50"
      style={{ boxShadow: '0px 8px 34px rgba(92, 16, 16, 0.15)' }}
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
      <div className="poppins text-xl lg:text-[28px] 2xl:text-[34px] text-[#161001] font-semibold">
        {heading}
      </div>
      <div className="poppins text-base lg:text-[20px] 2xl:text-[24px] text-[#161001] font-light text-center lg:text-left">
        {text1} <br /> {text2}
      </div>
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
    <div className="flex justify-center items-center flex-col">
      <div className="relative overflow-hidden flex justify-center items-center flex-col pb-8 2xl:pb-16">
        <div className="w-full lg:w-[98vw] min-h-[400px] lg:h-[750px] flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0">
          <div className="h-auto lg:h-[350px] w-full lg:w-[600px] 2xl:w-[700px] flex items-center justify-start flex-col space-y-2 mt-8 lg:mt-0 text-center lg:text-left">
            <div className="poppins text-[#5C1010] text-2xl md:text-3xl lg:text-[45px] 2xl:text-[55px] font-semibold">
              Why Delegation Matters
            </div>
            <div className="poppins text-[#000] text-sm md:text-lg lg:text-[20px] 2xl:text-[24px] px-4 lg:px-0">
              The most effective companies in the world delegate, focusing on getting the right things done by the right people. Your home should run the same way.
            </div>
            <div className="poppins text-[#000000] text-xs md:text-base lg:text-[16px] 2xl:text-[20px] font-light px-4 lg:px-0">
              Smart systems, a competent team, and consistent supervision lead to the highest quality and results.
            </div>
            <div className="mt-3 poppins text-[#000000] text-xs md:text-base lg:text-[16px] 2xl:text-[20px] font-light px-4 lg:px-0">
              Success is not about doing everything yourself. It's about knowing what to delegate and who you can trust to get it done right.
            </div>
          </div>
          <div className="w-full lg:w-[30vw] h-[250px] lg:h-[400px] relative md:static mt-4 lg:mt-0">
            {isMobile ? (
              <div className="flex justify-center w-full">
                <Image
                  src="/home_man_2.svg"
                  width={250}
                  height={250}
                  alt="Home manager"
                  className="relative"
                />
              </div>
            ) : (
              <Image
                src="/home_man_2.svg"
                width={500}
                height={50}
                alt="Home manager"
                className="absolute w-[500px] right-0 2xl:right-60 2xl:w-[30vw]"
              />
            )}
          </div>
        </div>

        <div className="relative lg:absolute lg:bottom-8 2xl:-bottom-12 w-full lg:w-[1000px] flex flex-col lg:flex-row justify-center items-center space-y-3 lg:space-y-0 lg:space-x-6 px-4 lg:px-0 mt-8 lg:mt-0">
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

      <div className="my-8">
        <Link href="/contact-us">
          <button className="2xl:mt-8 cursor-pointer font-semibold poppins text-lg lg:text-[20px] 2xl:text-[26px] w-[150px] 2xl:w-[200px] h-[50px] 2xl:h-[65px] px-2 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#5C1010] rounded hover:bg-[#7B1A1A] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Book Now!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DelegationSection; 