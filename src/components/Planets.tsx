import React from 'react';
import { Plane as Planet } from 'lucide-react';

const planets = [
  {
    name: 'Marte',
    description: 'O Planeta Vermelho, conhecido por suas características semelhantes à Terra.',
    distance: '225 milhões km',
    diameter: '6.779 km'
  },
  {
    name: 'Júpiter',
    description: 'O maior planeta do Sistema Solar, com suas icônicas faixas de nuvens.',
    distance: '778 milhões km',
    diameter: '139.820 km'
  },
  {
    name: 'Saturno',
    description: 'Famoso por seus belos anéis, é o segundo maior planeta do Sistema Solar.',
    distance: '1,4 bilhão km',
    diameter: '116.460 km'
  }
];

export default function Planets() {
  return (
    <section id="planets" className="pt-12 pb-20 lg:pb-40 bg-slate-800 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Planet className="w-8 h-8 text-yellow-400 mr-3" />
          <h2 className="text-4xl font-bold text-white">Planetas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planets.map((planet) => (
            <div key={planet.name} className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-3">{planet.name}</h3>
              <p className="text-gray-300 mb-4">{planet.description}</p>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <span className="font-semibold">Distância do Sol:</span> {planet.distance}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Diâmetro:</span> {planet.diameter}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}