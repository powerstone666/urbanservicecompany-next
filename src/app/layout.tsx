import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urbanservicecompany.live"), // Added metadataBase
  title: "Urban Service Company | Expert Home Appliance Repair in Bangalore", // Generalized title
  description:
    "Urban Service Company offers expert repair and servicing for all home appliances in Bangalore. Trusted technicians for washing machines, microwave ovens, ACs, refrigerators, and more. Contact us for reliable and quick service.", // Generalized description
  keywords: [ // Changed to an array for better structure
    "urban service company",
    "home appliance repair",
    "bangalore",
    "washing machine repair",
    "microwave oven repair",
    "ac repair",
    "refrigerator repair",
    "home services",
    "appliance installation",
    "appliance servicing",
    "expert technicians",
  ],
  openGraph: { // Added openGraph object
    title: "Urban Service Company | Expert Home Appliance Repair Bangalore",
    description: "Your one-stop destination for all home appliance repair needs in Bangalore. Expert technicians, genuine spare parts, and on-time service.",
    url: "https://urbanservicecompany.live",
    siteName: "Urban Service Company",
    type: "website",
    // Consider adding a default OG image:
    // images: [
    //   {
    //     url: \'\'\'https://urbanservicecompany.live/og-default.png\'\'\', // Replace with your actual image URL
    //     width: 1200,
    //     height: 630,
    //     alt: \'\'\'Urban Service Company - Appliance Repair\'\'\',
    //   },
    // ],
  },
  // Canonical tags will be generated dynamically per page by Next.js due to metadataBase.
  // Specific pages can override canonicals if needed.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-adsense-account" content="ca-pub-2914201371636948"></meta>
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NS6GGT5C');
          `,
          }}
        />
        
        {/* Meta Tags - OG tags and duplicate keywords are removed as they are handled by the metadata object above */}
        {/* <meta name="og:title" content="Top Microwave Repair Services in Bangalore, Same Day Service in Bangalore" /> */}
        {/* <meta name="og:type" content="company" /> */}
        {/* <meta name="og:url" content="https://www.urbanservicecompany.live" /> */}
        {/* <meta name="og:site_name" content="Urban Service Company" /> */}
        {/* <meta name="og:description" content="Urban Service Company - Your one-stop destination for all home appliance repair needs in Bangalore. Expert technicians, genuine spare parts, and on-time service. Contact us now!" /> */}
        {/* <meta name="keywords" content="Urban Service Company, Microwave oven repair and servicing, ..." /> */}
        <meta name="author" content="Urban Service Company" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/ub.jpeg" /> {/* Assuming ub.jpeg is in the public folder */}

        {/* Google Fonts */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
          `}
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NS6GGT5C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Used next/script for Google Analytics */}
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
