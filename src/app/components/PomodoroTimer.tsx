"use client"
import { useState, useEffect, useRef } from "react"


export default function PomodoroTimer() {
  const [isRunning, setIsRunning] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const endTimeRef = useRef<number | null>(null);

useEffect(() => {
  if (!isRunning) return;
  endTimeRef.current = Date.now() + secondsLeft * 1000

  const id = setInterval(() => {
    if (endTimeRef.current === null) return;
  setSecondsLeft(Math.round((endTimeRef.current - Date.now())/ 1000))
  }, 1000)

 return () => clearInterval(id)
},[isRunning])

}