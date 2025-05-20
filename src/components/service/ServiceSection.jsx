import icon from '../../assets/lucide.png' 
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function ServiceSection() {
  const [activeTab, setActiveTab] = useState('landlord');
  const [activePackage, setActivePackage] = useState('deluxe');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleTabClick = (tabId) => {
    if (tabId === 'landlord') {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setActiveTab(tabId);
      setIsDropdownOpen(false);
    }
  };

  const handlePackageClick = (packageId) => {
    setActivePackage(packageId);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#FAF5F5] to-[#FDF7F7] py-14">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Clean Header Design with White Theme */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-12 h-0.5 bg-[#5C1010]"></div>
            <h4 className="mx-3 text-[#5C1010] font-medium poppins">EXCLUSIVE SERVICES</h4>
            <div className="w-12 h-0.5 bg-[#5C1010]"></div>
          </div>
          
          <h2 className="text-center text-4xl font-bold mb-12 text-[#5C1010] literata">
            Property Management Solutions
          </h2>
        </div>
          
        {/* Clean Tab Design with Dropdown */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 relative">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => handleTabClick('landlord')}
              className={`px-4 py-2 text-lg poppins font-medium relative transition-all duration-300 flex items-center ${
                activeTab === 'landlord' 
                  ? 'text-[#5C1010]' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Landlord
              <svg 
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              {activeTab === 'landlord' && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#5C1010]"></div>
              )}
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute z-50 mt-2 py-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 animate-slideDown">
                {[
                  { id: 'deluxe', label: 'Deluxe Package' },
                  { id: 'standard', label: 'Standard Package' }
                ].map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => handlePackageClick(pkg.id)}
                    className={`w-full text-left px-4 py-2 text-sm poppins transition-colors ${
                      activePackage === pkg.id
                        ? 'bg-[#f8f2f2] text-[#5C1010] font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {pkg.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {['homeowner', 'tenant'].map((tabId) => (
            <button
              key={tabId}
              onClick={() => handleTabClick(tabId)}
              className={`px-4 py-2 text-lg poppins font-medium relative transition-all duration-300 ${
                activeTab === tabId 
                  ? 'text-[#5C1010]' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tabId === 'homeowner' ? 'Home Owner' : 'Tenant'}
              {activeTab === tabId && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#5C1010]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Service Cards Grid - White Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 rounded-md flex flex-col hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="w-10 h-10 bg-[#5C1010] flex items-center justify-center rounded">
                  <Image src={icon} alt="Pest Control Icon" width={24} height={24} />
                </div>
              </div>
              <h3 className="text-[#5C1010] poppins font-medium text-lg mb-3">Pest Control Coordination</h3>
              <p className="text-gray-600 poppins mb-5 flex-grow">
                A safe, pest-free home without the hassle of calling around or managing follow-ups.
              </p>
              <button className="bg-[#5C1010] text-white py-1.5 px-4 rounded self-start hover:bg-[#4a0d0d] transition-colors">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

