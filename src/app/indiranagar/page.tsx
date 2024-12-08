import About from "@/components/about";
import Choose from "@/components/choose";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Home2 from "@/components/ui/home2";

export const metadata = {
  title: 'Top Microwave Repair Services in indiranagar, Bangalore | Urban Service Company',
  description: 'Professional microwave repair services in Bangalore for all brands. We also offer repair services for washing machines, ACs, and other appliances.',
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
