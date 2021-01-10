import {
    SEARCH_POKEMON,
    SET_LOADING,
    GET_POKEMON
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload,
                loading:false
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