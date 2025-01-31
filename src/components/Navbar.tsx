import React from 'react';
import { Star, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sm:flex sm:justify-center bg-slate-900 text-white sm:h-20 p-4 fixed w-full top-0 z-50">
      <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row container mx-auto items-center justify-between">
        <div className="flex items-center space-x-2">
          <Star className="w-6 h-6 text-yellow-400" />
          <span className="text-xl font-bold">AstroExplorer</span>
        </div>
        <div className="flex space-x-6">
          <a href="#constellations" className="hover:text-yellow-400 transition-colors">Constelações</a>
          <a href="#stars" className="hover:text-yellow-400 transition-colors">Estrelas</a>
          <a href="#planets" className="hover:text-yellow-400 transition-colors">Planetas</a>
        </div>
      </div>
    </nav>
  );
}