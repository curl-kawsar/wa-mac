import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SuccessModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Close modal automatically after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full"
              initial={{ y: 50, scale: 0.8 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="relative p-6 pb-10">
                {/* Success checkmark and animations */}
                <div className="flex justify-center mb-6 pt-4">
                  <div className="relative">
                    {/* Outer ring animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ scale: 0, borderWidth: 3 }}
                      animate={{ 
                        scale: [0, 1.2, 1], 
                        opacity: [0, 0.8, 1],
                        borderWidth: 3,
                        borderColor: ['rgba(92, 16, 16, 0.2)', 'rgba(92, 16, 16, 0.6)', 'rgba(92, 16, 16, 0.8)']
                      }}
                      transition={{ duration: 1, times: [0, 0.6, 1] }}
                      style={{ width: '100px', height: '100px' }}
                    />
                    
                    {/* Inner circle */}
                    <motion.div
                      className="bg-[#FCEEEE] rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      style={{ width: '100px', height: '100px' }}
                    >
                      {/* Checkmark */}
                      <motion.div
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                      >
                        <svg 
                          width="50" 
                          height="50" 
                          viewBox="0 0 50 50"
                          className="text-[#5C1010]"
                        >
                          <motion.path
                            d="M14,26 L21,33 L36,17"
                            fill="transparent"
                            strokeWidth="5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                    
                    {/* Particles effect */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-[#5C1010]"
                        initial={{ 
                          x: 0, 
                          y: 0, 
                          scale: 0,
                          opacity: 0 
                        }}
                        animate={{ 
                          x: Math.cos(i * (Math.PI / 3)) * 60, 
                          y: Math.sin(i * (Math.PI / 3)) * 60,
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          delay: 1.2 + (i * 0.05), 
                          duration: 1,
                          times: [0, 0.5, 1]
                        }}
                        style={{ width: '8px', height: '8px', left: '46px', top: '46px' }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Text content */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold poppins text-[#5C1010] mb-2">Message Sent!</h3>
                  <p className="text-gray-600 poppins">
                    Thank you for contacting us. We'll get back to you very soon!
                  </p>
                </motion.div>
                
                {/* Close button */}
                <motion.button
                  className="absolute top-3 right-3 text-gray-400 hover:text-[#5C1010] transition-colors"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
                
                {/* Continue button */}
                <motion.button
                  className="mt-6 w-full py-3 rounded bg-[#5C1010] text-white poppins font-medium hover:bg-[#7B1A1A] transition-colors"
                  onClick={onClose}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal; 