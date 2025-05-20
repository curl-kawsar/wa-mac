"use client"
import React, { useState } from 'react'
import { z } from 'zod'
import Link from 'next/link'
import ContactSpinner from './ContactSpinner'
import SuccessModal from './SuccessModal'

// Define Zod schema for form validation
const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(11, "Please enter 11 digit number without country code"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  message: z.string().min(1, "Message is required").max(1000, "Message is too long"),
  agreement: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms",
  }),
});

const ContactForm = () => {
  const optionsList = [
    { value: 'general', label: 'General' },
    { value: 'teams', label: 'Teams' },
    { value: 'billing', label: 'Billing' },
    { value: 'invoices', label: 'Invoices' },
    { value: 'account', label: 'Account' },
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    date: '',
    time: '',
    message: '',
    agreement: false
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // State for submission status
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear the error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const validateForm = () => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = {};
        error.errors.forEach(err => {
          formattedErrors[err.path[0]] = err.message;
        });
        setErrors(formattedErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    const isValid = validateForm();
    if (!isValid) return;

    setIsLoading(true);

    try {
      console.log('Submitted Data:', formData);

      // Make API call to send email
      await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      await wait(1500); // Reduced delay for better UX

      // Show success modal
      setIsSuccessModalOpen(true);

      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        inquiryType: '',
        date: '',
        time: '',
        message: '',
        agreement: false
      });

    } catch (error) {
      console.error('Submit error:', error);
      setErrors(prev => ({
        ...prev,
        form: "There was an error submitting the form. Please try again."
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  // Common classes
  const inputBaseClasses = "poppins block mt-2 w-full placeholder-[#A0A0A0] rounded border border-gray-300 hover:border-gray-800 hover:border-2 bg-white px-4 py-2 text-gray-700 focus:border-gray-480 focus:outline-none focus:ring focus:ring-gray-800 focus:ring-opacity-40 text-sm md:text-base lg:text-base xl:text-base h-[40px] md:h-[45px] lg:h-[48px] xl:h-[50px]";
  const errorInputClasses = "border-red-500 hover:border-red-700 focus:border-red-500 focus:ring-red-500";
  const labelBaseClasses = "poppins block text-sm md:text-base lg:text-lg xl:text-lg font-semibold text-[#5C1010]";

  return (
    <>
      <div className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] xl:w-[50%] h-auto py-6 md:py-8 lg:py-10 flex justify-center items-center space-y-3 md:space-y-5 lg:space-y-6 flex-col p-3 md:p-5 lg:p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl"
        style={{ boxShadow: '0px 8px 34px rgba(92, 16, 16, 0.25)' }}>

        <div className="flex items-center space-x-3 justify-center w-full mb-2">
          <div className="w-[30px] h-[2px] bg-[#5C1010]"></div>
          <div className="poppins text-[#5C1010] text-sm md:text-base font-medium">We'd Love to Hear From You</div>
          <div className="w-[30px] h-[2px] bg-[#5C1010]"></div>
        </div>

        <div className="poppins text-[#5C1010] text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4">
          Let's Talk About Your Property Goals
        </div>

        {/* Form Error */}
        {errors.form && (
          <div className="w-full max-w-sm bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded mb-3">
            <p>{errors.form}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg space-y-3 md:space-y-4">
          <div>
            <label className={labelBaseClasses}>Full Name</label>
            <input
              type="text"
              placeholder="your name"
              className={`${inputBaseClasses} ${errors.fullName ? errorInputClasses : ''}`}
              name="fullName"
              value={formData.fullName || ''}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="mt-1 poppins text-red-500 text-xs md:text-sm">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className={labelBaseClasses}>Email</label>
            <input
              type="text"
              placeholder="yourname@mail.com"
              className={`${inputBaseClasses} ${errors.email ? errorInputClasses : ''}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="mt-1 poppins text-red-500 text-xs md:text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className={labelBaseClasses}>Phone</label>
            <input
              type="text"
              placeholder="your phone number"
              className={`${inputBaseClasses} ${errors.phone ? errorInputClasses : ''}`}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="mt-1 poppins text-red-500 text-xs md:text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className={labelBaseClasses}>Inquiry Type</label>
            <select
              id="settings-category"
              className={`${inputBaseClasses} ${errors.inquiryType ? errorInputClasses : ''}`}
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
            >
              <option className="text-black bg-[#EFE7E7] text-sm" value="" disabled>
                select one
              </option>
              {optionsList.map((option) => (
                <option key={option.value} className="text-black bg-[#EFE7E7] text-sm" value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.inquiryType && (
              <p className="mt-1 poppins text-red-500 text-xs md:text-sm">{errors.inquiryType}</p>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-center items-start md:items-center space-y-3 md:space-y-0 md:space-x-4 w-full">
            <div className="w-full md:w-1/2">
              <label className={labelBaseClasses}>Desired Date</label>
              <input
                type="date"
                className={`${inputBaseClasses} ${errors.date ? errorInputClasses : ''}`}
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && (
                <p className="mt-1 poppins text-red-500 text-xs md:text-sm">{errors.date}</p>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <label className={labelBaseClasses}>Desired Time</label>
              <input
                type="time"
                className={`${inputBaseClasses} time-input ${errors.time ? errorInputClasses : ''}`}
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
              {errors.time && (
                <p className="mt-1 poppins text-red-500 text-xs md:text-sm">{errors.time}</p>
              )}
            </div>
          </div>

          <div>
            <label className={labelBaseClasses}>Additional Message</label>
            <textarea
              placeholder="write your desired note"
              className={`poppins block mt-2 w-full placeholder-[#A0A0A0] rounded border border-gray-300 hover:border-gray-800 hover:border-2 bg-white px-4 py-2 text-gray-700 focus:border-gray-480 focus:outline-none focus:ring focus:ring-gray-800 focus:ring-opacity-40 text-sm md:text-base lg:text-base xl:text-base h-[100px] md:h-[120px] lg:h-[140px] xl:h-[150px] resize-none ${errors.message ? errorInputClasses : ''}`}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="mt-1 poppins text-red-500 text-xs md:text-sm">{errors.message}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="cursor-pointer w-full h-[40px] md:h-[44px] lg:h-[48px] xl:h-[50px] poppins font-semibold text-sm md:text-base lg:text-lg xl:text-lg px-6 py-2 tracking-wide text-white bg-[#5C1010] capitalize transition-colors duration-300 transform rounded hover:bg-[#7B1A1A] focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? <ContactSpinner /> : "Submit"}
            </button>
          </div>

          <div className="flex items-start gap-3 mt-4">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-[#5C1010] border-gray-300 rounded focus:ring-[#5C1010]"
            />
            <div className="poppins text-xs md:text-sm text-[#6E6E6E] text-justify">
              By opting into SMS from a web form or other medium, you are agreeing to receive SMS messages from WA Management & Consulting, LLC. This includes SMS messages for appointment scheduling, appointment reminders, post-visit instructions, lab notifications, and billing notifications. Message frequency varies. Message and data rates may apply. See privacy policy at{" "}
              <Link href="/terms">
                <span className="text-[#5C1010] cursor-pointer font-medium">Privacy Policy</span>
              </Link>. 
              Message HELP for help. Reply STOP to any message to opt out.
              {/* <span className="font-semibold"> WA-MAC</span>. <br />
              You also agree to the Terms of Service and &nbsp; */}
              {/* <Link href="/terms">
                <span className="text-[#5C1010] underline cursor-pointer">Privacy Policy</span>.
              </Link> */}
              {errors.agreement && (
                <p className="mt-2 text-red-500 text-xs font-medium">{errors.agreement}</p>
              )}
            </div>
          </div>
        </form>
      </div>
      
      {/* Success Modal */}
      <SuccessModal isOpen={isSuccessModalOpen} onClose={closeSuccessModal} />
    </>
  )
}

export default ContactForm 