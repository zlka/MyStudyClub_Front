import React,{useState,useEffect} from 'react'
import './timer.css'
const Timer = () => {
    const [time, setTime] = useState(0);
    const [interval, setinterval] = useState('');

    useEffect(() => {
        setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10)
        
    },[interval])
    


    

    return (
        
        <div className="timer">
            <p>
            <span className="minute">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="second">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </span>
        </p>
        
        </div>
    )
};

export default Timer
