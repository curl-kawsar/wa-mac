'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  return (
    // Added overflow-hidden to the relative parent if needed to contain the absolute image cleanly
    <div className='relative overflow-hidden'>
      {/* Main Content Area */}
      {/* Mobile: column, centered. Medium+: row, items-start, space between */}
      {/* Added pb-20 to make space for the absolute image */}
      <div className='w-full bg-[#1E1E1E] h-auto md:h-auto flex flex-col items-center md:flex-row md:items-start md:justify-between [@media(min-width:1517px)]:justify-center [@media(min-width:1517px)]:gap-70 justify-between text-white px-4 sm:px-6 md:px-8 lg:px-20 py-8 space-y-6 md:space-y-0 md:space-x-8 pb-16 md:pb-12 lg:pb-10 pt-[30px] md:pt-[40px] lg:pt-[50px] [@media(min-width:1517px)]:pt-[60px]'>

        {/* Section 1: Logo & Name */}
        {/* Centered on mobile, align left on md+ */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex justify-center items-center space-x-2">
            <div className="flex-shrink-0">
              <Image
                src="/footer_logo2.svg"
                width={45}
                height={45}
                alt="Wa Management Logo"
              />
            </div>
            <div>
              <p className='poppins text-base md:text-lg lg:text-xl [@media(min-width:1517px)]:text-2xl font-semibold tracking-wide leading-tight'>
                Wa Management <br /> & Consulting
              </p>
            </div>
          </div>
          {/* Optional: Add address or short description here if needed */}
        </div>

        {/* Section 2: Navigation Links */}
        {/* Centered text links on mobile, aligned left on md+ */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <Link href="/" className="cursor-pointer text-xs md:text-sm [@media(min-width:1517px)]:text-lg poppins hover:underline hover:decoration-white">
            Home
          </Link>
          <Link href="/services" className="cursor-pointer text-xs md:text-sm [@media(min-width:1517px)]:text-lg poppins hover:underline hover:decoration-white">
            Services
          </Link>
          <Link href="/about-us" className="cursor-pointer text-xs md:text-sm [@media(min-width:1517px)]:text-lg poppins hover:underline hover:decoration-white">
            About us
          </Link>
          <Link href="/contact-us" className="cursor-pointer text-xs md:text-sm [@media(min-width:1517px)]:text-lg poppins hover:underline hover:decoration-white">
            Contact us
          </Link>
          <Link href="/terms" className="cursor-pointer text-xs md:text-sm [@media(min-width:1517px)]:text-lg poppins hover:underline hover:decoration-white">
            Privacy Policy
          </Link>
        </div>

        {/* Section 3: Subscription, Social, Contact */}
        {/* Full width on mobile, auto width on md+, max-width on lg+ */}
        {/* Items centered on mobile, start on md+ */}
        <div className="w-full max-w-md md:max-w-none md:w-auto lg:max-w-lg flex flex-col items-center md:items-start space-y-4">

          {/* Subscription Form */}
          {/* Column on mobile, row on md+ */}
          <div className='w-full flex flex-col sm:flex-row sm:space-y-0 sm:space-x-3 space-y-2'>
            <div className='flex-grow'> {/* Makes input take available space */}
              <input
                type="email"
                className="h-10 [@media(min-width:1517px)]:h-12 px-4 w-full text-xs md:text-sm poppins text-left bg-[#5C1010] rounded-lg border border-gray-600 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#7B1A1A] [@media(min-width:1517px)]:w-[400px] [@media(min-width:1517px)]:placeholder:text-base [@media(min-width:1517px)]:flex [@media(min-width:1517px)]:items-center [@media(min-width:1517px)]:justify-center"
                placeholder="Email address"
              />
            </div>
            <div className='flex-shrink-0'> {/* Prevents button from stretching */}
              <button className='cursor-pointer flex justify-center items-center rounded-lg h-10 [@media(min-width:1517px)]:h-12 w-full sm:w-auto px-4 bg-[#5C1010] hover:bg-[#7B1A1A] border border-[#8C8C8C] poppins font-semibold text-xs md:text-sm [@media(min-width:1517px)]:text-lg' onClick={() => router.push('/contact-us')}>
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Social Media & Call Info */}
          {/* Column centered on mobile, Row space-between on md+ */}
          <div className='[@media(min-width:1517px)]:w-[32vw] w-full flex flex-col items-center md:flex-row md:justify-between md:items-start space-y-4 md:space-y-0 mt-4 md:mt-2'>

            {/* Social Links */}
            {/* Row centered on mobile, Column aligned left on md+ */}
            <div className="flex space-x-5 space-y-2 md:space-x-0 flex-col md:space-y-2 items-start md:items-start">
              <a href="#" className='flex space-x-2 items-center group'>
                <Image src="/fb_icon.svg" width={16} height={16} alt="Facebook" className="w-4 [@media(min-width:1517px)]:w-5" />
                <span className='poppins text-xs md:text-sm [@media(min-width:1517px)]:text-lg group-hover:underline group-hover:decoration-white'>Facebook</span>
              </a>
              <a href="#" className='flex space-x-2 items-center group'>
                <Image src="/insta_icon.svg" width={16} height={16} alt="Instagram" className="w-4 [@media(min-width:1517px)]:w-5" />
                <span className='poppins text-xs md:text-sm [@media(min-width:1517px)]:text-lg group-hover:underline group-hover:decoration-white'>Instagram</span>
              </a>
              <a href="#" className='flex space-x-2 items-center group'>
                <Image src="/yt_icon.svg" width={16} height={16} alt="YouTube" className="w-4 [@media(min-width:1517px)]:w-5" />
                <span className='poppins text-xs md:text-sm [@media(min-width:1517px)]:text-lg group-hover:underline group-hover:decoration-white'>Youtube</span>
              </a>
            </div>

            {/* Call Us Info */}
            {/* Centered on mobile, aligned left on md+ */}
            <div className="flex items-center justify-center md:justify-start space-x-2 mt-3 md:mt-0">
              <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-full [@media(min-width:1517px)]:w-10 [@media(min-width:1517px)]:h-10 w-6 h-6 shadow">
                <Image src="/call_icon.svg" width={14} height={14} alt="Phone icon" className="w-3 [@media(min-width:1517px)]:w-5" />
              </div>
              <div>
                <p className='poppins text-xs [@media(min-width:1517px)]:text-sm'>Call Us at</p>
                <p className='poppins font-bold text-sm md:text-base [@media(min-width:1517px)]:text-lg cursor-pointer hover:underline'>(463) 333-3896</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative Building Image */}
      {/* Adjusted positioning and size */}
      <div className="absolute bottom-0 left-0 w-full h-auto z-0 pointer-events-none"> {/* z-0 behind content, pointer-events-none so it's not interactive */}
        <Image
          src="/footer_building.svg"
          alt="Footer building graphic"
          width={1440}
          height={120}
          layout="responsive"
          className="w-full h-auto object-cover object-bottom opacity-60"
        />
      </div>
    </div>
  );
};

export default Footer;
