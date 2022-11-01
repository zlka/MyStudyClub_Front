import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const ClubCard = (props) => {

    return (
        <Card 
        style={{ width: '18rem' }}
        className="m-3">
          <Card.Header>
          {props.name}
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Sets : {props.set}</Card.Footer>
        </Card>
      );
}

export default ClubCard
