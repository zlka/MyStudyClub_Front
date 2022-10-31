import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const goTo = useNavigate();

    return <button id="back-button" onClick={() => goTo(-1)} style={{cursor: 'pointer'}}>Back</button>
}

export default BackButton
