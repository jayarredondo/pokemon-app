import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

function PokeNavbar() {
    return (
        <Navbar sticky="top" bg="primary" variant="dark" className="mb-5">
            <Navbar.Brand>
                <img src="https://img.icons8.com/color/48/000000/instinct-pokemon.png"/>
                Cyber Pokedex
            </Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search Pokedex" className=" mr-sm-2" />
                <Button type="submit" variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    )
}

export default PokeNavbar
