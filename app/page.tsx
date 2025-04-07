import { Suspense } from "react"
import MainLayout from "@/components/main-layout"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/90 to-background text-foreground overflow-hidden">
      <Suspense fallback={<LoadingScreen />}>
        <MainLayout />
      </Suspense>
    </main>
  )
}

