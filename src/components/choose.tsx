import { HiBadgeCheck } from "react-icons/hi";
import { GoClockFill } from "react-icons/go";
import { FaUserTie } from "react-icons/fa6";
import { CardWithForm } from "./cardform";
import Head from 'next/head';

function Choose() {
    return (
        <>
            <Head>
                <title>Top Microwave Repair Services in Bangalore | Urban Service Company</title>
                <meta name="description" content="Best microwave, AC, washing machine repair services in Bangalore and surrounding areas like Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, and more." />
                <meta name="keywords" content="microwave repair, AC repair, washing machine repair, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur" />
            </Head>
            <div className="w-full h-auto pt-4 pb-4" id="whyus">
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl font-bold border-b-4 border-blue-800 inline-block">Why Choose Us?</h1>
                </div>
                
                <div className="flex w-full overflow-scroll md:overflow-hidden mt-8 md:justify-center md:items-center">
                    <div className="flex flex-wrap gap-4 ">
                        <div className="flex text-4xl font-bold p-4 bg-gray-50">
                            <h1 className="mr-2">₹</h1>
                            <h1>Best Market Price</h1>
                        </div>
                        <div className="flex text-4xl font-bold p-4 bg-gray-50">
                            <h1 className="mr-2"><HiBadgeCheck /></h1>
                            <h1>Certified Technicians</h1>
                        </div>
                        <div className="flex text-4xl font-bold p-4 bg-gray-50">
                            <h1 className="mr-2"><GoClockFill /></h1>
                            <h1>Timely Service</h1>
                        </div>
                        <div className="flex text-4xl font-bold p-4 bg-gray-50">
                            <h1 className="mr-2"><FaUserTie /></h1>
                            <h1>Professional Support</h1>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-8">
                    <iframe className="p-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.070747287109!2d77.61400571482264!3d13.031166690816812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzUyLjIiTiA3N8KwMzYnNTguMyJF!5e0!3m2!1sen!2sin!4v1602855630969!5m2!1sen!2sin" width="650" height="450" aria-hidden="false"></iframe>
                </div>
                <div className="bg-black h-auto flex flex-col items-center pb-8">
                    <CardWithForm />
                </div>
            </div>
        </>
    );
}
export default Choose;
