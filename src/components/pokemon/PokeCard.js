import React from 'react'
import Card from 'react-bootstrap/Card'

function PokeCard() {
    return (
<Card bg="warning" style={{ width: '18rem' }}>
    <Card.Title className="pl-2 pt-1">PokeName</Card.Title>
        <Card.Img variant="top" src="http://placehold.jp/250x200.png" className="px-2 "/>
        <Card.Body>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
    )
}

export default PokeCard
