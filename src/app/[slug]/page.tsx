/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import About from "@/components/about";
import Choose from "@/components/choose";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Home2 from "@/components/ui/home2";
import { Metadata } from "next";
import { usePathname } from "next/navigation";
type tParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: tParams }): Promise<Metadata> {
  const slug = (await params).slug;
  const formattedSlug: string = decodeURIComponent(slug.replaceAll(/%20/g, " "));


  return {
    title:`Top Microwave Oven Repair Services in ${formattedSlug}, Bangalore | Urban Service Company`,
    description: `Urban Service Company, Microwave oven repair and servicing, Expert microwave repair technician near me, Affordable microwave repair services near me, Microwave repair with warranty, Home microwave oven repair service, Quick microwave repair services near me, 24/7 microwave repair service, Microwave appliance repair near me, Emergency microwave repair services, Trusted microwave repair services near me, Best microwave repair company near me, Local microwave repair experts, Certified microwave repair technicians, Microwave repair in Bangalore, Bangalore microwave repair service near me, Best microwave repair in Bangalore, Affordable microwave repair in Bangalore, Microwave servicing at home in Bangalore, Fast microwave repair in Bangalore, Top-rated microwave oven repair Bangalore, Same day microwave repair in Bangalore, Microwave service and repair in Bangalore, Home visitService Locations, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur`,
  keywords: [
    "microwave repair Bangalore",
    "microwave oven service",
    "top microwave repair services",
    "washing machine repair",
    "AC repair",
    "appliance repair Bangalore",
    "home appliance services",
    "oven repair",
    "refrigerator repair",
    "electronic appliance repair",
    "Top LG Microwave Repair Services in Bangalore",
    "Top Samsung Microwave Repair Services in Bangalore",
    "Top Whirlpool Microwave Repair Services in Bangalore",
    "Top IFB Microwave Repair Services in Bangalore",
    "Top Bosch Microwave Repair Services in Bangalore",
    "Top Panasonic Microwave Repair Services in Bangalore",
    "Top Godrej Microwave Repair Services in Bangalore",
    "Top Haier Microwave Repair Services in Bangalore",
    "Top Electrolux Microwave Repair Services in Bangalore",
    "Top Philips Microwave Repair Services in Bangalore",
    "Top Sharp Microwave Repair Services in Bangalore",
    "Top Miele Microwave Repair Services in Bangalore",
    "Top Siemens Microwave Repair Services in Bangalore",
    "Top TCL Microwave Repair Services in Bangalore",
    "Top Onida Microwave Repair Services in Bangalore",
    "Top LG Washing Machine Repair Services in Bangalore",
    "Top Samsung Washing Machine Repair Services in Bangalore",
    "Top Whirlpool Washing Machine Repair Services in Bangalore",
    "Top IFB Washing Machine Repair Services in Bangalore",
      "Top Bosch Washing Machine Repair Services in Bangalore",
      "Top Panasonic Washing Machine Repair Services in Bangalore",
    "Top Godrej Washing Machine Repair Services in Bangalore",
    "Top Haier Washing Machine Repair Services in Bangalore",
    "Top Electrolux Washing Machine Repair Services in Bangalore",
      "Top Philips Washing Machine Repair Services in Bangalore",
      "Top LG AC Repair Services in Bangalore", 
      "Top Samsung AC Repair Services in Bangalore",
      "Top Whirlpool AC Repair Services in Bangalore",
      "Top IFB AC Repair Services in Bangalore",
      "Top Bosch AC Repair Services in Bangalore",
      "Top Panasonic AC Repair Services in Bangalore",
      "Top Godrej AC Repair Services in Bangalore",
      "Top Haier AC Repair Services in Bangalore",
      "Top Electrolux AC Repair Services in Bangalore",
      "Top Philips AC Repair Services in Bangalore",
      "Top Sharp AC Repair Services in Bangalore",
      "Top Miele AC Repair Services in Bangalore",
      "Top Siemens AC Repair Services in Bangalore",
      "Top TCL AC Repair Services in Bangalore",
      "Top Onida AC Repair Services in Bangalore",
      "Top LG Refrigerator Repair Services in Bangalore",
      "Top Samsung Refrigerator Repair Services in Bangalore",
      "Top Whirlpool Refrigerator Repair Services in Bangalore",
      "Top IFB Refrigerator Repair Services in Bangalore",
      "Top Bosch Refrigerator Repair Services in Bangalore",
      "Top Panasonic Refrigerator Repair Services in Bangalore",
      "Top Godrej Refrigerator Repair Services in Bangalore",
      "Top Haier Refrigerator Repair Services in Bangalore",
      "Top Electrolux Refrigerator Repair Services in Bangalore",
      "Top Philips Refrigerator Repair Services in Bangalore",
      "Top Sharp Refrigerator Repair Services in Bangalore",
      "Top Miele Refrigerator Repair Services in Bangalore",
      "Top Siemens Refrigerator Repair Services in Bangalore",
      "Top TCL Refrigerator Repair Services in Bangalore",
      "Top Onida Refrigerator Repair Services in Bangalore",
      "Top LG Water Purifier Repair Services in Bangalore",
      "Top Samsung Water Purifier Repair Services in Bangalore",
      "Top Whirlpool Water Purifier Repair Services in Bangalore",
      "Top IFB Water Purifier Repair Services in Bangalore",
      "Top Bosch Water Purifier Repair Services in Bangalore",
      "Top Panasonic Water Purifier Repair Services in Bangalore",
      "Top Godrej Water Purifier Repair Services in Bangalore",
      "Top Haier Water Purifier Repair Services in Bangalore",
      "Top Electrolux Water Purifier Repair Services in Bangalore",
      "Top Philips Water Purifier Repair Services in Bangalore",
      "Top Sharp Water Purifier Repair Services in Bangalore",
      "Top Miele Water Purifier Repair Services in Bangalore",
      "Top Siemens Water Purifier Repair Services in Bangalore",
      "Top TCL Water Purifier Repair Services in Bangalore",
      "Top Onida Water Purifier Repair Services in Bangalore",
      "Top LG Chimney Repair Services in Bangalore",
      "Top Samsung Chimney Repair Services in Bangalore",
      "Top Whirlpool Chimney Repair Services in Bangalore",
      "Top IFB Chimney Repair Services in Bangalore",
      "Top Bosch Chimney Repair Services in Bangalore",
      "Top Panasonic Chimney Repair Services in Bangalore",
      "Top Godrej Chimney Repair Services in Bangalore",
      "Top Haier Chimney Repair Services in Bangalore",
      "Top Electrolux Chimney Repair Services in Bangalore",
      "Top Philips Chimney Repair Services in Bangalore",
      "Top Sharp Chimney Repair Services in Bangalore",
      "Top Miele Chimney Repair Services in Bangalore",
      "Top Siemens Chimney Repair Services in Bangalore",
      "Top TCL Chimney Repair Services in Bangalore",
      "Top Onida Chimney Repair Services in Bangalore",
      "Top LG Hob Repair Services in Bangalore",
      "Top Samsung Hob Repair Services in Bangalore",
      "Top Whirlpool Hob Repair Services in Bangalore",
      "Top IFB Hob Repair Services in Bangalore",
      "Top Bosch Hob Repair Services in Bangalore",
      "Top Panasonic Hob Repair Services in Bangalore",
      "Top Godrej Hob Repair Services in Bangalore",
      "Top Haier Hob Repair Services in Bangalore",
      "Top Electrolux Hob Repair Services in Bangalore",
      "Top Philips Hob Repair Services in Bangalore",
      "Top Sharp Hob Repair Services in Bangalore",
      "Top Miele Hob Repair Services in Bangalore",
      "Top Siemens Hob Repair Services in Bangalore",
      "Top TCL Hob Repair Services in Bangalore",
      "Top Onida Hob Repair Services in Bangalore",
      
  ],
  alternates: {
    canonical: `/` + encodeURIComponent(slug).replace(/%20/g, '-') + '/',
  },
  openGraph: {
        title: `Top Microwave Repair Services in ${formattedSlug}, Bangalore | Urban Service Company`,
        description: `Urban Service Company, Microwave oven repair and servicing, Expert microwave repair technician near me, Affordable microwave repair services near me, Microwave repair with warranty, Home microwave oven repair service, Quick microwave repair services near me, 24/7 microwave repair service, Microwave appliance repair near me, Emergency microwave repair services, Trusted microwave repair services near me, Best microwave repair company near me, Local microwave repair experts, Certified microwave repair technicians, Microwave repair in Bangalore, Bangalore microwave repair service near me, Best microwave repair in Bangalore, Affordable microwave repair in Bangalore, Microwave servicing at home in Bangalore, Fast microwave repair in Bangalore, Top-rated microwave oven repair Bangalore, Same day microwave repair in Bangalore, Microwave service and repair in Bangalore, Home visitService Locations, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur`,
    url: `/` + encodeURIComponent(slug).replace(/%20/g, '-') + '/',
  },
  twitter: {
    card: "summary_large_image",
        title: `Top Microwave Repair Services in ${formattedSlug}, Bangalore | Urban Service Company`,
        description: `Find expert microwave repair services in ${formattedSlug}, Bangalore. Affordable and quick solutions for all your appliance needs.`,
    images: ["https://www.urbanservicecompany.live/images/twitter-image.jpg"],
  },
};
}


export default async function Home({ params }: { params: tParams }) {
  // Extracting slug and formatting it
  const { slug } =await params;
  const formattedSlug = decodeURIComponent(slug.replace(/%20/g, " "));

  // Using the formatted slug as 'place'
  const place = formattedSlug;
  const pathname = usePathname();
  const canonicalUrl = `https://urbanservicecompany.live${pathname ? (pathname.endsWith('/') ? pathname : pathname + '/') : '/'}`;

  return (
    <main>
    <Navbar/>
    <div className="pt-14 md:pt-14"> {/* Increased padding for better spacing */}
      <Home2 name={place} />
      <Services/>
      <About/>
      <Choose/>
      <Faq/>
      <Footer/>
    </div>
    <head>
        <link rel="canonical" href={canonicalUrl} />
      </head>
  </main>
  );
}


