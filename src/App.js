import React from 'react';
import './App.css';

import PokeNavbar from './components/layout/PokeNavbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Fragment } from 'react';
import PokeCard from './components/pokemon/PokeCard';

function App() {
  return (
    <Fragment>
      <PokeNavbar/>
      <Container>
        <Row className="mb-5">
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
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
