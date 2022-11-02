import React, { useState } from 'react'
import axios from 'axios';
import './clubform.css'

const ClubForm = () => {
    const [title, setTitle] = useState('')
    const [code, setCode] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = JSON.stringify({
          "title": title,
          "code": code
        });
        
        let config = {
          method: 'post',
          url: 'https://my-study-club.herokuapp.com/clubs',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        const response = await axios(config)
        .then(response => {
          console.log(JSON.stringify(response.data));
        })
        .catch(error => {
          setError(error)
          console.log(error);
        });
    }
  
    return (
      <form className="create" onSubmit={handleSubmit}> 
        <h3>Create a new Club</h3>
  
        <label>Club Name</label>
        <input 
          className="clubForm"
          type="text" 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
          required
        />
  
        <label>Passcode</label>
        <input 
          type="text" 
          className="clubForm"
          onChange={(e) => setCode(e.target.value)} 
          value={code}
          required
        />
  
        <button>Add Club</button>
        {error && <div className="error">{error}</div>}
      </form>
    )
  }

export default ClubForm
