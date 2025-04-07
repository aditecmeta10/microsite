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
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Main Navbar - Smaller height with white background */}
      <nav
        className="fixed w-full z-50 bg-white shadow-xl transition-all duration-300 ease-in-out py-0"
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-14">
          {/* Logo - Larger size but positioned slightly outside navbar boundaries */}
          <div className="flex-shrink-0 z-10 relative">
            <img 
              src={img2} 
              alt="Mantra" 
              className="h-20 md:h-24 -my-3 transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation with increased spacing */}
          <div className="hidden md:flex space-x-9 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-800 text-sm font-medium hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button for Desktop with 0.9em font size */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg flex items-center shadow-md hover:shadow-xl transition-all duration-300 font-medium"
              style={{ fontSize: '0.9em' }}
            >
              <FaPhoneAlt className="mr-2" />
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden fixed inset-x-0 top-0 pt-16 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } z-40`}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-800 text-lg font-medium hover:text-blue-600 cursor-pointer transition-colors border-b border-gray-100 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile contact button with 0.9em font size */}
            <button
              onClick={() => {
                setShowPopup(true);
                setMobileMenuOpen(false);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 mt-2"
              style={{ fontSize: '0.9em' }}
            >
              <FaPhoneAlt className="mr-2" />
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Contact Popup */}
      <Popup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  );
};

export default Navbar;