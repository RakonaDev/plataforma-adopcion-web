import { BannerHomeItem } from "@/shared/utils/web/data/banner.data"

export default function BannerHome({ item, className, imgClassName }: BannerHomeProps) {
  return (
    <div className={`w-full h-screen relative ${className}`}>
      <img src={item.src} alt={item.alt} className={`w-full h-full object-cover ${imgClassName}`} />
      <h1>{item.title}</h1>
      <p>{item.subtitle}</p>
    </div>
  )
}

interface BannerHomeProps {
  item: BannerHomeItem
  className?: string
  imgClassName?: string
} 