import React, {useContext, useState} from 'react'
import PokeCard from './PokeCard'
import pokemonContext from '../context/pokedex/pokemonContext'
import Spinner from '../layout/Spinner'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PokeDeck = ({pokemon, loading}) => {

    // const PokemonContext = useContext(pokemonContext)

    // const {loading, pokemon} = PokemonContext;
    
    if(loading) {
        return <Spinner/>
    } else {
        return (
            <Row>
                {pokemon.map(monster => (
                    <Col key={monster.name} sm={12} md={6} lg={4}>
                        <PokeCard key={monster.name} monster={monster}/>
                    </Col>
                ))}
            </Row>
        )
    }
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default PokeDeck
