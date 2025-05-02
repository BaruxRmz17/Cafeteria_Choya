import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const rooms = [
  {
    title: "Habitación Deluxe",
    description: "Una experiencia de lujo con vistas al mar y comodidades premium.",
    image: "/src/assets/images/hab1.webp",
    price: "$250/noche",
  },
  {
    title: "Suite Ejecutiva",
    description: "Espaciosa y elegante, perfecta para viajeros de negocios.",
    image: "/src/assets/images/hab2.webp",
    price: "$350/noche",
  },
  {
    title: "Habitación Familiar",
    description: "Ideal para familias, con espacio adicional y diversión garantizada.",
    image: "/src/assets/images/hab3.webp",
    price: "$200/noche",
  },
];

const RoomsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-center text-gray-900 mb-6">
          Habitaciones exclusivas
        </h2>
        <p className="text-lg text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Descubre el confort y la elegancia de nuestras estancias, diseñadas para ofrecerte la mejor experiencia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200"
            >
              <div className="relative group">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/80 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow backdrop-blur">
                  {room.price}
                </span>
              </div>
              <div className="p-6 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{room.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {room.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#book"
                    className="flex-1 inline-flex items-center justify-center bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-200 text-sm font-medium"
                  >
                    Reservar Ahora
                  </a>
                  <a
                    href="#details"
                    className="flex items-center gap-1 text-blue-700 hover:text-blue-900 text-sm font-medium transition duration-200"
                  >
                    Ver más <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
