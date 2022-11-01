import Table from 'react-bootstrap/Table';
import './index.css'
import axios from 'axios';
import {useEffect, useState } from 'react';

import { Resolver } from '../../components';


function Dashboard() {

  const [data, setData]=useState([])
  useEffect(()=> {
    async function getData() {
  
      let response = await axios.get("https://my-study-club.herokuapp.com/clubs")
      setData(response.data)
    }
    getData()
  },[]);


  return (
    <>
    <div className="main-container">

      <div className="header">

       <h1> My Study Club </h1> 

      </div>

    <div className="upcoming-container">

      <h1> Upcoming </h1>

    </div>
    
    <div className="table-container">

    
    <Table style={{
            textAlign: 'center'
          }}  hover>
      <thead>
        <tr style={{
          backgroundColor: 'lightblue',
        }}>
          <th style ={{
            borderStyle: 'solid',
            borderColor: 'Azure',
            borderWidth: '5px',
            verticalAlign: 'middle',
            fontSize: '48px'
          }}>Leehamb99</th>
          <th style={{
            fontSize: '48px',
            borderStyle: 'solid',
            borderColor: 'Azure',
            borderWidth: '5px',
            verticalAlign: 'middle'
          }}>Dashboard</th>
          <th style={{
            fontSize: '48px',
            borderStyle: 'solid',
            borderColor: 'Azure',
            borderWidth: '5px',
            verticalAlign: 'middle'
          }}>+</th>
        </tr>
      </thead>
      <tbody style={{
        backgroundColor: 'lightpink',
        fontSize: '20px'
      }}>
       <Resolver data={data}/>
      </tbody>
    </Table>
    </div>
    </div>
    </>
  );
}

export default Dashboard;
