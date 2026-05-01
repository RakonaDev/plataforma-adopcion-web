import Container from "@/presentation/atoms/container";

export default function PetsSection() {
  return (
    <section className="w-full py-10 pt-20 bg-gray-200">
      <Container>
        <h2 className="font-bold text-center mb-5 text-slate-800 text-5xl">
          Nuestras Mascotas{" "}
          <span className="text-primary">Esperando un Hogar</span>
        </h2>
        <p className="text-gray-500 text-center text-lg">
          Conoce a los adorables compañeros que están listos para cambiar sus
          vidas. Cada uno tiene una historia única y mucho amor para dar.
        </p>

        <div></div>
      </Container>
    </section>
  );
}
