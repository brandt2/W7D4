import React from 'react';

class PokemonIndexItem extends React.Component {
    constructor(props) {
        // debugger
        super(props);
    }

    componentDidMount() {
        this.props.requestOnePokemon(this.props.key);
    }

    render() {
        // debugger
        if (this.props.pokemon === undefined || this.props.items === undefined || this.props.pokemon.length === 0 || this.props.items.length === 0) return null;
        return (
            <li>
                <ul>
                    {this.props.items.map(element => (
                        <li>
                            <ul>
                                <li>{element.name}</li>
                                <li><img src={element.image_url} /></li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </li>
        )
    }
}

export default PokemonIndexItem;


