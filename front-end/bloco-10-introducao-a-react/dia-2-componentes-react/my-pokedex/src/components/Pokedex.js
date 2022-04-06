import React, { Component } from "react";
import Pokemon from "./Pokemon";
import "./Pokedex.css"

class Pokedex extends Component {
    render() {
        const { pokemons } = this.props;
        return (
            <section className="pokedex-container">
                    {pokemons.map((el) => {
                        return <div><Pokemon key={el.id} pokemon={el}/></div>
                    })}
            </section>
        )
    }
}

export default Pokedex