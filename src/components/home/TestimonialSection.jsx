import React from 'react';
import Link from 'next/link';
import { testimonialData } from '../../data/homeData';

const TestimonialSection = () => {
  return (
    <div className="w-full bg-[#FFF9EB] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <h2 className="poppins font-semibold text-3xl md:text-4xl text-[#5C1010] mb-6">
          Don't Trust Us, Trust Their Voice
        </h2>
        
        <div className="mb-8 relative">
          <div className="text-[#C7A450] text-6xl absolute -top-4 left-0">"</div>
          <p className="poppins text-base md:text-xl text-[#000000] px-8 md:px-10">
            {testimonialData.quote}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <span className="poppins text-lg md:text-xl text-[#5C1010]">
            Schedule A Meeting With Us
          </span>
          <Link href="/contact-us">
            <button className="bg-[#5C1010] text-white poppins font-semibold text-base md:text-lg px-8 py-3 rounded hover:bg-[#7B1A1A] transition-colors duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection; 