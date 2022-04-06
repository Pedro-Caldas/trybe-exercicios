import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex'

function App() {
  return (
    <main>
      <h1 className='title'>Pokédex</h1>
      <Pokedex pokemons={pokemons}/>
    </main>
  );
}

export default App;

