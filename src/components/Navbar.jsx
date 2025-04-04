import { useState, useEffect } from 'react';
import Popup from './Popup';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import React from 'react';
import img2 from '../images/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'ABOUT US', to: 'hero' },
    { name: 'LOCATION', to: 'location' },
    { name: 'GALLERY', to: 'gallery' },
    { name: 'MASTER PLAN', to: 'masterplan' },
    { name: 'FLOOR PLAN', to: 'floorplan' }
  ];

  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <nav
        className={`fixed w-full z-50 bg-white shadow-xl transition-all duration-300 ease-in-out transform py-4`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={img2} alt="Mantra" className="h-16" />
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-800 text-lg font-semibold hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:shadow-xl transition-shadow"
            >
              <FaPhoneAlt className="mr-2" />
              CONTACT 
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-x-0 top-0 bg-white py-4 shadow-md transition-transform duration-300 ease-in-out transform ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-800 text-lg font-semibold hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setShowPopup(true);
                setMobileMenuOpen(false);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center shadow-md hover:shadow-xl transition-shadow"
            >
              <FaPhoneAlt className="mr-2" />
              CONTACT
            </button>
          </div>
        </div>
      </nav>
      <Popup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  );
};

export default Navbar;
