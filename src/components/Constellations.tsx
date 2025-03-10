import React from 'react';
import constellation from '../assets/images/constelacao.png';
import { useNasaAPOD } from "../hooks/useNasa";

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
  }, 
  {
    name: 'Ursa Menor',
    description: 'Lar da Estrela Polar, usada para navegação há séculos.',
    image: 'https://images.unsplash.com/photo-1442876906995-6761040d1f0b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Cassiopéia',
    description: 'Famosa por sua forma de "W" no céu noturno.',
    image: 'https://images.unsplash.com/photo-1630236605698-fe5a881a88b7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Leão',
    description: 'Uma constelação do zodíaco que se assemelha a um leão.',
    image: 'https://cdn.esahubble.org/archives/images/screen/heic0717c.jpg'
  },
  {
    name: 'Touro',
    description: 'Outra constelação do zodíaco, conhecida pelo aglomerado estelar das Plêiades.',
    image: 'https://images.unsplash.com/photo-1649851565677-39e7d69c4731?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Gêmeos',
    description: 'Representa os gêmeos Castor e Pólux, sendo também uma constelação do zodíaco.',
    image: 'https://images.unsplash.com/photo-1506622901-a9558737ce39?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Cruz do Sul',
    description: 'Importante para navegação no hemisfério sul, sendo a menor das constelações.',
    image: 'https://cdn.eso.org/images/screen/crux_pano_1_2.jpg'
  },
  {
    name: 'Andrômeda',
    description: 'Lar da Galáxia de Andrômeda, a mais próxima da Via Láctea.',
    image: 'https://www.cache2net3.com//Repositorio/6824/Publicacoes/311842/4.jpg?=51'
  },
  {
    name: 'Pegasus',
    description: 'Nomeada em homenagem ao cavalo alado da mitologia grega.',
    image: 'https://www.allthesky.com/constellations/pegasus/big.jpg'
  },
];

export default function Constellations() {

  return (
    <section id="constellations" className="py-12 bg-slate-900 scroll-mt-20">
      <div className="container mx-auto px-8 lg:px-4 mb-10">
        <div className="flex items-center justify-center mb-12 gap-5">
          <img src={constellation} alt="" width={70} />
          <h2 className="text-4xl font-bold text-white">Constelações</h2>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {constellations.map((constellation) => (
            <div key={constellation.name} className="bg-slate-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 hover:border-yellow-400 hover:border">
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