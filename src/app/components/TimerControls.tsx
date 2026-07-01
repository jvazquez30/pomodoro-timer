import React from "react";


type TimerControlProps = {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
};




export default function TimerControls({
  isRunning,
  onStart,
  onPause,
  onReset,
}: TimerControlProps) {

  return (
    <div>
      <button
        type="button"
        onClick={isRunning ? onPause : onStart}
        className=""
      >
        {isRunning ? "Pause" : "Start"}
      </button>

      <button
        type="button"
        onClick={onReset}
        className=""
      >
        Reset
      </button>
    </div>
  )
}