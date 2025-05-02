import { motion } from 'framer-motion';
import { useState } from 'react';


const ContactSection = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
});

const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Aquí podrías agregar lógica para enviar el formulario (por ejemplo, a un backend)
    alert('Formulario enviado. ¡Gracias por contactarnos!');
    setFormData({ name: '', email: '', message: '' });
};

return (
    <section className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-5">
        {/* Contact Information and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Contact Information */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-blue-700 mb-6">
            Contáctanos
            </h2>
            <p className="text-gray-600 mb-6">
            Estamos disponibles para responder tus preguntas y ayudarte a planificar tu próxima estadía. ¡No dudes en escribirnos!
            </p>
            <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-600">+52 123 456 7890</p>
            </div>
            <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600">contacto@landinghotel.com</p>
            </div>
            <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600">Oficina Principal: 123 Avenida del Mar, Playa del Sol, México</p>
            </div>
            </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
        >
            <h3 className="text-xl font-serif font-bold text-blue-700 mb-4">Envíanos un Mensaje</h3>
            <div
            className="space-y-4"
            onSubmit={handleSubmit}
            >
            <div>
                <label htmlFor="name" className="block text-gray-600 mb-1">Nombre</label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="Tu nombre"
                required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-600 mb-1">Correo Electrónico</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="tu@correo.com"
                required
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-gray-600 mb-1">Mensaje</label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                rows={4}
                placeholder="Escribe tu mensaje"
                required
                ></textarea>
            </div>
            <button
                onClick={handleSubmit}
                className="w-full bg-blue-700 text-white p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
                Enviar Mensaje
            </button>
            </div>
        </motion.div>
        </div>

        
    </div>
    </section>
);
};

export default ContactSection;