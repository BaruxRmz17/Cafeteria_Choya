import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';

const ContactButton = () => {
  return (
    <button
      className="group flex items-center justify-start w-36 md:w-[45px] h-[45px] bg-gray-900 rounded-full overflow-hidden transition-all duration-300 md:hover:w-36 md:hover:rounded-full shadow-md relative"
    >
      {/* Ícono */}
      <div className="flex items-center justify-center w-10 pl-4 transition-all duration-300 md:group-hover:w-10 md:group-hover:pl-4">
        <PhoneIcon className="w-5 h-5 text-white" />
      </div>

      {/* Texto */}
      <span
        className="ml-2 text-white font-semibold text-sm opacity-100 md:opacity-0 md:w-0 md:absolute md:right-0 md:pr-4 md:transition-all md:duration-300 md:group-hover:w-[100px] md:group-hover:opacity-100"
      >
        Contáctanos
      </span>
    </button>
  );
};

export default ContactButton;
