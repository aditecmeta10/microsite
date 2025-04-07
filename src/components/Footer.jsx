import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn, FaWhatsapp, FaPhone } from 'react-icons/fa';
import React from 'react';
import img3 from '../images/gold.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-white text-sm mb-4">Corporate Office</h3>
            <p className="text-gray-300 mb-2">The Metropole, 3rd Floor, Next to INOX,</p>
            <p className="text-gray-300 mb-4">Bund Garden Road, Camp Pune 411001, Maharashtra, India.</p>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm">View on map</a>
          </div>
          <div>
            <h3 className="text-white text-sm mb-4">Dubai Office</h3>
            <p className="text-gray-300 mb-2">Office No. 314, Burlington Business Tower,</p>
            <p className="text-gray-300 mb-4">Business Bay, Dubai, UAE</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm">View on map</a>
          </div>
          <div>
            <h3 className="text-white text-sm mb-4">Contact Us</h3>
            <a href="tel:+919223003742"><p className="text-gray-300 mb-2">+919223003742</p></a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div>
            <img src={img3} alt="QR Code" className="h-24 mb-2" />
            <p className="text-gray-500 text-xs text-center">RERA registered</p>
          </div>
          <div className="text-center mb-6 md:mb-0">
            <h3 className="text-white mb-4">Follow Us:</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/mantragrouppune" className="text-gray-300 hover:text-accent transition-colors"><FaFacebookF size={20} /></a>
              <a href="https://www.instagram.com/mantraproperties/" className="text-gray-300 hover:text-accent transition-colors"><FaInstagram size={20} /></a>
              <a href="https://x.com/mantra_Prop" className="text-gray-300 hover:text-accent transition-colors"><FaTwitter size={20} /></a>
              <a href="http://youtube.com/channel/UCngsenlQBZDSFK0iGSYuYnA" className="text-gray-300 hover:text-accent transition-colors"><FaYoutube size={20} /></a>
              <a href="https://www.linkedin.com/company/mantrapropertiesanddevelopers/" className="text-gray-300 hover:text-accent transition-colors"><FaLinkedinIn size={20} /></a>
            </div>
          </div>
          <div>
            <img src={img3} alt="QR Code" className="h-24 mb-2" />
            <p className="text-gray-500 text-xs text-center">RERA registered</p>
          </div>
        </div>
      </div>

      {/* Call Button */}
      <a href="tel:+919223003742" className="fixed bottom-20 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50">
        <FaPhone size={24} style={{ transform: 'scaleX(-1)' }} />
      </a>

      {/* WhatsApp Button */}
      <a href="https://wa.me/+919223003742?text=I'm%20interested%20in%20Balewadi%20Riverside" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50">
        <FaWhatsapp size={24} />
      </a>
    </footer>
  );
};

export default Footer;
