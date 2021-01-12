import React, {useReducer} from 'react'
import axios from 'axios'
import pokemonContext from './pokemonContext'
import pokemonReducer from './pokemonReducer'
import {
    GET_POKEMON,
    SEARCH_POKEMON,
    SET_LOADING
} from '../types'

const PokemonState = props => {
    const initialState = {
        pokemon: [],
        loading: false
    }

    const [state, dispatch] = useReducer(pokemonReducer, initialState);

    // Get Pokemon

    const getPokemon = async () => { 
        setLoading();   
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118');
        console.log(res.data.results)

        dispatch({
            type: GET_POKEMON,
            payload: res.data.results
        });
      }
    

    // Search Pokemon

    const searchPokemon = async text => {
        setLoading();

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text.toLowerCase()}`)
        console.log(res.data)

        dispatch({
            type: SEARCH_POKEMON,
            payload: res.data
        });
      }

    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING})

    return(
    <pokemonContext.Provider
        value={{
            pokemon: state.pokemon,
            loading: state.loading,
            searchPokemon,
            getPokemon
        }}
        >
            {props.children}
    </pokemonContext.Provider>
    )
}

export default PokemonState