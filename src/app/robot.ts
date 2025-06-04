import { MetadataRoute } from "next";

// Slugify: lowercased, hyphenated, no special chars (same as in sitemap.ts)
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\\s-]/g, '')     // Remove non-alphanumerics except spaces/hyphens
    .replace(/\\s+/g, '-')             // Replace spaces with hyphens
    .replace(/-+/g, '-');             // Remove multiple hyphens
}

const slugs = [
  'Adugodi', 'Amrutahalli', 'Anand rao circle', 'Ashok nagar', 'Avalahalli', 'BTM Layout', 
  'Banashankari', 'Banaswadi', 'Bannerghatta Road', 'Basaveshwaranagar', 'Basvanagudi', 'Begur', 
  'Belandur', 'Bengaluru', 'Bommanahalli', 'CV Raman Nagar', 'Chamrajpet', 'Chickpet', 'Doddenakundi', 
  'Dollars colony r.m.v 2nd stage', 'Domlur', 'Doorvaninagar', 'Ejipura', 'Electronic City', 'Frazer town', 
  'Gandhi nagar', 'Ganganagar', 'HSR Layout', 'Hbr layout', 'Hebbal', 'Hegde Nagar', 'Hennur', 'Hesaraghatta', 
  'Horamavu', 'Hosur Road', 'Indiranagar', 'JC nagar', 'JP Nagar', 'Jalahalli', 'Jayamahal', 'Jayanagar', 'KR Puram', 
  'Kadubeesanahalli', 'Kadugodi', 'Kalyan nagar', 'Kammanahalli', 'Kanakapura Road', 'Kasturi nagar', 'Kengeri', 
  'Kodgehalli', 'Koramangala', 'Kothnur', 'Kudlu Gate', 'Kuthahalli', 'Madiwala', 'Magadi Road', 'Majestic', 
  'Malleshwaram', 'Marathahalli', 'Mathikere', 'Nagarbhavi', 'Nagavara', 'Peenya', 'RT Nagar', 'Rajajinagar', 
  'Rajarajeshwari Nagar', 'Rammurthy nagar', 'Sahakar Nagar', 'Sanjaynagar', 'Sarjapur', 'Sarjapur Road', 
  'Shanti nagar', 'Shivaji nagar', 'Thanisandra', 'Ulsoor', 'Vasanth nagar', 'Vidyaranyapura', 'Vijayanagar', 
  'Whitefield', 'Yelahanka', 'Yelahanka new town', 'Yeshwanthpur',
  // SEO/keyword-based slugs (some repeated in variations)
  'location', 'near-me', 'service-center', 'service', 'repair', 'installation', 
  'washing-machine-repair', 'washing-machine-service', 'washing-machine-installation',
  'washing-machine-service-center', 'washing-machine-repair-service',
  'washing-machine-installation-service', 'washing-machine-repair-service-center',
  'washing-machine-installation-service-center', 'washing-machine-repair-service-near-me',
  'washing-machine-installation-service-near-me', 'washing-machine-repair-service-in-bangalore',
  'new-service-location-1', 'new-service-location-2', 'new-service-location-3',
  'microwave-oven-repair', 'microwave-oven-service', 'microwave-oven-installation', 
  'microwave-oven-service-center', 'microwave-oven-repair-service',
  'microwave-oven-installation-service', 'microwave-oven-repair-service-center',
  'microwave-oven-installation-service-center', 'microwave-oven-repair-service-near-me',
  'microwave-oven-installation-service-near-me', 'microwave-oven-repair-service-in-bangalore',
  'ac-repair', 'ac-service', 'ac-installation', 'ac-service-center', 'ac-repair-service',
  'ac-installation-service', 'new-ac-repair-service', 'new-ac-installation-service',
  'washing machine repair service', 'washing machine installation service', 
  'washing machine repair service center', 'washing machine installation service center',
  'washing machine repair service near me', 'microwave oven repair service',
  'microwave oven installation service', 'microwave oven repair service center',
  'new-microwave-oven-repair-service', 'near me', 'microwave repair Bangalore',
  'microwave oven service', 'top microwave repair services', 'washing machine repair',
  'AC repair', 'appliance repair Bangalore', 'home appliance services', 'oven repair',
  'refrigerator repair', 'electronic appliance repair',
  // Top brand services
  ...[
    'LG', 'Samsung', 'Whirlpool', 'IFB', 'Bosch', 'Panasonic', 'Godrej', 'Haier',
    'Electrolux', 'Philips', 'Sharp', 'Miele', 'Siemens', 'TCL', 'Onida'
  ].flatMap(brand => [
    `Top ${brand} Microwave Repair Services in Bangalore`,
    `Top ${brand} Washing Machine Repair Services in Bangalore`,
    `Top ${brand} AC Repair Services in Bangalore`,
    `Top ${brand} Refrigerator Repair Services in Bangalore`,
    `Top ${brand} Water Purifier Repair Services in Bangalore`,
    `Top ${brand} Chimney Repair Services in Bangalore`,
    `Top ${brand} Hob Repair Services in Bangalore`,
  ])
];

const baseUrl = 'https://urbanservicecompany.live';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', ...slugs.map(slug => `/${slugify(slug)}/`)], // Ensure homepage is allowed with a trailing slash if that's your canonical
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
