import { RotateCcw, Trophy } from "lucide-react";
import { quizData } from "@/data/quizData";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const QuizResult: React.FC<QuizResultProps> = ({
  score,
  attempts,
  restartQuiz,
}) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="text-yellow-500" />
          Quiz Complete!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">
            Your Score: {score}/{quizData.questions.length}
          </h2>
          <p className="text-gray-600">
            Percentage: {((score / quizData.questions.length) * 100).toFixed(1)}
            %
          </p>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Previous Attempts:</h3>
          <div className="space-y-2">
            {attempts.map((attempt, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm">
                  Date: {attempt.date} - Score: {attempt.score}/
                  {attempt.totalQuestions}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Button
          onClick={restartQuiz}
          className="w-full flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again
        </Button>
      </CardContent>
    </Card>
  );
};
