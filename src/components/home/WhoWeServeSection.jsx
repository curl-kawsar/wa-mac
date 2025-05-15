import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whoWeServeData } from '../../data/homeData';

const WhoWeServeSection = () => {
  return (
    <div className="relative py-8 md:py-12">
      {/* Background Image */}
      <div className="absolute inset-0 bgImage z-0" />
      {/* White Gradient Overlay at Bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
      
      <div className="relative z-20">
        <h1 className="poppins py-10 text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[52px] 2xl:text-[64px] font-semibold">
          Who We Serve
        </h1>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center mt-4 mb-8 px-4 lg:px-8 gap-6 lg:space-x-2 lg:space-y-0 space-y-6">
          {/* Main card - full width on mobile, 40vw on large screens */}
          <div className="backdrop-blur-[24px] bg-[#FFF6E6]/70 py-4 px-8 w-full sm:w-[90%] md:w-[80%] lg:w-[600px] 2xl:w-[750px] rounded flex justify-center items-start flex-col border border-[#D4AF37] min-h-[60vh] lg:min-h-[462px] 2xl:h-[600px]">
            <h1 className="poppins text-xl sm:text-2xl md:text-3xl lg:text-[34px] 2xl:text-[44px] text-[#D4AF37] font-bold mb-2 leading-[1.3] tracking-wide">
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

            <p className="poppins font-light sm:text-lg md:text-xl lg:text-[24px] 2xl:text-[32px] text-[#191919]">
              {whoWeServeData.main.description}
            </p>
            <Link href="/contact-us">
              <button className="poppins cursor-pointer mt-10 text-base sm:text-lg md:text-xl lg:text-[24px] 2xl:text-[32px] text-white bg-[#D4AF37] hover:bg-[#DEC357] h-[45px] sm:h-[50px] md:h-[55px] lg:h-[60px] 2xl:h-[80px] w-full sm:w-[200px] lg:w-[220px] 2xl:w-[250px] rounded">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Right side cards - stacked on mobile, side by side on large screens */}
          <div className="flex flex-col md:flex-row lg:flex-row w-full sm:w-[90%] md:w-[80%] lg:w-auto gap-6 md:gap-4 lg:gap-6">
            {/* Homeowner card */}
            <div className="w-full md:w-1/2 lg:w-[20vw] 2xl:w-[25vw] backdrop-blur-[24px] bg-[#FCEEEE]/70 rounded flex flex-col justify-center items-start py-4 px-6 space-y-7 border border-[#C22222] min-h-[40vh] md:min-h-[50vh] lg:min-h-[462px] 2xl:h-[600px]">
              <div>
                <Image
                  src={whoWeServeData.homeowner.icon}
                  width={100}
                  height={200}
                  alt="Home Owner icon"
                  className="w-[100px] 2xl:w-[120px]"
                />
              </div>
              <div className="text-center text-[#5C1010] poppins font-semibold text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[42px]">
                {whoWeServeData.homeowner.title}
              </div>
              <div className="poppins font-normal md:text-lg lg:text-[18px] 2xl:text-[24px] text-[#191919]">
                {whoWeServeData.homeowner.description}
              </div>
              <Link href="/contact-us">
                <div className="poppins cursor-pointer font-medium lg:text-[16px] 2xl:text-[24px] text-[#C22222] pb-1 hover:underline hover:text-decoration-[#C22222] flex items-center">
                  Explore
                  <Image
                    src="/arrow.svg"
                    width={8}
                    height={16}
                    alt="Arrow"
                    className="ml-3 md:ml-4 lg:ml-6 w-[8px] 2xl:w-[12px]"
                  />
                </div>
              </Link>
            </div>

            {/* Landlord and Tenant cards - stacked on all screens, side by side on medium */}
            <div className="flex flex-col w-full md:w-1/2 lg:w-[20vw] gap-6">
              {/* Landlord card */}
              <div className="backdrop-blur-[24px] bg-[#FCEEEE]/70 flex flex-col justify-center items-start h-auto min-h-[30vh] md:min-h-[23vh] lg:min-h-[219px] 2xl:h-[288px] w-full lg:w-[288px] 2xl:w-[400px] rounded py-2 px-4 space-y-1 border border-[#C22222]">
                <div className="text-center text-[#5C1010] poppins font-semibold text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[42px]">
                  {whoWeServeData.landlord.title}
                </div>
                <div className="poppins font-normal md:text-lg lg:text-[16px] 2xl:text-[24px] text-[#191919]">
                  {whoWeServeData.landlord.description}
                </div>
                <Link href="/contact-us">
                  <div className="poppins cursor-pointer font-medium lg:text-[16px] 2xl:text-[24px] text-[#C22222] pb-1 hover:underline hover:text-decoration-[#C22222] flex items-center">
                    Explore
                    <Image
                      src="/arrow.svg"
                      width={8}
                      height={16}
                      alt="Arrow"
                      className="ml-3 md:ml-4 lg:ml-6 w-[8px] 2xl:w-[12px]"
                    />
                  </div>
                </Link>
              </div>

              {/* Tenant card */}
              <div className="backdrop-blur-[24px] bg-[#FCEEEE]/70 flex flex-col justify-center items-start h-auto min-h-[30vh] md:min-h-[23vh] lg:min-h-[219px] 2xl:h-[288px] w-full lg:w-[288px] 2xl:w-[400px] rounded py-2 px-4 space-y-2 border border-[#C22222]">
                <div className="text-center text-[#5C1010] poppins font-semibold text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[42px]">
                  {whoWeServeData.tenant.title}
                </div>
                <div className="poppins font-normal md:text-lg lg:text-[16px] 2xl:text-[24px] text-[#191919]">
                  {whoWeServeData.tenant.description}
                </div>
                <Link href="/contact-us">
                  <div className="poppins cursor-pointer font-medium lg:text-[16px] 2xl:text-[24px] text-[#C22222] pb-1 hover:underline hover:text-decoration-[#C22222] flex items-center">
                    Explore
                    <Image
                      src="/arrow.svg"
                      width={8}
                      height={16}
                      alt="Arrow"
                      className="ml-3 md:ml-4 lg:ml-6 w-[8px] 2xl:w-[12px]"
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