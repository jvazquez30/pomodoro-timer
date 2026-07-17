type ModeSelectorProps = {
  onFocus: () => void;
  onShortBreak: () => void;
  onLongBreak: () => void;

}


export default function ModeSelector({
  onFocus,
  onShortBreak,
  onLongBreak,

}: ModeSelectorProps) {
  return (
    <div className="flex justify-around gap-5">
      <button
        type="button"
        className=" hover:bg-indigo-600 rounded-2xl"
        onClick={onFocus}
      >
        <p className="font-bold text-xs px-7">Focus Time</p>
      </button>

      <button
        type="button"
        className="hover:bg-indigo-600 rounded-2xl"
        onClick={onShortBreak}
      >
        <p className="font-bold text-xs px-7">Short Break</p>
      </button>


      <button
        type="button"
        className="hover:bg-indigo-600 rounded-2xl"
        onClick={onLongBreak}
      >
        <p className="font-bold text-xs px-7">Long Break</p>
      </button>

    </div>
  )
}