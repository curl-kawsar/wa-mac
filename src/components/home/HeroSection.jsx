import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../common/Button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['Home', 'Assets', 'Property'];
  
  useEffect(() => {
    const typeSpeed = 150; // Speed of typing in ms
    const deleteSpeed = 100; // Speed of deleting in ms
    const delayAfterWord = 1000; // Delay after word is fully typed
    
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        
        // If word is fully typed
        if (displayText === currentWord) {
          // Wait a bit before starting to delete
          setTimeout(() => setIsDeleting(true), delayAfterWord);
          return;
        }
      } else {
        // Deleting
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        
        // If fully deleted, move to next word
        if (displayText === '') {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
          return;
        }
      }
    };
    
    const timer = setTimeout(() => {
      handleTyping();
    }, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words]);
  
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center overflow-hidden pb-24 2xl:items-center 2xl:max-w-8xl 2xl:mx-auto">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-end items-center lg:items-start space-y-6 lg:ml-20 mb-16 2xl:ml-50 2xl:space-y-8">
          <h1 className="literata text-[20px] sm:text-[36px] lg:text-[45px] font-bold text-[#5C1010] leading-snug text-center lg:text-left px-1 lg:px-0 2xl:text-[60px]">
            Your <span className="text-[#D4AF37] inline-block min-w-[70px] sm:min-w-[120px] lg:min-w-[150px] 2xl:min-w-[180px]">{displayText}</span>
            <span className="animate-blink"></span>, Fully Managed. <br />
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
              className="mt-6 text-[18px] sm:text-[20px] lg:text-[24px] w-[220px] sm:w-[240px] lg:w-[284px] 2xl:h-24 2xl:text-[32px]"
            >
              Explore our services
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex items-end justify-center relative 2xl:justify-start">
          <div>
            <Image
              src="/home_vec.png"
              width={400}
              height={200}
              alt="Background Image"
              className="w-[220px] sm:w-[400px] lg:w-[431px] h-auto 2xl:w-[600px]"
            />
          </div>
          <div className="">
            <Image
              src="/home_img2.svg"
              width={800}
              height={500}
              alt="Overlay Image"
              className="absolute bottom-1 left-1/2 lg:left-80 -translate-x-1/2 z-10 w-[450px] sm:w-[500px] lg:w-[1400px] h-auto 2xl:w-[1600px] 2xl:left-[470px]"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;