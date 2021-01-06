import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

function PokeNavbar() {
    return (
        <Navbar bg="primary" variant="dark" className="mb-5">
            <Navbar.Brand>
            <img src="https://img.icons8.com/color/48/000000/instinct-pokemon.png"/>
                Cyber Pokedex
            </Navbar.Brand>
        </Navbar>
    )
}

export default PokeNavbar
