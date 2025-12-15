import { Button } from "@/components/ui/button";
import { useGameStore } from "@/lib/gameStore";
import { LEVELS, isLevelUnlocked } from "@/lib/gameData";
import { XPBar } from "./XPBar";
import { StreakCounter } from "./StreakCounter";
import { EnergyHearts } from "./EnergyHearts";
import { LevelNode } from "./LevelNode";
import { ArrowLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function WorldMap() {
  const { setScreen, completedLevels } = useGameStore();

  // Group levels by unit number (1.x, 2.x, etc.)
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
        <div className="max-w-3xl mx-auto flex items-center gap-4">
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

          <EnergyHearts />
          <StreakCounter />
        </div>
      </header>

      {/* Map */}
      <ScrollArea className="flex-1 px-4 py-6">
        <div className="max-w-sm mx-auto space-y-10">
          {Object.entries(units).map(([unit, unitLevels]) => (
            <section key={unit}>
              {/* Unit title */}
              <h2 className="text-lg font-semibold mb-4">
                Unit {unit}
              </h2>

              {/* Levels list */}
              <div className="flex flex-col gap-3">
                {unitLevels.map((level, index) => {
                  const isUnlocked = isLevelUnlocked(
                    level.id,
                    completedLevels
                  );
                  const isCompleted = completedLevels.includes(level.id);

                  return (
                    <LevelNode
                      key={level.id}
                      level={level}
                      isUnlocked={isUnlocked}
                      isCompleted={isCompleted}
                      isFirst={index === 0}
                      isLast={index === unitLevels.length - 1}
                    />
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
