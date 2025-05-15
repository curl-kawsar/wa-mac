"use client"
import React, { useEffect } from 'react'

export default function Terms() {
  // Disable context menu and dev tools access, same as contact page
  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', disableContextMenu);
    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#5C1010]">Privacy Policy</h1>
        <p className="mb-4">Welcome to <span className="font-semibold">WA-MAC.com</span>!</p>
        <p className="mb-4">
          WA-MAC.com provides information, listings, and services related to property management, including property rentals, tenant services, and landlord solutions.
        </p>
        <p className="mb-8">
          By accessing this website, you agree to be bound by these terms and conditions. If you do not agree with all of the terms and conditions stated on this page, please do not continue to use WA-MAC.com.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Terminology</h2>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li><strong>Client, You, Your:</strong> The person accessing this website and accepting the Company's terms and conditions.</li>
          <li><strong>The Company, Ourselves, We, Our, Us:</strong> Refers to WA-MAC.</li>
          <li><strong>Party, Parties, Us:</strong> Refers to both the Client and ourselves.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Services</h2>
        <p className="mb-4">WA-MAC.com offers a digital platform for users to:</p>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li>View and inquire about rental and property listings.</li>
          <li>Submit maintenance or service requests.</li>
          <li>Communicate with landlords or property managers.</li>
          <li>Access resources and support related to leasing, tenancy, or property management.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Service Modifications</h2>
        <p className="mb-8">WA-MAC reserves the right to add, modify, suspend, or discontinue services at any time without prior notice.</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Cookies</h2>
        <p className="mb-8">We use cookies to enhance user experience. By accessing WA-MAC.com, you agree to the use of cookies as outlined in our Privacy Policy.</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Intellectual Property</h2>
        <p className="mb-4">All content on WA-MAC.com is owned by WA-MAC and/or its licensors. You may not:</p>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li>Republish material without permission.</li>
          <li>Sell or rent content.</li>
          <li>Copy content for commercial purposes.</li>
          <li>Redistribute content without approval.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">User Submissions</h2>
        <p className="mb-8">By submitting content, you grant WA-MAC the right to use, reproduce, and display it as part of its services.</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Third-Party Links</h2>
        <p className="mb-8">WA-MAC.com may include links to third-party websites. We are not responsible for their content or services.</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Limitation of Liability</h2>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li>Use of or inability to use the website.</li>
          <li>Errors in property listings.</li>
          <li>Service delays or failures.</li>
          <li>Unauthorized access to user data.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Hyperlinking to Our Content</h2>
        <p className="mb-8">You may link to our site if the link:</p>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li>Is not misleading.</li>
          <li>Does not imply false sponsorship.</li>
          <li>Fits within the linking site's context.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Content Accuracy</h2>
        <p className="mb-8">While we strive for accuracy, WA-MAC makes no warranties regarding the reliability or completeness of content.</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Privacy</h2>
        <p className="mb-8">Refer to our Privacy Policy to learn how we handle your data.</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Indemnification</h2>
        <p className="mb-8">You agree to indemnify WA-MAC against any claims arising from your use of the website or violation of these terms.</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Termination</h2>
        <p className="mb-8">We reserve the right to terminate or restrict access to our site at our discretion, without prior notice.</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Governing Law</h2>
        <p className="mb-8">These terms are governed by the laws of Indiana, USA.</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">Changes to These Terms</h2>
        <p className="mb-8">WA-MAC may update these terms at any time. Continued use of the site indicates acceptance of the revised terms.</p>
      </div>
    </div>
  )
} 