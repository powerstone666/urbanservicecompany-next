import Head from 'next/head';
import CustomTypeWriter from "./typewriter";
import { LuCalendarSearch } from "react-icons/lu";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { TbHealthRecognition } from "react-icons/tb";
import Slider from "./slider";

function Home1() {
    return (
      <>
        <Head>
          <title>Top Microwave Oven Repair Services in Bangalore | Urban Service Company</title>
          <meta name="description" content="Top microwave oven repair services in Bangalore and other locations like Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, and more. Book online for easy scheduling and transparent pricing." />
          <meta name="keywords" content="microwave repair, oven repair, AC repair, washing machine repair, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
        </Head>
        <div className="min-h-screen bg-[#f8f9fa] font-['Poppins']" id="home">
          {/* Header Section */}
          <div className="h-32 md:h-56 w-full bg-gradient-to-r from-gray-900 to-black flex flex-col justify-center items-center transform transition-all duration-500 hover:shadow-2xl">
            <h1 className="text-white text-lg text-center md:text-3xl lg:text-5xl font-bold tracking-tight">
              Top Microwave Oven Repair Services In Bangalore
            </h1>
            <h1 className="text-white text-xl text-center md:text-3xl lg:text-5xl font-bold md:mt-4 mt-2">
              <CustomTypeWriter />
            </h1>
          </div>
  
          {/* Home Services Section */}
          <h1 className="text-gray-900 text-center mt-8 md:mt-12 text-xl font-bold md:text-2xl lg:text-4xl font-['Poppins'] animate-fade-in-down">
            Home services at your doorstep in Bangalore and Nearby Areas
          </h1>
          <div className="mt-6 md:mt-10 px-4">
            <div className="container mx-auto">
              <div className="flex overflow-x-auto space-x-6 pb-8 md:justify-center md:items-center scrollbar-hide">
                <div className="flex flex-nowrap space-x-4">
                  <div className="w-72 md:w-80 h-[380px] bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col text-center items-center pt-6 hover:bg-gray-50 cursor-pointer">
                    <div className="text-gray-900 transition-all duration-300 transform hover:rotate-12 cursor-pointer">
                      <LuCalendarSearch size={70} />
                    </div>
                    <h1 className="pt-4 text-xl font-bold text-gray-900">Easy Scheduling</h1>
                    <p className="p-2">
                      <span className="font-bold">Book Anytime, Anywhere:</span> Schedule your service online in less than a minute using our user-friendly platform.
                    </p>
                    <p className="p-2">
                      <span className="font-bold">Convenient for Busy Lifestyles:</span> No need to wait for office hours; book appointments at your preferred time.
                    </p>
                  </div>
                  <div className="w-72 md:w-80 h-[400px] bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col text-center items-center pt-6 hover:bg-gray-50 -mt-4 cursor-pointer">
                    <div className="text-gray-900 transition-all duration-300 transform hover:rotate-12 cursor-pointer">
                      <MdOutlineHomeRepairService size={70} />
                    </div>
                    <h1 className="pt-4 text-xl font-bold text-gray-900">Service Fee</h1>
                    <p className="p-2">
                      <span className="font-bold">Transparent Pricing:</span> Service fees are applied toward your total repair cost, making services more affordable.
                    </p>
                    <p className="p-2">
                      <span className="font-bold">Clear Estimates:</span> Receive an upfront breakdown of repair costs before proceeding.
                    </p>
                  </div>
                  <div className="w-72 md:w-80 h-[380px] bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col text-center items-center pt-6 hover:bg-gray-50 cursor-pointer">
                    <div className="text-gray-900 transition-all duration-300 transform hover:rotate-12 cursor-pointer">
                      <TbHealthRecognition size={70} />
                    </div>
                    <h1 className="pt-4 text-xl font-bold text-gray-900">Extended Warranty</h1>
                    <p className="p-2">
                      <span className="font-bold">Comprehensive Coverage:</span> Covers unexpected breakdowns and ensures hassle-free repairs.
                    </p>
                    <p className="p-2">
                      <span className="font-bold">Priority Service:</span> Designed to reduce repair stress for working professionals and households.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Slider Section */}
          <div className="w-full bg-gradient-to-r from-black to-gray-900 py-8">
            <div className="w-full max-w-screen-xl mx-auto px-4">
              <h1 className="text-white text-2xl md:text-4xl mb-6 font-['Poppins'] relative">
                <span className="relative inline-block">
                  Our Snapshots
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                </span>
              </h1>
              <div className="w-full h-[400px] rounded-xl overflow-hidden">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Home1;
