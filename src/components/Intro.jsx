import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../app.css" 
import useSound from 'use-sound';
import play from "../assets/play.wav";

const Intro = () => {
  const navigate = useNavigate();
  const[letsPlay] = useSound(play);
  const handleClick = () => {
    letsPlay()
    navigate('/playGame')
  }
  return (
    <div className='introduction'>
      <div className="wrapper">
          <input type ="text" placeholder="Enter your name" className="userInput"/>
          <button type="button" className='startButton' onClick={handleClick}>Start</button>                                         
      </div>
    </div>
  )
}

export default Intro
