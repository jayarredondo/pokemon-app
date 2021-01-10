import React from 'react'
import Card from 'react-bootstrap/Card'

const PokeCard = ({monster}) => {

    return (
        <Card bg="warning" style={{ width: '18rem' }}>
            <Card.Title className="m-auto">{monster.name}</Card.Title>
            {/* <Card.Img variant="top" src={monster.sprites.front_default} className="px-2 "/> */}
            {/* <Card.Body> */}
                {/* <Card.Text> */}
                    {/* Type: {monster.types[0].type.name} */}
                {/* </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
                {/* // </Card.Body> */}
        </Card>
    )
}

export default PokeCard
