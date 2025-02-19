import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { quizData } from "@/data/quizData";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full mx-auto max-w-7xl min-h-screen p-4">
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground/90 text-center">
          Welcome to the <span className="text-primary">Quiz Platform</span>
        </h1>
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-foreground/90 mb-4">
            Rules to Play the Quiz
          </h3>
          <ul className="list-disc list-inside space-y-3 text-foreground/80">
            {quizData.instructions.map((title, index) => (
              <li key={index} className="flex items-start gap-2">
                <strong>{index + 1}.</strong>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Button
          onClick={() => navigate("/quiz")}
          className="w-64 text-base font-medium"
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
};
