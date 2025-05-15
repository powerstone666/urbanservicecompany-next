import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Top microwave oven repair service in Bangalore | Urban Service Company",
  description: "Urban Service Company, Microwave oven repair and servicing, Expert microwave repair technician near me, Affordable microwave repair services near me, Microwave repair with warranty, Home microwave oven repair service, Quick microwave repair services near me, 24/7 microwave repair service, Microwave appliance repair near me, Emergency microwave repair services, Trusted microwave repair services near me, Best microwave repair company near me, Local microwave repair experts, Certified microwave repair technicians, Microwave repair in Bangalore, Bangalore microwave repair service near me, Best microwave repair in Bangalore, Affordable microwave repair in Bangalore, Microwave servicing at home in Bangalore, Fast microwave repair in Bangalore, Top-rated microwave oven repair Bangalore, Same day microwave repair in Bangalore, Microwave service and repair in Bangalore, Home visitService Locations, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur",
  keywords: "urban service, home services, cleaning, plumbing, electrical, handyman, maintenance, repair, installation, local services, professional services, Microwave oven repair and servicing, Expert microwave repair technician near me, Affordable microwave repair services near me, Microwave repair with warranty, Home microwave oven repair service, Quick microwave repair services near me, 24/7 microwave repair service, Microwave appliance repair near me, Emergency microwave repair services, Trusted microwave repair services near me, Best microwave repair company near me, Local microwave repair experts, Certified microwave repair technicians, Microwave repair in Bangalore, Bangalore microwave repair service near me, Best microwave repair in Bangalore, Affordable microwave repair in Bangalore, Microwave servicing at home in Bangalore, Fast microwave repair in Bangalore, Top-rated microwave oven repair Bangalore, Same day microwave repair in Bangalore, Microwave service and repair in Bangalore, Home visitService Locations, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur",
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
              })(window,document,'script','dataLayer','GTM-549T39LQ');
            `,
          }}
        />
        
        {/* Meta Tags */}
        <meta
          name="og:title"
          content="Top Microwave Repair Services in Bangalore, Same Day Service in Bangalore"
        />
        <meta name="og:type" content="company" />
        <meta name="og:url" content="https://www.urbanservicecompany.live" />
        <meta name="og:site_name" content="Urban Service Company" />
        <meta
          name="og:description"
          content="Urban Service Company - Your one-stop destination for all home appliance repair needs in Bangalore. Expert technicians, genuine spare parts, and on-time service. Contact us now!"
        />
        <meta
          name="keywords"
          content="Urban Service Company, Microwave oven repair and servicing, Expert microwave repair technician near me, Affordable microwave repair services near me, Microwave repair with warranty, Home microwave oven repair service, Quick microwave repair services near me, 24/7 microwave repair service, Microwave appliance repair near me, Emergency microwave repair services, Trusted microwave repair services near me, Best microwave repair company near me, Local microwave repair experts, Certified microwave repair technicians, Microwave repair in Bangalore, Bangalore microwave repair service near me, Best microwave repair in Bangalore, Affordable microwave repair in Bangalore, Microwave servicing at home in Bangalore, Fast microwave repair in Bangalore, Top-rated microwave oven repair Bangalore, Same day microwave repair in Bangalore, Microwave service and repair in Bangalore, Home visitService Locations, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur"
        />
        <meta name="author" content="Urban Service Company" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="icon2.png" />
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
          `}
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/gtag/js?id=G-57VHG17K36"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
