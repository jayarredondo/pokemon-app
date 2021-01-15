import React, {useContext, useEffect} from 'react'
import PokeCard from './PokeCard'
import pokemonContext from '../context/pokedex/pokemonContext'
import Spinner from '../layout/Spinner'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PokeDeck = () => {

    const PokemonContext = useContext(pokemonContext)

    const {loading, pokemon, getPokemon} = PokemonContext;

    useEffect(() => {
        getPokemon()
        // eslint-disable-next-line
      }, [])
    
    if(loading) {
        return <Spinner/>
    } else if(pokemon.length > 0){
        return (
            <Row>
                {pokemon.map(monster => (
                    <Col className="mb-3" key={monster.name} sm={12} md={6} lg={4}>
                        <PokeCard key={monster.name} monster={monster}/>
                    </Col>
                ))}
            </Row>
        )
    } else {
        return (
        <h2 class="text-center">We're Sorry, we could not find any Pokemon by that name! Please try again.</h2>
        )
    }
}

export default PokeDeck
