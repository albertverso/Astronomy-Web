import React from 'react';
import galaxy from '../assets/images/galaxy-nav.png';

export default function Navbar() {
  return (
    <nav className="sm:flex sm:justify-center bg-slate-900 text-white sm:h-20 py-4 fixed w-full top-0 z-50">
      <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row container mx-auto items-center justify-between">
        <div className="flex items-center space-x-2 gap-5">
          <img src={galaxy} alt="" width={50} />
          <span className="text-xl md:text-2xl font-bold">AstroExplorer</span>
        </div>
        <div className="flex font-bold lg:gap-10 lg:justify-end justify-center gap-6 items-center w-full">
          <a href="#constellations" className="hover:text-yellow-400 transition-colors">Constelações</a>
          <a href="#stars" className="hover:text-yellow-400 transition-colors">Estrelas</a>
          <a href="#planets" className="hover:text-yellow-400 transition-colors">Planetas</a>
        </div>
      </div>
    </nav>
  );
}