import { motion } from 'framer-motion';

const historyImages = [
{
    src: "/src/assets/Images/no2.webp",
    alt: "Primer hotel en 1995",
    caption: "Nuestra primera propiedad en 1995, un pequeño refugio familiar.",
},
{
    src: "/src/assets/Images/no1.avif",
    alt: "Expansión en 2010",
    caption: "Expansión en 2010 con un diseño moderno y sostenible.",
},
{
    src: "/src/assets/Images/no3.webp",
    alt: "Reconocimiento en 2020",
    caption: "Recibiendo un premio a la excelencia en 2020.",
},
];

const AboutSection = () => {
return (
    <section className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-5">
        {/* Introduction */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
        >
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-blue-700 mb-4">
            Nuestra Historia
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
            Landing Hotel comenzó como un sueño familiar en 1995, con la visión de ofrecer una experiencia única de hospitalidad. Hoy, con ubicaciones en destinos impresionantes, seguimos comprometidos con brindar lujo, confort y momentos inolvidables a nuestros huéspedes.
        </p>
        </motion.div>

        {/* Detailed History Section */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
        >
        <h3 className="text-2xl md:text-4xl font-serif font-bold text-center text-blue-700 mb-8">
            Un Viaje a Través del Tiempo
        </h3>
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
            <img
                src={historyImages[0].src}
                alt={historyImages[0].alt}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
                <h4 className="text-xl font-serif font-bold text-blue-700 mb-2">Los Inicios: 1995</h4>
                <p className="text-gray-600">
                Landing Hotel abrió sus puertas en 1995 como un pequeño refugio familiar en Playa del Sol. Con solo 10 habitaciones, nuestro objetivo era ofrecer un lugar acogedor donde los huéspedes pudieran desconectar y disfrutar de la naturaleza. Este humilde comienzo marcó el inicio de nuestra pasión por la hospitalidad.
                </p>
                <p className="text-gray-500 mt-2 italic">{historyImages[0].caption}</p>
            </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <img
                src={historyImages[1].src}
                alt={historyImages[1].alt}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
                <h4 className="text-xl font-serif font-bold text-blue-700 mb-2">Expansión: 2010</h4>
                <p className="text-gray-600">
                En 2010, dimos un gran paso con la apertura de nuestra segunda propiedad en Ciudad Histórica. Incorporamos un diseño moderno y sostenible, utilizando materiales ecológicos y tecnologías de ahorro de energía. Este hito nos permitió llegar a más viajeros y establecer nuestra reputación en el sector hotelero.
                </p>
                <p className="text-gray-500 mt-2 italic">{historyImages[1].caption}</p>
            </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
            <img
                src={historyImages[2].src}
                alt={historyImages[2].alt}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
                <h4 className="text-xl font-serif font-bold text-blue-700 mb-2">Reconocimiento: 2020</h4>
                <p className="text-gray-600">
                Para 2020, Landing Hotel fue reconocido con el Premio a la Excelencia en Hospitalidad por nuestra dedicación a la calidad y el servicio. Este logro nos motivó a seguir innovando, abriendo una tercera ubicación en Montañas Verdes y consolidándonos como un referente en el turismo de lujo.
                </p>
                <p className="text-gray-500 mt-2 italic">{historyImages[2].caption}</p>
            </div>
            </div>
        </div>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
        >
            <h3 className="text-xl font-serif font-bold text-blue-700 mb-2">Misión</h3>
            <p className="text-gray-600">
            Crear experiencias excepcionales que combinen lujo, confort y un servicio personalizado para cada huésped.
            </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
        >
            <h3 className="text-xl font-serif font-bold text-blue-700 mb-2">Visión</h3>
            <p className="text-gray-600">
            Ser el hotel líder en hospitalidad, reconocido por nuestra calidad, innovación y compromiso con la sostenibilidad.
            </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
        >
            <h3 className="text-xl font-serif font-bold text-blue-700 mb-2">Valores</h3>
            <p className="text-gray-600">
            Integridad, pasión, respeto y excelencia en cada detalle de nuestra operación.
            </p>
        </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
        >
        <h3 className="text-2xl font-serif font-bold text-blue-700 mb-4">
            Únete a la Experiencia Landing Hotel
        </h3>
        <a
            href="#book"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300 text-lg"
        >
            Reserva Ahora
        </a>
        </motion.div>
    </div>
    </section>
);
};

export default AboutSection;