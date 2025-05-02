import React from "react";
import { Carousel, Card } from "@/src/components/ui/carrusel_ex/Carousel";

const data = [
  { category: "Desayunos", title: "Desayunos Gratis", src: "/src/assets/Images/desayunos.webp" },
  { category: "Piscina", title: "Hermosa Piscina", src: "/src/assets/Images/pisina.webp" },
  { category: "Cocteles", title: "Cocteles Exclusivos", src: "/src/assets/Images/cocteles3.avif" },
  { category: "Mar", title: "Atardeceres al Mar", src: "/src/assets/Images/mar2.webp" },
  { category: "Pet Friendly", title: "Con Mascotas", src: "/src/assets/Images/perro.webp" },
  { category: "Restaurante", title: "Gastronomía Única", src: "/src/assets/Images/restaurante.webp" },
];

export const HotelCardsCarousel = () => (
  <div className="w-full py-12">
    <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
      Nuestro <span className="text-amber-500">Hotel</span>
    </h2>
    <Carousel items={data.map((card, index) => <Card key={card.src} card={card} />)} />
  </div>
);