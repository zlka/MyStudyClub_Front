import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate, useLocation } from 'react-router-dom'

// import { Button } from 'react-bootstrap';
import {Pencil, CardList, Back} from 'react-bootstrap-icons'
import './clubcard.css'

const ClubCard = (props) => {
  
  const navigate = useNavigate()
  const location = useLocation()
  const index = location.state

    return (
        <Card 
        
        style={{ width: '18rem'}}
        className="m-3">
          <Card.Header style={{backgroundColor:"whitesmoke",color:"teal"}}>
          {props.name}
          </Card.Header>
          <Card.Body>
            <Card.Title  ></Card.Title>
            <div className="setBtn">
              <button 
              onClick={() => navigate("/dashboard/set", { state: props.id })}>
                <Pencil /> Edit </button>
              <button 
              onClick={() => navigate("/dashboard/practise",{state: props.id} )}>
                <CardList /> View </button>
              <button 
              onClick={() => navigate("/dashboard/test", {state: props.id})}><Back /> Test </button>
            </div>
          </Card.Body>
          <Card.Footer style={{backgroundColor:"whitesmoke"}}className="text-muted">Club : {props.set}</Card.Footer>
        </Card>
      );
}

export default ClubCard
