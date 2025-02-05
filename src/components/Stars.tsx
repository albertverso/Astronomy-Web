import React from 'react';
import { Sun } from 'lucide-react';
import star from '../assets/images/star.png';

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
  },
  {
    name: 'Polaris (Estrela Polar)',
    description: 'Localizada na constelação de Ursa Menor, é a estrela que indica o norte.',
    type: 'Estrela da Sequência Principal',
    distance: '323 anos-luz'
  },
  {
    name: 'Alpha Centauri',
    description: 'O sistema estelar mais próximo do nosso, composto por três estrelas, sendo a Alpha Centauri A a mais brilhante.',
    type: 'Estrela Binária (com Alpha Centauri A e B)',
    distance: '4,37 anos-luz'
  },
  {
    name: 'Antares',
    description: 'Uma supergigante vermelha na constelação de Escorpião, uma das estrelas mais luminosas.',
    type: 'Supergigante Vermelha',
    distance: '550 anos-luz'
  },
  {
    name: 'Arcturus',
    description: 'Uma gigante vermelha localizada na constelação de Boötes, uma das estrelas mais brilhantes no céu noturno.',
    type: 'Gigante Vermelha',
    distance: '36,7 anos-luz'
  },
  {
    name: 'Altair',
    description: 'Uma estrela da sequência principal, situada na constelação de Águia.',
    type: 'Estrela da Sequência Principal',
    distance: '16,7 anos-luz'
  },
  {
    name: 'Rigel',
    description: 'Uma supergigante azul na constelação de Órion, uma das estrelas mais luminosas do céu.',
    type: 'Supergigante Azul',
    distance: '860 anos-luz'
  },
  {
    name: 'Sol',
    description: 'A estrela mais próxima da Terra, responsável por fornecer luz e energia ao nosso sistema solar.',
    type: 'Anã Amarela',
    distance: '0 anos-luz (está na Terra!)'
  }
];


export default function Stars() {
  return (
    <section id="stars" className="pt-12 pb-20 bg-slate-950 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12 gap-5">
          <img src={star} alt="" width={70} />
          <h2 className="text-4xl font-bold text-white">Estrelas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stars.map((star) => (
            <div key={star.name} className="bg-slate-900 rounded-lg p-6 border hover:scale-105 transition-transform duration-300 hover:border-yellow-400 hover:border">
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