
type SessionTrackerProps = {
  completions: number;
}

export default function SessionTracker({
  completions,
}: SessionTrackerProps) {
  

return (
  <div className="flex justify-center font-bold text-sm">
    Total Focus Sessions: {completions}
  </div>
)
}