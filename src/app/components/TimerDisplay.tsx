

type TimerDisplayProps = {
  secondsLeft: number;
}

export default function TimerDisplay({
  secondsLeft,
}: TimerDisplayProps) {
  const seconds = secondsLeft % 60
  const minutes = Math.floor(secondsLeft / 60)
  const paddedMinutes = String(minutes).padStart(2, "0")
  const paddedSeconds = String(seconds).padStart(2, "0")


  return (
    <div className="flex justify-center text-7xl font-[950]">
      {paddedMinutes}:{paddedSeconds}
    </div>
  )
}