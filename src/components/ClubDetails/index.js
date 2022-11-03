import React,{useState }from 'react'
import axios from 'axios';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useNavigate } from 'react-router-dom';

const ClubDetails = ({club}) => {
    const [style,setStyle]=useState()
    const navigate = useNavigate();
    const handleClick = async () => {

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

    const handleNavClick = async (e) => {
      const nav = e.target.id
      
    }

    const changeStyle = () => {
     
    };
    

    return (
        <div className="club-details" 
        style={style} 
        onMouseEnter={() => setStyle({backgroundColor: "#f4f4f4"})}
        onMouseLeave={() => setStyle({backgroundColor:"white"})}
        >
          <h4 onClick={() => navigate("/dashboard/club", { state: club.id })}>{club.club_name}</h4>
          <p><strong>Club Code: </strong>{club.club_code}</p>
          <p>{formatDistanceToNow(new Date(club.created_at), { addSuffix: true })}</p>
          <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
      )
}

export default ClubDetails
