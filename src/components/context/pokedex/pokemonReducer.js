import {
    SEARCH_POKEMON,
    SET_LOADING,
    GET_POKEMON,
    GET_SINGLE_POKEMON,
    GET_POKEMON_PIC,
    GET_TYPES
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload,
                loading: false
            }
        case GET_SINGLE_POKEMON:
            return {
                ...state,
                monster: action.payload,
                loading: false
            }
        case GET_POKEMON_PIC:
            return {
                ...state,
                pokePics: action.payload,
                loading: false
            }
        case GET_TYPES:
            return {
                ...state,
                pokeTypes: action.payload,
                loading: false
            }
        case SEARCH_POKEMON:
            return {
                ...state,
                pokemon: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}