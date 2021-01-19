import React, {useReducer} from 'react'
import axios from 'axios'
import pokemonContext from './pokemonContext'
import pokemonReducer from './pokemonReducer'
import {
    GET_POKEMON,
    GET_SINGLE_POKEMON,
    GET_POKEMON_PIC,
    SEARCH_POKEMON,
    SET_LOADING,
    GET_TYPES
} from '../types'

const PokemonState = props => {
    const initialState = {
        pokemon: [],
        monster: {},
        pokePics: [],
        pokeTypes: [],
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

        dispatch({
            type: GET_SINGLE_POKEMON,
            payload: res.data
        })
    }

    // Get images for single Pokemon

    const getPokemonPics = async (sprite) => {
        setLoading();
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${sprite}`);

        dispatch({
            type: GET_POKEMON_PIC,
            payload: res.data.sprites
        })
    }

    // Get types of single Pokemon
    const getTypes = async (pokeName) => {
        setLoading();
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

        dispatch({
            type: GET_TYPES,
            payload: res.data.types
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
            pokePics: state.pokePics,
            pokeTypes: state.pokeTypes,
            searchPokemon,
            getPokemon,
            getSinglePokemon,
            getPokemonPics,
            getTypes
        }}
        >
            {props.children}
    </pokemonContext.Provider>
    )
}

export default PokemonState