import { useGameStore } from "@/lib/gameStore";

export function XPBar() {
  const { level, xp, getXpProgress } = useGameStore();
  const progress = getXpProgress();

  return (
    <div className="flex items-center gap-3" data-testid="xp-bar">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-purple/20 border-2 border-neon-purple neon-glow-purple">
        <span className="text-sm font-bold text-neon-purple" data-testid="text-level">{level}</span>
      </div>
      <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-neon-purple to-neon-pink transition-all duration-500"
          style={{ width: `${progress}%` }}
          data-testid="xp-progress"
        />
      </div>
      <span className="text-xs text-muted-foreground min-w-16 text-right" data-testid="text-xp">{xp} XP</span>
    </div>
  );
}
