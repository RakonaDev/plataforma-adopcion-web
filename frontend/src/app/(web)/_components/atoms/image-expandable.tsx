"use client"

import { useScroll } from "@/application/hooks/useScroll"
import Image from "next/image"
import Link from "next/link"

export default function ImageExpandable({ alt, src, width, height, className, widthExpanded, heightExpanded, loading, href, notExpandable }: ImageExpandableProps) {

  const scroll = useScroll()

  if (href) {
    return (
      <Link href={href}>
        <Image 
          src={src} 
          alt={alt}  
          width={notExpandable ? width : scroll === 0 ? widthExpanded : width} 
          height={notExpandable ? height : scroll === 0 ? heightExpanded : height}
          className={`${className} transition-all duration-300 ${!notExpandable && scroll === 0 ? "cursor-pointer" : ""}`} 
          loading={loading}
        />
      </Link>
    )
  }

  return (
    <>
      <Image 
        src={src} 
        alt={alt}  
        width={notExpandable ? width : scroll === 0 ? widthExpanded : width} 
        height={notExpandable ? height : scroll === 0 ? heightExpanded : height} 
        className={`${className} transition-all duration-300 ${!notExpandable && scroll === 0 ? "cursor-pointer" : ""}`} 
        loading={loading}
      />
    </>
  )
}

interface ImageExpandableProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string

  widthExpanded?: number
  heightExpanded?: number
  
  href?: string

  loading?: "eager" | "lazy"

  notExpandable?: boolean
}