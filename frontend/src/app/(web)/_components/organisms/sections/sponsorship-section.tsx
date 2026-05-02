import Container from "@/presentation/atoms/container";
import Tag from "@/presentation/atoms/tag";
import { FaHeart } from "react-icons/fa";
import Title from "../../atoms/title";
import { sponsorshipData } from "@/shared/utils/web/data/sponsoship.data";
import SponsorshipCard from "../../molecules/card/sponsorship-card";
import Button from "../../atoms/button/button";

export default function SponsorshipSection() {
  return (
    <>
      <section className="w-full py-20">
        <Container>
          <div className="flex flex-col items-center gap-5">
            <Tag className="py-3 px-6 font-bold">
              <FaHeart size={25} />
              <span>Apadrinamiento</span>
            </Tag>
            <Title>
              Sé el Padrino o{" "}
              <span className="text-primary">Madrina de una Mascota</span>
            </Title>
            <p className="text-lg text-gray-500">
              No puedes adoptar pero quieres hacer diferencia? El apadrinamiento
              te permite ayudar a una mascota y mantener el contacto con su
              crecimiento.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-5">
            {sponsorshipData.map((item, index) => (
              <SponsorshipCard {...item} key={index} />
            ))}
          </div>

          <p className="mt-10 text-gray-500 text-center text-lg">
            ¿Quieres conocer nuestras mascotas actuales disponibles para
            apadrinamiento?
          </p>

          <div className="flex justify-center mt-5">
            <Button href="/mascotas">Ver Mascotas para Apadrinamiento</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
