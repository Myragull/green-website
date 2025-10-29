"use client";

import Image from "next/image";
import { clientLogos } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Clients = () => {
  return (
    <div className="clients-section">
      {/* Inner container for content */}
      <div className="container-global">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true, el: ".swiper-pagination-clients" }}
          slidesPerView={3}
          speed={1000}
          spaceBetween={40}
          breakpoints={{
            240: { slidesPerView: 2, spaceBetween: 10 },
            340: { slidesPerView: 2, spaceBetween: 40 },
            440: { slidesPerView: 3, spaceBetween: 30 },
            540: { slidesPerView: 3, spaceBetween: 30 },
            640: { slidesPerView: 4, spaceBetween: 30 },
            750: { slidesPerView: 4, spaceBetween: 40 },
            1000: { slidesPerView: 6, spaceBetween: 50 },
            1200: { slidesPerView: 6, spaceBetween: 50 },
            1400: { slidesPerView: 6, spaceBetween: 50 },
          }}
          className="clients-swiper"
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index} className="clients-swiper-slide">
              <Image
                src={`/clients/${logo}`}
                alt={`Client ${index + 1} Logo`}
                width={100}
                height={40}
                className="clients-slide-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="swiper-pagination-clients"></div>
      </div>
    </div>
  );
};

export default Clients;
