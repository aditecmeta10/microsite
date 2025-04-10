import { useState } from 'react';
import React from 'react';
import ha from '../images/hero.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false, // Add consent to the initial state
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if consent is checked
    if (!formData.consent) {
      setSubmitStatus('consent-error'); // Set a specific status for consent error
      return; // Prevent form submission
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://p7hjkeqa74.execute-api.eu-north-1.amazonaws.com/prod/contactform',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', consent: false });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactform" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img 
              src={ha}
              alt="Building at night" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-2xl font-semibold mb-6">
              CONTACT US NOW
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
                />
              </div>

              <div className="checkbox-container" >
                <input
style={{ marginRight: '6px' }}                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  
                />
                <label htmlFor="consent">
                  I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-accent hover:bg-accent/90 transition-colors text-white font-medium rounded-md flex items-center justify-center"
                >
                  {isSubmitting ? 'Sending...' : 'ENQUIRE NOW'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-green-400 text-sm">
                  Thank you! We'll get back to you shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-400 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              {submitStatus === 'consent-error' && (
                <div className="text-red-400 text-sm">
                  You must agree to the terms by checking the consent box.
                </div>
              )}
            </form>

            <div className="mt-12">
              <h3 className="text-lg font-medium mb-4">SITE OFFICE</h3>
              <p className="text-gray-300">
                Balewadi Village Rd, nr.
                Mamta Dining Hall, <br />
                Balewadi, Pune 411045, <br />
                Maharashtra, India 
                Sr. No.: 45, 13,
              </p>

              <div className="mt-4">
                <p className="text-gray-300">
                  <span className="font-medium">MAHA RERA No:</span> P52100045688
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;