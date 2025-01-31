import React from 'react';
import { Sun } from 'lucide-react';

const stars = [
  {
    name: 'Sirius',
    description: 'A estrela mais brilhante do céu noturno, localizada na constelação do Cão Maior.',
    type: 'Estrela Binária',
    distance: '8,6 anos-luz'
  },
  {
    name: 'Betelgeuse',
    description: 'Uma supergigante vermelha na constelação de Órion, uma das maiores estrelas conhecidas.',
    type: 'Supergigante Vermelha',
    distance: '642,5 anos-luz'
  },
  {
    name: 'Vega',
    description: 'Uma das estrelas mais brilhantes do hemisfério norte, na constelação de Lira.',
    type: 'Estrela da Sequência Principal',
    distance: '25 anos-luz'
  }
];

export default function Stars() {
  return (
    <section id="stars" className="pt-12 pb-20 bg-slate-950 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Sun className="w-8 h-8 text-yellow-400 mr-3" />
          <h2 className="text-4xl font-bold text-white">Estrelas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stars.map((star) => (
            <div key={star.name} className="bg-slate-900 rounded-lg p-6 border border-yellow-400/20">
              <h3 className="text-2xl font-bold text-white mb-3">{star.name}</h3>
              <p className="text-gray-300 mb-4">{star.description}</p>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <span className="font-semibold">Tipo:</span> {star.type}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Distância da Terra:</span> {star.distance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}