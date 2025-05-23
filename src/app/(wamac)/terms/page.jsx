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
    <div className="bg-gray-100 text-gray-800 poppins">
      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* <h1 className="text-3xl font-bold mb-6 text-center text-[#5C1010]">Privacy Policy</h1>
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
        <p className="mb-8">WA-MAC may update these terms at any time. Continued use of the site indicates acceptance of the revised terms.</p> */}

        <h1 className="text-3xl font-bold mb-6 text-center text-[#5C1010]">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to <strong>wa-mac.com</strong> , the official website of <strong>WA Management & Consulting LLC</strong>. By accessing or using our website, services, or communicating with us, you agree to the following <strong>Terms and Conditions</strong> and <strong>Privacy Policy</strong> . If you do not agree with these terms, please discontinue use of our website and services immediately.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">1. Definitions</h2>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li><strong>"Company", "We", "Us", "Our" </strong> refers to WA Management & Consulting LLC.</li>
          <li><strong>"Client", "User", "You", "Your" </strong> refers to any individual, entity, or organization accessing or using our website or services.</li>
          <li><strong>"Website" </strong> refers to <a href="https://www.wa-mac.com" className="text-blue-600 underline">www.wa-mac.com</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">2. Services</h2>
        <p className="mb-8">WA Management & Consulting LLC provides property management and consulting services for residential and commercial properties. This includes tenant coordination, leasing support, maintenance facilitation, and communication via various channels including SMS.</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">3. Use of Website</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Provide accurate, current, and complete information as requested.</li>
          <li>Use the website only for lawful purposes.</li>
          <li>Do not infringe upon intellectual property or privacy rights of others.</li>
        </ul>
        <p className="mb-6">Unauthorized use or misuse of the site may result in claims or criminal prosecution..</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">4. Cookies</h2>
        <p className="mb-8">Our website uses cookies to enhance user experience and gather anonymous usage data. By continuing to use the site, you consent to our use of cookies in accordance with our policy.</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">5. Intellectual Property</h2>
        <p className="mb-4">All content on this website, including text, graphics, logos, and software, is owned by WA Management & Consulting LLC unless stated otherwise. You may not:</p>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li>Republish, reproduce, or distribute our content without written permission.</li>
          <li>Use our branding or logo without a valid trademark license agreement.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">6. SMS Communications & Consent</h2>
        <p className="mb-4">By providing your mobile number and opting in to receive SMS communications, you consent to receive text messages from <strong>WA Management & Consulting LLC</strong> . These messages may relate to our property management services and may include, but are not limited to:</p>

        <h3 className="text-xl font-semibold mb-2">6.1 Types of SMS Communications</h3>
        <p className='mb-2' >If you have consented to receive text messages from WA Management & Consulting LLC, you may receive communications such as:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Appointment reminders</li>
          <li>Maintenance or service updates</li>
          <li>Customer care</li>
          <li>Marketing notification</li>
          <li>Account notification</li>
          <li>Follow-up messages</li>
          <li>Billing or account inquiries</li>
          <li>Promotions or offers (if applicable)</li>
        </ul>
        <p className="mb-4 italic">Example: “Hello, this is a friendly reminder of your upcoming appointment with WA Management & Consulting LLC at [Property Address] on [Date] at [Time]. You can reply STOP to opt out at any time.”</p>

        <h3 className="text-xl font-semibold mb-2">6.2 Opt-In Method</h3>
        <p className='mb-2' >You may opt in to receive SMS messages by one or more of the following methods:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Verbal confirmation with staff</li>
          <li>Submitting an online form on our website</li>
          <li>Completing a physical/paper form</li>
          <li>Fill out a website form</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">6.3 Opt-Out Method</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Replying "STOP" to any message</li>
          <li>Contacting us directly at  <a href="mailto:contact@wa-mac.com" className="text-blue-600 underline"><strong>contact@wa-mac.com </strong></a>to request removal from our messaging list
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">6.4 Help</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Reply with the keyword <strong>HELP</strong>
          </li>
          <li>Or contact us directly at  <a href="mailto:contact@wa-mac.com" className="text-blue-600 underline"><strong>contact@wa-mac.com </strong></a>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">6.5 Message Frequency</h3>
        <p className="mb-4">Message frequency may vary depending on the nature of our communication with you. For example, you may receive up to <strong>2 SMS messages per week</strong> related to appointments, billing, or account updates</p>

        <h3 className="text-xl font-semibold mb-2">6.6 Standard Messaging Disclosures</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Message and data rates may apply, depending on your mobile carrier and plan.
          </li>
          <li>You may receive messages either domestically or internationally, subject to your carrier’s pricing policies.
          </li>
          <li>You can opt out at any time by texting "STOP."
          </li>
          <li>For help, reply “HELP” or visit our <strong>Privacy Policy</strong> and <strong>Terms and Conditions</strong> at <a href="https://wa-mac.com" className="text-blue-600 underline">https://wa-mac.com</a>.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">6.7 Privacy & Data Usage</h3>
        <p className="mb-8">The phone number(s) you provide and any information collected as part of the SMS consent process will <strong>not be shared with third parties for marketing purposes</strong> . We use this information solely to communicate with you in relation to your services with WA Management & Consulting LLC.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">7. User-Generated Content</h2>
        <p className='mb-2' >If you post or submit comments, reviews, or other content through our website:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>You warrant that any submitted content is lawful and does not violate third-party rights.</li>
          <li>You grant us a non-exclusive, royalty-free license to use and display submitted content.</li>
        </ul>
        <p className='mb-8' >We reserve the right to monitor, edit, or remove user content deemed inappropriate or in violation of these terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">8. Linking Policy</h2>
        <p className="mb-2">You may link to our website only if the link:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Is not misleading.</li>
          <li>Does not imply sponsorship or endorsement.</li>
          <li>Fits within the context of the linking party's website.</li>
        </ul>
        <p className="mb-8">We reserve the right to request the removal of any links to our website at our discretion.</p>

        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">9. Security Measures</h2>
        <p className="mb-8">We implement industry-standard protocols to protect your data from unauthorized access or disclosure. This includes encryption, access restrictions, and secure data storage.</p>


        <h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">10. What Information Is Collected</h2>
<p className="mb-4">We collect personal information including, but not limited to:</p>
<ul className="list-disc list-inside mb-4 space-y-2">
  <li>Name</li>
  <li>Email address</li>
  <li>Phone number</li>
  <li>Property-related information</li>
  <li>Communication preferences</li>
</ul>

<h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">11. How personal information is used</h2>
<p className="mb-8">
  This data is used exclusively for providing property management services, customer support, and communications. We do not use your information for unrelated marketing purposes without your consent.
</p>

<h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">12. Information Sharing and Disclosure</h2>
<p className="mb-8">
  We do not sell or rent your personal information to third parties. We do not sell, rent, release, or transfer your SMS consent or phone number to any third party for any third party marketing purposes.
</p>

<h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">13. Business Transfer</h2>
<p className="mb-8">
  In the event of a merger, acquisition, or sale of the company, your information may be transferred to the new entity. The successor entity will honor the commitments outlined in this policy.
</p>

<h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">14. Your Rights</h2>
<p className="mb-4">You have the right to:</p>
<ul className="list-disc list-inside mb-4 space-y-2">
  <li>Access the personal data we hold about you</li>
  <li>Request correction of inaccurate or incomplete data</li>
  <li>Request deletion of your data (subject to contractual or legal obligations)</li>
  <li>Withdraw consent for communication at any time</li>
</ul>
<p className="mb-8">
  To exercise these rights, contact us at: <a href="mailto:contact@wa-mac.com" className="text-blue-600 underline">contact@wa-mac.com</a>
</p>

<h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">15. Service Modifications</h2>
<p className="mb-8">
  WA Management & Consulting LLC reserves the right to alter, suspend, or discontinue services or the website at any time, with or without notice.
</p>

<h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">16. Disclaimer</h2>
<p className="mb-8">
  All content on this website is provided "as is" and without warranties of any kind, expressed or implied. We do not guarantee the accuracy, completeness, or reliability of the information being provided. We are not liable for any damages resulting from your use of our site or services, to the maximum extent permitted by law.
</p>

<h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">17. Governing Law</h2>
<p className="mb-8">
  These terms shall be governed by and construed in accordance with the laws of the <strong>State of Indiana</strong>, without regard to conflict of law principles.
</p>

<h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">18. Changes to this Policy</h2>
<p className="mb-8">
  We reserve the right to revise this combined <strong>Terms and Conditions</strong> and <strong>Privacy Policy</strong> at any time. All changes will be posted on this page. Continued use of our website and services constitutes your acceptance of the updated policy.
</p>

<h2 className="text-2xl font-semibold mb-4 text-[#5C1010]">19. Contact Us</h2>
<p className="mb-2">
  For questions or concerns about these Terms and Conditions or our Privacy Policy, please contact:
</p>
<ul className="list-none list-inside mb-8 space-y-2">
  <li><a href="mailto:contact@wa-mac.com" className="text-blue-600 underline"><strong>contact@wa-mac.com</strong></a></li>
  <li><strong>WA Management & Consulting LLC</strong></li>
</ul>



      </div>
    </div>
  )
} 
