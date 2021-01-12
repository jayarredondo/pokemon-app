import React, {useContext, useEffect} from 'react';
import './App.css';

import PokeNavbar from './components/layout/PokeNavbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeDeck from './components/pokemon/PokeDeck';
import PokemonState from './components/context/pokedex/PokemonState'
import pokemonContext from './components/context/pokedex/pokemonContext'

const App = () => {

  const PokemonContext = useContext(pokemonContext);

  const {getPokemon} = PokemonContext;

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <PokemonState>
      <PokeNavbar/>
      <Container>
        <PokeDeck/>
      </Container>
    </PokemonState>
  );
}

export default App;
