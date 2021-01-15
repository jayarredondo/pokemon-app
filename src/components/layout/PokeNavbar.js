import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import PokeSearch from '../pokemon/PokeSearch'

const PokeNavbar = () => {

    return (
        <Navbar sticky="top" bg="dark" variant="dark" className="mb-5">
            <Navbar.Brand>
                <img src="https://img.icons8.com/color/48/000000/instinct-pokemon.png" alt="PokeIcon"/>
                Cyber Pokedex
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <PokeSearch />
        </Navbar>
    )
}

export default PokeNavbar
