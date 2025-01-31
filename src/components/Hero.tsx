import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba")',
          filter: 'brightness(0.5)'
        }}
      />
      <div className="z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Explore o Universo</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Descubra as maravilhas do cosmos, das constelações ancestrais aos 
          planetas misteriosos do nosso sistema solar.
        </p>
      </div>
    </div>
  );
}