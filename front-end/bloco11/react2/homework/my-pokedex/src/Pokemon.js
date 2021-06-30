import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (<div className="pokemon-div">
      <p className="name">Nome: {name}</p>
      <p className="type">Tipo: {type}</p>
      <p className="weigth">Peso: {averageWeight.value} {averageWeight.measurementUnit}</p>
      <img src={image} alt="pokemon animation"></img>
    </div>)
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
}

export default Pokemon;