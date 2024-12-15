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

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
