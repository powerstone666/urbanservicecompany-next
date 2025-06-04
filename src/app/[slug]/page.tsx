// Removed "generateMetadata" function and imported it from "metadata.ts"
"use client";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import About from "@/components/about";
import Choose from "@/components/choose";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Home2 from "@/components/ui/home2";
import { usePathname } from "next/navigation";
import { generateMetadata } from "./metadata";

type tParams = Promise<{ slug: string }>;

export default async function Home({ params }: { params: tParams }) {
  const { slug } = await params;
  const formattedSlug = decodeURIComponent(slug.replace(/%20/g, " "));

  const place = formattedSlug;
  const pathname = usePathname();
  const canonicalUrl = `https://urbanservicecompany.live${pathname ? (pathname.endsWith('/') ? pathname : pathname + '/') : '/'}`;

  return (
    <main>
      <Navbar />
      <div className="pt-14 md:pt-14">
        <Home2 name={place} />
        <Services />
        <About />
        <Choose />
        <Faq />
        <Footer />
      </div>
      <head>
        <link rel="canonical" href={canonicalUrl} />
      </head>
    </main>
  );
}


