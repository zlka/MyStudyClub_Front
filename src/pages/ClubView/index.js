import React from 'react'
import { ClubCard } from '../../components'
import './index.css'

const ClubView = () => {
    const things = [["Biology","6"],["Maths","4"],["Something","5"]]
    return (

        things.map((cell, index) => {
            
            return (
                
                
                <ClubCard name={cell[0]} set={cell[1]}/>
                
                )
                
            })
            
            )
        
    }
 

export default ClubView
