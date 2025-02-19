import { Button } from "@/components/ui/button";
import { quizData } from "@/data/quixData";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full mx-auto max-w-7xl min-h-screen p-4">
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground/90">
          Welcome to the <span className="text-primary">Quiz Platform</span>
        </h1>
        <div className="w-full md:w-2/3 lg:w-1/2 text-sm text-gray-500 p-4">
          <h3 className="text-lg font-semibold mb-2">Rules to Play the Quiz</h3>
          <ul className="list-disc list-inside space-y-2">
            {quizData.instructions.map((title, index) => (
              <li className="flex items-center gap-1">
                <strong>{index + 1}.</strong>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button onClick={() => navigate("/quiz")} className="w-48">
          Start Quiz
        </Button>
      </div>
    </div>
  );
};
