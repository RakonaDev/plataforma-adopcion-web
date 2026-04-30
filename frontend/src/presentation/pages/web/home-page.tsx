"use client"

import BannerHome from "@/app/(web)/_components/atoms/banner/banner-home";
import SwiperUI from "@/app/(web)/_components/organisms/swiper-ui";
import { bannerData, BannerHomeItem } from "@/shared/utils/web/data/banner.data";

export default function HomePage() {
  return (
    <>
      <SwiperUI<BannerHomeItem>
        data={bannerData.items}
        renderItem={(item) => <BannerHome item={item} imgClassName="brightness-50" />}
      />

      <div>
        Hola
      </div>
    </>
  );
}
