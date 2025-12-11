import { Card } from "@/components/ui/card";
import { useGameStore } from "@/lib/gameStore";
import { BADGES } from "@shared/schema";
import { cn } from "@/lib/utils";
import { 
  Brackets, 
  Divide, 
  LineChart, 
  TrendingUp, 
  GitBranch, 
  Target, 
  Replace, 
  Minus, 
  Skull, 
  Crown,
  Lock
} from "lucide-react";

const iconMap: Record<string, any> = {
  Brackets,
  Divide,
  LineChart,
  TrendingUp,
  GitBranch,
  Target,
  Replace,
  Minus,
  Skull,
  Crown,
};

export function BadgeShowcase() {
  const { unlockedBadges } = useGameStore();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {BADGES.map((badge) => {
        const isUnlocked = unlockedBadges.includes(badge.id);
        const Icon = iconMap[badge.icon] || Crown;

        return (
          <Card
            key={badge.id}
            className={cn(
              "p-4 flex flex-col items-center text-center gap-2 transition-all duration-300",
              isUnlocked 
                ? "neon-glow-gold bg-neon-gold/5 border-neon-gold/30" 
                : "opacity-50 grayscale"
            )}
            data-testid={`badge-${badge.id}`}
          >
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              isUnlocked 
                ? "bg-neon-gold/20 text-neon-gold" 
                : "bg-muted text-muted-foreground"
            )}>
              {isUnlocked ? (
                <Icon className="w-6 h-6" />
              ) : (
                <Lock className="w-5 h-5" />
              )}
            </div>
            <span className={cn(
              "text-xs font-medium",
              isUnlocked ? "text-neon-gold" : "text-muted-foreground"
            )}>
              {badge.name}
            </span>
          </Card>
        );
      })}
    </div>
  );
}
