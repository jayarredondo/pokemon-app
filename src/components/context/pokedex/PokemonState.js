import React, {useReducer, useEffect} from 'react'
import axios from 'axios'
import pokemonContext from './pokemonContext'
import pokemonReducer from './pokemonReducer'
import {
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
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        initialState.pokemon = res.data.results;
      }
    
      useEffect(() => {
        getPokemon()
      }, [])

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
            searchPokemon
        }}
        >
            {props.children}
    </pokemonContext.Provider>
    )
}

export default PokemonState