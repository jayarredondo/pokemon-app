import React from 'react'
import Card from 'react-bootstrap/Card'
import PokeStats from './PokeStats'

function PokeCard() {
    return (
<Card bg="warning" style={{ width: '18rem' }}>
    <Card.Title className="pl-2 pt-1">PokeName</Card.Title>
        <Card.Img variant="top" src="http://placehold.jp/250x200.png" className="px-2 "/>
        <Card.Body>
            <PokeStats />
        {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
    )
}

export default PokeCard
