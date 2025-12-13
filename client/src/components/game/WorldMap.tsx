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

  // --- Split levels by unit ---
  const unit1Levels = LEVELS.filter(l => l.id.startsWith("1."));
  const unit2Levels = LEVELS.filter(l => l.id.startsWith("2."));

  // --- Unit 1 must be fully completed to unlock Unit 2 ---
  const unit1Completed = unit1Levels.every(level =>
    completedLevels.includes(level.id)
  );

  return (
    <div className="min-h-screen flex flex-col relative z-10">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-lg border-b border-border p-4">
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

      {/* ===== MAP ===== */}
      <ScrollArea className="flex-1 px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* ===== TITLE ===== */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">World Map</h2>
            <p className="text-muted-foreground text-sm">
              Complete lessons to unlock new units
            </p>

            <div className="flex items-center justify-center gap-4 mt-4 text-sm">
              <span className="flex items-center gap-1">
                <Trophy className="w-4 h-4 text-neon-gold" />
                {unlockedBadges.length}/10
              </span>
              <span className="text-muted-foreground">
                {completedLevels.length}/{LEVELS.length} Levels
              </span>
            </div>
          </div>

              {/* ===== UNIT 1 ===== */}
              <h3 className="text-lg font-bold text-center mt-4 mb-2">
                Unit 1 — Linear Relations
              </h3>

              {unit1Levels.map((level, index) => {
                const isUnlocked = isLevelUnlocked(level.id, completedLevels);
                const isCompleted = completedLevels.includes(level.id);

                return (
                  <div
                    key={level.id}
                    className={`flex items-center gap-4 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1" />
                    <LevelNode
                      level={level}
                      isUnlocked={isUnlocked}
                      isCompleted={isCompleted}
                      isFirst={index === 0}
                      isLast={false}
                    />
                    <div className="flex-1" />
                  </div>
                );
              })}

              {/* ===== UNIT 2 ===== */}
              <h3 className="text-lg font-bold text-center mt-12 mb-2">
                Unit 2 — Trigonometry & Geometry
              </h3>

              {!unit1Completed && (
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Complete Unit 1 to unlock this unit
                </p>
              )}

              {unit2Levels.map((level, index) => {
                const isUnlocked =
                  unit1Completed &&
                  isLevelUnlocked(level.id, completedLevels);
                const isCompleted = completedLevels.includes(level.id);

                return (
                  <div
                    key={level.id}
                    className={`flex items-center gap-4 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1" />
                    <LevelNode
                      level={level}
                      isUnlocked={isUnlocked}
                      isCompleted={isCompleted}
                      isFirst={false}
                      isLast={index === unit2Levels.length - 1}
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
