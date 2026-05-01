import Container from "@/presentation/atoms/container";
import { adoptInfoData } from "@/shared/utils/web/data/adopt-info.data";
import AdoptInfoCard from "../../molecules/card/adopt-info-card";
import { GiCheckMark } from "react-icons/gi";
import Title from "../../atoms/title";

export default function AdoptProccess() {
  return (
    <section className="py-20 w-full bg-secondary/10">
      <Container>
        <Title htmlTag="h2" className="mb-5 font-bold text-center">
          Proceso de <span className="text-primary">Adopción Simple</span>
        </Title>
        <p className="text-gray-500 text-center text-lg">
          Te guiaremos a través de cada paso para asegurar una adopción exitosa
          y feliz.
        </p>

        <div className="flex mt-10 items-stretch">
          {adoptInfoData.map((item, index) => (
            <div key={index} className="flex items-stretch">
              <div className="flex-1">
                <AdoptInfoCard
                  Icon={item.Icon}
                  title={item.title}
                  description={item.description}
                  phaseText={item.phaseText}
                />
              </div>

              {index < adoptInfoData.length - 1 && (
                <div className="flex items-center px-2">
                  <div className="w-7 border-t-4 border-secondary rounded-lg"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-10 border-t-[0.5px] border-slate-400/50 mt-10 flex gap-5 items-stretch">
          <div className="w-full">
            <span className="text-3xl font-bold text-terciary">100%</span>
            <Title htmlTag="h3" className="mt-3 text-lg text-gray-700 font-medium">Acompañamiento Post-Adopción</Title>
            <p className="mt-3 text-base text-gray-500">Te brindamos seguimiento completo durante el primer mes.</p>
          </div>
          
          <div className="w-full">
            <GiCheckMark size={36} className="text-terciary" />
            <Title htmlTag="h3" className="mt-3 text-lg text-gray-700 font-medium">Revisión Médica Completa</Title>
            <p className="mt-3 text-base text-gray-500">Todas nuestras mascotas están vacunadas y revisadas.</p>
          </div>

          <div className="w-full">
            <span className="text-3xl font-bold text-terciary">24/7</span>
            <Title htmlTag="h3" className="mt-3 text-lg text-gray-700 font-medium">Soporte Disponible</Title>
            <p className="mt-3 text-base text-gray-500">Responderemos tus preguntas cuando las necesites.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
