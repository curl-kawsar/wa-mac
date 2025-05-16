import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="w-full h-screen flex flex-col lg:flex-row justify-center items-center overflow-visible pb-0 2xl:items-center 2xl:max-w-8xl 2xl:mx-auto">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-end items-center lg:items-start space-y-6 lg:ml-20 mb-16 2xl:ml-50 2xl:space-y-8">
          <h1 className="literata text-[20px] sm:text-[36px] lg:text-[45px] font-bold text-[#5C1010] leading-snug text-center lg:text-left px-1 lg:px-0 2xl:text-[60px]">
            Your <span className="text-[#D4AF37] inline-block min-w-[70px] sm:min-w-[120px] lg:min-w-[150px] 2xl:min-w-[180px]">Home</span>, Fully Managed. <br />
            Your Time, Fully Yours.
          </h1>
          <p className="poppins text-[16px] sm:text-[18px] lg:text-[22px] font-extralight text-[#5C1010] text-center md:text-left 2xl:text-[32px]">
            Delegate Your Property Management <br />
            To Us And Experience True Freedom.
          </p>
          <div className="w-full flex justify-center lg:justify-start">
            <Button
              href="/contact-us"
              size="md"
              className="mt-6 text-[18px] sm:text-[20px] lg:text-[24px] w-[250px] sm:w-[300px] lg:w-[340px] 2xl:w-[400px] 2xl:h-24 2xl:text-[32px] whitespace-nowrap"
            >
              Explore our services
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex items-end justify-center relative 2xl:justify-start overflow-visible">
          <div className="relative w-full flex justify-center items-center overflow-visible scale-110 lg:scale-125">
            {/* Background Image */}
            <div className="absolute z-0 left-1/2 -translate-x-1/2 bottom-1/2 translate-y-[60%] lg:translate-y-[30%]">
              <Image
                src="/home_vec.png"
                width={700}
                height={350}
                alt="Background Image"
                className="w-[420px] sm:w-[600px] lg:w-[750px] h-auto 2xl:w-[900px]"
                priority
                quality={90}
                sizes="(max-width: 640px) 420px, (max-width: 1024px) 600px, (max-width: 1536px) 750px, 900px"
                loading="eager"
              />
            </div>

            {/* Family Image */}
            <div className="relative z-10">
              <Image
                src="/home_img2.svg"
                width={1400}
                height={900}
                alt="Family Image"
                className="w-[700px] sm:w-[850px] lg:w-[1800px] h-auto 2xl:w-[2100px]"
                priority
                quality={90}
                sizes="(max-width: 640px) 700px, (max-width: 1024px) 850px, (max-width: 1536px) 1800px, 2100px"
                loading="eager"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;