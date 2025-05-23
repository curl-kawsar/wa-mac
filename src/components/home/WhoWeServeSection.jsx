import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whoWeServeData } from '../../data/homeData';

const WhoWeServeSection = () => {
  return (
    <div className="relative py-6 md:py-8">
      {/* Background Image */}
      <div className="absolute inset-0 bgImage z-0" />
      {/* White Gradient Overlay at Bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
      
      <div className="relative z-20">
        <h1 className="poppins py-6 text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold">
          Who We Serve
        </h1>

        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch mt-2 mb-6 px-4 lg:px-8 gap-4 lg:space-x-4 lg:space-y-0 space-y-4">
          {/* Main card - full width on mobile, 40vw on large screens */}
          <div className="backdrop-blur-[24px] bg-[#FFF6E6]/70 py-4 px-6 w-full sm:w-[90%] md:w-[80%] lg:w-[420px] 2xl:w-[600px] rounded flex justify-center items-start flex-col border border-[#D4AF37] min-h-[300px] lg:min-h-[340px] 2xl:min-h-[360px]">
            <h1 className="poppins text-xl sm:text-2xl md:text-2xl lg:text-[28px] 2xl:text-[36px] text-[#D4AF37] font-bold mb-2 leading-[1.3] tracking-wide">
              {whoWeServeData.main.title.split(" Who ").map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index === 0 && (
                    <>
                      <span className="inline md:hidden"> </span>
                      <br className="hidden md:block" />
                      Who 
                    </>
                  )}
                </React.Fragment>
              ))}
            </h1>

            <p className="poppins font-light sm:text-base md:text-lg lg:text-[20px] 2xl:text-[24px] text-[#191919]">
              {whoWeServeData.main.description}
            </p>
            <Link href="/contact-us">
              <button className="poppins cursor-pointer mt-6 text-base sm:text-lg lg:text-[18px] 2xl:text-[22px] text-white bg-[#D4AF37] hover:bg-[#DEC357] h-[40px] sm:h-[45px] lg:h-[50px] 2xl:h-[60px] w-full sm:w-[180px] lg:w-[200px] rounded">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Right side cards - stacked on mobile, side by side on large screens */}
          <div className="flex flex-col md:flex-row lg:flex-row w-full sm:w-[90%] md:w-[80%] lg:w-auto gap-4">
            {/* Homeowner card */}
            <div className="w-full md:w-1/2 lg:w-[240px] 2xl:w-[280px] backdrop-blur-[24px] bg-[#FCEEEE]/70 rounded flex flex-col justify-center items-start py-4 px-5 space-y-4 border border-[#C22222] min-h-[280px] md:min-h-[300px] lg:min-h-[340px] 2xl:min-h-[360px]">
              <div>
                <Image
                  src={whoWeServeData.homeowner.icon}
                  width={80}
                  height={160}
                  alt="Home Owner icon"
                  className="w-[80px] 2xl:w-[100px]"
                />
              </div>
              <div className="text-center text-[#5C1010] poppins font-semibold text-2xl sm:text-2xl lg:text-[26px] 2xl:text-[32px]">
                {whoWeServeData.homeowner.title}
              </div>
              <div className="poppins font-normal text-base lg:text-[16px] 2xl:text-[20px] text-[#191919]">
                {whoWeServeData.homeowner.description}
              </div>
              <Link href="/contact-us">
                <div className="poppins cursor-pointer font-medium text-base lg:text-[16px] 2xl:text-[20px] text-[#C22222] pb-1 hover:underline hover:text-decoration-[#C22222] flex items-center">
                  Explore
                  <Image
                    src="/arrow.svg"
                    width={6}
                    height={12}
                    alt="Arrow"
                    className="ml-3 md:ml-4 lg:ml-4 w-[6px] 2xl:w-[10px]"
                  />
                </div>
              </Link>
            </div>

            {/* Landlord and Tenant cards - stacked on all screens, side by side on medium */}
            <div className="flex flex-col w-full md:w-1/2 lg:w-[240px] 2xl:w-[280px] gap-4">
              {/* Landlord card */}
              <div className="backdrop-blur-[24px] bg-[#FCEEEE]/70 flex flex-col justify-center items-start h-auto min-h-[160px] md:min-h-[145px] lg:min-h-[165px] 2xl:min-h-[175px] w-full rounded py-3 px-4 space-y-1 border border-[#C22222]">
                <div className="text-center text-[#5C1010] poppins font-semibold text-xl sm:text-2xl lg:text-[26px] 2xl:text-[32px]">
                  {whoWeServeData.landlord.title}
                </div>
                <div className="poppins font-normal text-sm lg:text-[14px] 2xl:text-[18px] text-[#191919]">
                  {whoWeServeData.landlord.description}
                </div>
                <Link href="/contact-us">
                  <div className="poppins cursor-pointer font-medium text-base lg:text-[16px] 2xl:text-[18px] text-[#C22222] pb-1 hover:underline hover:text-decoration-[#C22222] flex items-center">
                    Explore
                    <Image
                      src="/arrow.svg"
                      width={6}
                      height={12}
                      alt="Arrow"
                      className="ml-3 md:ml-4 lg:ml-4 w-[6px] 2xl:w-[8px]"
                    />
                  </div>
                </Link>
              </div>

              {/* Tenant card */}
              <div className="backdrop-blur-[24px] bg-[#FCEEEE]/70 flex flex-col justify-center items-start h-auto min-h-[160px] md:min-h-[145px] lg:min-h-[165px] 2xl:min-h-[175px] w-full rounded py-3 px-4 space-y-1 border border-[#C22222]">
                <div className="text-center text-[#5C1010] poppins font-semibold text-xl sm:text-2xl lg:text-[26px] 2xl:text-[32px]">
                  {whoWeServeData.tenant.title}
                </div>
                <div className="poppins font-normal text-sm lg:text-[14px] 2xl:text-[18px] text-[#191919]">
                  {whoWeServeData.tenant.description}
                </div>
                <Link href="/contact-us">
                  <div className="poppins cursor-pointer font-medium text-base lg:text-[16px] 2xl:text-[18px] text-[#C22222] pb-1 hover:underline hover:text-decoration-[#C22222] flex items-center">
                    Explore
                    <Image
                      src="/arrow.svg"
                      width={6}
                      height={12}
                      alt="Arrow"
                      className="ml-3 md:ml-4 lg:ml-4 w-[6px] 2xl:w-[8px]"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServeSection; 