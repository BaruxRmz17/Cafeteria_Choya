import { motion } from 'framer-motion';

const locations = [
{
    name: "Playa del Sol",
    description: "Disfruta de la playa y el lujo en nuestra ubicación frente al mar.",
    image: "/src/assets/Images/ub1.jpg",
    address: "123 Avenida del Mar, Playa del Sol, México",
    lat: 20.6296,
    lng: -87.0739,
    distanceToCenter: "A 5 minutos del centro",
    amenities: ["Playa privada", "Spa", "Piscina infinity"],
},
{
    name: "Ciudad Histórica",
    description: "Explora la cultura y la historia en el corazón de la ciudad.",
    image: "/src/assets/Images/ub2.jpg",
    address: "456 Calle Principal, Ciudad Histórica, México",
    lat: 19.4326,
    lng: -99.1332,
    distanceToCenter: "En el centro histórico",
    amenities: ["Tours culturales", "Restaurante gourmet", "Gimnasio"],
},
{
    name: "Montañas Verdes",
    description: "Relájate en un entorno natural rodeado de montañas y bosques.",
    image: "/src/assets/Images/ub3.jpeg",
    address: "789 Camino de la Sierra, Montañas Verdes, México",
    lat: 16.8524,
    lng: -92.6189,
    distanceToCenter: "A 15 minutos del pueblo",
    amenities: ["Senderismo", "Cabañas de lujo", "Fogata nocturna"],
},
];

const LocationsSection = () => {
return (
    <section className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-blue-700 mb-12">
        Descubre Nuestras Ubicaciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {locations.map((location, index) => (
            <motion.div
            key={location.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
            <img
                src={location.image}
                alt={location.name}
                className="w-full h-56 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-blue-700">{location.name}</h3>
                <p className="text-gray-600 mt-2">{location.description}</p>
                <p className="text-sm text-gray-500 mt-3">{location.address}</p>
                <p className="text-sm text-gray-500 mt-1">{location.distanceToCenter}</p>
                <div className="mt-3">
                <h4 className="text-sm font-semibold text-blue-700">Servicios Destacados:</h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                    {location.amenities.map((amenity, idx) => (
                    <li
                        key={idx}
                        className="text-xs text-white bg-blue-700 px-2 py-1 rounded-full"
                    >
                        {amenity}
                    </li>
                    ))}
                </ul>
                </div>
                <div className="mt-4 h-40 w-full rounded overflow-hidden">
                <iframe
                    src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="border-0"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
                <div className="mt-4 flex space-x-3">
                <a
                    href="#book"
                    className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
                >
                    Reservar Ahora
                </a>
                <a
                    href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-200 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-300 transition duration-300"
                >
                    Ver en Google Maps
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

export default LocationsSection;
