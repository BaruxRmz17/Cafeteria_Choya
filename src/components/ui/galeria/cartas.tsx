
type Card = {
  id: number;
  content: { title: string; description: string };
  className: string;
  thumbnail: string;
};

export const Cartas: Card[] = [
  {
    id: 1,
    content: {
      title: "La Mejor Coctelería",
      description: "Una experiencia única en cocteles.",
    },
    className: "md:col-span-2 h-96",
    thumbnail: "src/assets/Images/cocteles2.webp",
  },
  {
    id: 2,
    content: {
      title: "Los mejores lugares para divertirse",
      description: "Tenemos una gran variedad de lugares para pasar noches increibles.",
    },
    className: "col-span-1 h-96",
    thumbnail: "src/assets/Images/antro.webp",
  },
  {
    id: 3,
    content: {
      title: "Spa Relajante",
      description: "Relajate y disfruta con nuestros servicios de spa.",
    },
    className: "col-span-1 h-96",
    thumbnail: "src/assets/Images/spa.webp",
  },
  {
    id: 4,
    content: {
      title: "Atarde de Sol",
      description: "Disfruta de una vista espectacular.",
    },
    className: "md:col-span-2 h-96",
    thumbnail: "src/assets/Images/mar.webp",
  },
];