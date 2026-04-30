import { IconType } from "react-icons"
import { FaFacebook } from "react-icons/fa"

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
  ]
}