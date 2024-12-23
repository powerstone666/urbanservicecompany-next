import { MetadataRoute } from "next";

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
  'Shanti nagar', 'Shivaji nagar', 'Thanisandra', 'Ulsoor', 'Vasanth nagar', 'Vidyaranyapura', 'Vijayanagar', 'location',
  'Whitefield', 'Yelahanka', 'Yelahanka new town', 'Yeshwanthpur'
];

const baseUrl = 'https://urbanservicecompany.me';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const allowedRoutes = slugs.map(slug => `/${slug}`);
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', ...allowedRoutes],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
