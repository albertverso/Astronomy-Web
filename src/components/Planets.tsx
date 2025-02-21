import React from 'react';
import { Plane as Planet } from 'lucide-react';
import  marte  from '../assets/images/marte-planet.png';
import netuno from '../assets/images/netuno-planet.png';
import jupiter from '../assets/images/jupiter-planet.png';
import saturno from '../assets/images/saturno-planet.png';
import urano from '../assets/images/urano-planet.png';
import venus from '../assets/images/venus-planet.png';
import terra from '../assets/images/terra-planet.png';
import mercurio from '../assets/images/mercurio-planet.png';
import planetsIcon from '../assets/images/planets.png';


const planets = [
  {
    name: 'Marte',
    description: 'O Planeta Vermelho, conhecido por suas características semelhantes à Terra.',
    distance: '225 milhões km',
    diameter: '6.779 km',
    icon: marte
  },
  {
    name: 'Júpiter',
    description: 'O maior planeta do Sistema Solar, com suas icônicas faixas de nuvens.',
    distance: '778 milhões km',
    diameter: '139.820 km',
    icon: jupiter,
  },
  {
    name: 'Saturno',
    description: 'Famoso por seus belos anéis, é o segundo maior planeta do Sistema Solar.',
    distance: '1,4 bilhão km',
    diameter: '116.460 km',
    icon: saturno,
  },
  {
    name: 'Mercúrio',
    description: 'O menor e mais interno planeta do Sistema Solar, sem atmosfera significativa.',
    distance: '57,9 milhões km',
    diameter: '4.880 km',
    icon: mercurio
  },
  {
    name: 'Vênus',
    description: 'O planeta mais quente do Sistema Solar, com uma atmosfera densa de dióxido de carbono.',
    distance: '108,2 milhões km',
    diameter: '12.104 km',
    icon: venus,
  },
  {
    name: 'Terra',
    description: 'Nosso lar, o único planeta conhecido por abrigar vida.',
    distance: '149,6 milhões km',
    diameter: '12.742 km',
    icon: terra,
  },
  {
    name: 'Urano',
    description: 'Um gigante gasoso que gira de lado, com uma atmosfera rica em metano.',
    distance: '2,87 bilhões km',
    diameter: '50.724 km',
    icon: urano,
  },
  {
    name: 'Netuno',
    description: 'O planeta mais distante do Sol, conhecido por seus ventos supersônicos.',
    distance: '4,5 bilhões km',
    diameter: '49.244 km',
    icon: netuno,
  },
];

export default function Planets() {
  return (
    <section id="planets" className="py-12 bg-slate-900 scroll-mt-20">
      <div className="container mx-auto px-8 lg:px-4 ">
        <div className="flex items-center justify-center mb-12 gap-5">
          <img src={planetsIcon} alt="" width={70}/>
          <h2 className="text-4xl font-bold text-white">Planetas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planets.map((planet) => (
            <div key={planet.name} className="bg-slate-700 rounded-lg p-6 hover:scale-105 transition-transform duration-300 hover:border-yellow-400 hover:border">
              <div className='flex flex-row items-center text-center justify-between mb-5'>
                <h3 className="text-2xl font-bold text-white">{planet.name}</h3>
                <img src={planet.icon} width={40} alt=""/>
              </div>
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
