import React, { useState } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const NewSet = (props) => {
    const [name, setName ] = useState("")

    const navigate = useNavigate()

    const createSet= () => {

        let data = JSON.stringify({
            "name": name,
            "club_id":  props.id
          });
          
          let config = {
            method: 'post',
            url: 'https://my-study-club.herokuapp.com/sets',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            navigate("/dashboard/set",{state:response.data.id})

          })
          .catch(function (error) {
            console.log(error);
          });
        
    };

    


    return(
        <Card 
        style={{ width: '18rem' }}
        className="m-3">
          <Card.Body>
            <Card.Title> 
                <div>
                    <label>set name</label>
                    <input 
                    onChange={(e) => setName(e.target.value)}
                    name="set_name"
                    type="set_name"
                    value={name}
                     />
                </div>
            </Card.Title>
          </Card.Body>
          <Card.Footer className="text-muted">
            <button 
            type="submit"
            onClick={createSet}
            style={{border:"none",width:"100%",color:"teal"}}
            >create</button></Card.Footer>
        </Card>
    )
}

export default NewSet
