import React from 'react';
import '../assets/styles/gallery.css'; // Import the updated styles

// Import images
import img3 from '../images/landscape3.jpg';
import img4 from '../images/landscape4.jpg';
import img5 from '../images/landscape5.jpg';
import img6 from '../images/landscape6.jpg';

const Gallery = ({ id }) => {
  const galleryItems = [
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 }
  ];

  return (
    <section id={id} className="gallery-section">
      <div className="container">
       
      <h2 className="text-3xl font-semibold text-center mb-12">
      Gallery
        </h2>
       <h2 className="gallery-title"></h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.image} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
