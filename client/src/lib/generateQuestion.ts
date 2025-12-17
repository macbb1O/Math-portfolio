// generateQuestion.ts
import type { GeneratedQuestion } from "./generatedQuestion";
import type { QuestionType } from "./questionTypes";
import { generateLinearEquation } from "./generators/linearEquation";

export function generateQuestion(type: QuestionType): GeneratedQuestion {
  switch (type) {
    case "linear-equation":
      return generateLinearEquation();

    default:
      throw new Error(`No generator found for question type: ${type}`);
  }
}

