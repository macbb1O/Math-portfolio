import { Heart } from "lucide-react";
import { useGameStore } from "@/lib/gameStore";
import { MAX_ENERGY, ENERGY_REGEN_MINUTES } from "@shared/schema";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function EnergyHearts({ className }: { className?: string }) {
  const { energy, lastEnergyUpdate, updateEnergy } = useGameStore();
  const [timeToNext, setTimeToNext] = useState("");

  useEffect(() => {
    updateEnergy();
    
    const interval = setInterval(() => {
      updateEnergy();
      
      if (energy < MAX_ENERGY) {
        const now = Date.now();
        const nextRegenTime = lastEnergyUpdate + (ENERGY_REGEN_MINUTES * 60 * 1000);
        const remaining = Math.max(0, nextRegenTime - now);
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        setTimeToNext(`${minutes}:${seconds.toString().padStart(2, "0")}`);
      } else {
        setTimeToNext("");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [energy, lastEnergyUpdate, updateEnergy]);

  return (
    <div className={cn("flex items-center gap-1", className)} data-testid="energy-hearts">
      {Array.from({ length: MAX_ENERGY }).map((_, i) => (
        <Heart
          key={i}
          className={cn(
            "w-5 h-5 transition-all duration-300",
            i < energy 
              ? "text-neon-pink fill-neon-pink" 
              : "text-muted-foreground"
          )}
          data-testid={`heart-${i}`}
        />
      ))}
      {timeToNext && energy < MAX_ENERGY && (
        <span className="text-xs text-muted-foreground ml-1" data-testid="text-regen-timer">
          {timeToNext}
        </span>
      )}
    </div>
  );
}
