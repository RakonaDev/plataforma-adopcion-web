import Container from "@/presentation/atoms/container";
import Title from "../../atoms/title";

export default function PetsSection() {
  return (
    <section className="w-full py-10 pt-20 bg-gray-50">
      <Container>
        <Title htmlTag="h2" className="text-center mb-5 text-slate-800">
          Nuestras Mascotas{" "}
          <span className="text-primary">Esperando un Hogar</span>
        </Title>
        <p className="text-gray-500 text-center text-lg">
          Conoce a los adorables compañeros que están listos para cambiar sus
          vidas. Cada uno tiene una historia única y mucho amor para dar.
        </p>

        <div>
          
        </div>
      </Container>
    </section>
  );
}
