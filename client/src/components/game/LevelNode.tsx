import { Button } from "@/components/ui/button";
import { useGameStore } from "@/lib/gameStore";
import type { Level } from "@shared/schema";
import { cn } from "@/lib/utils";
import { Lock, Star, Skull, BookOpen, Award, Trophy } from "lucide-react";

interface LevelNodeProps {
  level: Level;
  isUnlocked: boolean;
  isCompleted: boolean;
  isFirst: boolean;
  isLast: boolean;
}

export function LevelNode({ level, isUnlocked, isCompleted, isFirst, isLast }: LevelNodeProps) {
  const { startLevel } = useGameStore();

  const isBoss = level.type === "boss";
  const isTest = level.type === "test";
  const isReview = level.type === "review";

  const getNodeIcon = () => {
    if (!isUnlocked) return <Lock className="w-5 h-5" />;
    if (isCompleted) return <Star className="w-5 h-5 fill-current" />;
    if (isTest) return <Trophy className="w-6 h-6" />;
    if (isBoss) return <Skull className="w-5 h-5" />;
    if (isReview) return <Award className="w-5 h-5" />;
    return <BookOpen className="w-5 h-5" />;
  };

  const getNodeStyles = () => {
    if (!isUnlocked) {
      return "bg-muted text-muted-foreground border-muted cursor-not-allowed opacity-50";
    }
    if (isCompleted) {
      return "bg-neon-gold/20 text-neon-gold border-neon-gold neon-glow-gold";
    }
    if (isTest) {
      return "bg-gradient-to-br from-neon-purple to-neon-pink text-white border-neon-pink neon-glow-pink animate-pulse-glow";
    }
    if (isBoss) {
      return "bg-gradient-to-br from-destructive/80 to-destructive text-white border-destructive";
    }
    return "bg-card text-foreground border-neon-purple/50";
  };

  return (
    <div className="relative animate-pop-in" data-testid={`level-node-${level.id}`}>
      <Button
        variant="ghost"
        className={cn(
          "relative flex flex-col items-center justify-center gap-1 p-4 rounded-2xl border-2 transition-all duration-300",
          isBoss || isTest ? "w-24 h-24" : "w-20 h-20",
          getNodeStyles(),
          isUnlocked && !isCompleted && "cursor-pointer"
        )}
        disabled={!isUnlocked}
        onClick={() => isUnlocked && startLevel(level.id)}
        data-testid={`button-level-${level.id}`}
      >
        {getNodeIcon()}
        <span className="text-xs font-bold">{level.number}</span>
        
        {isCompleted && (
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-neon-green flex items-center justify-center">
            <Star className="w-2.5 h-2.5 text-white fill-white" />
          </div>
        )}
      </Button>
      
      <div className={cn(
        "absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-center max-w-32",
        isCompleted ? "text-neon-gold" : 
        isUnlocked ? "text-foreground" : 
        "text-muted-foreground"
      )}>
        <span className="font-medium line-clamp-2">{level.title}</span>
      </div>
      
      {(isBoss || isTest) && isUnlocked && !isCompleted && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold uppercase">
          {isTest ? "Final" : "Boss"}
        </div>
      )}
    </div>
  );
}
