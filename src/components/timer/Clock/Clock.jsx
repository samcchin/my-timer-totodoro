import React, {useContext, useEffect} from 'react'
import './clock.css';
import whiteTotoro from '../../../assets/mini_white_totoro.png'
import blueTotoro from '../../../assets/blue_totoro.png'
import { StateContext } from '../../state_provider/StateProvider';

const Clock = () => {
    const {time, setTime, isActive, setIsActive, initTime} = useContext(StateContext);
    useEffect(() => {
        if(isActive && time > 0){
            const interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [time, isActive, setTime]);

    const toggleClock = () => {
        setIsActive(!isActive);
    }

    const resetTime = () => {
        setTime(initTime);
        setIsActive(false);
    }

    const getTime = (time) => {
        const minute = Math.floor(time / 60);
        const second = time % 60;
        return `${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second:second}`;

    }

  return (
    <>
    <div className="clock_container">
        <div className="timer_text">{getTime(time)}</div>
        <button onClick={toggleClock} className="start_pause_button">
            <img className="white-totoro" src={whiteTotoro} alt="white totoro"/>
            {isActive ? "Pause":"Start"}
        </button>
        {time === 0 && <button onClick={resetTime} className="reset_button">
            <img className="blue-totoro" src={blueTotoro} alt="blue totoro"/>
            Reset
        </button>}
    </div>
    </>
  )
}

export default Clock
