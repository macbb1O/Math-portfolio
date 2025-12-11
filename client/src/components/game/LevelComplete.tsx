import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGameStore } from "@/lib/gameStore";
import { getLevelById, getNextLevel } from "@/lib/gameData";
import { BADGES } from "@shared/schema";
import { Confetti } from "./Confetti";
import { cn } from "@/lib/utils";
import { Star, Trophy, Zap, ArrowRight, Home, Crown } from "lucide-react";

export function LevelComplete() {
  const {
    currentLevelId,
    levelScore,
    levelStreak,
    xp,
    setScreen,
    startLevel,
    unlockedBadges,
  } = useGameStore();

  const [showConfetti, setShowConfetti] = useState(false);
  const [animatedXp, setAnimatedXp] = useState(0);

  const level = getLevelById(currentLevelId || "");
  const nextLevel = getNextLevel(currentLevelId || "");
  const isTest = level?.type === "test";
  const isBoss = level?.type === "boss";

  const earnedBadge = level?.badge ? BADGES.find(b => b.id === level.badge) : null;
  const justEarnedBadge = earnedBadge && unlockedBadges.includes(earnedBadge.id);
  const isPerfect = level && levelScore === level.questions.length;

  useEffect(() => {
    setShowConfetti(true);
    
    const xpTarget = level?.xpReward || 0;
    const duration = 1000;
    const steps = 30;
    const increment = xpTarget / steps;
    let current = 0;
    
    const interval = setInterval(() => {
      current += increment;
      if (current >= xpTarget) {
        setAnimatedXp(xpTarget);
        clearInterval(interval);
      } else {
        setAnimatedXp(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [level]);

  if (!level) return null;

  const handleContinue = () => {
    if (nextLevel) {
      startLevel(nextLevel.id);
    } else {
      setScreen("map");
    }
  };

  return (
    <div className={cn(
      "min-h-screen flex flex-col items-center justify-center p-6 relative z-10",
      isTest && "bg-gradient-to-b from-neon-gold/20 to-background"
    )}>
      <Confetti show={showConfetti} />

      <div className="flex flex-col items-center gap-8 max-w-md w-full animate-bounce-in">
        {isTest ? (
          <div className="flex flex-col items-center gap-4">
            <Crown className="w-20 h-20 text-neon-gold animate-float" />
            <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-neon-gold via-neon-pink to-neon-purple bg-clip-text text-transparent neon-text-gold">
              YOU PASSED THE UNIT!
            </h1>
            <p className="text-muted-foreground text-center">
              You are now a Legend of Lines!
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-10 h-10 transition-all duration-500",
                    i < (isPerfect ? 3 : levelScore >= level.questions.length * 0.7 ? 2 : 1)
                      ? "text-neon-gold fill-neon-gold animate-pop-in"
                      : "text-muted-foreground"
                  )}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <h2 className="text-3xl font-bold text-center mt-4">
              {isPerfect ? "Perfect!" : isBoss ? "Boss Defeated!" : "Level Complete!"}
            </h2>
            <p className="text-muted-foreground">
              {level.number}: {level.title}
            </p>
          </div>
        )}

        <Card className="w-full p-6 rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Score</span>
              <span className="font-bold text-lg" data-testid="text-final-score">
                {levelScore}/{level.questions.length}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Best Streak</span>
              <span className="font-bold text-lg flex items-center gap-1">
                <Zap className="w-4 h-4 text-neon-gold" />
                {levelStreak}
              </span>
            </div>
            
            <div className="h-px bg-border" />
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">XP Earned</span>
              <span className="font-bold text-xl text-neon-purple flex items-center gap-1" data-testid="text-xp-earned">
                +{animatedXp}
                <Star className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Card>

        {justEarnedBadge && earnedBadge && (
          <Card className="w-full p-6 rounded-2xl bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 border-neon-purple animate-pop-in">
            <div className="flex flex-col items-center gap-3">
              <Trophy className="w-12 h-12 text-neon-gold animate-float" />
              <div className="text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Badge Unlocked!</p>
                <h3 className="text-xl font-bold text-neon-gold">{earnedBadge.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{earnedBadge.description}</p>
              </div>
            </div>
          </Card>
        )}

        <div className="flex flex-col gap-3 w-full">
          {nextLevel ? (
            <Button
              size="lg"
              className="w-full py-6 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-pink font-bold text-lg"
              onClick={handleContinue}
              data-testid="button-continue-next-level"
            >
              Continue
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          ) : (
            <Button
              size="lg"
              className="w-full py-6 rounded-2xl bg-gradient-to-r from-neon-gold to-neon-pink font-bold text-lg"
              onClick={() => setScreen("map")}
              data-testid="button-return-to-map"
            >
              <Crown className="w-5 h-5 mr-2" />
              View Your Progress
            </Button>
          )}
          
          <Button
            variant="ghost"
            onClick={() => setScreen("map")}
            data-testid="button-back-to-map-complete"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Map
          </Button>
        </div>
      </div>
    </div>
  );
}
