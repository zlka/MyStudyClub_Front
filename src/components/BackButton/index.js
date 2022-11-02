import React from 'react';
import { useNavigate } from 'react-router-dom';
import {ArrowLeft, NodeMinus} from 'react-bootstrap-icons'

const BackButton = () => {
    const goTo = useNavigate();

    const style = {
        cursor: 'pointer',
        border: 'none',
        fontSize:'25px',
        backgroundColor:'white',
        color:'teal',
        marginLeft: '20px',
        marginBottom: '0px'
    }

    return <button id="back-button" onClick={() => goTo(-1)} style={style}> <ArrowLeft /></button>
}

export default BackButton
