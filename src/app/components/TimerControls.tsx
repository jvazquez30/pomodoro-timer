import { RotateCcw } from 'lucide-react';

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
    <div className="flex justify-center  ">

      <div className='grid grid-cols-1'>
        <button
          type="button"
          onClick={isRunning ? onPause : onStart}
          className="py-2 px-10 bg-white border shadow-2xl "
        >
          <p key={isRunning ? "pause" : "start"} className='text-xl text-background dark:text-background transition-colors duration-1000 font-bold animate-text-focus-in'>{isRunning ? "Pause" : "Start"}</p>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="p-2 mt-2 flex justify-center"
        >
          <RotateCcw size={22} />
        </button>
      </div>
    </div>
  )
}