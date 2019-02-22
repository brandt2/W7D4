import {connect} from 'react-redux';
import {selectAllPokemon, selectAllPokemonItems} from '../../reducers/selectors';
import {requestAllPokemon, requestOnePokemon} from '../../actions/pokemon_actions';
import PokemonIndex from '../pokemon/pokemon_index';

const mapStateToProps = state => {
    // debugger
    return ({
        pokemon: selectAllPokemon(state.entities.pokemon),
        items: selectAllPokemonItems(state.entities.items)
    })
};
// debugger
const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () => dispatch(requestAllPokemon()),
    requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);