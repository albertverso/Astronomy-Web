import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Constellations from './components/Constellations';
import Stars from './components/Stars';
import Planets from './components/Planets';
import Footer from './components/Footer';
import { NasaAPOD } from './components/nasaAPOD';

function App() {

  return (
    <div className="bg-slate-900">
      <Navbar />
      <Hero />
      <Constellations />
      <Stars />
      <Planets />
      {/* <NasaAPOD /> */}
      <Footer />
    </div>
  );
}

export default App;