import React from 'react'
import { ClubCard } from '../../components'
import './index.css'

const ClubView = () => {
    const things = [["Biology","6"]["Maths","4"]]
    return (

        things.map((cell) => {
            
            return (
                
                <div className="main">
                <ClubCard/>
                </div>
                )
                
            })
            
            )
        
    }
 

export default ClubView
