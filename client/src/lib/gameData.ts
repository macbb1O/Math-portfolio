import { Button } from "@/components/ui/button";
import { useGameStore } from "@/lib/gameStore";
import { LEVELS, isLevelUnlocked } from "@/lib/gameData";
import { XPBar } from "./XPBar";
import { StreakCounter } from "./StreakCounter";
import { EnergyHearts } from "./EnergyHearts";
import { LevelNode } from "./LevelNode";
import { ArrowLeft, Trophy } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function WorldMap() {
  const { setScreen, completedLevels, unlockedBadges } = useGameStore();

  return (
    <div className="min-h-screen flex flex-col relative z-10">
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-lg border-b border-border p-4">
        <div className="flex items-center justify-between gap-4 max-w-4xl mx-auto flex-wrap">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setScreen("title")}
            data-testid="button-back-to-title"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="flex-1 max-w-sm">
            <XPBar />
          </div>

          <div className="flex items-center gap-4">
            <EnergyHearts />
            <StreakCounter />
          </div>
        </div>
      </header>

      <ScrollArea className="flex-1 px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Unit 1: Linear Relations</h2>
            <p className="text-muted-foreground text-sm">
              Complete all levels to become a Legend of Lines
            </p>

            <div className="flex items-center justify-center gap-4 mt-4 text-sm">
              <span className="flex items-center gap-1">
                <Trophy className="w-4 h-4 text-neon-gold" />
                <span data-testid="text-badges-unlocked">{unlockedBadges.length}/10</span>
              </span>
              <span className="text-muted-foreground">
                <span data-testid="text-levels-completed">{completedLevels.length}</span>/
                {LEVELS.length} Levels
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-purple/50 via-neon-blue/50 to-neon-pink/50 -translate-x-1/2" />
            <div className="relative flex flex-col gap-4">
              {LEVELS.map((level, index) => {
                const isUnlocked = isLevelUnlocked(level.id, completedLevels);
                const isCompleted = completedLevels.includes(level.id);
                const isFirst = index === 0;
                const isLast = index === LEVELS.length - 1;

                return (
                  <div
                    key={level.id}
                    className={`flex items-center gap-4 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex-1" />
                    <LevelNode
                      level={level}
                      isUnlocked={isUnlocked}
                      isCompleted={isCompleted}
                      isFirst={isFirst}
                      isLast={isLast}
                    />
                    <div className="flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
