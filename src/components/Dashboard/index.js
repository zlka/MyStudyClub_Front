import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

const DashboardContent = () => {
    // let data = await axios.get("https://my-study-club.herokuapp.com/studentclubs/1")
    // data = data.data

    let data = [['History 101','2 Sets'],['Maths Final Exam','4 Sets']]

    return (

    <>

        {data.map((cell, index) => {
            console.log(cell[1])
            return (
                <tr>
                      <td>{cell[index]}</td>
                      <td>{cell[1]}</td>
                      <td style={{
                        width: '4rem'
                      }}><Button>Go</Button>{' '}</td>
                    </tr>
              )
        })}
            </>
    )
    }




export default DashboardContent
