import React from 'react';
import { Star } from 'lucide-react';

const constellations = [
  {
    name: 'Órion',
    description: 'Uma das constelações mais reconhecíveis no céu noturno, representa um caçador da mitologia grega.',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a'
  },
  {
    name: 'Ursa Maior',
    description: 'Conhecida como "Grande Urso", é uma das constelações mais famosas do hemisfério norte.',
    image: 'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e'
  },
  {
    name: 'Escorpião',
    description: 'Uma das constelações do zodíaco, visível principalmente durante o verão no hemisfério sul.',
    image: 'https://images.unsplash.com/photo-1435224668334-0f82ec57b605'
  }
];

export default function Constellations() {
  return (
    <section id="constellations" className="pt-12 pb-20 bg-slate-900 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Star className="w-8 h-8 text-yellow-400 mr-3" />
          <h2 className="text-4xl font-bold text-white">Constelações</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {constellations.map((constellation) => (
            <div key={constellation.name} className="bg-slate-800 rounded-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${constellation.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{constellation.name}</h3>
                <p className="text-gray-400">{constellation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}