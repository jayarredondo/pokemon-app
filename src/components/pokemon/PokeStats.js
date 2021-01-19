import React, {useContext, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Spinner from '../layout/Spinner'
import pokemonContext from '../context/pokedex/pokemonContext'

const PokeStats = ({match}) => {
    const PokemonContext = useContext(pokemonContext)
    const {monster, loading, getSinglePokemon, pokePics, getPokemonPics, getTypes, pokeTypes} = PokemonContext;

    useEffect(() => {
        console.log('useEffect is being executed!!')
        getSinglePokemon(match.params.name)
        getPokemonPics(match.params.name)
        getTypes(match.params.name)
        // eslint-disable-next-line
    }, [])

    console.log('Here are the types', pokeTypes)

    if (loading) {return <Spinner />}

        return (
            <Card style={{ width: '18rem' }}>
            <Card.Header>{monster.name}</Card.Header>
            <Card.Img variant="top" src={pokePics.front_default} />
            <Card.Body>
                <Card.Title>Types:</Card.Title>
                <ul>
                    <Card.Text>
                            {pokeTypes.map(type => (
                            <li key={type.type.name}>{type.type.name}</li>
                            ))}
                    </Card.Text>
                </ul>
            </Card.Body>
            </Card>
        )
    
}

export default PokeStats
