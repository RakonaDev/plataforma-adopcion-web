"use client"

import { SwiperSlide } from "swiper/react";

export default function SwiperUIItem({ children, className }: SwiperUIItemProps) {
  return (
    <>
      <SwiperSlide className={className}>
        {children}
      </SwiperSlide>
    </>
  )
}

export interface SwiperUIItemProps {
  children: React.ReactNode;
  className?: string;
}
