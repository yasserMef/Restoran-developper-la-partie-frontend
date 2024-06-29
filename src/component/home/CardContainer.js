import React from 'react'
import Card from 'react-bootstrap/Card';


function CardContainer({title,about}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={about} style={{height:"200px"}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        </Card.Body>
    </Card>
  )
}

export default CardContainer