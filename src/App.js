import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemonList from './data';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Exercise - Pokedex!</h1>
        <Pokedex pokemonList={ pokemonList } />
      </div>
    );
  }
}

export default App;
