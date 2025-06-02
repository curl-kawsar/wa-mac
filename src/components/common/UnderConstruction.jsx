"use client"
import React from 'react';
import Image from 'next/image';
import { siteConfig } from '../../config/site';

const UnderConstruction = () => {

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 text-center">

        {/* Logo Section */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex items-center space-x-3">
            <Image
              src="/navbar_logo.svg"
              width={50}
              height={50}
              alt="WA Management Logo"
              className="w-12 h-12"
            />
            <div>
              <h1 className="literata text-2xl md:text-3xl font-bold text-[#5C1010] leading-tight">
                WA Management <br />
                & Consulting
              </h1>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-12">
          <h2 className="literata text-4xl md:text-5xl lg:text-6xl font-bold text-[#5C1010] mb-6 text-center">
            Coming <span className="text-[#D4AF37]">Soon</span> 
          </h2>
          <p className="poppins text-lg md:text-xl font-light text-[#5C1010] max-w-2xl mx-auto text-center">
            We're working hard to bring you an amazing home services experience.
            Our new website will be launching soon.
          </p>
        </div>

        {/* Under Construction Message */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center space-x-3 bg-[#5C1010] text-white px-8 py-4 rounded-lg shadow-lg">
            <div className="animate-spin">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="poppins text-lg font-medium">Website Under Construction</span>
          </div>
        </div>

        {/* Construction Progress Bar */}
        <div className="mb-12">
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center text-sm poppins text-[#5C1010] mb-2">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Building Progress</span>
              </div>
              <span className="font-semibold">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
              <div className="bg-gradient-to-r from-[#5C1010] to-[#D4AF37] h-4 rounded-full" style={{width: '75%'}}>
              </div>
            </div>
            <div className="flex justify-between text-xs poppins text-[#5C1010] opacity-70 mt-1">
              <span>Foundation</span>
              <span>Structure</span>
              <span>Finishing</span>
            </div>
          </div>
        </div>


        {/* Animated Contact Information */}
        <div className="mb-8 animate-fade-in" style={{animationDelay: '2.8s'}}>
          <h4 className="literata text-2xl font-semibold text-[#5C1010] mb-6">
            Get In Touch
          </h4>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2 hover:transform hover:scale-105 transition-transform duration-200">
              <div className="w-8 h-8 bg-[#5C1010] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="poppins text-[#5C1010]">{siteConfig.company.contact.email}</span>
            </div>
            <div className="flex items-center space-x-2 hover:transform hover:scale-105 transition-transform duration-200">
              <div className="w-8 h-8 bg-[#5C1010] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="poppins text-[#5C1010]">{siteConfig.company.contact.phone}</span>
            </div>
          </div>
        </div>

        {/* Animated Footer */}
        <div className="text-center animate-fade-in" style={{animationDelay: '3.2s'}}>
          <p className="poppins text-sm text-[#5C1010] opacity-70">
            © 2025 {siteConfig.company.name}. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
};

export default UnderConstruction;
