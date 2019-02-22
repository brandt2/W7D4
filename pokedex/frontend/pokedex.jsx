import React from 'react';
import ReactDOM from 'react-dom';
// import { receiveAllPokemon } from './actions/pokemon_actions';
// import { fetchAllPokemon } from './util/api_util';
// import { requestAllPokemon } from './actions/pokemon_actions';
// import { selectAllPokemon } from './reducers/selectors';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();

    // window.getState = store.getState;
    // window.store = store;
    // window.dispatch = store.dispatch;
    // window.fetchAllPokemon = fetchAllPokemon;
    // window.receiveAllPokemon = receiveAllPokemon;
    // window.requestAllPokemon = requestAllPokemon;
    // window.selectAllPokemon = selectAllPokemon;

    ReactDOM.render(<Root store={store}/>, rootEl);
});