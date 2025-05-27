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
  metadataBase: new URL("https://urbanservicecompany.live"),
  title: "Urban Service Company | Expert Home Appliance Repair in Bangalore", // General title
  description:
    "Urban Service Company offers expert repair and servicing for all home appliances in Bangalore. Trusted technicians for washing machines, microwave ovens, ACs, refrigerators, and more. Contact us for reliable and quick service.", // General description
  keywords:
    "urban service, home services, appliance repair, bangalore, washing machine repair, microwave oven repair, ac repair, refrigerator repair, cleaning, plumbing, electrical, handyman, maintenance, repair, installation, local services, professional services", // More general keywords
  openGraph: {
    title: "Urban Service Company | Expert Home Appliance Repair Bangalore",
    description:
      "Your one-stop destination for all home appliance repair needs in Bangalore. Expert technicians, genuine spare parts, and on-time service.",
    url: "https://urbanservicecompany.live", // Base URL for OG
    siteName: "Urban Service Company",
    type: "website", // Changed from 'company' to 'website' as it's more common for general site representation
    // Add images here if you have a general site logo for OG
    // images: [
    //   {
    //     url: 'https://urbanservicecompany.live/og-image.png', // Replace with your actual image URL
    //     width: 800,
    //     height: 600,
    //     alt: 'Urban Service Company',
    //   },
    // ],
  },
  // Removed: alternates: { canonical: "/" }, to allow dynamic self-referencing canonicals
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-2914201371636948"
        ></meta>
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

        {/* Meta Tags - Removed keywords and OG tags from here, now managed by Next.js metadata object */}
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
            src="https://www.googletagmanager.com/ns.html?id=GTM-549T39LQ"
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
