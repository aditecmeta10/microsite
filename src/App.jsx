import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Location from './components/Location';
import Gallery from './components/Gallery';
import MasterPlan from './components/MasterPlan';
import FloorPlan from './components/FloorPlan';
// import Specifications from './components/Specifications';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Add padding to the top of the main content to account for the fixed Navbar */}
      <main className="pt-24">
        <Hero id="hero" />
        <Location id="location" />
        <Gallery id="gallery" />
        <MasterPlan id="masterplan" />
        <FloorPlan id="floorplan" />
        {/* <Specifications id="specifications" /> */}
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;