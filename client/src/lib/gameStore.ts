import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { GameProgress, Badge } from "@shared/schema";
import { 
  defaultGameProgress, 
  BADGES, 
  XP_PER_LEVEL, 
  MAX_ENERGY, 
  ENERGY_REGEN_MINUTES 
} from "@shared/schema";
import { LEVELS, getLevelById } from "./gameData";

interface GameState extends GameProgress {
  currentQuestionIndex: number;
  levelScore: number;
  levelStreak: number;
  showingResult: boolean;
  lastAnswerCorrect: boolean | null;
  timerSeconds: number;
  
  setScreen: (screen: string) => void;
  screen: string;
  
  startLevel: (levelId: string) => void;
  answerQuestion: (isCorrect: boolean, xpGain: number) => void;
  nextQuestion: () => void;
  completeLevel: () => void;
  useHint: () => boolean;
  reviveStreak: () => boolean;
  updateEnergy: () => void;
  resetProgress: () => void;
  getUnlockedBadges: () => Badge[];
  getXpForNextLevel: () => number;
  getXpProgress: () => number;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      ...defaultGameProgress,
      currentQuestionIndex: 0,
      levelScore: 0,
      levelStreak: 0,
      showingResult: false,
      lastAnswerCorrect: null,
      timerSeconds: 0,
      screen: "title",

      setScreen: (screen) => set({ screen }),

      startLevel: (levelId) => {
        const level = getLevelById(levelId);
        set({
          currentLevelId: levelId,
          currentQuestionIndex: 0,
          levelScore: 0,
          levelStreak: 0,
          showingResult: false,
          lastAnswerCorrect: null,
          timerSeconds: level?.timeLimit || 0,
          screen: "gameplay",
        });
      },

      answerQuestion: (isCorrect, xpGain) => {
        const state = get();
        if (isCorrect) {
          const newStreak = state.streak + 1;
          const newHighest = Math.max(newStreak, state.highestStreak);
          set({
            xp: state.xp + xpGain,
            streak: newStreak,
            highestStreak: newHighest,
            levelScore: state.levelScore + 1,
            levelStreak: state.levelStreak + 1,
            level: Math.floor((state.xp + xpGain) / XP_PER_LEVEL) + 1,
            showingResult: true,
            lastAnswerCorrect: true,
          });
        } else {
          set({
            streak: 0,
            showingResult: true,
            lastAnswerCorrect: false,
          });
        }
      },

      nextQuestion: () => {
        const state = get();
        const level = getLevelById(state.currentLevelId || "");
        if (!level) return;

        if (state.currentQuestionIndex >= level.questions.length - 1) {
          get().completeLevel();
        } else {
          set({
            currentQuestionIndex: state.currentQuestionIndex + 1,
            showingResult: false,
            lastAnswerCorrect: null,
          });
        }
      },

      completeLevel: () => {
        const state = get();
        const level = getLevelById(state.currentLevelId || "");
        if (!level) return;

        const newCompletedLevels = state.completedLevels.includes(level.id)
          ? state.completedLevels
          : [...state.completedLevels, level.id];

        let newUnlockedBadges = [...state.unlockedBadges];
        if (level.badge && !newUnlockedBadges.includes(level.badge)) {
          newUnlockedBadges.push(level.badge);
        }

        const swykLevels = LEVELS.filter(l => l.type === "boss").map(l => l.id);
        const allSwykComplete = swykLevels.every(id => newCompletedLevels.includes(id));
        if (allSwykComplete && !newUnlockedBadges.includes("boss-destroyer")) {
          newUnlockedBadges.push("boss-destroyer");
        }

        set({
          completedLevels: newCompletedLevels,
          unlockedBadges: newUnlockedBadges,
          xp: state.xp + level.xpReward,
          level: Math.floor((state.xp + level.xpReward) / XP_PER_LEVEL) + 1,
          screen: "level-complete",
        });
      },

      useHint: () => {
        const state = get();
        if (state.energy >= 1) {
          set({ energy: state.energy - 1 });
          return true;
        }
        return false;
      },

      reviveStreak: () => {
        const state = get();
        if (state.energy >= 5) {
          set({ 
            energy: state.energy - 5,
            streak: state.highestStreak > 0 ? Math.min(3, state.highestStreak) : 1 
          });
          return true;
        }
        return false;
      },

      updateEnergy: () => {
        const state = get();
        const now = Date.now();
        const minutesPassed = (now - state.lastEnergyUpdate) / (1000 * 60);
        const energyToAdd = Math.floor(minutesPassed / ENERGY_REGEN_MINUTES);
        
        if (energyToAdd > 0 && state.energy < MAX_ENERGY) {
          const newEnergy = Math.min(MAX_ENERGY, state.energy + energyToAdd);
          set({
            energy: newEnergy,
            lastEnergyUpdate: now,
          });
        }
      },

      resetProgress: () => {
        set({
          ...defaultGameProgress,
          screen: "title",
          currentQuestionIndex: 0,
          levelScore: 0,
          levelStreak: 0,
          showingResult: false,
          lastAnswerCorrect: null,
          timerSeconds: 0,
        });
      },

      getUnlockedBadges: () => {
        const state = get();
        return BADGES.filter(b => state.unlockedBadges.includes(b.id));
      },

      getXpForNextLevel: () => {
        const state = get();
        return (state.level * XP_PER_LEVEL) - state.xp;
      },

      getXpProgress: () => {
        const state = get();
        const currentLevelXp = (state.level - 1) * XP_PER_LEVEL;
        const xpIntoLevel = state.xp - currentLevelXp;
        return (xpIntoLevel / XP_PER_LEVEL) * 100;
      },
    }),
    {
      name: "linear-legends-progress",
      partialize: (state) => ({
        xp: state.xp,
        level: state.level,
        streak: state.streak,
        highestStreak: state.highestStreak,
        completedLevels: state.completedLevels,
        unlockedBadges: state.unlockedBadges,
        energy: state.energy,
        lastEnergyUpdate: state.lastEnergyUpdate,
        theme: state.theme,
      }),
    }
  )
);
