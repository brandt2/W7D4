import React from 'react';
import PokemonIndexItem from './pokemon_index_container';

class PokemonIndex extends React.Component {
    constructor(props) {
        // debugger
        super(props);
    }
    
    componentDidMount() {
        console.log("from index")
        this.props.requestAllPokemon(); //async 
        // debugger
    }

    render() {
        // debugger
        if (this.props.pokemon === undefined || this.props.pokemon.length === 0) return null;
        const pokemonItems = this.props.pokemon.map(poke => {
            return (<PokemonIndexItem key={poke.id} pokemon={poke} />)
        });
        return (
            <div>
                <ul className="all-pokemon">
                {this.props.pokemon.map(element=> (
                    <li>
                        <ul>
                            <li className="pokemon-name">{element.name}</li>
                            <li><img className="pokemon-image" src={element.image_url}/></li>
                            {/* <section className="pokedex">
                                <ul>
                                    {pokemonItems}
                                </ul>
                            </section> */}
                        </ul>
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}

export default PokemonIndex;