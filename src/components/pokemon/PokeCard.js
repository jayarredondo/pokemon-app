import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const PokeCard = ({monster : {name, url}}) => {

    return (
        <Link to={`/pokemon/${name}`}>
            <Card bg="warning" style={{ width: '18rem' }}>
                <Card.Title className="m-auto">{name}</Card.Title>
            </Card>
        </Link>
    )
}

export default PokeCard
