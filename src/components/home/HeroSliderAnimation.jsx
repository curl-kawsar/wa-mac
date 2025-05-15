import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { heroData } from '../../data/heroData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSliderAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Go to next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
  };

  // Go to previous slide
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroData.length) % heroData.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Title and description */}
              <div className="w-full text-center mb-10">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="literata text-2xl md:text-3xl lg:text-4xl font-bold text-[#5C1010] mb-4"
                >
                  {heroData[currentIndex].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="poppins text-sm md:text-base lg:text-lg text-[#5C1010] max-w-2xl mx-auto"
                >
                  {heroData[currentIndex].description}
                </motion.p>
              </div>
              
              {/* Image container */}
              <div className="relative w-full max-w-2xl h-[300px] md:h-[400px] mx-auto">
                {/* Background glow effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[#f5f5f5] opacity-40 rounded-full blur-xl"></div>
                </div>
                
                {/* Hero image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={heroData[currentIndex].image}
                      alt={heroData[currentIndex].title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#5C1010] text-white rounded-full p-2 shadow-lg z-10 hover:bg-[#7B1A1A] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#5C1010] text-white rounded-full p-2 shadow-lg z-10 hover:bg-[#7B1A1A] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {heroData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#5C1010] w-5' : 'bg-[#D4AF37]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
