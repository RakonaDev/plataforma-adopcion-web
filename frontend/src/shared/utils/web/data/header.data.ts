import { IconType } from "react-icons"
import { BsPaypal } from "react-icons/bs"
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"

interface HeaderData {
  logo: string
  navLinks: { name: string, href: string }[]
  infoLinks: { name: string, href: string, icon: IconType }[]
}

export const headerData: HeaderData = {
  logo: "/logo.png",
  navLinks: [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Mascotas", href: "/mascotas" },
    { name: 'Voluntariado', href: '/voluntariado' },
    { name: "Donaciones", href: "/donaciones" },
  ],
  infoLinks: [
    { name: "Facebook", href: "https://www.facebook.com/adoptasalvavidas.pe?locale=es_LA", icon: FaFacebook },
    { name: "Whatsapp", href: "https://api.whatsapp.com/send?phone=51955288116", icon: FaWhatsapp },
    { name: "Instagram", href: "https://www.instagram.com/Albergue.adoptasalvavidas", icon: FaInstagram },
    { name: "Tiktok", href: "https://www.tiktok.com/@adopta.salvavidas", icon: FaTiktok },
    { name: "Paypal", href: "https://www.paypal.com/paypalme/julyavelino", icon: BsPaypal }
  ]
}