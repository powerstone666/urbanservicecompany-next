// Updated the type of `params` to match the expected type
"use client";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import About from "@/components/about";
import Choose from "@/components/choose";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Home2 from "@/components/ui/home2";
import Head from "next/head";
import React from "react";

export default function Home({ params }: { params: Promise<{ slug: string }> }) {
  const [formattedSlug, setFormattedSlug] = React.useState<string>("");

  React.useEffect(() => {
    params.then(({ slug }) => {
      setFormattedSlug(decodeURIComponent(slug.replace(/%20/g, " ")));
    });
  }, [params]);

  const canonicalUrl = `https://urbanservicecompany.live/${formattedSlug}`;

  return (
    <main>
      <Navbar />
      <div className="pt-14 md:pt-14">
        <Home2 name={formattedSlug} />
        <Services />
        <About />
        <Choose />
        <Faq />
        <Footer />
      </div>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
      </Head>
    </main>
  );
}


