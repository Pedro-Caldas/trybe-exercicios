import React, { Component } from "react";

class Pokemon extends Component {

    render() {

        const { pokemon: { name, type, averageWeight, image } } = this.props;

        return (
            <section>
                <h5>{name}</h5>
                <p>{type}</p>
                <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                <img src={image} alt="Pokémon image" />
            </section>
        );
    }
}

export default Pokemon;