import {fetchAllPokemon, fetchOnePokemon} from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";

export const receiveOnePokemon = (onePokemon) => ({
    type: RECEIVE_ONE_POKEMON,
    onePokemon
});

export const receiveAllPokemon = (pokemon) => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
});

export const requestOnePokemon = (id) => dispatch => {
    fetchOnePokemon(id).then(onePokemon => {
        const action = receiveOnePokemon(onePokemon);
        dispatch(action);
    })
}


export const requestAllPokemon = () => dispatch => {
    // do an ajax request
    // .then, when the server responds wit the pokemon
    // we use the passed in dispatch to start a new redux cycle with our pokemon data

    fetchAllPokemon().then(pokemon => {
        const action = receiveAllPokemon(pokemon);
        dispatch(action);
    })

    // $.ajax({
    //     method: "get",
    //     url: '/pokemon'
    // }).then(response => {
    //     const allPokemon = response;
    //     const action = receiveAllPokemon(allPokemon);
    //     dispatch(action);
    // });
}

// const mapDispatchToProps = dispatch => ({
//     getAllPokemon: () => dispatch(requestPokemon())
// })