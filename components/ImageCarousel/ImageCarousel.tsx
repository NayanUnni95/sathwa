"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const ImageCarousel = ({
  imgSet,
  dir,
  animation,
}: {
  imgSet: string[];
  dir: string;
  animation: boolean;
}) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: animation ? 2500 : undefined }}
        speed={1500}
        loop={true}
        dir={dir}
      >
        {imgSet.map((img) => {
          return (
            <SwiperSlide key={img}>
              <Image
                src={img}
                width={100}
                height={100}
                alt={`Slide ${img}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
