import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import type { Question } from "@shared/schema";
import { cn } from "@/lib/utils";
import { Check, X, Send } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  showResult: boolean;
  isCorrect: boolean | null;
  disabled: boolean;
}

export function QuestionCard({ 
  question, 
  onAnswer, 
  showResult, 
  isCorrect, 
  disabled 
}: QuestionCardProps) {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAnswer(inputValue.trim());
    }
  };

  const handleOptionClick = (option: string) => {
    if (disabled) return;
    setSelectedOption(option);
    onAnswer(option);
  };

  return (
    <Card className={cn(
      "p-6 rounded-3xl transition-all duration-300",
      showResult && (isCorrect 
        ? "neon-glow-green" 
        : "animate-shake"
      )
    )} data-testid="question-card">
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            {question.type === "mcq" ? "Multiple Choice" : "Enter Answer"}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold mt-2 font-mono" data-testid="text-question">
            {question.question}
          </h3>
        </div>

        {question.type === "mcq" && question.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options.map((option, index) => {
              const isSelected = selectedOption === option;
              const isCorrectOption = showResult && option === question.correctAnswer;
              const isWrongSelection = showResult && isSelected && !isCorrect;

              return (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className={cn(
                    "py-6 text-left justify-start rounded-xl transition-all duration-200 font-mono",
                    isSelected && !showResult && "border-neon-purple bg-neon-purple/10",
                    isCorrectOption && "border-neon-green bg-neon-green/20 text-neon-green",
                    isWrongSelection && "border-destructive bg-destructive/20 text-destructive animate-shake",
                    !disabled && !showResult && "cursor-pointer"
                  )}
                  onClick={() => handleOptionClick(option)}
                  disabled={disabled}
                  data-testid={`button-option-${index}`}
                >
                  <span className="flex items-center gap-3 w-full">
                    <span className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                      isCorrectOption ? "bg-neon-green text-white" :
                      isWrongSelection ? "bg-destructive text-white" :
                      isSelected ? "bg-neon-purple text-white" :
                      "bg-muted text-muted-foreground"
                    )}>
                      {isCorrectOption ? <Check className="w-4 h-4" /> :
                       isWrongSelection ? <X className="w-4 h-4" /> :
                       String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                  </span>
                </Button>
              );
            })}
          </div>
        )}

        {question.type === "input" && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your answer..."
                className={cn(
                  "text-lg py-6 px-4 rounded-xl font-mono text-center",
                  showResult && isCorrect && "border-neon-green bg-neon-green/10",
                  showResult && !isCorrect && "border-destructive bg-destructive/10"
                )}
                disabled={disabled}
                autoFocus
                data-testid="input-answer"
              />
            </div>
            
            {!showResult && (
              <Button
                type="submit"
                size="lg"
                className="rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue font-bold"
                disabled={disabled || !inputValue.trim()}
                data-testid="button-submit-answer"
              >
                <Send className="w-4 h-4 mr-2" />
                Check Answer
              </Button>
            )}
          </form>
        )}
      </div>

      {showResult && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {isCorrect && <SparkleEffect />}
        </div>
      )}
    </Card>
  );
}

function SparkleEffect() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-neon-gold rounded-full animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}
