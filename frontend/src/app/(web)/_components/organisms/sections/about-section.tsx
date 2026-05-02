import Container from "@/presentation/atoms/container";
import Title from "../../atoms/title";
import { MdPets } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

export default function AboutSection() {
  return (
    <>
    
      <section className="py-10 w-full bg-gray-50">
        <Container>
          <Title htmlTag="h2" className="text-center">
            Sobre Adopta <span className="text-primary">Salva Vidas</span>
          </Title>
          <p className="mt-5 text-center text-lg text-gray-500">Somos una organización sin fines de lucro dedicada a rescatar, rehabilitar y encontrar hogares amorosos para mascotas necesitadas.</p>

          <div className="w-full flex gap-5 items-stretch mt-20">
            <div className="flex-1 space-y-4">
              <Title htmlTag="h3" className="text-primary! flex gap-2 items-center">
                <MdPets className="text-terciary" />
                <span>Nuestra Misión</span>
              </Title>

              <p className="text-gray-500">Albergue Salva Vidas nació del amor genuino por los animales abandonados. Nuestro objetivo es simple pero poderoso: darle una segunda oportunidad a cada mascota que entra por nuestras puertas.</p>
              
              <Title htmlTag="h3" className="text-primary! flex gap-2 items-center">
                <MdPets className="text-terciary" />
                <span>Lo Que Hacemos</span>
              </Title>
              <ul className="space-y-2 ps-3">
                <li className="flex gap-2 items-center text-gray-500">
                  <FaCheck className="text-green-500" />
                  <span>Rescatamos mascotas de situaciones difíciles</span>
                </li>
                <li className="flex gap-2 items-center text-gray-500">
                  <FaCheck className="text-green-500" />
                  <span>Proporcionamos atención médica completa y cuidado</span>
                </li>
                <li className="flex gap-2 items-center text-gray-500">
                  <FaCheck className="text-green-500" />
                  <span>Capacitamos a las mascotas para sus nuevos hogares</span>
                </li>
                <li className="flex gap-2 items-center text-gray-500">
                  <FaCheck className="text-green-500" />
                  <span>Conectamos familias amorosas con sus compañeros perfectos</span>
                </li>
                <li className="flex gap-2 items-center text-gray-500">
                  <FaCheck className="text-green-500" />
                  <span>Ofrecemos seguimiento post-adopción por vida</span>
                </li>
              </ul>

              <Title htmlTag="h3" className="text-primary! flex gap-2 items-center">
                <MdPets className="text-terciary" />
                <span>Redes Sociales</span>
              </Title>

              <div>
                
              </div>
            </div>

            <div className="flex-1"> 
              <img src="/home/about/albergue.jpg" alt="albergue" className="rounded-lg border-4 border-terciary ring-2 ring-quaternary" />
            </div>
          </div>    
        </Container>
      </section>
    </>
  )
}