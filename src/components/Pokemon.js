import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const {
      pokemon: {
        name,
        type,
        averageWeight: { value, measurementUnit },
        image,
      },
    } = this.props;
    return (
      <li className="card">
        <h1>{ name }</h1>
        <h3>{ type }</h3>
        <h4>{ `${value} ${measurementUnit}` }</h4>
        <img src={ image } alt={ name } />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }).isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
