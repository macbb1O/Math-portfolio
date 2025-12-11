import { z } from "zod";

export type QuestionType = "mcq" | "input" | "graph-match";

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string;
  hint?: string;
  graphData?: {
    equation?: string;
    slope?: number;
    yIntercept?: number;
  };
}

export interface Level {
  id: string;
  number: string;
  title: string;
  description: string;
  type: "lesson" | "boss" | "review" | "test";
  questions: Question[];
  xpReward: number;
  badge?: string;
  timeLimit?: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
}

export interface GameProgress {
  xp: number;
  level: number;
  streak: number;
  highestStreak: number;
  completedLevels: string[];
  unlockedBadges: string[];
  energy: number;
  lastEnergyUpdate: number;
  currentLevelId: string | null;
  theme: string;
}

export const defaultGameProgress: GameProgress = {
  xp: 0,
  level: 1,
  streak: 0,
  highestStreak: 0,
  completedLevels: [],
  unlockedBadges: [],
  energy: 5,
  lastEnergyUpdate: Date.now(),
  currentLevelId: null,
  theme: "default",
};

export const BADGES: Badge[] = [
  { id: "distributive-dominator", name: "Distributive Dominator", description: "Master the distributive property", icon: "Brackets", requirement: "Complete 1.01" },
  { id: "fraction-fragger", name: "Fraction Fragger", description: "Conquer equations with fractions", icon: "Divide", requirement: "Complete 1.03" },
  { id: "graphing-guru", name: "Graphing Guru", description: "Excel at graphing linear equations", icon: "LineChart", requirement: "Complete 1.04" },
  { id: "slope-master", name: "Slope Master", description: "Understand standard form perfectly", icon: "TrendingUp", requirement: "Complete 1.05" },
  { id: "parallel-pro", name: "Parallel Pro", description: "Master parallel and perpendicular lines", icon: "GitBranch", requirement: "Complete 1.06" },
  { id: "two-point-titan", name: "Two-Point Titan", description: "Find equations from two points", icon: "Target", requirement: "Complete 1.07" },
  { id: "substitution-samurai", name: "Substitution Samurai", description: "Solve systems by substitution", icon: "Replace", requirement: "Complete 1.09" },
  { id: "elimination-elite", name: "Elimination Elite", description: "Master elimination method", icon: "Minus", requirement: "Complete 1.10" },
  { id: "boss-destroyer", name: "The Boss Destroyer", description: "Complete all SWYK boss fights", icon: "Skull", requirement: "Complete all SWYK" },
  { id: "legend-of-lines", name: "Legend of Lines", description: "Pass the final unit test", icon: "Crown", requirement: "Complete Final Test" },
];

export const XP_PER_LEVEL = 500;
export const MAX_ENERGY = 5;
export const ENERGY_REGEN_MINUTES = 5;
export const HINT_COST = 1;
export const REVIVE_COST = 5;

export const gameProgressSchema = z.object({
  xp: z.number(),
  level: z.number(),
  streak: z.number(),
  highestStreak: z.number(),
  completedLevels: z.array(z.string()),
  unlockedBadges: z.array(z.string()),
  energy: z.number(),
  lastEnergyUpdate: z.number(),
  currentLevelId: z.string().nullable(),
  theme: z.string(),
});

export type InsertGameProgress = z.infer<typeof gameProgressSchema>;

export const users = {
  id: "",
  username: "",
  password: "",
};

export type InsertUser = { username: string; password: string };
export type User = { id: string; username: string; password: string };
