import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';

const HandleClub = () => {

  
}

const Resolver = (props) => {
      console.log(props.data)
    return(
      props.data.map((cell, index) => {

        return(
 
        <tr key={index}>
        <td>{cell.club_name}</td>
        <td>{cell.club_code}</td>
        <td style={{
          width: '4rem'
          
        }}><Button onClick={() => (HandleClub())} id={cell.id}>Go</Button>{' '}</td>
        {/* {console.log(cell)} */}
        
        </tr>       

        
      )})
    
  )

  

}






export default Resolver;
