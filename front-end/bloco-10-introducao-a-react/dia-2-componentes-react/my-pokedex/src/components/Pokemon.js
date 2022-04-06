import React, { Component } from "react";
import "./Pokemon.css"

class Pokemon extends Component {

    render() {

        const { pokemon: { name, type, averageWeight, image } } = this.props;

        return (
            <section className="pokemon-card">
                <img src={image} alt="Pokémon image" />
                <h5>{name}</h5>
                <p>{type}</p>
                <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
            </section>
        );
    }
}

export default Pokemon;