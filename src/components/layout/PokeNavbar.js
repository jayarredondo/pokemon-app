import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import PokeSearch from '../pokemon/PokeSearch'

const PokeNavbar = () => {

    return (
        <Navbar sticky="top" bg="primary" variant="dark" className="mb-5">
            <Navbar.Brand>
                <img src="https://img.icons8.com/color/48/000000/instinct-pokemon.png" alt="PokeIcon"/>
                Cyber Pokedex
            </Navbar.Brand>
            <PokeSearch />
        </Navbar>
    )
}

export default PokeNavbar
