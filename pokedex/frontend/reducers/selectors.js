export const selectAllPokemon = (state) => {
    let arr = [];
    Object.values(state).forEach((el) => {
        arr.push(el);
    });
    return arr;
}

export const selectAllPokemonItems = (state) => {
    // debugger
    let arr = [];
    Object.values(state).forEach((el) => {
        arr.push(el);
    });
    return arr;
}