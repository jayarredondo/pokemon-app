import React, {useState, useEffect} from 'react';
import './App.css';

import PokeNavbar from './components/layout/PokeNavbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeDeck from './components/pokemon/PokeDeck';
import PokemonState from './components/context/pokedex/PokemonState'
import axios from 'axios';

const App = () => {

  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)

  const getPokemon = async () => {
    setLoading(true);

    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118');
    setPokemon(res.data.results);
    setLoading(false);
  }

  useEffect(() => {
    getPokemon()
  }, [])

  console.log(pokemon)

  return (
    <PokemonState>
      <PokeNavbar/>
      <Container>
        <PokeDeck loading={loading} pokemon={pokemon}/>
      </Container>
    </PokemonState>
  );
}

export default App;
