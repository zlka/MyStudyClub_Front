import React from 'react'
import axios from 'axios';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useNavigate } from 'react-router-dom';

const ClubDetails = ({club}) => {
    const navigate = useNavigate();
    const handleClick = async () => {
      // let config = {
      //   method: 'delete',
      //   url: `https://my-study-club.herokuapp.com/clubs/${club.id}`,
      //   headers: { }
      // };

      // await axios(config)
      // .then(response => {
      //   console.log(JSON.stringify(response.data));
      // })
      // .catch(error => {
      //   console.log(error);
      // });

      let data = JSON.stringify({
        "student_id": localStorage.getItem("student_id")
      });
      
      let config = {
        method: 'patch',
        url: `https://my-study-club.herokuapp.com/clubs/${club.id}`,
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
        <div className="club-details">
          <h4>{club.club_name}</h4>
          <p><strong>Club Code: </strong>{club.club_code}</p>
          <p>{formatDistanceToNow(new Date(club.created_at), { addSuffix: true })}</p>
          <h2 id="club_link"className="material-symbols-outlined" onClick={() => navigate('/dashboard/club', {state: club.id})}>arrow_circle_right</h2>
          <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
      )
}

export default ClubDetails
