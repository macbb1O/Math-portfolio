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

  // Group levels by unit (1.x, 2.x, etc.)
  const units = LEVELS.reduce<Record<string, typeof LEVELS>>((acc, level) => {
    const unit = level.id.split(".")[0];
    if (!acc[unit]) acc[unit] = [];
    acc[unit].push(level);
    return acc;
  }, {});

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b p-4">
        <div className="flex items-center justify-between gap-4 max-w-4xl mx-auto flex-wrap">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setScreen("title")}
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

      {/* Content */}
      <ScrollArea className="flex-1 px-4 py-6">
        <div className="max-w-md mx-auto">
          {Object.entries(units).map(([unit, unitLevels]) => (
            <section key={unit} className="mb-12">
              {/* Unit Header */}
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold">Unit {unit}</h2>
                <p className="text-sm text-muted-foreground">
                  Complete all levels to finish this unit
                </p>

                <div className="flex justify-center gap-6 mt-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    <span>{unlockedBadges.length}/10</span>
                  </div>

                  <div className="text-muted-foreground">
                    {completedLevels.length}/{LEVELS.length} Levels
                  </div>
                </div>
              </div>

              {/* Levels */}
              <div className="flex flex-col gap-4">
                {unitLevels.map((level, index) => {
                  const isUnlocked = isLevelUnlocked(
                    level.id,
                    completedLevels
                  );
                  const isCompleted = completedLevels.includes(level.id);

                  return (
                    <div
                      key={level.id}
                      className={`flex ${
                        index % 2 === 0
                          ? "justify-start"
                          : "justify-end"
                      }`}
                    >
                      <LevelNode
                        level={level}
                        isUnlocked={isUnlocked}
                        isCompleted={isCompleted}
                        isFirst={index === 0}
                        isLast={index === unitLevels.length - 1}
                      />
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
