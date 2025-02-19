import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Timer, CheckCircle, XCircle } from "lucide-react";
import { quizData } from "@/data/quixData";
import { QuizResult } from "./QuizResult";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FEEDBACK_DELAY, TIME_LIMIT_PER_QUESTION } from "@/config";

export const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(TIME_LIMIT_PER_QUESTION);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [integerAnswer, setIntegerAnswer] = useState<string>("");

  const currentQuestion = useMemo(
    () => quizData.questions[currentQuestionIndex],
    [currentQuestionIndex]
  );

  useEffect(() => {
    if (timeLeft > 0 && !quizComplete && !showFeedback) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showFeedback) {
      handleAnswer(null);
    }
  }, [timeLeft, quizComplete, showFeedback]);

  const handleAnswer = useCallback(
    (answer: string | null) => {
      const finalAnswer =
        answer ??
        (quizData.questions[currentQuestionIndex].type === "integer"
          ? integerAnswer
          : null);
      setSelectedAnswer(finalAnswer);
      setShowFeedback(true);
      const currentQuestion = quizData.questions[currentQuestionIndex];
      if (finalAnswer === currentQuestion.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
      setTimeout(() => {
        setShowFeedback(false);
        setIntegerAnswer("");
        if (currentQuestionIndex < quizData.questions.length - 1) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setTimeLeft(TIME_LIMIT_PER_QUESTION);
        } else {
          setQuizComplete(true);
          setAttempts((prevAttempts) => [
            ...prevAttempts,
            {
              date: new Date().toLocaleString(),
              score:
                score + (finalAnswer === currentQuestion.correctAnswer ? 1 : 0),
              totalQuestions: quizData.questions.length,
            },
          ]);
        }
      }, FEEDBACK_DELAY);
    },
    [currentQuestion, currentQuestionIndex, integerAnswer, score]
  );

  const restartQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(TIME_LIMIT_PER_QUESTION);
    setQuizComplete(false);
    setShowFeedback(false);
    setIntegerAnswer("");
  }, []);

  if (quizComplete) {
    return (
      <QuizResult score={score} attempts={attempts} restartQuiz={restartQuiz} />
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto min-h-[340px] relative">
      <CardHeader>
        <div className="flex justify-between items-center">
          <p className="font-medium text-foreground/90">
            Question {currentQuestionIndex + 1} of {quizData.questions.length}
          </p>
          <div className="flex items-center gap-2">
            <Timer className="w-4 h-4" />
            <span
              className={`font-mono ${timeLeft <= 10 ? "text-red-500" : ""}`}
            >
              {timeLeft}s
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h2 className="text-xl mb-4">{currentQuestion.question}</h2>
          {currentQuestion.type === "multiple-choice" ? (
            <div className="space-y-3">
              {currentQuestion.options?.map((option, index) => (
                <Button
                  variant="outline"
                  key={option}
                  onClick={() => !showFeedback && handleAnswer(option)}
                  className={`w-full justify-start text-left ${
                    showFeedback
                      ? option === currentQuestion.correctAnswer
                        ? "bg-green-500 hover:bg-green-600"
                        : option === selectedAnswer
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-gray-100 hover:bg-gray-200"
                      : ""
                  }`}
                  disabled={showFeedback}
                >
                  <span className="mr-4 font-semibold">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                  {showFeedback && option === currentQuestion.correctAnswer && (
                    <CheckCircle className="ml-auto w-4 h-4" />
                  )}
                  {showFeedback &&
                    option === selectedAnswer &&
                    option !== currentQuestion.correctAnswer && (
                      <XCircle className="ml-auto w-4 h-4" />
                    )}
                </Button>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <Input
                type="number"
                placeholder="Enter your answer..."
                value={integerAnswer}
                onChange={(e) => setIntegerAnswer(e.target.value)}
                disabled={showFeedback}
                className="text-lg"
              />
              <Button
                onClick={() => !showFeedback && handleAnswer(integerAnswer)}
                className="w-full"
                disabled={showFeedback || !integerAnswer}
              >
                Submit Answer
              </Button>
              {showFeedback && (
                <div
                  className={`p-4 rounded-lg ${
                    integerAnswer === currentQuestion.correctAnswer
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  <p>Correct answer: {currentQuestion.correctAnswer}</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="absolute bottom-6 right-6">
          <p className="text-sm text-gray-600">
            Current Score: {score}/
            {currentQuestionIndex + (showFeedback ? 1 : 0)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
