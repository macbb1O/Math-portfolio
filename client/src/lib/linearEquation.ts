// linearEquation.ts
import type { GeneratedQuestion } from "../generatedQuestion";

export function generateLinearEquation(): GeneratedQuestion {
  const x = Math.floor(Math.random() * 9) + 1;
  const a = Math.floor(Math.random() * 5) + 1;
  const b = Math.floor(Math.random() * 10) - 5;

  const rightSide = a * x + b;
  const prompt = `Solve: ${a}x + ${b} = ${rightSide}`;

  const correctAnswer = x.toString();

  const answers = [
    correctAnswer,
    (x + 1).toString(),
    (x - 1).toString(),
    (x + 2).toString(),
  ].sort(() => Math.random() - 0.5);

  return {
    prompt,
    answers,
    correctIndex: answers.indexOf(correctAnswer),
  };
}

