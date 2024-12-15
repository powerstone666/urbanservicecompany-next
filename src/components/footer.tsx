import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import Link from 'next/link';
import Head from 'next/head';

const Footer = () => {
  return (
    <div className='w-full h-full font-roboto' id="contact">
      <Head>
        <title>Top Microwave Repair Services in Bangalore | Urban Service Company</title>
        <meta name="description" content="Urban Service Company offers top microwave repair services in Bangalore and other appliances like AC, washing machine, refrigerator in various locations including Marathahalli, Whitefield, Electronic City, and more." />
        <meta name="keywords" content="microwave repair, AC repair, washing machine repair, refrigerator repair, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      
      <footer className='h-full w-full bg-[#000000] text-white p-8 md:p-20 pb-28 md:pb-32'>
        <div className='flex items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-screen-lg text-center md:text-left'>
            {/* Company Info Section */}
            <div className='mb-8 md:mb-0 transition-all duration-300 hover:translate-y-[-5px]'>
              <h1 className='font-poppins text-2xl font-semibold pb-2 mb-4 border-b-2 border-white/30 inline-block bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text'>
                Top Microwave Repair Service in Bangalore
              </h1>
              <p className='text-white'>
                Urban Service Company is a leading provider of cleaning and repair services with an outstanding reputation for quality and integrity throughout the Greater Bangalore Area.
              </p>
            </div>

            {/* Services Section */}
            <div className='mb-8 md:mb-0'>
              <h1 className='font-poppins text-2xl font-semibold pb-2 mb-4 border-b-2 border-white/30 inline-block bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text'>
                Our Services
              </h1>
              <ul className='list-none space-y-2 text-white'>
                {['Microwave Oven Repair', 'Washing Machine Repair', 'Refrigerator Repair', 'Water Purifier Repair', 'AC Repair'].map((service) => (
                  <li key={service} className='transition-all duration-300 hover:translate-x-2 hover:text-blue-400 cursor-pointer'>{service}</li>
                ))}
              </ul>
            </div>

            {/* Locations Section */}
            <div className='mb-8 md:mb-0'>
              <h1 className='font-poppins text-2xl font-semibold pb-2 mb-4 border-b-2 border-white/30 inline-block bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text'>
                Service Locations
              </h1>
              <div className='max-h-60 overflow-y-auto no-scrollbar'>
                <ul className='list-none space-y-1'>
                  <li className='cursor-pointer'>Marathahalli</li>
                  <li className='cursor-pointer'>Whitefield</li>
                  <li className='cursor-pointer'>Electronic City</li>
                  <li className='cursor-pointer'>HSR Layout</li>
                  <li className='cursor-pointer'>Koramangala</li>
                  <li className='cursor-pointer'>Indiranagar</li>
                  <li className='cursor-pointer'>JP Nagar</li>
                  <li className='cursor-pointer'>BTM Layout</li>
                  <li className='cursor-pointer'>Banashankari</li>
                  <li className='cursor-pointer'>Hebbal</li>
                  <li className='cursor-pointer'>Yelahanka</li>
                  <li className='cursor-pointer'>Jayanagar</li>
                  <li className='cursor-pointer'>Malleshwaram</li>
                  <li className='cursor-pointer'>Rajajinagar</li>
                  <li className='cursor-pointer'>RT Nagar</li>
                  <li className='cursor-pointer'>Vijayanagar</li>
                  <li className='cursor-pointer'>Bannerghatta Road</li>
                  <li className='cursor-pointer'>KR Puram</li>
                  <li className='cursor-pointer'>CV Raman Nagar</li>
                  <li className='cursor-pointer'>Majestic</li>
                  <li className='cursor-pointer'>Peenya</li>
                  <li className='cursor-pointer'>Jalahalli</li>
                  <li className='cursor-pointer'>Yeshwanthpur</li>
                  <li className='cursor-pointer'>Basaveshwaranagar</li>
                  <li className='cursor-pointer'>Vidyaranyapura</li>
                  <li className='cursor-pointer'>Hesaraghatta</li>
                  <li className='cursor-pointer'>Nagarbhavi</li>
                  <li className='cursor-pointer'>Kengeri</li>
                  <li className='cursor-pointer'>Magadi Road</li>
                  <li className='cursor-pointer'>Rajarajeshwari Nagar</li>
                  <li className='cursor-pointer'>Kanakapura Road</li>
                  <li className='cursor-pointer'>Sarjapur Road</li>
                  <li className='cursor-pointer'>Kadugodi</li>
                  <li className='cursor-pointer'>Bommanahalli</li>
                  <li className='cursor-pointer'>Begur</li>
                  <li className='cursor-pointer'>Kudlu Gate</li>
                  <li className='cursor-pointer'>Hosur Road</li>
                  <li className='cursor-pointer'>Bellandur</li>
                  <li className='cursor-pointer'>Sarjapur</li>
                  <Link href="/location">
                    <li className='text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer'>And More....</li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className='mb-8 md:mb-0'>
              <h1 className='font-poppins text-2xl font-semibold pb-2 mb-4 border-b-2 border-white/30 inline-block bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text'>
                Contact Us
              </h1>
              <div className='space-y-4'>
                <p className='flex items-center justify-center md:justify-start hover:translate-x-2 transition-transform duration-300 cursor-pointer'>
                  <FaMapMarkerAlt className='mr-2 text-blue-400' /> Bangalore
                </p>
                <p className='flex items-center justify-center md:justify-start hover:translate-x-2 transition-transform duration-300 cursor-pointer'>
                  <FaPhone className='mr-2 text-blue-400' />
                  <a href="tel:+919019349170" className='hover:text-blue-400 transition-colors duration-300'>+91-9019349170</a>
                </p>
                <p className='flex items-center justify-center md:justify-start hover:translate-x-2 transition-transform duration-300 cursor-pointer'>
                  <FaEnvelope size={18} className='mr-2 text-blue-400 min-w-[20px]' />
                  <a href="mailto:info@urbanservicecompany.me" className='hover:text-blue-400 transition-colors duration-300'>
                    info@urbanservicecompany.me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='text-center'>
          <p className='border-t border-white/10 pt-8 mt-8 text-white'>
            © {new Date().getFullYear()} Urban Service Company. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Fixed Bottom Bar */}
      <div className='flex justify-between w-screen h-16 fixed bottom-0 items-center z-40 bg-[#000000] text-white px-4 md:h-20 md:px-8'>
        <div className='flex flex-row gap-4 md:gap-12 justify-around w-full md:justify-center'>
          <a href="tel:+919019349170" className='group transition-all duration-300 hover:scale-105 cursor-pointer'>
            <div className='flex items-center gap-2 hover:text-blue-400'>
              <FaPhone className='group-hover:animate-bounce' />
              <p className='text-sm md:text-base font-poppins'>Call Now</p>
            </div>
          </a>
          <a href="mailto:info@urbanservicecompany.me" className='group transition-all duration-300 hover:scale-105 cursor-pointer'>
            <div className='flex items-center gap-2 border-x border-white/20 px-4 md:px-5 hover:text-blue-400'>
              <FaEnvelope className='group-hover:animate-bounce' />
              <p className='text-sm md:text-base font-poppins flex items-center gap-1'>
                Mail Us 
              </p>
            </div>
          </a>
          <a href="https://wa.me/+919019349170" target="_blank" rel="noopener noreferrer" className='group transition-all duration-300 hover:scale-105 cursor-pointer'>
            <div className='flex items-center gap-2 hover:text-blue-400'>
              <FaWhatsapp className='group-hover:animate-bounce' />
              <p className='text-sm md:text-base font-poppins'>WhatsApp</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
