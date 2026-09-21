import { Button } from '@/components/ui/button'
import HomePage from '@/pages/HomePage'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 text-slate-900">
      <div className="mx-auto flex max-w-2xl flex-col items-start gap-6 rounded-xl bg-white p-8 shadow">
        <HomePage />
        <Button>shadcn/ui button</Button>
      </div>
    </main>
  )
}

export default App
