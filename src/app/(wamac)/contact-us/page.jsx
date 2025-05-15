"use client"
import React, { useEffect } from 'react'
import { 
  ContactForm, 
  ContactInfo, 
  HeroBanner, 
  ContactHeader 
} from '../../../components/contact'
import contactBg from '../../../assets/contact.png'

const ContactUs = () => {

  // useEffect(() => {
  //   const disableContextMenu = (e) => e.preventDefault();
  //   document.addEventListener('contextmenu', disableContextMenu);
  //   return () => {
  //     document.removeEventListener('contextmenu', disableContextMenu);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (
  //       e.key === 'F12' ||
  //       (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)) ||
  //       (e.ctrlKey && e.key === 'U')
  //     ) {
  //       e.preventDefault();
  //     }
  //   };
  //   document.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

  return (
    <div className='bg-white overflow-x-hidden'>
      <HeroBanner />
      
      {/* Contact Information Section with Background */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-8 md:py-10"
        style={{ 
          backgroundImage: `url(${contactBg.src})`
        }}
      >
        <div className="relative z-10">
          <ContactHeader />
          <ContactInfo />
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="flex justify-center items-center pt-2 pb-16 px-4"
        style={{ 
          backgroundImage: `url(${contactBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactUs