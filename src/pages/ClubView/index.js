import React from 'react'
import { ClubCard } from '../../components'
import './index.css'
import { BackButton } from "../../components"


const ClubView = () => {
    const things = [["Biology", "6"], ["Maths", "4"], ["Something", "5"]]


    return (
        <> 
        <BackButton />
        {
        things.map((cell, index) => {
            return (
                <ClubCard name={cell[0]} />
            )
        })
        }

        </>

    )

}


export default ClubView
