import { Tab } from '@headlessui/react';
import React from 'react';

const Specifications = ({ id }) => {
  const specCategories = [
    {
      name: 'Structure',
      details: [
        'RCC framed structure with infill walls',
        'External walls - 6" thick solid concrete blocks',
        'Internal walls - 4" thick solid concrete blocks',
        'Earthquake resistant design',
        'Designed for Zone III seismic considerations'
      ]
    },
    {
      name: 'Flooring',
      details: [
        'Living/Dining - Premium vitrified tiles (800x800 mm)',
        'Bedrooms - Laminated wooden flooring',
        'Kitchen - Anti-skid vitrified tiles',
        'Balconies - Anti-skid ceramic tiles',
        'Bathrooms - Designer ceramic tiles'
      ]
    },
    {
      name: 'Kitchen',
      details: [
        'Modular kitchen with chimney and hob',
        'Granite countertop with stainless steel sink',
        'Provision for water purifier',
        'Premium CP fittings',
        'Ceramic tile dado up to 2 feet above counter'
      ]
    },
    {
      name: 'Bathroom',
      details: [
        'Premium sanitary fittings (Kohler/Roca or equivalent)',
        'Shower cubicle in master bathroom',
        'Hot and cold water mixer',
        'Concealed plumbing',
        'Ceramic tile dado up to 7 feet height'
      ]
    },
    {
      name: 'Doors & Windows',
      details: [
        'Main door - Engineered wooden door with premium hardware',
        'Internal doors - Flush doors with laminate finish',
        'Windows - UPVC frames with toughened glass',
        'Balcony doors - UPVC sliding doors with toughened glass',
        'All doors and windows with quality hardware fittings'
      ]
    }
  ];

  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Specifications</h2>
        
        <div className="max-w-3xl mx-auto">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1">
              {specCategories.map((category) => (
                <Tab
                  key={category.name}
                  className={({ selected }) =>
                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary
                    ${selected 
                      ? 'bg-accent text-white shadow' 
                      : 'text-primary hover:bg-gray-200 hover:text-primary'
                    }`
                  }
                >
                  {category.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {specCategories.map((category, idx) => (
                <Tab.Panel
                  key={idx}
                  className="rounded-xl bg-gray-50 p-3"
                >
                  <ul className="space-y-4">
                    {category.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-700">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            *All specifications are subject to change as per architect's recommendation and availability. Images shown are for representative purposes only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
