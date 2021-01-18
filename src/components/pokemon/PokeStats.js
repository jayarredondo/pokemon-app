import React, {useContext, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Spinner from '../layout/Spinner'
import pokemonContext from '../context/pokedex/pokemonContext'

const PokeStats = ({match}) => {
    const PokemonContext = useContext(pokemonContext)
    const {monster, loading, getSinglePokemon} = PokemonContext;

    useEffect(() => {
        console.log('useEffect is being executed!!')
        getSinglePokemon(match.params.name)
        // eslint-disable-next-line
    }, [])


    const { name, sprites, types} = monster;

    if (loading) {return <Spinner />}

        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={sprites.front_default} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {types[0].type.name}
                </Card.Text>
            </Card.Body>
            </Card>
        )
    
}

export default PokeStats
