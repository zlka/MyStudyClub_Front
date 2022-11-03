import React from 'react'
import axios from 'axios';
import {useEffect, useState } from 'react';
import { ClubCard } from '../../components'
import './index.css'
<<<<<<< HEAD
import { useLocation } from 'react-router-dom'

const ClubView = () => {
    const location = useLocation()
    console.log(location.state)

    return (
=======
import { BackButton } from "../../components"

import { useLocation } from "react-router-dom";

const ClubView = () => {
    const [sets, setSets] = useState(null)
    const location = useLocation()
>>>>>>> 2f54b25b08c789b6ab4f4ca6e5dad9622356d017

    useEffect(() => {
        let data = '';

        let config = {
            method: 'get',
            url: `https://my-study-club.herokuapp.com/sets/${location.state}`,
            headers: { },
            data : data
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            setSets(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])



    return (
            <div className="workouts">
            {sets ? sets.map(set => (
                    <ClubCard  name={set.set_name} key={set.id} set={set["club.club_name"]} />
                )) : <h3> Loading </h3>}
            </div>
        );   
    }
 

export default ClubView
