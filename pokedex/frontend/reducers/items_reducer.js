import {RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';

export const itemsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ONE_POKEMON:
            const newState = Object.assign({}, state, action.onePokemon.items)
            return newState;
        default:
            return state;
    }
}