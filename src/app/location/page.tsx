import React from "react";

// Move locations array to top level
const locations: string[] = [
  "Bangalore",
  "Marathahalli",
  "Whitefield",
  "Electronic City",
  "HSR Layout",
  "Koramangala",
  "Indiranagar",
  "JP Nagar",
  "BTM Layout",
  "Banashankari",
  "Hebbal",
  "Yelahanka",
  "Jayanagar",
  "Malleshwaram",
  "Rajajinagar",
  "RT Nagar",
  "Vijayanagar",
  "Bannerghatta Road",
  "KR Puram",
  "CV Raman Nagar",
  "Majestic",
  "Peenya",
  "Jalahalli",
  "Yeshwanthpur",
  "Basaveshwaranagar",
  "Vidyaranyapura",
  "Hesaraghatta",
  "Nagarbhavi",
  "Kengeri",
  "Magadi Road",
  "Rajarajeshwari Nagar",
  "Kanakapura Road",
  "Sarjapur Road",
  "Kadugodi",
  "Bommanahalli",
  "Begur",
  "Kudlu Gate",
  "Hosur Road",
  "Bellandur",
  "Sarjapur"
];

export const metadata = {
  title: 'Service Locations | Urban Service Company',
  description: 'Explore the service locations where Urban Service Company offers its services in Bangalore and surrounding areas.',
  keywords: ['Urban Service Company', 'Service Locations', 'Bangalore', 'Home Services', ...locations],
  openGraph: {
    title: 'Service Locations | Urban Service Company',
    description: 'Explore the service locations where Urban Service Company offers its services in Bangalore and surrounding areas.',
    url: 'https://www.urbanservicecompany.com/location',
    siteName: 'Urban Service Company',
    images: [
      {
        url: 'https://www.urbanservicecompany.com/images/locations.jpg',
        width: 800,
        height: 600,
        alt: 'Urban Service Company Service Locations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@UrbanServiceCo',
    title: 'Service Locations | Urban Service Company',
    description: 'Explore the service locations where Urban Service Company offers its services in Bangalore and surrounding areas.',
    images: ['https://www.urbanservicecompany.com/images/locations.jpg'],
  },
};

const Location = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Service Locations
      </h1>
      <ul className="list-disc pl-5 space-y-2">
        {locations.map((location, index) => (
          <li key={index} className="text-lg text-gray-700">
            {location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
