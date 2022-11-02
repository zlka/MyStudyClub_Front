import React,{useState,useEffect} from 'react'
import './timer.css'
const Timer = () => {
    const[loading,setLoad]=useState(true)
    // const [minutes,setMins] = useState(0)
    // const [seconds,setSec] = useState(0)
    const [time, setTime] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoad("false")
    //     }, 3000)
    
    // },[])
    // const startTimer = async () => {
    //       setTime(time => time + 10);
    //         }

    useEffect(() => {
        const startTimer = async () => {
            setTime(time => time + 10);
        }
        startTimer()
    }, []) 
      

    return (
        <div className="timer">
            <p>
            <span className="minute">
            {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
            </span>
            <span className="second">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
            </span>
        </p>
        
        </div>
    )
};

export default Timer
