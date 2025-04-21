import logo from '../newlogo2.jpeg';
import Image from 'next/image';
import Slider from "@/components/slider";  // Add this import
export default function Microwave() {
    return (
        <>
            {/* Fixed header section - changed from blue-600 to gray-900 */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="-ml-4"> {/* Added negative margin to move logo left */}
                            <Image src={logo} alt="Urban Service Company" width={150} height={50} />
                        </div>
                        <div className="text-center flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                Microwave Oven Repair Service in Bangalore
                            </h1>
                            <p className="text-gray-300">Professional & Reliable Microwave Oven Repair at Your Doorstep</p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-extrabold text-white mb-2">Toll-Free Number:</p>
                            <a href="tel:9019349170" 
                               className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-gray-900 rounded-full hover:from-yellow-400 hover:via-amber-300 hover:to-yellow-400 transition-all duration-300 font-bold text-2xl border-2 border-yellow-300 shadow-lg hover:scale-105 transform animate-shine">
                                <span className="scale-110">9019349170</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add padding to prevent content from hiding under fixed header */}
            <div className="pt-48">
                {/* New banner section */}
                <div className="w-full bg-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                                <img 
                                    src="/images/microwave-repair-1.jpg" 
                                    alt="Microwave Repair Service"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                    <h3 className="text-lg font-semibold">Professional Repair Service</h3>
                                </div>
                            </div>
                            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                                <img 
                                    src="/images/microwave-repair-2.jpg" 
                                    alt="Expert Technicians"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                    <h3 className="text-lg font-semibold">Expert Technicians</h3>
                                </div>
                            </div>
                            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                                <img 
                                    src="/images/microwave-repair-3.jpg" 
                                    alt="Quick Service"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                    <h3 className="text-lg font-semibold">Same Day Service</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Slider Section */}
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

                {/* About Section */}
                <div className="w-full bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold mb-6">About Our Microwave Oven Repair Service</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We are Bangalore's trusted microwave oven repair service provider with over 10 years of experience. Our team of certified technicians specializes in all types of microwave oven repairs and maintenance services.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3">Our Services</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Display repair and replacement</li>
                                        <li>• Magnetron replacement</li>
                                        <li>• Door switch repairs</li>
                                        <li>• Control panel repairs</li>
                                        <li>• Heating issues resolution</li>
                                    </ul>
                                </div>
                                
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• 90-day service warranty</li>
                                        <li>• Experienced technicians</li>
                                        <li>• Genuine spare parts</li>
                                        <li>• Transparent pricing</li>
                                        <li>• Same-day service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="w-full bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                        <div className="max-w-3xl space-y-4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">How much does microwave oven repair cost?</h3>
                                <p className="text-gray-600">The cost depends on the issue. Basic repairs start from ₹500. We provide exact quotes after inspection.</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">How long does the repair service take?</h3>
                                <p className="text-gray-600">Most repairs are completed within 1-2 hours. Complex issues might take longer.</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you provide warranty on repairs?</h3>
                                <p className="text-gray-600">Yes, we offer 90 days warranty on all repair services and replaced parts.</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you service all microwave oven brands?</h3>
                                <p className="text-gray-600">Yes, we service all major brands including Samsung, LG, IFB, Panasonic, and more.</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Is same-day service available?</h3>
                                <p className="text-gray-600">Yes, we offer same-day service in most areas of Bangalore.</p>
                            </div>
            
                        </div>
                    </div>
                    
                </div>

                {/* Contact Footer Section - changed from blue-800 to gray-900 and blue-700 to gray-800 */}
                <div className="w-full bg-gray-900 text-white py-8"> {/* Changed py-12 to py-8 */}
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2> {/* Reduced text size and margin */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Reduced gap */}
                                <div className="text-center bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"> {/* Reduced padding */}
                                    <div className="mb-2"> {/* Reduced margin */}
                                        <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20"> {/* Reduced icon size */}
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Call Us</h3> {/* Reduced text and margin */}
                                    <a href="tel:9019349170" className="text-lg hover:text-gray-200 transition-colors">
                                        +91 9019349170
                                    </a>
                                </div>
                                
                                <div className="text-center bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                                    <div className="mb-2">
                                        <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                                    <a href="mailto:info@urbanservicecompany.me" className="text-lg hover:text-gray-200 break-all transition-colors">
                                        info@urbanservicecompany.me
                                    </a>
                                </div>
                                
                                <div className="text-center bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                                    <div className="mb-2">
                                        <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                                    <p className="text-lg">Bangalore,<br/>Karnataka, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}