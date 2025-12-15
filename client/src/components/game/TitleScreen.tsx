import { Button } from "@/components/ui/button";
import { useGameStore } from "@/lib/gameStore";
import { XPBar } from "./XPBar";
import { StreakCounter } from "./StreakCounter";
import { EnergyHearts } from "./EnergyHearts";
import { Play, RotateCcw } from "lucide-react";

export function TitleScreen() {
  const { setScreen, completedLevels, resetProgress } = useGameStore();
  const hasProgress = completedLevels.length > 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative bg-background">
      
      {/* Top HUD */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <EnergyHearts />
        <StreakCounter />
      </div>

      {/* Main Card */}
      <div className="flex flex-col items-center gap-8 w-full max-w-md text-center">

        {/* Title */}
        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase tracking-wider text-muted-foreground">
            Grade 10 Math
          </span>

          <h1 className="text-5xl sm:text-6xl font-bold">
            Math Legends
          </h1>

          <p className="text-muted-foreground">
            Math Portfolio
          </p>
        </div>

        {/* XP */}
        <div className="w-full">
          <XPBar />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <Button
            size="lg"
            className="py-6 text-lg font-semibold rounded-xl"
            onClick={() => setScreen("map")}
          >
            <Play className="w-5 h-5 mr-2" />
            {hasProgress ? "Continue Adventure" : "Start Adventure"}
          </Button>

          {hasProgress && (
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
              onClick={() => {
                if (confirm("Are you sure you want to reset all progress?")) {
                  resetProgress();
                }
              }}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Progress
            </Button>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-10 text-sm text-muted-foreground">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">
              {completedLevels.length}
            </span>
            <span>Levels Done</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">
              13
            </span>
            <span>Total Levels</span>
          </div>
        </div>

      </div>
    </div>
  );
}
