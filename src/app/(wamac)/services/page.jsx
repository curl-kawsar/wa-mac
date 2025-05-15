"use client";
import React from 'react';
import Image from 'next/image';

const MaintenancePage = () => {
  return (
    <>

      
      <div className="poppins min-h-screen flex flex-col items-center justify-center bg-red-50">
        
        {/* Main Content */}
        <div className="text-center px-6 max-w-xl ">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5C1010] mb-4">
            Under Maintenance
          </h1>
          
          <div className="w-24 h-1 bg-[#5C1010] mx-auto mb-6"></div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            We're currently working on improving our website. 
            We'll be back online shortly.
          </p>
          
          {/* Decorative element */}
          <div className="flex justify-center space-x-3 mt-8">
            <div className="w-3 h-3 rounded-full bg-[#5C1010] opacity-70"></div>
            <div className="w-3 h-3 rounded-full bg-[#5C1010] opacity-85"></div>
            <div className="w-3 h-3 rounded-full bg-[#5C1010]"></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default MaintenancePage;