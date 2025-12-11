import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useGameStore } from "@/lib/gameStore";
import { getLevelById } from "@/lib/gameData";
import { XPBar } from "./XPBar";
import { StreakCounter } from "./StreakCounter";
import { EnergyHearts } from "./EnergyHearts";
import { QuestionCard } from "./QuestionCard";
import { ArrowLeft, Clock, Lightbulb, Zap, Skull, Crown, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export function GameplayScreen() {
  const {
    currentLevelId,
    currentQuestionIndex,
    showingResult,
    lastAnswerCorrect,
    streak,
    energy,
    timerSeconds,
    setScreen,
    answerQuestion,
    nextQuestion,
    useHint,
    reviveStreak,
  } = useGameStore();

  const [showHint, setShowHint] = useState(false);
  const [timer, setTimer] = useState(timerSeconds);
  const [answered, setAnswered] = useState(false);

  const level = getLevelById(currentLevelId || "");
  const question = level?.questions[currentQuestionIndex];
  const isTimed = level?.timeLimit && level.timeLimit > 0;
  const isBoss = level?.type === "boss";
  const isTest = level?.type === "test";
  const isBossOrTest = isBoss || isTest;

  const [showBossIntro, setShowBossIntro] = useState(false);
  const [levelInitialized, setLevelInitialized] = useState<string | null>(null);

  useEffect(() => {
    if (currentLevelId && currentLevelId !== levelInitialized) {
      setShowBossIntro(isBossOrTest);
      setTimer(timerSeconds);
      setLevelInitialized(currentLevelId);
    }
  }, [currentLevelId, isBossOrTest, timerSeconds, levelInitialized]);

  useEffect(() => {
    if (isTimed && timer > 0 && !showingResult && !showBossIntro) {
      const interval = setInterval(() => {
        setTimer((t) => {
          if (t <= 1) {
            answerQuestion(false, 0);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTimed, timer, showingResult, showBossIntro, answerQuestion]);

  useEffect(() => {
    setShowHint(false);
    setAnswered(false);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (isBossOrTest && showBossIntro) {
      const timer = setTimeout(() => setShowBossIntro(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isBossOrTest, showBossIntro]);

  const handleAnswer = useCallback((answer: string) => {
    if (answered || showingResult) return;
    setAnswered(true);

    const isCorrect = answer.toLowerCase().trim() === question?.correctAnswer.toLowerCase().trim();
    const xpGain = isCorrect ? (isBossOrTest ? 15 : 10) : 0;
    answerQuestion(isCorrect, xpGain);
  }, [answered, showingResult, question, isBossOrTest, answerQuestion]);

  const handleHint = () => {
    if (useHint() && question?.hint) {
      setShowHint(true);
    }
  };

  const handleRevive = () => {
    if (reviveStreak()) {
      setAnswered(false);
    }
  };

  if (!level || !question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const progress = ((currentQuestionIndex + 1) / level.questions.length) * 100;
  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  if (isBossOrTest && showBossIntro) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10 bg-gradient-to-b from-background via-destructive/20 to-background">
        <div className="flex flex-col items-center gap-6 animate-bounce-in">
          {isTest ? (
            <>
              <Crown className="w-24 h-24 text-neon-gold animate-pulse-glow" />
              <h1 className="text-4xl font-bold text-center neon-text-gold">
                FINAL BOSS
              </h1>
              <p className="text-xl text-muted-foreground">Unit Test: 20 Questions</p>
            </>
          ) : (
            <>
              <Skull className="w-20 h-20 text-destructive animate-pulse-glow" />
              <h1 className="text-3xl font-bold text-center text-destructive">
                BOSS FIGHT
              </h1>
              <p className="text-lg text-muted-foreground">{level?.title}</p>
            </>
          )}
          <div className="flex items-center gap-2 text-destructive mt-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium">No hints available</span>
          </div>
          {isTimed && (
            <div className="flex items-center gap-2 mt-2">
              <Clock className="w-5 h-5 text-neon-cyan" />
              <span className="text-neon-cyan font-mono">{formatTime(timer)}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "min-h-screen flex flex-col relative z-10",
      isBossOrTest && "bg-gradient-to-b from-destructive/10 to-background"
    )}>
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-lg border-b border-border p-4">
        <div className="flex items-center justify-between gap-4 max-w-2xl mx-auto flex-wrap">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setScreen("map")}
            data-testid="button-back-to-map"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex-1 flex flex-col gap-1 max-w-xs">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium">{level.number}: {level.title}</span>
              <span className="text-muted-foreground">
                {currentQuestionIndex + 1}/{level.questions.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <div className="flex items-center gap-3">
            {isTimed && (
              <div className={cn(
                "flex items-center gap-1 px-2 py-1 rounded-full",
                timer < 30 ? "bg-destructive/20 text-destructive" : "bg-muted"
              )}>
                <Clock className="w-4 h-4" />
                <span className="font-mono font-bold text-sm" data-testid="text-timer">
                  {formatTime(timer)}
                </span>
              </div>
            )}
            <StreakCounter />
            <EnergyHearts />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
        <div className="w-full max-w-2xl">
          <QuestionCard
            question={question}
            onAnswer={handleAnswer}
            showResult={showingResult}
            isCorrect={lastAnswerCorrect}
            disabled={answered || showingResult}
          />
        </div>

        {showHint && question.hint && (
          <div className="w-full max-w-2xl p-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 animate-slide-up">
            <div className="flex items-center gap-2 text-neon-cyan mb-1">
              <Lightbulb className="w-4 h-4" />
              <span className="font-medium text-sm">Hint</span>
            </div>
            <p className="text-sm text-foreground">{question.hint}</p>
          </div>
        )}

        {showingResult && (
          <div className={cn(
            "w-full max-w-2xl p-6 rounded-2xl animate-slide-up",
            lastAnswerCorrect 
              ? "bg-neon-green/10 border border-neon-green/30" 
              : "bg-destructive/10 border border-destructive/30"
          )}>
            <div className="flex flex-col items-center gap-4">
              <div className={cn(
                "text-2xl font-bold",
                lastAnswerCorrect ? "text-neon-green" : "text-destructive"
              )}>
                {lastAnswerCorrect ? (
                  streak >= 5 ? "Amazing!" : streak >= 3 ? "Great!" : "Correct!"
                ) : (
                  "Not quite..."
                )}
              </div>
              
              {!lastAnswerCorrect && (
                <p className="text-muted-foreground text-center">
                  The correct answer was: <span className="font-bold text-foreground">{question.correctAnswer}</span>
                </p>
              )}

              {!lastAnswerCorrect && energy >= 5 && streak > 0 && (
                <Button
                  variant="outline"
                  onClick={handleRevive}
                  className="border-neon-gold text-neon-gold"
                  data-testid="button-revive-streak"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Revive Streak (5 Energy)
                </Button>
              )}

              <Button
                size="lg"
                className={cn(
                  "rounded-xl font-bold",
                  lastAnswerCorrect 
                    ? "bg-neon-green text-white" 
                    : "bg-primary"
                )}
                onClick={nextQuestion}
                data-testid="button-next-question"
              >
                {currentQuestionIndex >= level.questions.length - 1 ? "Complete Level" : "Next Question"}
              </Button>
            </div>
          </div>
        )}

        {!showingResult && !isBossOrTest && !showHint && question.hint && energy > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleHint}
            className="text-muted-foreground"
            data-testid="button-use-hint"
          >
            <Lightbulb className="w-4 h-4 mr-2" />
            Use Hint (1 Energy)
          </Button>
        )}
      </main>
    </div>
  );
}
