import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React from 'react';
import lol1 from '../images/floorplan1.png';
import lol2 from '../images/floorplan2.png';
import lol3 from '../images/floorplan3.png';

  

const FloorPlan = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const floorPlans = [
    {
      title: "2 BHK",
      image: lol1,
      price: "₹1.26 CRORES",
      size: "TYPICAL UNIT PLAN",
      details: "EMI PRIVILEGE: ₹2.5 LAKHS | PRIORITY +1 LAKHS"
    },
    {
      title: "3 BHK",
      image: lol2,
      price: "₹1.85 CRORES",
      size: "TYPICAL UNIT PLAN",
      details: "EMI PRIVILEGE: ₹3.2 LAKHS | PRIORITY +1.5 LAKHS"
    },
    {
      title: "4 BHK",
      image: lol3,
      price: "₹2.45 CRORES",
      size: "TYPICAL UNIT PLAN",
      details: "EMI PRIVILEGE: ₹4.1 LAKHS | PRIORITY +2 LAKHS"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === floorPlans.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? floorPlans.length - 1 : prev - 1));
  };

  return (
    <section id={id} className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Designed for Elegance, Built for Comfort.
        </h2>
        <p className="text-center text-gray-300 mb-12">FLOOR PLAN ({currentSlide + 1}/{floorPlans.length})</p>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden">
            <div className="md:w-3/4 p-4">
              <img 
                src={floorPlans[currentSlide].image} 
                alt={`Floor Plan ${floorPlans[currentSlide].title}`} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="md:w-1/4 bg-black p-6 flex flex-col justify-center items-center">
              <h3 className="text-6xl font-bold mb-4">{floorPlans[currentSlide].title}</h3>
              <p className="text-lg mb-6">{floorPlans[currentSlide].price}</p>
              <p className="text-sm text-gray-400">{floorPlans[currentSlide].details}</p>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-primary hover:bg-accent hover:text-white transition-colors"
          >
            <FaChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-primary hover:bg-accent hover:text-white transition-colors"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-300 text-lg">
            {floorPlans[currentSlide].size}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FloorPlan;