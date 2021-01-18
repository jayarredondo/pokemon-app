import React, {useReducer} from 'react'
import axios from 'axios'
import pokemonContext from './pokemonContext'
import pokemonReducer from './pokemonReducer'
import {
    GET_POKEMON,
    GET_SINGLE_POKEMON,
    SEARCH_POKEMON,
    SET_LOADING
} from '../types'

const PokemonState = props => {
    const initialState = {
        pokemon: [],
        monster: {},
        loading: false
    }

    const [state, dispatch] = useReducer(pokemonReducer, initialState);

    // Get All Pokemon

    const getPokemon = async () => { 
        setLoading();   
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118');
        dispatch({
            type: GET_POKEMON,
            payload: res.data.results
        });
      }

    // Get Single Pokemon

    const getSinglePokemon = async (pokemonName) => {
        setLoading();
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        console.log('This is the data for a single pokemon request')
        console.log(res.data)

        dispatch({
            type: GET_SINGLE_POKEMON,
            payload: res.data
        })
    }
    

    // Search Pokemon

    const searchPokemon = async text => {
        setLoading();

        let filteredPokemon = state.pokemon.filter(monster => monster.name.toLowerCase().includes(text))

        dispatch({
            type: SEARCH_POKEMON,
            payload: filteredPokemon
        });
      }

    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING})

    return(
    <pokemonContext.Provider
        value={{
            pokemon: state.pokemon,
            monster: state.monster,
            loading: state.loading,
            searchPokemon,
            getPokemon,
            getSinglePokemon
        }}
        >
            {props.children}
    </pokemonContext.Provider>
    )
}

export default PokemonState