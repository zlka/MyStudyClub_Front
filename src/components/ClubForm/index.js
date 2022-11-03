import React, { useState } from 'react'
import axios from 'axios';
import './clubform.css'

const ClubForm = () => {
    const [title, setTitle] = useState('')
    const [code, setCode] = useState('')
    const [joinCode, setJoinCode] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {

        e.preventDefault()

        let data = JSON.stringify({
          "title": title,
          "code": code,
          "student_id": localStorage.getItem("student_id")
        });
        
        let config = {
          method: 'POST',
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

        setTitle('')
        setCode('')
    }

    const handleJoin = async (e) => {
      e.preventDefault()
      let data = JSON.stringify({
        "club_code": joinCode
      });

      let config = {
        method: 'patch',
        url: `https://my-study-club.herokuapp.com/students/${localStorage.getItem("student_id")}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
    return (
      <div>
        <form className="create" onSubmit={handleSubmit} id='createGroupForm'> 
          <h3>Create a new Club</h3>
    
          <label>Name</label>
          <input 
            className="clubForm"
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title}
            required
          />
    
          <label>Club Code</label>
          <input 
            type="text" 
            className="clubForm"
            onChange={(e) => setCode(e.target.value)} 
            value={code}
            required
          />
    
          <button>Add Club</button>
        </form>
        <br />
        <h3>Join Existing Club</h3>
        <form className="create" onSubmit={handleJoin}>
        <label>Club Code</label>
          <input 
            type="text" 
            className="clubForm"
            onChange={(e) => setJoinCode(e.target.value)} 
            value={joinCode}
            required
          />
    
          <button>Join Club</button>
        </form>
      </div>
    )
  }

export default ClubForm
