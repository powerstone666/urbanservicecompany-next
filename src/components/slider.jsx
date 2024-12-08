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
      // Array to store image URLs

  return (
    <>
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
        className="mySwiper"
      > 
        <SwiperSlide  className="flex items-center justify-center">
          <Image
            src="https://imgs.search.brave.com/b-SAIyJvEdV-RRwBiYk4szVx6WLjk5XKj34Xxf8yliM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYW5t/YXJjYXBwbGlhbmNl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8xMS9wcm8t/cmFuZ2UtY29va2lu/Zy5qcGc"
            alt="microwave oven repair"
            className=" object-cover rounded-md"
            width={860}
            height={0}
          />
        </SwiperSlide>
        <SwiperSlide  className="flex items-center justify-center">
          <Image
            src="https://imgs.search.brave.com/r5xStjdWWUkZ72vxd2YgW4yXfPdZotKrp3GJf_E1s6k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcnMu/cmVwYWlyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzEwL292/ZW4tc2VsZi1jbGVh/bmluZy5qcGc"
            alt="inner view of a microwave oven"
            className=" object-cover rounded-md"
            width={860}
            height={0}
          />
        </SwiperSlide>
        <SwiperSlide  className="flex items-center justify-center">
          <Image
            src="https://imgs.search.brave.com/nmYG04kw56yVCZJX9RNNZ3ISRD5yA9SiRfzQKFh0Qww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ndWlk/ZS1pbWFnZXMuY2Ru/LmlmaXhpdC5jb20v/aWdpL0NSWExWVGgy/MkVGSkJlaDQubWVk/aXVt"
            alt="touchpad of a microwave oven"
            className=" object-cover rounded-md"
            width={860}
            height={0}
          />
        </SwiperSlide>
        <SwiperSlide  className="flex items-center justify-center">
          <Image
            src="https://imgs.search.brave.com/OXbIYvebRLS2DCfjQ6uqfDcKxgVSbX9RIcBA3OAx-8o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ndWlk/ZS1pbWFnZXMuY2Ru/LmlmaXhpdC5jb20v/aWdpL0tENVJ4Y2cx/ZnZKWFlYSVIubWVk/aXVt"
            alt="printed circuit board (PCB) of a microwave oven"
            className=" object-cover rounded-md"
            width={860}
            height={0}
          />
        </SwiperSlide>
        <SwiperSlide  className="flex items-center justify-center">
          <Image
            src="https://imgs.search.brave.com/Sd_hl5_ZlKu_nIjMgrb-ClMBYV-NH7TzY3IWiVreUvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VhcnNob21lc2Vy/dmljZXMuY29tL2Nm/dGFzc2V0cy9ZVWFL/TFBxNTVZOEd4UlJ6/cEZ5Wm8vYzYzNWQw/ZDMxMzNlNjQwODAy/NjVlMGRlYzVjMjgz/YmEvSXNfSXRfQmV0/dGVyX3RvX1JlcGFp/cl9vcl9SZXBsYWNl/X1lvdXJfV2FzaGlu/Z19NYWNoaW5lLnBu/Zz93PTM4NDAmcT03/NQ"
            alt="washing machine repair"
            className=" object-cover rounded-md"
            width={860}
            height={0}
          />
        </SwiperSlide>
        <SwiperSlide  className="flex items-center justify-center">
          <Image
            src="https://imgs.search.brave.com/uUTLqhcKp7y7cIy-7hGLUBIPOi7GOTdEUlOE_XMLvzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by95b3VuZy1yZXBh/aXJtYW4tc2Vydmlj/ZS13b3JrZXItcmVw/YWlyaW5nLWRpc2h3/YXNoZXItYXBwbGlh/bmNlLWtpdGNoZW4t/d2hpbGUtdXNlLXNw/ZWNpYWwtdG9vbHNf/MzYyMzg5LTExMjk0/LmpwZz9zZW10PWFp/c19oeWJyaWQ"
            alt="inner view of a washing machine"
            className=" object-cover rounded-md"
            width={860}
            height={0}
          />
        </SwiperSlide>
        <SwiperSlide  className="flex items-center justify-center">
          <Image
            src="https://imgs.search.brave.com/JCfnFhlO6skNubO1QpJ5aNhwoZzJ2rR8QCKKNBQ4FZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzEyLzM2Lzg3/LzM2MF9GXzIxMjM2/ODc2MV9vSjZrRWlq/RGVxc0tsY3VVZkpo/WmdydTdTMnRKN2NC/bC5qcGc"
            alt="refrigerator repair"
            className=" object-cover rounded-md"
            width={860}
            height={0}
          />
        </SwiperSlide>
        <SwiperSlide  className="flex items-center justify-center">
          <Image
            src="https://imgs.search.brave.com/Z0no26NuHmnZvH068iM8Fa3BvCjQ4CCIKjpqSlODT5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzgwLzE3LzEw/LzM2MF9GXzI4MDE3/MTA3N19mVkcyY1JB/Tms3bG9QOVRpQ2tr/azkwVWhBb3N1NmZ6/Yy5qcGc"
            alt="inner view of a refrigerator"
            className=" object-cover rounded-md"
            width={860}
            height={0}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
