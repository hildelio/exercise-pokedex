import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <div className="pokedex">
        <h1 className="title">Pokédex</h1>
        <ul className="card-content">
          {
            pokemonList.map((pokemon) => (<Pokemon
              key={ pokemon.id }
              pokemon={ pokemon }
            />))
          }
        </ul>
      </div>
    );
  }
}

export default Pokedex;

Pokedex.propTypes = {
  pokemon: Proptypes.arrayOf(Proptypes.shape({
    id: Proptypes.number,
    name: Proptypes.string,
    type: Proptypes.string,
    averageWeight: Proptypes.shape({
      value: Proptypes.number,
      measurementUnit: Proptypes.string,
    }),
    image: Proptypes.string,
    moreInfo: Proptypes.string,
  })),
}.isRequired;
