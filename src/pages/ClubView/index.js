import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ClubCard } from '../../components'
import './index.css'
import { BackButton, NewSet } from "../../components"
import { PlusCircle } from 'react-bootstrap-icons'

import { useLocation } from "react-router-dom";

const ClubView = () => {
    const [sets, setSets] = useState(null)
    const [hidden, setHidden] = useState(true)
    const location = useLocation()

    useEffect(() => {
        let data = '';

        let config = {
            method: 'get',
            url: `https://my-study-club.herokuapp.com/sets/${location.state}`,
            headers: {},
            data: data
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


    const addSet = () => {
        setHidden(!hidden)

    }

    return (
        <>             
        <BackButton/>
        
        <div className="clubView">
            <div className="clubs">
                {sets ? sets.map(set => (
                    <ClubCard id={set.id} name={set.set_name} key={set.id} set={set["club.club_name"]} />
                )) : <h3> Loading </h3>}
            </div>
            
                <div className="newSet">
                    <div onClick={addSet}>
                        <button id="newSet" ><PlusCircle />Add a new set</button>
                    </div>

                    <div hidden={hidden}>
                        <NewSet id={location.state}/>
                    </div>

                </div>
            
        </div>
        </>
    );
}


export default ClubView
