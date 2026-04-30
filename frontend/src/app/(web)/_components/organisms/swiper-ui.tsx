"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";

import { AutoplayOptions, NavigationOptions } from "swiper/types";

export default function SwiperUI<T>({
  data,
  renderItem,
  slideClassName,
  spaceBetween = 30,
  slidesPerView = 1,
  navigation = true,
  autoplay = { delay: 3000, disableOnInteraction: false },
}: SwiperUIProps<T>) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigation}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, hide: true }}
        autoplay={autoplay}
        loop={true}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={slideClassName}>
            {renderItem(item, index)} {/* 👈 tú decides el componente */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

interface SwiperUIProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slideClassName?: string;
  spaceBetween?: number;
  slidesPerView?: number;
  navigation?: boolean | NavigationOptions | undefined;
  autoplay?: boolean | AutoplayOptions | undefined;
}
