import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React from 'react';
import haha1 from '../images/masterplan1.png';
import haha2 from '../images/masterplan2.png';
import haha3 from '../images/masterplan3.png';
import haha4 from '../images/masterplan4.png';

const MasterPlan = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const masterPlanImages = [
    haha1,
    haha2,
    haha3, 
    haha4 
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === masterPlanImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? masterPlanImages.length - 1 : prev - 1));
  };

  return (
    <section id={id} className="py-16 bg-gray-900 text-white"> {/* Updated background color */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Master Plan
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden"> {/* Updated background color */}
            <img 
              src={masterPlanImages[currentSlide]} 
              alt={`Master Plan ${currentSlide + 1}`} 
              className="w-full h-full object-cover"
            />
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
          
          {/* Slide indicators */}
          <div className="flex justify-center mt-4">
            {masterPlanImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentSlide === index ? 'bg-accent' : 'bg-gray-600'
                }`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          
          <h2 class="text-3xl font-semibold text-black text-center mb-12">
  Project Highlights
</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>5 Acres of Premium Development</li>
                <li>70% Open Space</li>
                <li>Riverside Promenade</li>
                <li>Luxury Club House</li>
                <li>Multiple Swimming Pools</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Tennis & Squash Courts</li>
                <li>Dedicated Children's Play Area</li>
                <li>Yoga & Meditation Zones</li>
                <li>24/7 Security System</li>
                <li>EV Charging Points</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterPlan;