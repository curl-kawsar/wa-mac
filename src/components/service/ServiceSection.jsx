import { useState, useEffect } from 'react'
import Image from 'next/image'
import icon from '../../assets/lucide.png'
import { motion, AnimatePresence } from 'framer-motion'

export default function ServiceSection() {
  const [selectedCategory, setSelectedCategory] = useState('landlord')
  const [selectedPackage, setSelectedPackage] = useState('deluxe')
  
  // Service data organized by category and package
  const serviceData = {
    landlord: {
      deluxe: [
        {
          title: "Premium Property Listing",
          description: "Professional photography and premium placement on top rental sites",
          icon: icon,
        },
        {
          title: "24/7 Maintenance Coordination",
          description: "Round-the-clock response to all property maintenance needs",
          icon: icon,
        },
        {
          title: "Tenant Screening & Selection",
          description: "Comprehensive background checks and selection process",
          icon: icon,
        },
        {
          title: "Rent Collection & Accounting",
          description: "Automated rent collection and detailed financial reporting",
          icon: icon,
        },
        {
          title: "Legal Compliance Management",
          description: "Stay updated with all property regulations and requirements",
          icon: icon,
        },
        {
          title: "Property Inspection Services",
          description: "Regular inspections with detailed photo documentation",
          icon: icon,
        },
      ],
      standard: [
        {
          title: "Basic Property Listing",
          description: "Standard listing on major rental platforms",
          icon: icon,
        },
        {
          title: "Basic Maintenance Coordination",
          description: "Business hours response to maintenance requests",
          icon: icon,
        },
        {
          title: "Basic Tenant Screening",
          description: "Essential background and credit checks for applicants",
          icon: icon,
        },
        {
          title: "Monthly Rent Collection",
          description: "Standard rent processing and basic reporting",
          icon: icon,
        },
        {
          title: "Quarterly Inspections",
          description: "Seasonal property check-ups with reports",
          icon: icon,
        },
        {
          title: "Lease Renewal Handling",
          description: "Management of lease extensions and renewals",
          icon: icon,
        },
      ]
    },
    homeowner: [
      {
        title: "Home Maintenance Services",
        description: "Regular check-ups and preventative maintenance solutions",
        icon: icon,
      },
      {
        title: "Emergency Repairs",
        description: "24/7 emergency repair services for homeowners",
        icon: icon,
      },
      {
        title: "Renovation Management",
        description: "Professional oversight of all your home improvement projects",
        icon: icon,
      },
      {
        title: "Property Value Assessment",
        description: "Expert analysis of your property's current market value",
        icon: icon,
      },
      {
        title: "Insurance Coordination",
        description: "Assistance with claims and policy management",
        icon: icon,
      },
      {
        title: "Home Security Solutions",
        description: "Modern security implementations for complete peace of mind",
        icon: icon,
      },
    ],
    tenant: [
      {
        title: "Maintenance Request System",
        description: "Simple online system for submitting maintenance needs",
        icon: icon,
      },
      {
        title: "Rent Payment Portal",
        description: "Convenient online payment options with payment history",
        icon: icon,
      },
      {
        title: "Move-in/Move-out Assistance",
        description: "Comprehensive support for relocations and transitions",
        icon: icon,
      },
      {
        title: "Community Events Access",
        description: "Exclusive access to community activities and gatherings",
        icon: icon,
      },
      {
        title: "Tenant Rights Advisory",
        description: "Expert guidance on tenant rights and responsibilities",
        icon: icon,
      },
      {
        title: "Utility Setup Assistance",
        description: "Help coordinating all necessary utility connections",
        icon: icon,
      },
    ]
  };

  // Get services based on current selection
  const getActiveServices = () => {
    if (selectedCategory === 'landlord') {
      return serviceData.landlord[selectedPackage];
    }
    return serviceData[selectedCategory];
  };
  
  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#FDF7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Elegant animated header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#F8F0F0] text-[#5C1010] rounded-full text-sm font-medium tracking-wide mb-3">
            TAILORED PROPERTY SOLUTIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C1010] literata leading-tight">
            Services Designed For Your Needs
          </h2>
          <div className="w-24 h-1 bg-[#5C1010] mx-auto mt-6 rounded-full"></div>
        </motion.div>
        
        {/* Interactive category selector */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-white p-2 rounded-xl shadow-sm flex gap-2 md:gap-4">
            {['landlord', 'homeowner', 'tenant'].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  if (category === 'landlord') setSelectedPackage('deluxe');
                }}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-[#5C1010] text-white shadow-md' 
                    : 'bg-transparent text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Package selector (only for landlord) */}
        <AnimatePresence>
          {selectedCategory === 'landlord' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-12"
            >
              <div className="flex justify-center gap-6">
                {['deluxe', 'standard'].map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`relative group px-8 py-3 border-2 rounded-lg transition-all duration-300 ${
                      selectedPackage === pkg
                        ? 'border-[#5C1010] text-[#5C1010]'
                        : 'border-gray-300 text-gray-500 hover:border-gray-400'
                    }`}
                  >
                    <span className="block text-sm uppercase tracking-wide font-semibold mb-1">
                      {pkg === 'deluxe' ? 'Premium' : 'Standard'}
                    </span>
                    <span className="text-xs opacity-75">
                      {pkg === 'deluxe' ? 'Comprehensive Management' : 'Basic Support'}
                    </span>
                    {selectedPackage === pkg && (
                      <motion.div 
                        layoutId="packageIndicator"
                        className="absolute -bottom-1 left-1/2 w-1/3 h-0.5 bg-[#5C1010]" 
                        initial={{ x: '-50%' }}
                        animate={{ x: '-50%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Service cards with staggered animation */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {getActiveServices().map((service, i) => (
              <motion.div
                key={`${selectedCategory}-${selectedPackage}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-[#5C1010]/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#F9EFEF] flex items-center justify-center mr-4 group-hover:bg-[#5C1010] transition-colors duration-300">
                    <Image 
                      src={service.icon} 
                      alt={service.title} 
                      width={24} 
                      height={24}
                      className="group-hover:brightness-[10] transition-all duration-300" 
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#5C1010] poppins">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Learn More</span>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 group-hover:border-[#5C1010] group-hover:bg-[#5C1010] transition-all duration-300">
                    <svg 
                      className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

