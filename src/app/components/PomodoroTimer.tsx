"use client"
import { useState, useEffect, useRef } from "react"
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import ModeSelector from "./ModeSelector";
import SessionTracker from "./SessionTracker";

const DURATIONS = {
  focus: 25,
  shortBreak: 5,
  longBreak: 15
}

export const SESSIONS_TILL_LONG_BREAK = 4 as const

export type Mode = keyof typeof DURATIONS

function getNextMode(finishedMode: Mode, focusCompletions: number): Mode {
  if (finishedMode === "focus") {
    if (focusCompletions % SESSIONS_TILL_LONG_BREAK === 0) {
      return "longBreak"
    } else {
      return "shortBreak"
    }
  } else {
    return "focus"
  }
}

export default function PomodoroTimer() {
  const [completions, setCompletions] = useState(0)
  const [mode, setMode] = useState<Mode>("focus")
  const [isRunning, setIsRunning] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(DURATIONS[mode] * 60);
  const endTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    endTimeRef.current = Date.now() + secondsLeft * 1000 // gives a fixed timer for endTimeRef

    const id = setInterval(() => {
      if (endTimeRef.current === null) return; // in case endTime is null
      const remainingTime = Math.round((endTimeRef.current - Date.now()) / 1000)
      if (remainingTime <= 0) {
        const next = getNextMode(mode, completions + 1)
        if (mode === "focus") {
          setCompletions(c => c + 1)
          new Audio("/sounds/completionSound.m4a").play().catch(err => console.error('sound unable to play', err))
        } else {
          new Audio("/sounds/breakComplete.mp3").play().catch(err => console.error('sound unable to play', err))
        }
        setMode(next)
        setIsRunning(next !== "focus") 
        setSecondsLeft(DURATIONS[next] * 60)
        return;
      }
      setSecondsLeft(remainingTime)
    }, 1000)

    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, mode, completions]) // secondsLeft excluded to prevent constant rebuilding per second


  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStart = () => {
    setIsRunning(true)
    if (secondsLeft <= 0) {
      setSecondsLeft(DURATIONS[mode] * 60)
    }
  }

  const handleReset = () => {
    setIsRunning(false)
    setSecondsLeft(DURATIONS[mode] * 60)
  }

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode)
    setIsRunning(false)
    setSecondsLeft(DURATIONS[newMode] * 60)

  }



  return (
    <div className='flex-col border rounded-2xl p-10 transition-colors duration-1000'>

      <div className="">
        <ModeSelector
          onFocus={() => handleModeChange("focus")}
          onLongBreak={() => handleModeChange("longBreak")}
          onShortBreak={() => handleModeChange("shortBreak")}
          mode={mode}
        />
      </div>

      <div className="flex justify-center p-5">
        <TimerDisplay key={mode} secondsLeft={secondsLeft} />
      </div>

      <TimerControls
        isRunning={isRunning}
        onPause={handlePause}
        onStart={handleStart}
        onReset={handleReset}
      />

      <SessionTracker
        completions={completions}
        mode={mode}
      />
    </div>
  )
}