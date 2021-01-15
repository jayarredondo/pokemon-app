import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import PokeNavbar from './components/layout/PokeNavbar'
import Container from 'react-bootstrap/Container'
import PokeDeck from './components/pokemon/PokeDeck';
import PokeStats from './components/pokemon/PokeStats'
import PokemonState from './components/context/pokedex/PokemonState'

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <PokemonState>
      <Router>
        <PokeNavbar/>
        <Container>
          <Switch>
            <Route exact path='/' component={PokeDeck} />
            <Route exact path='/pokemon/:name' component={PokeStats} />
          </Switch>
        </Container>
      </Router>
    </PokemonState>
  );
}

export default App;
