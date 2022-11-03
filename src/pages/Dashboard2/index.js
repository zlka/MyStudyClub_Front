import axios from 'axios';
import { useEffect, useState } from 'react';
import './dashboard2.css';
import { BackButton, ClubDetails, ClubForm } from "../../components"


function Dashboard2() {
  const [clubs, setClubs] = useState(null)

  useEffect(() => {
    axios
      .get(`https://my-study-club.herokuapp.com/studentclubs/${localStorage.getItem("student_id")}`)
      .then(res => {
        setClubs(res.data)
      })
  }, [clubs])

  return (
    <> <BackButton /> <h3>Dashboard</h3>
      <div className="home-dash">

        <div className="club-dash">
          {clubs ? clubs.map(club => (

            <ClubDetails club={club} key={club.id} />
          )) : <h3> Loading... </h3>}

        </div>
        <ClubForm />
      </div>
    </>
  );
}

export default Dashboard2;
