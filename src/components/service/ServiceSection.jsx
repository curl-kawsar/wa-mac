import icon from '../../assets/lucide.png' 
import Image from 'next/image'
import { useState } from 'react'

export default function ServiceSection() {
  const [activeTab, setActiveTab] = useState('landlord');
  const [activePackage, setActivePackage] = useState('deluxe');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Elegant Header Design */}
      <div className="mb-16 relative">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <div className="w-12 h-1 bg-[#5C1010]"></div>
            <h4 className="mx-3 text-[#5C1010] font-medium">EXCLUSIVE SERVICES</h4>
            <div className="w-12 h-1 bg-[#5C1010]"></div>
          </div>
          
          <h2 className="text-center text-4xl font-bold mb-12 text-[#5C1010] literata">
            Property Management Solutions
          </h2>
          
          {/* Elegant Tab Design */}
          <div className="flex space-x-12 mb-6 relative">
            {[
              { id: 'landlord', label: 'Landlord' },
              { id: 'homeowner', label: 'Home Owner' },
              { id: 'tenant', label: 'Tenant' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-lg font-medium relative transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'text-[#5C1010]' 
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#5C1010] animate-fadeIn"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Decorative Elements */}
        {/* <div className="absolute top-10 left-0 w-8 h-8 border-l-2 border-t-2 border-[#5C1010] opacity-40"></div>
        <div className="absolute top-10 right-0 w-8 h-8 border-r-2 border-t-2 border-[#5C1010] opacity-40"></div>
        <div className="absolute bottom-10 left-0 w-8 h-8 border-l-2 border-b-2 border-[#5C1010] opacity-40"></div>
        <div className="absolute bottom-10 right-0 w-8 h-8 border-r-2 border-b-2 border-[#5C1010] opacity-40"></div> */}
      </div>

      {/* Package Selection - More Elegant */}
      <div className="flex justify-center gap-4 mb-12 max-w-md mx-auto">
        {[
          { id: 'deluxe', label: 'Deluxe Package' },
          { id: 'standard', label: 'Standard Package' }
        ].map((pkg) => (
          <button
            key={pkg.id}
            onClick={() => setActivePackage(pkg.id)}
            className={`py-4 px-8 flex-1 text-center border shadow-sm transition-all ${
              activePackage === pkg.id
                ? 'bg-[#5C1010] text-white font-medium border-[#5C1010]'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
            } rounded-md`}
          >
            {pkg.label}
          </button>
        ))}
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border border-gray-200 p-6 rounded-md flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="w-10 h-10 bg-[#5C1010] flex items-center justify-center rounded">
                <Image src={icon} alt="Pest Control Icon" width={24} height={24} />
              </div>
            </div>
            <h3 className="text-[#5C1010] font-medium text-lg mb-3">Pest Control Coordination</h3>
            <p className="text-gray-600 mb-5 flex-grow">
              A safe, pest-free home without the hassle of calling around or managing follow-ups.
            </p>
            <button className="bg-[#5C1010] text-white py-1.5 px-4 rounded self-start hover:bg-[#4a0d0d] transition-colors">
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

