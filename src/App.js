import React from 'react';
import './App.css';

import PokeNavbar from './components/layout/PokeNavbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Fragment } from 'react';
import PokeCard from './components/pokemon/PokeCard';

function App() {
  return (
    <Fragment>
      <PokeNavbar/>
      <Container>
        <Row>
          <Col>
            <PokeCard/>
          </Col>
          <Col>
            <PokeCard/>
          </Col>
          <Col>
            <PokeCard/>
          </Col>
          <Col>
            <PokeCard/>
          </Col>
        </Row>
        <Row>
          <Col>
            <PokeCard/>
          </Col>
          <Col>
            <PokeCard/>
          </Col>
          <Col>
            <PokeCard/>
          </Col>
          <Col>
            <PokeCard/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
