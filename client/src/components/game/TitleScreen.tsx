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
    <div className="min-h-screen flex flex-col justify-center p-6 relative">
      
      {/* Top HUD */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-4">
        <EnergyHearts />
        <StreakCounter />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-start gap-8 w-full max-w-xl">

        {/* Title */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Grade 10 Math
          </span>

          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Math <br /> Legends
          </h1>

          <p className="text-muted-foreground max-w-md">
            Math Portfolio
          </p>
        </div>

        {/* XP Bar */}
        <div className="w-full max-w-sm">
          <XPBar />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <Button
            size="lg"
            className="justify-start px-6 py-6 text-lg font-semibold rounded-xl"
            onClick={() => setScreen("map")}
            data-testid="button-start-adventure"
          >
            <Play className="w-5 h-5 mr-3" />
            {hasProgress ? "Continue Adventure" : "Start Adventure"}
          </Button>

          {hasProgress && (
            <Button
              variant="ghost"
              size="sm"
              className="justify-start text-muted-foreground"
              onClick={() => {
                if (confirm("Are you sure you want to reset all progress?")) {
                  resetProgress();
                }
              }}
              data-testid="button-reset-progress"
            >
              <RotateCcw className="w-4 h-4 mr-3" />
              Reset Progress
            </Button>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <div className="flex flex-col items-start">
            <span className="text-2xl font-bold text-foreground">
              {completedLevels.length}
            </span>
            <span>Levels Done</span>
          </div>

          <div className="flex flex-col items-start">
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
