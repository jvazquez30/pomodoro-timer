import type { Mode } from "./PomodoroTimer";

type ModeSelectorProps = {
  onFocus: () => void;
  onShortBreak: () => void;
  onLongBreak: () => void;
  mode: Mode

}


export default function ModeSelector({
  onFocus,
  onShortBreak,
  onLongBreak,
  mode,
  

}: ModeSelectorProps) {
  return (
    <div className="flex justify-around gap-2">
      <button
        type="button"
        className={`${mode === "focus" ? "bg-white/30": "bg-transparent"} hover:bg-white/15  rounded-2xl `}
        onClick={onFocus}
      >
        <p className="font-bold text-sm text-nowrap px-2 ">Focus Time</p>
      </button>

      <button
        type="button"
        className={`${mode === "shortBreak" ? "bg-white/30": "bg-transparent"} hover:bg-white/15 rounded-2xl`}
        onClick={onShortBreak}
      >
        <p className="font-bold text-sm text-nowrap  px-2">Short Break</p>
      </button>


      <button
        type="button"
        className={`${mode === "longBreak" ? "bg-white/30": "bg-transparent"} hover:bg-white/15 rounded-2xl`}
        onClick={onLongBreak}
      >
        <p className="font-bold text-sm text-nowrap px-2">Long Break</p>
      </button>

    </div>
  )
}