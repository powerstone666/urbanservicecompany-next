import About from "@/components/about";
import Choose from "@/components/choose";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Home1 from "@/components/home";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Top Home Appliance Repair Services in Bangalore | Urban Service Company",
  description: "Urban Service Company offers top-rated repair services for microwaves, washing machines, ACs, refrigerators, and more in Bangalore. Book online for fast, reliable service!",
  keywords: [
    "home appliance repair",
    "bangalore",
    "urban service company",
    "microwave repair",
    "washing machine repair",
    "ac repair",
    "refrigerator repair"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Top Home Appliance Repair Services in Bangalore | Urban Service Company",
    description: "Fast, reliable home appliance repair in Bangalore. We service all major brands.",
    url: "/",
  },
};

export default function HomePage() {
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
