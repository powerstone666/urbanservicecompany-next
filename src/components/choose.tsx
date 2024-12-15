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
                <meta name="keywords" content="microwave repair, AC repair, washing machine repair, Bangalore, Marathahalli, Whitefield, Electronic City" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
            </Head>
            <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 py-12 font-roboto" id="whyus">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-poppins font-bold text-gray-900 border-b-4 border-blue-800 inline-block pb-2 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                        Why Choose Us?
                    </h1>
                </div>
                
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: '₹', text: 'Best Market Price' },
                            { icon: <HiBadgeCheck />, text: 'Certified Technicians' },
                            { icon: <GoClockFill />, text: 'Timely Service' },
                            { icon: <FaUserTie />, text: 'Professional Support' }
                        ].map((item, index) => (
                            <div key={index} 
                                className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl cursor-pointer"
                            >
                                <div className="flex items-center space-x-4 text-3xl font-poppins font-bold text-gray-900">
                                    <span className="text-blue-800 cursor-pointer">{item.icon}</span>
                                    <h2>{item.text}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-center">
                    <div className="w-full max-w-4xl px-4">
                        <iframe 
                            className="w-full h-[450px] rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.070747287109!2d77.61400571482264!3d13.031166690816812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzUyLjIiTiA3N8KwMzYnNTguMyJF!5e0!3m2!1sen!2sin!4v1602855630969!5m2!1sen!2sin"
                            aria-hidden="false"
                        ></iframe>
                    </div>
                </div>

                <div className="bg-gray-900 mt-16 rounded-t-3xl shadow-2xl">
                    <div className="container mx-auto px-4 py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                            Schedule a call with us in one click
                        </h2>
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                                <CardWithForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Choose;
