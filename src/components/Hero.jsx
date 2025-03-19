import React from 'react';
import { Link } from 'react-scroll';
import '../assets/styles/hero.css'; // Corrected path
import img1 from '../../public/images/hero.png';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: `url(${img1})`, // Corrected this line
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div> 
        {/* Darker semi-transparent gradient overlay */}
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center px-4">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            <br />
            Balewadi Riverside
          </h1>
          {/* <p className="text-white text-lg mb-6 bg-primary bg-opacity-70 p-4 inline-block">
            Ongoing Project
          </p> */}
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-primary hover:bg-accent hover:text-white transition-colors px-6 py-3 rounded shadow-lg">
              VIEW BROCHURE
            </button>
            <button className="bg-accent text-white hover:bg-white hover:text-primary transition-colors px-6 py-3 rounded shadow-lg">
              DOWNLOAD BROCHURE
            </button>
            <Link
              to="contactform"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-primary text-white hover:bg-accent transition-colors px-6 py-3 rounded shadow-lg cursor-pointer"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
