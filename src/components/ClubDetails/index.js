import React from 'react'
import axios from 'axios';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ClubDetails = ({club}) => {
    const handleClick = async () => {

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


    return (
        <div className="club-details">
          <h4>{club.club_name}</h4>
          <p><strong>Club Code: </strong>{club.club_code}</p>
          <p>{formatDistanceToNow(new Date(club.created_at), { addSuffix: true })}</p>
          <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
      )
}

export default ClubDetails
