import { MetadataRoute } from 'next';

const baseUrl = 'https://urbanservicecompany.live';

// Original slugs cleaned and normalized
const rawSlugs = [
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
  'Vijayanagar', 'Whitefield', 'Yelahanka', 'Yelahanka new town', 'Yeshwanthpur', 'location', 'near-me',
  'service-center', 'service', 'repair', 'installation', 'washing-machine-repair', 'washing-machine-service',
  'washing-machine-installation', 'washing-machine-service-center', 'washing-machine-repair-service',
  'washing-machine-installation-service', 'washing-machine-repair-service-center', 'washing-machine-installation-service-center',
  'washing-machine-repair-service-near-me', 'washing-machine-installation-service-near-me',
  'washing-machine-repair-service-in-bangalore', 'new-service-location-1', 'new-service-location-2',
  'new-service-location-3', 'microwave-oven-repair', 'microwave-oven-service', 'microwave-oven-installation',
  'microwave-oven-service-center', 'microwave-oven-repair-service', 'microwave-oven-installation-service',
  'microwave-oven-repair-service-center', 'microwave-oven-installation-service-center',
  'microwave-oven-repair-service-near-me', 'microwave-oven-installation-service-near-me',
  'microwave-oven-repair-service-in-bangalore', 'ac-repair', 'ac-service', 'ac-installation',
  'ac-service-center', 'ac-repair-service', 'ac-installation-service', 'new-ac-repair-service',
  'new-ac-installation-service', 'washing machine repair service', 'washing machine installation service',
  'washing machine repair service center', 'washing machine installation service center',
  'washing machine repair service near me', 'microwave oven repair service', 'microwave oven installation service',
  'microwave oven repair service center', 'new-microwave-oven-repair-service', 'near me', 'microwave repair Bangalore',
  'microwave oven service', 'top microwave repair services', 'washing machine repair', 'AC repair',
  'appliance repair Bangalore', 'home appliance services', 'oven repair', 'refrigerator repair',
  'electronic appliance repair', 'Top LG Microwave Repair Services in Bangalore',
  'Top Samsung Microwave Repair Services in Bangalore', 'Top Whirlpool Microwave Repair Services in Bangalore',
  'Top IFB Microwave Repair Services in Bangalore', 'Top Bosch Microwave Repair Services in Bangalore',
  'Top Panasonic Microwave Repair Services in Bangalore', 'Top Godrej Microwave Repair Services in Bangalore',
  'Top Haier Microwave Repair Services in Bangalore', 'Top Electrolux Microwave Repair Services in Bangalore',
  'Top Philips Microwave Repair Services in Bangalore', 'Top Sharp Microwave Repair Services in Bangalore',
  'Top Miele Microwave Repair Services in Bangalore', 'Top Siemens Microwave Repair Services in Bangalore',
  'Top TCL Microwave Repair Services in Bangalore', 'Top Onida Microwave Repair Services in Bangalore',
  'Top LG Washing Machine Repair Services in Bangalore', 'Top Samsung Washing Machine Repair Services in Bangalore',
  'Top Whirlpool Washing Machine Repair Services in Bangalore', 'Top IFB Washing Machine Repair Services in Bangalore',
  'Top Bosch Washing Machine Repair Services in Bangalore', 'Top Panasonic Washing Machine Repair Services in Bangalore',
  'Top Godrej Washing Machine Repair Services in Bangalore', 'Top Haier Washing Machine Repair Services in Bangalore',
  'Top Electrolux Washing Machine Repair Services in Bangalore', 'Top Philips Washing Machine Repair Services in Bangalore',
  'Top LG AC Repair Services in Bangalore', 'Top Samsung AC Repair Services in Bangalore',
  'Top Whirlpool AC Repair Services in Bangalore', 'Top IFB AC Repair Services in Bangalore',
  'Top Bosch AC Repair Services in Bangalore', 'Top Panasonic AC Repair Services in Bangalore',
  'Top Godrej AC Repair Services in Bangalore', 'Top Haier AC Repair Services in Bangalore',
  'Top Electrolux AC Repair Services in Bangalore', 'Top Philips AC Repair Services in Bangalore',
  'Top Sharp AC Repair Services in Bangalore', 'Top Miele AC Repair Services in Bangalore',
  'Top Siemens AC Repair Services in Bangalore', 'Top TCL AC Repair Services in Bangalore',
  'Top Onida AC Repair Services in Bangalore', 'Top LG Refrigerator Repair Services in Bangalore',
  'Top Samsung Refrigerator Repair Services in Bangalore', 'Top Whirlpool Refrigerator Repair Services in Bangalore',
  'Top IFB Refrigerator Repair Services in Bangalore', 'Top Bosch Refrigerator Repair Services in Bangalore',
  'Top Panasonic Refrigerator Repair Services in Bangalore', 'Top Godrej Refrigerator Repair Services in Bangalore',
  'Top Haier Refrigerator Repair Services in Bangalore', 'Top Electrolux Refrigerator Repair Services in Bangalore',
  'Top Philips Refrigerator Repair Services in Bangalore', 'Top Sharp Refrigerator Repair Services in Bangalore',
  'Top Miele Refrigerator Repair Services in Bangalore', 'Top Siemens Refrigerator Repair Services in Bangalore',
  'Top TCL Refrigerator Repair Services in Bangalore', 'Top Onida Refrigerator Repair Services in Bangalore',
  'Top LG Water Purifier Repair Services in Bangalore', 'Top Samsung Water Purifier Repair Services in Bangalore',
  'Top Whirlpool Water Purifier Repair Services in Bangalore', 'Top IFB Water Purifier Repair Services in Bangalore',
  'Top Bosch Water Purifier Repair Services in Bangalore', 'Top Panasonic Water Purifier Repair Services in Bangalore',
  'Top Godrej Water Purifier Repair Services in Bangalore', 'Top Haier Water Purifier Repair Services in Bangalore',
  'Top Electrolux Water Purifier Repair Services in Bangalore', 'Top Philips Water Purifier Repair Services in Bangalore',
  'Top Sharp Water Purifier Repair Services in Bangalore', 'Top Miele Water Purifier Repair Services in Bangalore',
  'Top Siemens Water Purifier Repair Services in Bangalore', 'Top TCL Water Purifier Repair Services in Bangalore',
  'Top Onida Water Purifier Repair Services in Bangalore', 'Top LG Chimney Repair Services in Bangalore',
  'Top Samsung Chimney Repair Services in Bangalore', 'Top Whirlpool Chimney Repair Services in Bangalore',
  'Top IFB Chimney Repair Services in Bangalore', 'Top Bosch Chimney Repair Services in Bangalore',
  'Top Panasonic Chimney Repair Services in Bangalore', 'Top Godrej Chimney Repair Services in Bangalore',
  'Top Haier Chimney Repair Services in Bangalore', 'Top Electrolux Chimney Repair Services in Bangalore',
  'Top Philips Chimney Repair Services in Bangalore', 'Top Sharp Chimney Repair Services in Bangalore',
  'Top Miele Chimney Repair Services in Bangalore', 'Top Siemens Chimney Repair Services in Bangalore',
  'Top TCL Chimney Repair Services in Bangalore', 'Top Onida Chimney Repair Services in Bangalore',
  'Top LG Hob Repair Services in Bangalore', 'Top Samsung Hob Repair Services in Bangalore',
  'Top Whirlpool Hob Repair Services in Bangalore', 'Top IFB Hob Repair Services in Bangalore',
  'Top Bosch Hob Repair Services in Bangalore', 'Top Panasonic Hob Repair Services in Bangalore',
  'Top Godrej Hob Repair Services in Bangalore', 'Top Haier Hob Repair Services in Bangalore',
  'Top Electrolux Hob Repair Services in Bangalore', 'Top Philips Hob Repair Services in Bangalore',
  'Top Sharp Hob Repair Services in Bangalore', 'Top Miele Hob Repair Services in Bangalore',
  'Top Siemens Hob Repair Services in Bangalore', 'Top TCL Hob Repair Services in Bangalore',
  'Top Onida Hob Repair Services in Bangalore'
];

// Slugify: lowercased, hyphenated, no special chars
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')     // Remove non-alphanumerics except spaces/hyphens
    .replace(/\s+/g, '-')             // Replace spaces with hyphens
    .replace(/-+/g, '-');             // Remove multiple hyphens
}

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries = Array.from(new Set(rawSlugs.map(slugify))).map(slug => ({
    url: `${baseUrl}/${slug}/`,
     // Include trailing slash to avoid redirects
    lastModified: new Date().toISOString(),
  }));
 const postEntries2 = Array.from(new Set(rawSlugs.map(slugify))).map(slug => ({
    url: `${baseUrl}/washingmachinerepairservice/${slug}/`,
     // Include trailing slash to avoid redirects
    lastModified: new Date().toISOString(),
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    ...postEntries,
    ...postEntries2
  ];
}
