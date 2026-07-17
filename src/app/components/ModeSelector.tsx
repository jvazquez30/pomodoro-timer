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
    <div>
      <button
      type="button"
      className="border"
      onClick={onFocus}
      >
        Focus
      </button>

      <button
      type="button"
      className="border"
      onClick={onShortBreak}
      >
        Short Break
      </button>


      <button
      type="button"
      className="border"
      onClick={onLongBreak}
      >
        Long Break
      </button>

    </div>
  )
}