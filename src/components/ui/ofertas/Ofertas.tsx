import { motion } from 'framer-motion';

const offers = [
{
    title: "Escapada Romántica",
    description: "Disfruta de 2 noches con cena romántica y spa incluido para parejas.",
    image: "/src/assets/images/of1.avif",
    price: "$450",
    originalPrice: "$550",
},
{
    title: "Paquete Familiar",
    description: "3 noches para 4 personas con actividades para niños y desayuno incluido.",
    image: "/src/assets/Images/of2.webp",
    price: "$600",
    originalPrice: "$750",
},
{
    title: "Estancia de Lujo",
    description: "5 noches en suite ejecutiva con acceso VIP a todas las instalaciones.",
    image: "/src/assets/images/of3.avif",
    price: "$1200",
    originalPrice: "$1500",
},
];

const OffersSection = () => {
return (
    <section className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-blue-700 mb-12">
        Descubre Nuestras Ofertas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
            <motion.div
            key={offer.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden relative"
            >
            <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                ¡Oferta!
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-blue-700">{offer.title}</h3>
                <p className="text-gray-600 mt-2">{offer.description}</p>
                <div className="mt-4 flex items-center space-x-3">
                <p className="text-lg font-bold text-yellow-400">{offer.price}</p>
                <p className="text-sm text-gray-500 line-through">{offer.originalPrice}</p>
                </div>
                <a
                href="#book"
                className="mt-4 inline-block bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
                >
                Reservar Ahora
                </a>
            </div>
            </motion.div>
        ))}
        </div>
    </div>
    </section>
);
};

export default OffersSection;