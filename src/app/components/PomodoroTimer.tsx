"use client"
import { useState, useEffect, useRef } from "react"
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";


export default function PomodoroTimer() {
  const defaultNum = 25
  const [isRunning, setIsRunning] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(defaultNum * 60);
  const endTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isRunning) return;
    endTimeRef.current = Date.now() + secondsLeft * 1000 // gives a fixed timer for endTimeRef

    const id = setInterval(() => {
      if (endTimeRef.current === null) return; // in case endTime is null
      setSecondsLeft(Math.round((endTimeRef.current - Date.now()) / 1000))
    }, 1000)

    return () => clearInterval(id)
  }, [isRunning])

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleReset = () => {
    setIsRunning(false)
    setSecondsLeft(defaultNum * 60)
  }



  return (
    <div className="f">
     <TimerDisplay secondsLeft={secondsLeft}/>

     <TimerControls 
     isRunning={isRunning}
     onPause={handlePause}
     onStart={handleStart}
     onReset={handleReset}
     />
      
    </div>
  )
}