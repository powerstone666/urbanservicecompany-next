'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <style jsx global>{`
        .swiper {
          width: 100%;
          height: 100%;
          margin: 0;
        }
        
        .swiper-slide {
          width: 100%;
          height: 100%;
          padding: 0;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(0, 0, 0, 0.5);
          width: 35px !important;
          height: 35px !important;
          border-radius: 50%;
          cursor: pointer;
        }
        
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px !important;
        }

        .swiper-pagination-bullet {
          background: white !important;
          cursor: pointer;
        }
      `}</style>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper w-full h-full"
      > 
        <SwiperSlide className="w-full h-full cursor-pointer">
          <div className="relative w-full h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1664515730165-44c4fbb3f45b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="professional appliance repair service"
              className="object-cover"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full cursor-pointer">
          <div className="relative w-full h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1570222094114-d054a817e56b"
              alt="washing machine repair service"
              className="object-cover"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full cursor-pointer">
          <div className="relative w-full h-[400px]">
            <Image
              src="https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="refrigerator maintenance"
              className="object-cover"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full cursor-pointer">
          <div className="relative w-full h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
              alt="appliance technician at work"
              className="object-cover"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full cursor-pointer">
          <div className="relative w-full h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1638949493140-edb10b7be2f3?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="modern kitchen appliances"
              className="object-cover"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full cursor-pointer">
          <div className="relative w-full h-[400px]">
            <Image
              src="https://plus.unsplash.com/premium_photo-1664443944751-fe44a3ec3924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1664443944751-fe44a3ec3924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="appliance diagnostic service"
              className="object-cover"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full cursor-pointer">
          <div className="relative w-full h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="modern home appliances"
              className="object-cover"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full cursor-pointer">
          <div className="relative w-full h-[400px]">
            <Image
              src="https://plus.unsplash.com/premium_photo-1667520172423-fb404a06100a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="professional repair service"
              className="object-cover"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
