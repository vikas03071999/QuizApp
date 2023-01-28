import React, { useEffect, useState } from 'react'

export default function Timer({setTimer,quesNumber}) {

    const[timing,setTiming] = useState(30);

    useEffect(()=>{
        if(timing === 0){
            return setTimer(true);
        }
        const interval = setInterval(()=>{
            setTiming(prev=>prev-1);
        },1000);

        return ()=> clearInterval(interval);
    },[setTimer,timing]);

    useEffect(()=>{
        setTiming(30);
    },[quesNumber]);


  return (
    <div>
      {timing}
    </div>
  )
}
