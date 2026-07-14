import { RotateCcw } from 'lucide-react';
import Image from 'next/image';

type TimerControlsProps = {
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
}: TimerControlsProps) {

  return (
    <div className="flex justify-center">


      <button
        type="button"
        onClick={isRunning ? onPause : onStart}
        className="p-2 text-xl font-bold border rounded-xl"
      >
        <p className='px-2'>{isRunning ? "Pause" : "Start"}</p>
      </button>

      <button
        type="button"
        onClick={onReset}
        className="p-2 "
        >
          <RotateCcw size={24}/>
      </button>
    </div>
  )
}