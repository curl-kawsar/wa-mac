"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Home, Briefcase, Users, PhoneCall, MessageCircle } from "lucide-react"
import Image from "next/image"
import { usePathname } from 'next/navigation'

// WhatsApp Button component to be reused
const WhatsAppButton = () => {
  const whatsappNumber = "+14633333896" // Based on the phone number from ContactInfo.jsx
  
  return (
    <div className="fixed right-5 sm:right-6 md:right-8 bottom-5 sm:bottom-6 md:bottom-8 z-[49] group">
      <a 
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5C1010] shadow-lg hover:bg-[#7B1A1A] transition-all duration-300 hover:scale-110 cursor-pointer border border-white/10"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          {/* WhatsApp icon */}
          <Image 
            src="/whatsapp_icon.svg" 
            alt="WhatsApp" 
            width={28} 
            height={28} 
            className="z-10 w-6 h-6 sm:w-7 sm:h-7"
          />

          {/* Animation pulse effect */}
          <span className="absolute -inset-0.5 rounded-full bg-[#5C1010] opacity-30 animate-ping"></span>
        </div>
      </a>
      
      {/* Tooltip that appears on hover */}
      <div className="absolute left-16 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100 origin-left">
        <div className="bg-white text-[#5C1010] text-xs sm:text-sm poppins font-medium py-2 px-3 sm:px-4 rounded shadow-md whitespace-nowrap">
          Chat with us
          {/* Triangle pointer */}
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 border-8 border-transparent border-r-white"></div>
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const scrollPosition = useRef(0)
  const headerRef = useRef(null)

  // Function to lock scroll
  const lockScroll = () => {
    if (typeof window !== 'undefined') {
      scrollPosition.current = window.pageYOffset
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPosition.current}px`
      document.body.style.width = '100%'
    }
  }

  // Function to unlock scroll
  const unlockScroll = () => {
    if (typeof window !== 'undefined') {
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('top')
      document.body.style.removeProperty('width')
      window.scrollTo(0, scrollPosition.current)
    }
  }

  useEffect(() => {
    // Lock/unlock body scroll when mobile menu is open
    if (isMenuOpen) {
      lockScroll()
    } else {
      unlockScroll()
    }

    return () => {
      // Clean up by unlocking scroll when component unmounts
      if (isMenuOpen) {
        unlockScroll()
      }
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen && typeof window !== 'undefined') {
        const offset = window.scrollY
        if (offset > 10) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header 
        ref={headerRef}
        className={`sticky top-0 z-[50] w-full transition-all duration-300 overflow-x-hidden ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-md" 
            : "bg-white border-b border-gray-200 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-1.5">
              <div>
                <Image
                  src="/navbar_logo.svg"
                  width={40}
                  height={500}
                  alt="WA Management Logo"
                  className="w-[32px] xl:w-[38px] 2xl:w-[42px]"
                />
              </div>
              <div>
                <p className='text-[#5C1010] font-semibold poppins text-[13px] xl:text-[16px] 2xl:text-[18px] tracking-wide' >WA Management <br /> & Consulting</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex space-x-9">
              <li>
                <Link
                  href="/"
                  className={`poppins text-[15px] xl:text-[18px] 2xl:text-[20px] text-[#5C1010] hover:text-[#8B2323] transition-colors pb-1 ${
                    pathname === '/' 
                      ? 'font-medium underline decoration-[#5C1010] decoration-2 underline-offset-4' 
                      : 'font-normal'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`poppins text-[15px] xl:text-[18px] 2xl:text-[20px] text-[#5C1010] hover:text-[#8B2323] transition-colors pb-1 ${
                    pathname === '/services' 
                      ? 'font-medium underline decoration-[#5C1010] decoration-2 underline-offset-4' 
                      : 'font-normal'
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`poppins text-[15px] xl:text-[18px] 2xl:text-[20px] text-[#5C1010] hover:text-[#8B2323] transition-colors pb-1 ${
                    pathname === '/about-us' 
                      ? 'font-medium underline decoration-[#5C1010] decoration-2 underline-offset-4' 
                      : 'font-normal'
                  }`}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Button */}
          <div>
            <Link
              href="/contact-us"
              className="hidden md:flex items-center justify-center poppins text-[13px] xl:text-[16px] 2xl:text-[18px] w-[105px] xl:w-[130px] 2xl:w-[155px] h-[35px] xl:h-[40px] 2xl:h-[45px] font-medium bg-[#5C1010] text-white px-3 py-2 rounded hover:bg-[#7B1A1A] transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-4 relative z-[60] w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm transition-transform duration-300 hover:scale-105" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-[#5C1010]" />
            ) : (
              <Menu className="h-5 w-5 text-[#5C1010]" />
            )}
          </button>
        </div>
      </header>

      {/* Fixed position elements - separate from the header */}
      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-[55] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        style={{ height: '100vh' }}
      />
      
      {/* Mobile Sidebar - Fixed position independent of scroll */}
      <aside 
        className={`fixed top-0 right-0 h-100vh w-[80%] max-w-[320px] bg-white shadow-2xl z-[56] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
        style={{ height: '100vh' }}
      >
        {/* Mobile menu header with close button */}
        <div className="sticky top-0 flex items-center justify-between p-4 bg-white border-b border-gray-200 z-10">
          <div className="flex items-center">
            <Image
              src="/navbar_logo.svg"
              width={28}
              height={28}
              alt="WA Management Logo"
              className="mr-2"
            />
            <span className="text-[#5C1010] font-semibold poppins text-sm">WA Management</span>
          </div>
          <button 
            onClick={closeMobileMenu}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-[#5C1010]" />
          </button>
        </div>
        
        {/* Mobile menu links */}
        <nav className="py-5 px-4">
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className={`poppins flex items-center text-[15px] text-[#5C1010] hover:text-[#8B2323] transition-colors p-3 rounded-lg ${
                  pathname === '/' 
                    ? 'bg-[#FCEEEE] font-medium' 
                    : 'hover:bg-gray-50 font-normal'
                }`}
                onClick={closeMobileMenu}
              >
                <Home className="mr-3 h-5 w-5 flex-shrink-0" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`poppins flex items-center text-[15px] text-[#5C1010] hover:text-[#8B2323] transition-colors p-3 rounded-lg ${
                  pathname === '/services' 
                    ? 'bg-[#FCEEEE] font-medium' 
                    : 'hover:bg-gray-50 font-normal'
                }`}
                onClick={closeMobileMenu}
              >
                <Briefcase className="mr-3 h-5 w-5 flex-shrink-0" />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`poppins flex items-center text-[15px] text-[#5C1010] hover:text-[#8B2323] transition-colors p-3 rounded-lg ${
                  pathname === '/about-us' 
                    ? 'bg-[#FCEEEE] font-medium' 
                    : 'hover:bg-gray-50 font-normal'
                }`}
                onClick={closeMobileMenu}
              >
                <Users className="mr-3 h-5 w-5 flex-shrink-0" />
                <span>About Us</span>
              </Link>
            </li>
            <li className="pt-3">
              <Link
                href="/contact-us"
                className="poppins flex items-center justify-center text-[15px] w-full font-medium bg-[#5C1010] text-white px-4 py-3 rounded-lg hover:bg-[#7B1A1A] transition-colors shadow-md"
                onClick={closeMobileMenu}
              >
                <PhoneCall className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu footer */}
        <div className="mt-auto p-4 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} WA Management & Consulting.<br />All rights reserved.
          </p>
        </div>
      </aside>

      {/* Add the WhatsApp Button component */}
      <WhatsAppButton />
    </>
  )
}

export default Navbar