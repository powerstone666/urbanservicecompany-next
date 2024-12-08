import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';
import { FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='w-full h-full' id="contact">
      <Head>
        <title>Top Microwave Repair Services in Bangalore | Urban Service Company</title>
        <meta name="description" content="Urban Service Company offers top microwave repair services in Bangalore and other appliances like AC, washing machine, refrigerator in various locations including Marathahalli, Whitefield, Electronic City, and more." />
        <meta name="keywords" content="microwave repair, AC repair, washing machine repair, refrigerator repair, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur" />
      </Head>
      <footer className='h-full w-full bg-black text-white p-8 md:p-20 mb-24 md:mb-12'>
        <div className='flex items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-screen-lg text-center md:text-left'>
            {/* Company Info Section */}
            <div className='mb-8 md:mb-0'>
              <h1 className='text-2xl border-b-4 border-blue-900 inline-block mb-4'>Top Microwave Repair Service in Bangalore</h1>
              <p>
                Urban Service Company is a leading provider of cleaning and repair services with an outstanding reputation for quality and integrity throughout the Greater Bangalore Area.
              </p>
            </div>

            {/* Services Section */}
            <div className='mb-8 md:mb-0'>
              <h1 className='text-2xl border-b-4 border-blue-900 inline-block mb-4'>Our Services</h1>
              <ul className='list-none'>
                <li>Microwave Oven Repair</li>
                <li>Washing Machine Repair</li>
                <li>Refrigerator Repair</li>
                <li>Water Purifier Repair</li>
                <li>AC Repair</li>
              </ul>
            </div>

            {/* Useful Links Section */}
            <div className='mb-8 md:mb-0'>
              <h1 className='text-2xl border-b-4 border-blue-900 inline-block mb-4'>Top microwave oven repair service in</h1>
              <ul className='list-none'>
                <li>Marathahalli</li>
                <li>Whitefield</li>
                <li>Electronic City</li>
                <li>HSR Layout</li>
                <li>Koramangala</li>
                <li>Indiranagar</li>
                <li>JP Nagar</li>
                <li>BTM Layout</li>
                <li>Banashankari</li>
                <li>Hebbal</li>
                <li>Yelahanka</li>
                <li>Jayanagar</li>
                <li>Malleshwaram</li>
                <li>Rajajinagar</li>
                <li>RT Nagar</li>
                <li>Vijayanagar</li>
                <li>Bannerghatta Road</li>
                <li>KR Puram</li>
                <li>CV Raman Nagar</li>
                <li>Majestic</li>
                <li>Peenya</li>
                <li>Jalahalli</li>
                <li>Yeshwanthpur</li>
                <li>Basaveshwaranagar</li>
                <li>Vidyaranyapura</li>
                <li>Hesaraghatta</li>
                <li>Nagarbhavi</li>
                <li>Kengeri</li>
                <li>Magadi Road</li>
                <li>Rajarajeshwari Nagar</li>
                <li>Kanakapura Road</li>
                <li>Sarjapur Road</li>
                <li>Kadugodi</li>
                <li>Bommanahalli</li>
                <li>Begur</li>
                <li>Kudlu Gate</li>
                <li>Hosur Road</li>
                <li>Bellandur</li>
                <li>Sarjapur</li>
                <Link href="/location"><li className='text-blue-800'>And More....</li></Link>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className='mb-8 md:mb-0'>
              <h1 className='text-2xl border-b-4 border-blue-900 inline-block mb-4'>Contact Us</h1>
              <p className='flex items-center justify-center md:justify-start mb-2'>
                <FaMapMarkerAlt className='mr-2' /> Bangalore
              </p>
              <p className='flex items-center justify-center md:justify-start mb-2'>
                <FaPhone className='mr-2' />
                <a href="tel:+919019349170">+91-9019349170</a>
              </p>
              <p className='flex items-center justify-center md:justify-start'>
                <FaEnvelope className='mr-2' />
                <a href="mailto:bestelectronicservices556@gmail.com">bestelectronicservices556@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <p className='border-t-2 py-8 border-white mt-8'>© {new Date().getFullYear()} Urban Service Company. All Rights Reserved.</p>
        </div>
      </footer>
      <div className='flex justify-between w-screen h-32 fixed bottom-0 items-center z-40 bg-black text-white px-8 md:justify-center'>
        <div className='flex flex-row gap-2 md:gap-12'>
          <a href="tel:+919019349170"> <div className='flex items-center gap-2'>
            <FaPhone />
            <p> Call Now</p>
          </div></a>
          <a href="mailto:bestelectronicservices556@gmail.com"> <div className='flex items-center gap-2 border-x-2 border-white px-5'>
            <FaEnvelope />
            <p> Mail Us</p>
          </div></a>
          <a href="https://wa.me/+919019349170" target="_blank" rel="noopener noreferrer">  <div className='flex items-center gap-2'>
            <FaWhatsapp />
            <p> WhatsApp</p>
          </div></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
