import CustomTypeWriter from "./typewriter";
import { LuCalendarSearch } from "react-icons/lu";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { TbHealthRecognition } from "react-icons/tb";
import Slider from "./slider";
import { usePathname } from "next/navigation";

function Home1() {
    const pathname = usePathname();
    const canonicalUrl = `https://urbanservicecompany.live${pathname ? (pathname.endsWith('/') ? pathname : pathname + '/') : '/'}`;
    return (
      <>
        {/* Dynamic canonical tag for all slugs/pages using this component */}
        <head>
          <link rel="canonical" href={canonicalUrl} />
        </head>
        <div className="min-h-screen bg-[#f8f9fa] font-['Poppins']" id="home">
          {/* Header Section - Adjusted height for mobile */}
          <div className="h-56 sm:h-64 md:h-72 w-full bg-gradient-to-r from-gray-900 to-black flex flex-col justify-center items-center transform transition-all duration-500 hover:shadow-2xl px-4">
            <h1  className='text-white text-sm text-center sm:text-base md:text-xl lg:text-2xl font-bold tracking-tight'>Toll Free Customer Service Number- <a href="tel:+919019349170" className='hover:text-purple-800'>+91 9019349170</a></h1>
            <h1 className="text-white text-lg text-center sm:text-xl md:text-3xl lg:text-5xl font-bold tracking-tight pt-6 sm:pt-8 md:pt-12">
              {/* Main heading can be more general or specific based on page focus */}
              Expert Home Appliance Repair
            </h1>
            <h2 className="text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">In Bangalore</h2>
            
            <h3 className="text-white text-lg text-center sm:text-xl md:text-3xl lg:text-4xl font-bold md:mt-3 mt-2">
              <CustomTypeWriter />
            </h3>
          </div>
  
          {/* Home Services Section */}
          <h1 className="text-gray-900 text-center mt-8 md:mt-12 text-xl px-2 sm:text-2xl lg:text-4xl font-['Poppins'] animate-fade-in-down">
            Home services at your doorstep in Bangalore and Nearby Areas
          </h1>
          <div className="mt-6 md:mt-10 px-2 sm:px-4"> {/* Adjusted horizontal padding */}
            <div className="container mx-auto">
              {/* Outer div for scrolling and padding */}
              <div className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-8 md:justify-center scrollbar-hide">
                  {/* Card 1: Easy Scheduling */}
                  <div className="flex-shrink-0 w-[80vw] max-w-[280px] sm:w-64 md:w-80 h-auto min-h-[340px] sm:min-h-[360px] md:min-h-[380px] bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col text-center items-center p-4 pt-5 sm:pt-6 hover:bg-gray-50 cursor-pointer">
                    <div className="text-gray-900 transition-all duration-300 transform hover:rotate-12 cursor-pointer">
                      <LuCalendarSearch size={56} className="sm:w-[64px] sm:h-[64px] md:w-[70px] md:h-[70px]" />
                    </div>
                    <h2 className="pt-3 sm:pt-4 text-lg sm:text-xl font-bold text-gray-900">Easy Scheduling</h2>
                    <p className="p-1 sm:p-2 text-sm sm:text-base">
                      <span className="font-bold">Book Anytime, Anywhere:</span> Schedule your service online in less than a minute using our user-friendly platform.
                    </p>
                    <p className="p-1 sm:p-2 text-sm sm:text-base">
                      <span className="font-bold">Convenient for Busy Lifestyles:</span> No need to wait for office hours; book appointments at your preferred time.
                    </p>
                  </div>
                  {/* Card 2: Service Fee */}
                  <div className="flex-shrink-0 w-[80vw] max-w-[280px] sm:w-64 md:w-80 h-auto min-h-[360px] sm:min-h-[380px] md:min-h-[400px] bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col text-center items-center p-4 pt-5 sm:pt-6 hover:bg-gray-50 sm:mt-0 md:-mt-4 cursor-pointer">
                    <div className="text-gray-900 transition-all duration-300 transform hover:rotate-12 cursor-pointer">
                      <MdOutlineHomeRepairService size={56} className="sm:w-[64px] sm:h-[64px] md:w-[70px] md:h-[70px]" />
                    </div>
                    <h2 className="pt-3 sm:pt-4 text-lg sm:text-xl font-bold text-gray-900">Service Fee</h2>
                    <p className="p-1 sm:p-2 text-sm sm:text-base">
                      <span className="font-bold">Transparent Pricing:</span> Service fees are applied toward your total repair cost, making services more affordable.
                    </p>
                    <p className="p-1 sm:p-2 text-sm sm:text-base">
                      <span className="font-bold">Clear Estimates:</span> Receive an upfront breakdown of repair costs before proceeding.
                    </p>
                  </div>
                  {/* Card 3: Extended Warranty */}
                  <div className="flex-shrink-0 w-[80vw] max-w-[280px] sm:w-64 md:w-80 h-auto min-h-[340px] sm:min-h-[360px] md:min-h-[380px] bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col text-center items-center p-4 pt-5 sm:pt-6 hover:bg-gray-50 cursor-pointer">
                    <div className="text-gray-900 transition-all duration-300 transform hover:rotate-12 cursor-pointer">
                      <TbHealthRecognition size={56} className="sm:w-[64px] sm:h-[64px] md:w-[70px] md:h-[70px]" />
                    </div>
                    <h2 className="pt-3 sm:pt-4 text-lg sm:text-xl font-bold text-gray-900">Extended Warranty</h2>
                    <p className="p-1 sm:p-2 text-sm sm:text-base">
                      <span className="font-bold">Comprehensive Coverage:</span> Covers unexpected breakdowns and ensures hassle-free repairs.
                    </p>
                    <p className="p-1 sm:p-2 text-sm sm:text-base">
                      <span className="font-bold">Priority Service:</span> Designed to reduce repair stress for working professionals and households.
                    </p>
                  </div>
              </div>
            </div>
          </div>
  
          {/* Slider Section - Made height responsive */}
          <div className="w-full bg-gradient-to-r from-black to-gray-900 py-8">
            <div className="w-full max-w-screen-xl mx-auto px-4">
              <h1 className="text-white text-2xl md:text-4xl mb-6 font-['Poppins'] relative">
                <span className="relative inline-block">
                  Our Snapshots
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                </span>
              </h1>
              {/* Adjusted height for slider on mobile */}
              <div className="w-full h-[280px] sm:h-[320px] md:h-[400px] rounded-xl overflow-hidden">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Home1;
