import { Button } from "@/components/ui/button";
import { useGameStore } from "@/lib/gameStore";
import { XPBar } from "./XPBar";
import { StreakCounter } from "./StreakCounter";
import { EnergyHearts } from "./EnergyHearts";
import { Sparkles, Play, RotateCcw } from "lucide-react";

export function TitleScreen() {
  const { setScreen, completedLevels, resetProgress } = useGameStore();
  const hasProgress = completedLevels.length > 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-4 flex-wrap">
        <EnergyHearts />
        <StreakCounter />
      </div>

      <div className="flex flex-col items-center gap-8 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue opacity-30 animate-pulse-glow" />
          
          <div className="relative flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-neon-gold animate-sparkle" />
              <span className="text-sm font-medium text-neon-cyan uppercase tracking-widest">Grade 10 Math</span>
              <Sparkles className="w-8 h-8 text-neon-gold animate-sparkle" style={{ animationDelay: "0.5s" }} />
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold font-display text-center">
              <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent neon-text-purple">
                Math
              </span>
              <br />
              <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent neon-text-blue">
                Legends
              </span>
            </h1>
            
            <p className="text-muted-foreground text-center max-w-md mt-2">
              Math Portfolio
            </p>
          </div>
        </div>

        <div className="w-full max-w-xs">
          <XPBar />
        </div>

        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Button
            size="lg"
            className="w-full py-6 text-lg font-bold rounded-2xl bg-gradient-to-r from-neon-purple to-neon-pink neon-glow-pink"
            onClick={() => setScreen("map")}
            data-testid="button-start-adventure"
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
              data-testid="button-reset-progress"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Progress
            </Button>
          )}
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground mt-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">{completedLevels.length}</span>
            <span>Levels Done</span>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">13</span>
            <span>Total Levels</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MathSymbol({ symbol, delay }: { symbol: string; delay: number }) {
  return (
    <div 
      className="px-4 py-2 rounded-full bg-card/50 border border-border text-muted-foreground text-sm font-mono"
      style={{ animationDelay: `${delay}s` }}
    >
      {symbol}
    </div>
  );
}
