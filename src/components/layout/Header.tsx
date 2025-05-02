import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-gradient-to-r from-gray-900 to-gray-950 shadow-lg">
      <motion.nav
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="text-white flex items-center justify-between px-5 py-3 md:px-8 md:py-4 mx-auto max-w-7xl"
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-xl font-serif font-bold text-amber-400">Landing Hotel</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm lg:text-base">
          {[
            { label: "Home", href: "/Home" },
            { label: "Habitacion", href: "/Habitacion" }, // Ruta corregida
            { label: "Ofertas", href: "/Ofertas" },
            { label: "Ubicaciones", href: "/Ubicaciones" },
            { label: "Nosotros", href: "/Nosotros" },
            { label: "Contacto", href: "/Contacto" },
          ].map(({ label, href }) => (
            <motion.li
              key={href}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <a
                href={href}
                className="font-extrabold text-gray-200 hover:text-amber-400 transition-colors duration-300"
              >
                {label}
              </a>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-amber-400"
                initial={{ width: "0%", left: "50%" }}
                whileHover={{ width: "100%", left: "0%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#book"
          className="hidden md:inline-block font-extrabold bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-amber-400 hover:text-black transition duration-300 text-sm lg:text-base"
        >
          Reservar Ahora
        </a>

        {/* Hamburger */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-200 hover:text-amber-400 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -10 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`absolute top-full left-0 w-full bg-gradient-to-r from-gray-900 to-gray-950 text-white shadow-lg mt-0 p-6 space-y-4 text-center md:hidden ${isMobileMenuOpen ? 'flex flex-col' : 'hidden'}`}
      >
        {[
          { label: "Home", href: "/Home" },
          { label: "Habitacion", href: "/Habitacion" }, // Ruta corregida
          { label: "Ofertas", href: "/Ofertas" },
          { label: "Ubicaciones", href: "/Ubicaciones" },
          { label: "Nosotros", href: "/Nosotros" },
          { label: "Contacto", href: "/Contacto" },
          { label: "Reservar Ahora", href: "/Contacto", isCTA: true },
        ].map(({ label, href, isCTA }) => (
          <motion.li key={href} whileHover={{ scale: 1.05 }} className="relative">
            <a
              href={href}
              className={`block text-base font-extrabold ${
                isCTA
                  ? 'bg-amber-400 text-gray-900 rounded-full px-4 py-2 mt-2 hover:bg-amber-500 hover:text-white transition'
                  : 'text-gray-200 hover:text-amber-400 transition-colors duration-300'
              }`}
            >
              {label}
            </a>
            {!isCTA && (
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-amber-400"
                initial={{ width: "0%" }}
                whileHover={{ width: "50%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            )}
          </motion.li>
        ))}
      </motion.ul>
    </header>
  );
};

export default Navbar;