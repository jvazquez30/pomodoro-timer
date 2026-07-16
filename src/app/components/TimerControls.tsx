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
    <div className="flex justify-center pt-3 ">

      <div className='grid grid-cols-1'>
        <button
          type="button"
          onClick={isRunning ? onPause : onStart}
          className="py-2 px-10 bg-white border shadow-2xl "
        >
          <p className='text-xl text-[#241571] font-bold'>{isRunning ? "Pause" : "Start"}</p>
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