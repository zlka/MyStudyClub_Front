import React from 'react'
import { ClubCard } from '../../components'
import './index.css'
import { useLocation } from 'react-router-dom'

const ClubView = () => {
    const location = useLocation()
    console.log(location.state)

    return (

        things.map((cell, index) => {
            
            return (
                
                
                <ClubCard name={cell[0]} set={cell[1]}/>
                
                )
                
            })
            
            )
        
    }
 

export default ClubView
