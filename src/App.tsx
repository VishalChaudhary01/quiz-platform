import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { QuizPage } from "./pages/quizPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/quiz" element={ <QuizPage /> } />
      </Routes>
    </BrowserRouter>
  )
}
