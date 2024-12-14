import Head from 'next/head';
import { LuCalendarSearch } from "react-icons/lu";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { TbHealthRecognition } from "react-icons/tb";
import Slider from '../slider';
interface Home2Props {
    name: string | string[] | undefined; 
  }

function Home2({name}:Home2Props) {
    return (
      <>
        <Head>
          <title>Top Microwave Oven Repair Services in Bangalore | Urban Service Company</title>
          content={`Top microwave oven repair services in ${name} and other locations like Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, and more. Book online for easy scheduling and transparent pricing.`}
        </Head>
        <div className="h-full" id="home">
          {/* Header Section */}
          <div className="h-24 md:h-52 w-full bg-black flex flex-col justify-center items-center">
            <h1 className="text-white text-lg text-center md:text-3xl lg:text-5xl font-bold">
              Top Microwave Oven Repair Services In
            </h1>
            <h1 className="text-white text-xl text-center md:text-3xl lg:text-5xl font-bold md:mt-4 mt-2">
            {name}
            </h1>
          </div>
  
          {/* Home Services Section */}
          <h1 className="text-center mt-4 md:mt-8 text-xl font-bold md:text-2xl lg:text-4xl">
            Home services at your doorstep in Bangalore and Nearby Areas
          </h1>
          <div className="mt-4 md:mt-8">
            <div className="container mx-auto">
              <div className="flex overflow-x-auto space-x-4 pb-8 md:justify-center md:items-center">
                <div className="flex flex-nowrap space-x-3 ">
                  <div className="w-80 h-96 bg-gray-100 flex flex-col text-center items-center pt-4">
                    <LuCalendarSearch size={80} />
                    <h1 className="pt-4 text-xl font-bold">Easy Scheduling</h1>
                    <p className="p-2">
                      <span className="font-bold">Book Anytime, Anywhere:</span> Schedule your service online in less than a minute using our user-friendly platform.
                    </p>
                    <p className="p-2">
                      <span className="font-bold">Convenient for Busy Lifestyles:</span> No need to wait for office hours; book appointments at your preferred time.
                    </p>
                  </div>
                  <div className="w-80 h-96 bg-gray-100 flex flex-col text-center items-center pt-4">
                    <MdOutlineHomeRepairService size={80} />
                    <h1 className="pt-4 text-xl font-bold">Service Fee</h1>
                    <p className="p-2">
                      <span className="font-bold">Transparent Pricing:</span> Service fees are applied toward your total repair cost, making services more affordable.
                    </p>
                    <p className="p-2">
                      <span className="font-bold">Clear Estimates:</span> Receive an upfront breakdown of repair costs before proceeding.
                    </p>
                  </div>
                  <div className="w-80 h-96 bg-gray-100 flex flex-col text-center items-center pt-4">
                    <TbHealthRecognition size={80} />
                    <h1 className="pt-4 text-xl font-bold">Extended Warranty</h1>
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
          <div className="h-full w-full bg-black pt-8 pb-12 flex text-center justify-center">
            <div className="w-full md:h-96 md:w-1/2 max-w-screen-lg p-4 mb-4">
              <h1 className="text-white text-2xl md:text-4xl mb-4 border-b-4 border-blue-600 inline-block">Our Snapshots</h1>
              <Slider/>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Home2;
