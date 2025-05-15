import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ContactInfo = () => {

  const phoneNumber = '(463) 333-3896'
  const email = 'contact@wa-mac.com'
  const workingHours = '8:00AM - 7:00PM'
  const location = 'Indianapolis, IN'

  // Function to clean phone number for tel link
  const formatPhoneForDialing = (phone) => {
    return phone.replace(/[().\s-]/g, '')
  }

  const cardStyle = {
    boxShadow: '0px 4px 16px rgba(92, 16, 16, 0.15)', 
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '8px'
  }

  return (
    <div className='flex flex-col items-center lg:flex-row lg:justify-center lg:items-stretch gap-4 lg:gap-4 xl:gap-5 mb-12 md:mb-16 px-4'>
      {/* Phone */}
      <div className='w-full max-w-sm lg:w-[260px] xl:w-[280px] h-auto lg:h-[90px] xl:h-[100px] flex items-center p-4 lg:p-3' style={cardStyle}>
        <div className='w-[40px] lg:w-[50px] flex justify-center items-center flex-shrink-0'>
          <Image src="/call.svg" alt="Phone" width={24} height={24} className="w-[20px] lg:w-[24px] xl:w-[28px]" />
        </div>
        <div className='flex flex-col justify-center flex-grow pl-3 lg:pl-2 lg:w-[210px]'>
          <div className='text-lg lg:text-xl xl:text-xl poppins font-semibold text-[#000000]'>Phone Number</div>
          <Link 
            href={`tel:${formatPhoneForDialing(phoneNumber)}`} 
            className='text-sm lg:text-base xl:text-base poppins text-[#000000] hover:text-[#5C1010] transition-colors cursor-pointer'
          >
            {phoneNumber}
          </Link>
        </div>
      </div>
      
      {/* Email */}
      <div className='w-full max-w-sm lg:w-[260px] xl:w-[280px] h-auto lg:h-[90px] xl:h-[100px] flex items-center p-4 lg:p-3' style={cardStyle}>
        <div className='w-[40px] lg:w-[50px] flex justify-center items-center flex-shrink-0'>
          <Image src="/mail.svg" alt="Email" width={24} height={24} className="w-[20px] lg:w-[24px] xl:w-[28px]" />
        </div>
        <div className='flex flex-col justify-center flex-grow pl-3 lg:pl-2 lg:w-[210px]'>
          <div className='text-lg lg:text-xl xl:text-xl poppins font-semibold text-[#000000]'>Email Address</div>
          <Link 
            href={`mailto:${email}`} 
            className='text-sm lg:text-base xl:text-base poppins text-[#000000] hover:text-[#5C1010] transition-colors cursor-pointer'
          >
            {email}
          </Link>
        </div>
      </div>
      
      {/* Working Hours */}
      <div className='w-full max-w-sm lg:w-[260px] xl:w-[280px] h-auto lg:h-[90px] xl:h-[100px] flex items-center p-4 lg:p-3' style={cardStyle}>
        <div className='w-[40px] lg:w-[50px] flex justify-center items-center flex-shrink-0'>
          <Image src="/clock.svg" alt="Clock" width={24} height={24} className="w-[20px] lg:w-[24px] xl:w-[28px]" />
        </div>
        <div className='flex flex-col justify-center flex-grow pl-3 lg:pl-2 lg:w-[210px]'>
          <div className='text-lg lg:text-xl xl:text-xl poppins font-semibold text-[#000000]'>Working hours</div>
          <div className='text-sm lg:text-base xl:text-base poppins text-[#000000]'>{workingHours}</div>
        </div>
      </div>
      
      {/* Location */}
      <div className='w-full max-w-sm lg:w-[260px] xl:w-[280px] h-auto lg:h-[90px] xl:h-[100px] flex items-center p-4 lg:p-3' style={cardStyle}>
        <div className='w-[40px] lg:w-[50px] flex justify-center items-center flex-shrink-0'>
          <Image src="/location.svg" alt="Location" width={24} height={24} className="w-[20px] lg:w-[24px] xl:w-[28px]" />
        </div>
        <div className='flex flex-col justify-center flex-grow pl-3 lg:pl-2 lg:w-[210px]'>
          <div className='text-lg lg:text-xl xl:text-xl poppins font-semibold text-[#000000]'>Location</div>
          <div className='text-sm lg:text-base xl:text-base poppins text-[#000000]'>{location}</div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo 