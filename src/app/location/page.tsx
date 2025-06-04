"use client";

import React, { useState } from "react";
import { Poppins, Roboto } from 'next/font/google';
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto',
});

const locations: string[] = [
  'Adugodi', 'Amrutahalli', 'Anand rao circle', 'Ashok nagar', 'Avalahalli', 'BTM Layout',
  'Banashankari', 'Banaswadi', 'Bannerghatta Road', 'Basaveshwaranagar', 'Basvanagudi', 'Begur',
  'Belandur', 'Bengaluru', 'Bommanahalli', 'CV Raman Nagar', 'Chamrajpet', 'Chickpet', 'Doddenakundi',
  'Dollars colony r.m.v 2nd stage', 'Domlur', 'Doorvaninagar', 'Ejipura', 'Electronic City', 'Frazer town',
  'Gandhi nagar', 'Ganganagar', 'HSR Layout', 'Hbr layout', 'Hebbal', 'Hegde Nagar', 'Hennur', 'Hesaraghatta',
  'Horamavu', 'Hosur Road', 'Indiranagar', 'JC nagar', 'JP Nagar', 'Jalahalli', 'Jayamahal', 'Jayanagar',
  'KR Puram', 'Kadubeesanahalli', 'Kadugodi', 'Kalyan nagar', 'Kammanahalli', 'Kanakapura Road', 'Kasturi nagar',
  'Kengeri', 'Kodgehalli', 'Koramangala', 'Kothnur', 'Kudlu Gate', 'Kuthahalli', 'Madiwala', 'Magadi Road',
  'Majestic', 'Malleshwaram', 'Marathahalli', 'Mathikere', 'Nagarbhavi', 'Nagavara', 'Peenya', 'RT Nagar',
  'Rajajinagar', 'Rajarajeshwari Nagar', 'Rammurthy nagar', 'Sahakar Nagar', 'Sanjaynagar', 'Sarjapur',
  'Sarjapur Road', 'Shanti nagar', 'Shivaji nagar', 'Thanisandra', 'Ulsoor', 'Vasanth nagar', 'Vidyaranyapura',
  'Vijayanagar', 'Whitefield', 'Yelahanka', 'Yelahanka new town', 'Yeshwanthpur',
];

const Location = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const pathname = usePathname();
  const canonicalUrl = `https://urbanservicecompany.live${pathname ? (pathname.endsWith('/') ? pathname : pathname + '/') : '/location/'}`;

  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
      </head>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-white py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className={`${poppins.variable} font-poppins text-4xl md:text-6xl font-bold text-center mb-6 
              bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
              animate-fade-in-down`}>
              Our Service Locations
            </h1>
            <p className={`${roboto.variable} font-roboto text-center text-gray-600 text-lg max-w-2xl mx-auto
              animate-fade-in-up`}>
              Find Urban Service Company in your neighborhood. We&apos;re expanding our reach to serve you better.
            </p>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search locations..."
              className={`${roboto.variable} font-roboto w-full px-4 py-3 rounded-lg shadow-sm 
                border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all duration-300`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute right-3 top-3 h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredLocations.map((location, index) => (
              <div
                key={index}
                className={`${roboto.variable} font-roboto bg-white rounded-lg p-6 shadow-sm
                  hover:shadow-md transform hover:-translate-y-1 transition-all duration-300
                  animate-fade-in cursor-pointer`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-800">{location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
