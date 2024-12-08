import Head from 'next/head';
import microwave from "urbanservicecompany-next/public/microwave.jpg";
import washing from "urbanservicecompany-next/public/washing_machine.jpg";
import filter from "urbanservicecompany-next/public/water_purifier.jpg";
import refrigerator from "urbanservicecompany-next/public/refrigerator.jpg";
import geyser from "urbanservicecompany-next/public/geyser.jpg";
import chimney from "urbanservicecompany-next/public/chimney.jpg";
import Image from "next/image";
function Services() {
  return (
    <>
      <Head>
        <title>Top Microwave Repair Services in Bangalore | Urban Service Company</title>
        <meta name="description" content="Top microwave repair services in Bangalore and other appliances like AC, washing machine, refrigerator, geyser, and chimney. Serving areas like Marathahalli, Whitefield, Electronic City, and more." />
        <meta name="keywords" content="microwave repair, AC repair, washing machine repair, refrigerator repair, geyser repair, chimney repair, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur" />
      </Head>
      <div className="w-full h-full pt-2 text-center" id="services">
        <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-blue-800 inline-block">
          Our Services
        </h1>
        <div className="w-full h-full flex flex-col justify-center items-center mt-4 ">
          <div className="md:grid w-full md:w-3/5 bg-gray-50 gap-2  md:grid-cols-3 space-y-4 md:space-y-0">
            <div className=" bg-gray-800 h-96 md:48 w-full ">
              <div>
                <Image
                  src={microwave}
                  alt="Microwave Oven Repair in Bangalore"
                  width={180}
                  height={140}
                  className="h-80 md:48 w-full"
                />
                <h1 className="text-white p-4 font-bold">
                  Microwave Oven Repair in Bangalore
                </h1>
              </div>
            </div>
            <div className=" bg-gray-800 h-96 w-full ">
              <div>
                <Image
                  src={washing}
                  alt="Washing Machine Repair in Bangalore"
                  width={580}
                  height={640}
                  className="h-80 w-full"
                />
                <h1 className="text-white p-4 font-bold">
                  Washing Machine Repair in Bangalore
                </h1>
              </div>
            </div>
            <div className=" bg-gray-800 h-96 w-full ">
              <div>
                <Image
                  src={filter}
                  alt="Water Purifier Repair in Bangalore"
                  width={580}
                  height={640}
                  className="h-80 w-full"
                />
                <h1 className="text-white p-4 font-bold">
                  Water Purifier Repair in Bangalore
                </h1>
              </div>
            </div>
            <div className=" bg-gray-800 h-96 w-full ">
              <div>
                <Image
                  src={refrigerator}
                  alt="Refrigerator Repair in Bangalore"
                  width={580}
                  height={640}
                  className="h-80 w-full"
                />
                <h1 className="text-white p-4 font-bold">Refrigerator Repair in Bangalore</h1>
              </div>
            </div>
            <div className=" bg-gray-800 h-96 w-full ">
              <div>
                <Image
                  src={geyser}
                  alt="Geyser Repair in Bangalore"
                  width={580}
                  height={640}
                  className="h-80 w-full"
                />
                <h1 className="text-white p-4 font-bold">Geyser Repair in Bangalore</h1>
              </div>
            </div>
            <div className=" bg-gray-800 h-96 w-full ">
              <div>
                <Image
                  src={chimney}
                  alt="Chimney and Hob Repair in Bangalore"
                  width={580}
                  height={640}
                  className="h-80 w-full"
                />
                <h1 className="text-white p-4 font-bold">
                  Chimney and Hob Repair in Bangalore
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
