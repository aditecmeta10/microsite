import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-300">Name</label>
        <input type="text" className="w-full p-2 border rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
      </div>
      <div>
        <label className="block text-gray-300">Email</label>
        <input type="email" className="w-full p-2 border rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
      </div>
      <div>
        <label className="block text-gray-300">Message</label>
        <textarea className="w-full p-2 border rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Send</button>
      </div>
    </form>
  );
};

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-300 ease-in-out">
      <div className="relative bg-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-lg mx-4 overflow-hidden">
        <button
          className="absolute top-5 right-5 p-1 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
          onClick={onClose}
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="max-h-[80vh] overflow-y-auto px-1 py-2">
          <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">Contact Us</h2>
          <div className="border-t border-gray-700 mb-6"></div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Popup;
