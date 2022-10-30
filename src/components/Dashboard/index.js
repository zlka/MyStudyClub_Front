import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

const DashboardContent = async () => {
    let data = await axios.get("https://my-study-club.herokuapp.com/studentclubs/1")
    data = data.data
    console.log(data[1])


    
    for (let cell in data){
        console.log([cell])
        return (
            <tr>
                  <td>{cell}</td>
                  <td>1 Set</td>
                  <td style={{
                    width: '4rem'
                  }}><Button>Go</Button>{' '}</td>
                </tr>
          )
    }


}

export default DashboardContent
