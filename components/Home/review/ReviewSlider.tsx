"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { reviewData } from "@/data/data";
import React, { createContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const ReviewSlider = () => {
  return (
    <div className="flex justify-center">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full max-w-md h-[350px] md:h-[400px]"
      >
        {reviewData.map((data) => (
          <SwiperSlide
            key={data.id}
            className="bg-white rounded-3xl flex items-center justify-center p-5 shadow-lg"
          >
            <div className="w-[80%] mx-auto mt-16">
              <p className="text-xs sm:text-sm md:text-base font-semibold">
                {data.review}
              </p>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-600 md:w-6 md:h-6 w-3 h-3"
                  />
                ))}
              </div>
              <div className="mt-10">
                <div className="flex items-center space-x-4">
                  <Image src={data.image} width={60} height={60} alt="client" className="rounded-full" />
                  <div>
                    <p className="text-sm sm:text-lg font-semibold">{data.name}</p>
                    <p className="text-gray-600 text-xs sm:text-base">Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;