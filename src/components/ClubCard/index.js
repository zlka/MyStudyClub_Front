import React from 'react'
import Card from 'react-bootstrap/Card';
// import { Button } from 'react-bootstrap';
import {Pencil, CardList, Back} from 'react-bootstrap-icons'
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
            <div> 
            <button variant="primary"><Pencil /> Edit</button>
            <button variant="primary"><CardList /> View</button>
            <button variant="primary"><Back /> Test</button>
            </div>
          </Card.Body>
          <Card.Footer className="text-muted">Club : {props.set}</Card.Footer>
        </Card>
      );
}

export default ClubCard
