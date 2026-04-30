
export interface BannerHomeItem {
  src: string
  alt: string
  title: string
  subtitle: string
}

export interface BannerHomeData {
  items: BannerHomeItem[]
}

export const bannerData: BannerHomeData = {
  items: [
    {
      src: "/banners/banner_1.jpg",
      alt: "Banner 1",
      title: "Banner 1",
      subtitle: "Subtitle 1"
    },
    {
      src: "/banners/banner_2.jpg",
      alt: "Banner 2",
      title: "Banner 2",
      subtitle: "Subtitle 2"
    }
  ]
}