import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';  // Make sure Leaflet CSS is imported

const Location = ({ id }) => {
  const mapRef = useRef(null); // For DOM element reference
  const mapInstance = useRef(null); // To store the Leaflet map instance

  useEffect(() => {
    // Only initialize the map if it's not already initialized
    if (mapRef.current && !mapInstance.current) {
      // Initialize the map
      mapInstance.current = L.map(mapRef.current).setView([18.5678, 73.7741], 15);

      // Add dark theme tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19,
      }).addTo(mapInstance.current);

      // Add marker to the map
      L.marker([18.5678, 73.7741]).addTo(mapInstance.current);
    }

    // Cleanup on unmount (remove map instance)
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []); // Empty array ensures this effect runs only once, when the component mounts

  return (
    <section id={id} className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-12">
          At the Crossroads of Nature & Connectivity
        </h3>

        <div className="bg-black shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Leaflet Map (Left Side) */}
            <div className="w-full md:w-1/2">
  {/* Map container */}
  <div ref={mapRef} style={{ height: '400px', width: '100%', zIndex: 0}}></div>
</div>


            {/* Content (Right Side) */}
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-2xl font-semibold mb-4">Strategic Location Advantages</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Nearby Essentials</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>10 minutes to Hinjewadi IT Park</li>
                    <li>15 minutes to Mumbai-Pune Highway</li>
                    <li>5 minutes to Balewadi High Street</li>
                    <li>20 minutes to Pune University</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Connectivity</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Easy access to Mumbai-Bangalore Highway</li>
                    <li>Close to Pune Metro Station</li>
                    <li>25 minutes to Pune Airport</li>
                    <li>Connected to major city roads</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;