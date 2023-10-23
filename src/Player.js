import React from 'react'
import Card from 'react-bootstrap/Card';
function Player(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.UrlImage} style={{height : '250px', objectFit : 'cover'}}/>
    <Card.Body>
      <Card.Title>{props.Name}</Card.Title>
      <Card.Text>
        <p>{props.Age}</p>
        <p>{props.Poste}</p>
        <p>{props.Numero}</p>
        <p>{props.Team}</p>
        <p>{props.Natio}</p>
      </Card.Text>
     
    </Card.Body>
  </Card>
  )
}

export default Player