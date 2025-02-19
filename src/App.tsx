import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="flex items-center justify-center w-full max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Hi There</h2>
        <Button>Click me</Button>
      </div>
    </div>
  )
}
