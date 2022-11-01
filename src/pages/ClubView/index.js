import React from 'react'
import { ClubCard } from '../../components'
import './index.css'

const ClubView = () => {
  return (
    <div className="main">
        <ClubCard name={"Maths"} set={6}/>
        <ClubCard name={"Biology"}set={4} />
    </div>
  )
}

export default ClubView
