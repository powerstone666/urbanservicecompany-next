import About from "@/components/about";
import Choose from "@/components/choose";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Home2 from "@/components/ui/home2";

export const metadata = {
  title: 'Top Microwave Repair Services in indiranagar, Bangalore | Urban Service Company',
  description: 'Urban Service Company, Microwave oven repair and servicing, Expert microwave repair technician near me, Affordable microwave repair services near me, Microwave repair with warranty, Home microwave oven repair service, Quick microwave repair services near me, 24/7 microwave repair service, Microwave appliance repair near me, Emergency microwave repair services, Trusted microwave repair services near me, Best microwave repair company near me, Local microwave repair experts, Certified microwave repair technicians, Microwave repair in Bangalore, Bangalore microwave repair service near me, Best microwave repair in Bangalore, Affordable microwave repair in Bangalore, Microwave servicing at home in Bangalore, Fast microwave repair in Bangalore, Top-rated microwave oven repair Bangalore, Same day microwave repair in Bangalore, Microwave service and repair in Bangalore, Home visitService Locations, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur"',
  keywords: [
    'microwave repair Bangalore',
    'microwave oven service',
    'top microwave repair services',
    'washing machine repair',
    'AC repair',
    'appliance repair Bangalore',
    'home appliance services',
    'oven repair',
    'refrigerator repair',
    'electronic appliance repair',
  ],
  openGraph: {
    title: 'Urban Service Company - Professional Services for Your City',
    description: 'Offering top-notch urban services to meet all your city needs.',
    url: 'https://www.urbanservicecompany.me',
    siteName: 'Urban Service Company',
    images: [
      {
        url: 'https://www.urbanservicecompany.me/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Urban Service Company Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban Service Company - Professional Services for Your City',
    description: 'Offering top-notch urban services to meet all your city needs.',
    images: ['https://www.urbanservicecompany.me/images/twitter-image.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <div>
        <Navbar/>
        <div className="pt-20">
          <Home2 name={"Indiranagar"}/>
          <Services/>
          <About/>
          <Choose/>
          <Faq/>
          <Footer/>
        </div>
      </div>
    </>
  );
}
