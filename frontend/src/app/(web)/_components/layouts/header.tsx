"use server"

import Container from "@/presentation/atoms/container";
import { headerData } from "@/shared/utils/web/data/header.data";
import Link from "next/link";
import { FaDog } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import ImageExpandable from "../atoms/image-expandable";
import Button from "../atoms/button/button";

export default async function Header() {
  return (
    <div className="w-full bg-white fixed z-50 top-0 left-0">
      <Container className="flex justify-between items-center">
        <ImageExpandable
          src={headerData.logo}
          loading="eager"
          alt="Logo"
          width={100}
          height={100}
          notExpandable={false}
          widthExpanded={160}
          heightExpanded={160}
          href="/"
        />

        <nav className="flex gap-6">
          {headerData.navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-primary font-bold transition-colors duration-300 relative group"
            >
              <MdOutlinePets
                className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-terciary opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                size={35}
              />
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="flex gap-4 h-full items-center">
          <Button
            href="/adoptar"
            className="font-bold hover:text-white"
            icon={<FaDog size={30} className="z-10 relative" />}
            spaceClassName="bg-white"
          >
            <span className="font-medium z-10 relative">Únete</span>
          </Button>

          <div className="w-1 h-full bg-gray-500"></div>
        </div>
      </Container>
    </div>
  );
}
