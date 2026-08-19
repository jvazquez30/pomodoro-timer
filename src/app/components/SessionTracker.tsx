import { SESSIONS_TILL_LONG_BREAK } from "./PomodoroTimer"
import type { Mode } from "./PomodoroTimer"

type SessionTrackerProps = {
  completions: number;
  mode: Mode;
}

export default function SessionTracker({
  completions,
  mode,
}: SessionTrackerProps) {
  const sessionCircles = Array.from({ length: SESSIONS_TILL_LONG_BREAK })
  const completeCircle = mode === "longBreak" ? SESSIONS_TILL_LONG_BREAK : completions % SESSIONS_TILL_LONG_BREAK
  
  return (
    <div className="grid justify-center gap-1">
      <p className="font-semibold">Completed Sessions</p>
      <div className="flex justify-around">
        {sessionCircles.map((_, index) => (
          <div key={index} className={`${index < completeCircle ? "bg-white" : "bg-transparent"} w-3 h-3 rounded-full outline`}></div>
        ))}
      </div>
    </div>
  )
}