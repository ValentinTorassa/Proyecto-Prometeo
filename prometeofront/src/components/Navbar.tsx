import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  return (
<nav className="absolute top-0 w-full p-4 bg-black bg-opacity-30 backdrop-blur-md z-50 shadow-md flex justify-between items-center px-6">
<Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Prometeo Logo" className="w-10 h-10 object-contain" />
        <span className="text-gray-600 font-bold text-2xl hidden md:block">Prometeo</span>
      </Link>

      <div className="flex gap-6">
        <Link
          to="/"
          className="text-purple-700 text-lg transition-colors flex items-center gap-1"
        >
          📚 Inicio
        </Link>
        <Link
          to="/upload"
          className="text-purple-700 text-lg transition-colors flex items-center gap-1"
        >
          📤 Subir
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
