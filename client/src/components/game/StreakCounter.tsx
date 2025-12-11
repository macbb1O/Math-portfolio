import { Flame } from "lucide-react";
import { useGameStore } from "@/lib/gameStore";
import { cn } from "@/lib/utils";

export function StreakCounter({ className }: { className?: string }) {
  const { streak, highestStreak } = useGameStore();
  
  const isMilestone = streak === 3 || streak === 5 || streak === 10 || streak >= 15;
  const isHot = streak >= 5;
  const isOnFire = streak >= 10;

  return (
    <div 
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-full",
        isOnFire ? "bg-orange-500/20 neon-glow-gold" : 
        isHot ? "bg-orange-400/15" : 
        "bg-muted",
        isMilestone && "animate-streak-milestone",
        className
      )}
      data-testid="streak-counter"
    >
      <Flame 
        className={cn(
          "w-5 h-5",
          isOnFire ? "text-orange-400 animate-flame-flicker" : 
          isHot ? "text-orange-400" : 
          streak > 0 ? "text-orange-300" : 
          "text-muted-foreground"
        )} 
      />
      <span 
        className={cn(
          "font-bold",
          isOnFire ? "text-orange-400 neon-text-gold" : 
          isHot ? "text-orange-300" : 
          streak > 0 ? "text-foreground" : 
          "text-muted-foreground"
        )}
        data-testid="text-streak"
      >
        {streak}
      </span>
      {highestStreak > 0 && streak < highestStreak && (
        <span className="text-xs text-muted-foreground">
          (Best: {highestStreak})
        </span>
      )}
    </div>
  );
}
