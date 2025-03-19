import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import React from 'react';
import img3 from '../../public/images/gold.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-white text-sm mb-4">Corporate Office</h3>
            <p className="text-gray-300 mb-2">
              The Metropole, 3rd Floor, Next to INOX,
            </p>
            <p className="text-gray-300 mb-4">
              Bund Garden Road, Camp Pune 411001, Maharashtra, India.
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline text-sm"
            >
              View on map
            </a>
          </div>
          
          <div>
            <h3 className="text-white text-sm mb-4">Dubai Office</h3>
            <p className="text-gray-300 mb-2">
              Office No. 314, Burlington Business Tower,
            </p>
            <p className="text-gray-300 mb-4">
              Business Bay, Dubai, UAE
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline text-sm"
            >
              View on map
            </a>
          </div>
          
          <div>
            <h3 className="text-white text-sm mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              +91 1234 56789
            </p>
            <p className="text-gray-300 mb-4">
              sales@example.com
            </p>
            <p className="text-gray-300 mb-2">
              Sales Contact:
            </p>
            <p className="text-gray-300">
              Mr. AJIT SINGH
            </p>
            <p className="text-gray-300">
              +971 58 123 4599
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src={img3} 
              alt="Mantra Logo" 
              className="h-10"
            />
            <p className="text-gray-400 mt-4 text-sm">
              We follow a simple Mantra: <br />
              continuous innovation brings continuous success.
            </p>
          </div>
          
          <div className="text-center mb-6 md:mb-0">
            <h3 className="text-white mb-4">Follow Us:</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <img 
              src={img3} 
              alt="QR Code" 
              className="h-24 mb-2"
            />
            <p className="text-gray-500 text-xs text-center">RERA registered</p>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/9712345678?text=I'm%20interested%20in%20Balewadi%20Riverside" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <FaWhatsapp size={24} />
      </a>
    </footer>
  );
};

export default Footer;
