import About from "@/components/about";
import Choose from "@/components/choose";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Home1 from "@/components/home";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Top Microwave Oven Repair Services in Bangalore',
  description: 'Urban Service Company offers top microwave repair services in Bangalore and other appliances...',
  keywords: 'microwave repair, AC repair, washing machine repair, refrigerator repair, Bangalore',
  openGraph: {
    title: 'Urban Service Company - Professional Services for Your City',
    description: 'Offering top-notch urban services to meet all your city needs.',
    url: 'https://www.urbanservicecompany.com',
    siteName: 'Urban Service Company',
    images: [{
      url: 'https://www.urbanservicecompany.com/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Urban Service Company Logo',
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban Service Company - Professional Services for Your City',
    description: 'Offering top-notch urban services to meet all your city needs.',
    images: ['https://www.urbanservicecompany.com/images/twitter-image.jpg'],
  },
}

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="pt-14 md:pt-14"> {/* Increased padding for better spacing */}
        <Home1 />
        <Services/>
        <About/>
        <Choose/>
        <Faq/>
        <Footer/>
      </div>
    </main>
  );
}
