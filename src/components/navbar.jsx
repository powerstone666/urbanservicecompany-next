'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import logo from 'urbanservicecompany-next/public/newlogo2.jpeg';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
    <nav className="h-20 w-full flex justify-between items-center shadow-md fixed bg-white z-10">
  {/* Logo Section */}
  <div className="flex items-center space-x-5 ml-4">
    <Image src={logo} alt="logo" width={60} height={60} />
    <h1 className="text-md text-sm lg:text-xl font-bold">Urban Service Company</h1>
  </div>

  {/* Desktop Navigation */}
  <div className="hidden lg:flex lg:justify-center lg:items-center lg:space-x-5 lg:w-full">
    <ul className="flex items-center w-1/2 font-bold text-sm lg:text-xl">
      <li className="mx-4 cursor-pointer hover:text-blue-500">
        <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
      </li>
      <li className="mx-4 cursor-pointer hover:text-blue-500">
        <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
      </li>
      <li className="mx-4 cursor-pointer hover:text-blue-500">
        <ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink>
      </li>
      <li className="mx-4 cursor-pointer hover:text-blue-500">
        <ScrollLink to="whyus" smooth={true} duration={500}>Why Us</ScrollLink>
      </li>
      <li className="mx-4 cursor-pointer hover:text-blue-500">
        <ScrollLink to="faqs" smooth={true} duration={500}>FAQS</ScrollLink>
      </li>
      <li className="mx-4 cursor-pointer hover:text-blue-500">
        <ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink>
      </li>
    </ul>
  </div>

  {/* Mobile Menu (ShadCN Sheet) */}
  <div className="lg:hidden mr-4">
  <Sheet>
  <SheetTrigger><div className="focus:outline-none cursor-pointer bg-gray-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='mt-12 font-extrabold text-xl'>Top Microwave Oven Repair Services In Bangalore</SheetTitle>
     
      <div className="flex flex-col space-y-4 font-bold text-xl pt-8">
              <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 bg-gray-100">Home</ScrollLink>
              <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 bg-gray-100">Services</ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 bg-gray-100">About Us</ScrollLink>
              <ScrollLink to="whyus" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 bg-gray-100">Why Us</ScrollLink>
              <ScrollLink to="faqs" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 bg-gray-100">FAQS</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500 bg-gray-100">Contact Us</ScrollLink>
            </div>
    
    </SheetHeader>
  </SheetContent>
</Sheet>
  </div>

  {/* Call Us Button */}
  <div className="hidden lg:block lg:w-28 lg:mr-24 lg:rounded-lg">
  <a href="tel:+919019349170"> <Button>Call Us</Button></a>
  </div>
</nav>

  );
}

export default Navbar;
