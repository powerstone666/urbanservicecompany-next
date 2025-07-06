import Image from "next/image";
import microwave from "urbanservicecompany-next/public/microwave.jpg";
import washing from "urbanservicecompany-next/public/washing_machine.jpg";
import filter from "urbanservicecompany-next/public/water_purifier.jpg";
import refrigerator from "urbanservicecompany-next/public/refrigerator.jpg";
import chimney from "urbanservicecompany-next/public/chimney.jpg";

const services = [
  { image: microwave, title: "Microwave Oven Repair" },
  { image: washing, title: "Washing Machine Repair" },
  { image: filter, title: "Water Purifier Repair" },
  { image: refrigerator, title: "Refrigerator Repair" },
  { image: `https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, title: "AC Repair" },
  { image: chimney, title: "Chimney and Hob Repair" }
];

export default function Services() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-white py-16" id="services">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold [text-wrap:balance] animate-fade-in-down">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-700 to-violet-800 bg-clip-text text-transparent">
            Our Services
          </span>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-violet-800 mx-auto mt-4 rounded-full"></div>
        </h1>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="aspect-w-16 aspect-h-12 relative h-80">
                  <Image
                    src={service.image}
                    alt={`${service.title} in Bangalore`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h2 className="font-poppins font-semibold text-xl text-[#111827]">
                    {service.title}     
                    <span className="block text-sm font-normal mt-2 text-gray-600">
                      in Bangalore    <a href="tel:+919019349170" className="pt-4">
                                        <span className="w-full px-8 py-3 text-lg font-roboto font-bold text-white rounded-full 
                                          bg-gradient-to-r from-blue-600 to-purple-600
                                          transition-all duration-300 
                                          hover:from-blue-700 hover:to-purple-700 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] 
                                          hover:scale-105 transform active:scale-95">
                                          Call Now
                                        </span>
                                      </a>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
