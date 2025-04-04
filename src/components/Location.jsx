import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Location = ({ id }) => {
  const mapRef = useRef(null); // For DOM element reference
  const mapInstance = useRef(null); // To store the Leaflet map instance

  useEffect(() => {
    // Coordinates for Mantra Properties
    const coordinates = [18.527324, 73.877808];

    // Initialize the map only if it isn't already initialized
    if (mapRef.current && !mapInstance.current) {
      // Initialize the Leaflet map
      mapInstance.current = L.map(mapRef.current).setView(coordinates, 15);

      // Add Google Maps tiles
      L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; <a href="https://www.google.com/maps">Google Maps</a>',
        maxZoom: 20,
      }).addTo(mapInstance.current);

      // Function to open Google Maps in a new tab
      const openGoogleMaps = () => {
        const googleMapsUrl = `https://www.google.com/maps?q=${coordinates[0]},${coordinates[1]}`;
        window.open(googleMapsUrl, '_blank');
      };

      // Add a marker for the specific location with a click event
      L.marker(coordinates)
        .addTo(mapInstance.current)
        .bindPopup('Mantra Properties')
        .openPopup()
        .on('click', openGoogleMaps);

      // Add a click event listener to the map itself
      mapInstance.current.on('click', openGoogleMaps);
    }

    // Cleanup the map on component unmount
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

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
              <div
                ref={mapRef}
                style={{ height: '400px', width: '100%', zIndex: 0 }}
              ></div>
            </div>

            {/* Content (Right Side) */}
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Strategic Location Advantages
              </h3>
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
