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
// Update the logo import to use the correct path
import logo from '../../public/ub.jpeg';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white shadow-md z-30">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="logo" width={50} height={50} className="transition-transform hover:scale-105" />
          <h1 className="text-lg font-extrabold">Urban Service Company</h1>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <div className="cursor-pointer transition-transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </SheetTrigger>
            <SheetContent className="bg-black text-white">
              <SheetHeader>
                <SheetTitle className="mt-12 text-2xl font-extrabold">Urban Service Company</SheetTitle>
            
                <div className="flex flex-col pt-8 space-y-6 font-roboto">
                  <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer transform transition-all hover:text-lime-400 hover:translate-x-2">
                    Home
                  </ScrollLink>
                  <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer transform transition-all hover:text-lime-400 hover:translate-x-2">
                    Services
                  </ScrollLink>
                  <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer transform transition-all hover:text-lime-400 hover:translate-x-2">
                    About Us
                  </ScrollLink>
                  <ScrollLink to="whyus" smooth={true} duration={500} className="cursor-pointer transform transition-all hover:text-lime-400 hover:translate-x-2">
                    Why Us
                  </ScrollLink>
                  <ScrollLink to="faqs" smooth={true} duration={500} className="cursor-pointer transform transition-all hover:text-lime-400 hover:translate-x-2">
                    FAQS
                  </ScrollLink>
                  <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer transform transition-all hover:text-lime-400 hover:translate-x-2">
                    Contact Us
                  </ScrollLink>
                  <a href="tel:+919019349170" className="pt-4">
                    <Button className="w-full px-8 py-3 text-lg font-roboto font-bold text-white rounded-full 
                      bg-gradient-to-r from-blue-600 to-purple-600
                      transition-all duration-300 
                      hover:from-blue-700 hover:to-purple-700 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] 
                      hover:scale-105 transform active:scale-95">
                      Call Us
                    </Button>
                  </a>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex items-center space-x-6 font-roboto">
            <li className="cursor-pointer transition-all hover:text-lime-400 hover:-translate-y-0.5">
              <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
            </li>
            <li className="cursor-pointer transition-all hover:text-lime-400 hover:-translate-y-0.5">
              <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
            </li>
            <li className="cursor-pointer transition-all hover:text-lime-400 hover:-translate-y-0.5">
              <ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink>
            </li>
            <li className="cursor-pointer transition-all hover:text-lime-400 hover:-translate-y-0.5">
              <ScrollLink to="whyus" smooth={true} duration={500}>Why Us</ScrollLink>
            </li>
            <li className="cursor-pointer transition-all hover:text-lime-400 hover:-translate-y-0.5">
              <ScrollLink to="faqs" smooth={true} duration={500}>FAQS</ScrollLink>
            </li>
            <li className="cursor-pointer transition-all hover:text-lime-400 hover:-translate-y-0.5">
              <ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <a href="tel:+919019349170">
            <Button className="px-8 py-3 text-lg font-roboto font-bold text-white rounded-full 
              bg-gradient-to-r from-blue-600 to-purple-600
              transition-all duration-300 
              hover:from-blue-700 hover:to-purple-700 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] 
              hover:scale-105 transform active:scale-95">
              Call Us
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
