import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';

const Resolver = (props) => {
    // console.log(props.then)
    props.data.then((result) => {
    console.log(result)
    return(
      result.map((cell, index) => {

        return(
 
        <tr key={index}>
        <td>{cell[index]}</td>
        <td>{cell[index + 1]}</td>
        <td style={{
          width: '4rem'
          
        }}><Button>Go</Button>{' '}</td>
        {console.log(cell)}
        
        </tr>       

        
      )})
    
  )
})
  

}






export default Resolver;
