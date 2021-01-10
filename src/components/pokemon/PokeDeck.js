import React, {useContext, useState} from 'react'
import PokeCard from './PokeCard'
import pokemonContext from '../context/pokedex/pokemonContext'
import Spinner from '../layout/Spinner'
import axios from 'axios'

const PokeDeck = ({pokemon, loading}) => {

    // const PokemonContext = useContext(pokemonContext)

    // const {loading, pokemon} = PokemonContext;
    
    if(loading) {
        return <Spinner/>
    } else {
        return (
            <div style={userStyle}>
                {pokemon.map(monster => (
                    <PokeCard key={monster} monster={monster}/>
                ))}
            </div>
        )
    }
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default PokeDeck
