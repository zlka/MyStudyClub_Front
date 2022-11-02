import React from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const ClubDetails = ({club}) => {
  const navigate = useNavigate()
    const handleDeleteClick = async () => {

      let config = {
        method: 'delete',
        url: `https://my-study-club.herokuapp.com/clubs/${club.id}`,
        headers: { }
      };

      await axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
    }

    const handleNavClick = async (e) => {
      const nav = e.target.id
      
    }


    return (
        <div className="club-details" >
          <h3 onClick={() => navigate("/dashboard/club", { state: club.id })}>{club.club_name}</h3>
          <p><strong>Club Code: </strong>{club.club_code}</p>
          <p>{formatDistanceToNow(new Date(club.created_at), { addSuffix: true })}</p>
          <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
        </div>
      )
}

export default ClubDetails
