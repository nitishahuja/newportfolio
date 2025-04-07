import { Loader2 } from "lucide-react"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background">
      <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
      <h2 className="text-2xl font-bold text-primary">Initializing Interface</h2>
      <div className="mt-4 w-64 h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-[hsl(var(--neon-purple))] animate-pulse-slow"
          style={{ width: "60%" }}
        ></div>
      </div>
    </div>
  )
}

