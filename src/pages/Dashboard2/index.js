import axios from 'axios';
import {useEffect, useState } from 'react';
import './dashboard2.css';
// components
import { ClubDetails, ClubForm } from "../../components"


function Dashboard2() {
  const [clubs, setClubs] = useState(null)

  useEffect(() => {
    axios
    .get('https://my-study-club.herokuapp.com/clubs')
    .then(res => {
      setClubs(res.data)
    })
  }, [clubs])

  return (
    <div className="home-dash">
      <div className="workouts">
        {clubs ? clubs.map(club => (
              <ClubDetails  club={club} key={club.id} />
            )) : <h3> Loading </h3>}
      </div>
      <ClubForm />
    </div>
  );
}

export default Dashboard2;
