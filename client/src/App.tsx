import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useGameStore } from "@/lib/gameStore";
import {
  ParticleBackground,
  TitleScreen,
  WorldMap,
  GameplayScreen,
  LevelComplete,
} from "@/components/game";

function GameRouter() {
  const { screen, updateEnergy } = useGameStore();

  useEffect(() => {
    updateEnergy();
    const interval = setInterval(updateEnergy, 60000);
    return () => clearInterval(interval);
  }, [updateEnergy]);

  switch (screen) {
    case "title":
      return <TitleScreen />;
    case "map":
      return <WorldMap />;
    case "gameplay":
      return <GameplayScreen />;
    case "level-complete":
      return <LevelComplete />;
    default:
      return <TitleScreen />;
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen gradient-bg">
          <ParticleBackground />
          <GameRouter />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
