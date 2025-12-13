import type { Level, Question } from "@shared/schema";

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export const LEVELS: Level[] = [
  {
    id: "1.01",
    number: "1.01",
    title: "Simplifying & Distributive Property",
    description: "Learn to expand expressions and combine like terms",
    type: "lesson",
    xpReward: 50,
    badge: "distributive-dominator",
    questions: [
      { id: generateId(), type: "mcq", question: "Expand: 3(2x - 4)", options: ["6x - 12", "6x - 4", "5x - 7", "6x + 12"], correctAnswer: "6x - 12", hint: "Multiply 3 by each term inside" },
      { id: generateId(), type: "mcq", question: "Simplify: 5x + 3 - 2x + 8", options: ["3x + 11", "7x + 11", "3x - 5", "7x - 5"], correctAnswer: "3x + 11", hint: "Combine like terms: x terms and constants" },
      { id: generateId(), type: "mcq", question: "Expand: -2(4x + 5)", options: ["-8x - 10", "-8x + 10", "8x - 10", "-6x - 7"], correctAnswer: "-8x - 10", hint: "Multiply -2 by each term" },
      { id: generateId(), type: "input", question: "Expand and simplify: 2(x + 3) + 4x", correctAnswer: "6x + 6", hint: "First expand, then combine" },
      { id: generateId(), type: "mcq", question: "Simplify: 7x - 3 + 2x - 5", options: ["9x - 8", "5x + 2", "9x + 8", "5x - 8"], correctAnswer: "9x - 8", hint: "Add the x terms, add the constants" },
      { id: generateId(), type: "mcq", question: "Expand: 5(x - 2)", options: ["5x - 10", "5x - 2", "5x + 10", "x - 10"], correctAnswer: "5x - 10", hint: "5 times x and 5 times -2" },
      { id: generateId(), type: "input", question: "Expand: 4(3x + 1)", correctAnswer: "12x + 4", hint: "Multiply 4 by each term" },
      { id: generateId(), type: "mcq", question: "Simplify: 3x + 2y - x + 5y", options: ["2x + 7y", "4x + 7y", "2x - 3y", "4x + 3y"], correctAnswer: "2x + 7y", hint: "Combine x terms and y terms separately" },
      { id: generateId(), type: "mcq", question: "Expand: -3(2x - 7)", options: ["-6x + 21", "-6x - 21", "6x + 21", "-6x - 7"], correctAnswer: "-6x + 21", hint: "Remember: negative times negative is positive" },
      { id: generateId(), type: "input", question: "Expand and simplify: 3(x + 2) - 2(x - 1)", correctAnswer: "x + 8", hint: "Expand both, then combine like terms" },
      { id: generateId(), type: "mcq", question: "Simplify: 8 - 2x + 4x - 3", options: ["2x + 5", "6x + 5", "-2x + 5", "2x + 11"], correctAnswer: "2x + 5", hint: "Combine x terms and constants" },
      { id: generateId(), type: "mcq", question: "Expand: 6(x + 4)", options: ["6x + 24", "6x + 4", "10x", "6x - 24"], correctAnswer: "6x + 24", hint: "Multiply 6 by each term inside" },
    ],
  },
  {
    id: "1.02",
    number: "1.02",
    title: "Solving Linear Equations",
    description: "Solve multi-step equations with variables on both sides",
    type: "lesson",
    xpReward: 60,
    questions: [
      { id: generateId(), type: "input", question: "Solve: 3x + 7 = 22", correctAnswer: "5", hint: "Subtract 7, then divide by 3" },
      { id: generateId(), type: "mcq", question: "Solve: 2x - 5 = 9", options: ["x = 7", "x = 2", "x = 14", "x = -7"], correctAnswer: "x = 7", hint: "Add 5 to both sides, then divide by 2" },
      { id: generateId(), type: "input", question: "Solve: 4x - 3 = 2x + 7", correctAnswer: "5", hint: "Get all x terms on one side" },
      { id: generateId(), type: "mcq", question: "Solve: 5x + 2 = 3x + 10", options: ["x = 4", "x = 6", "x = 2", "x = -4"], correctAnswer: "x = 4", hint: "Subtract 3x from both sides first" },
      { id: generateId(), type: "input", question: "Solve: 6x - 4 = 20", correctAnswer: "4", hint: "Add 4, then divide by 6" },
      { id: generateId(), type: "mcq", question: "Solve: 3(x + 2) = 15", options: ["x = 3", "x = 5", "x = 7", "x = 1"], correctAnswer: "x = 3", hint: "Expand first, or divide by 3" },
      { id: generateId(), type: "input", question: "Solve: 7x + 3 = 5x + 11", correctAnswer: "4", hint: "Subtract 5x and 3 from both sides" },
      { id: generateId(), type: "mcq", question: "Solve: 2(x - 3) = 4x - 10", options: ["x = 2", "x = -2", "x = 4", "x = 8"], correctAnswer: "x = 2", hint: "Expand, then solve" },
      { id: generateId(), type: "input", question: "Solve: 9x - 6 = 3x + 18", correctAnswer: "4", hint: "Subtract 3x and add 6" },
      { id: generateId(), type: "mcq", question: "Solve: 4(2x + 1) = 28", options: ["x = 3", "x = 6", "x = 3.5", "x = 7"], correctAnswer: "x = 3", hint: "Expand or divide both sides by 4" },
      { id: generateId(), type: "input", question: "Solve: 5x + 8 = 2x + 23", correctAnswer: "5", hint: "Isolate x terms on left" },
      { id: generateId(), type: "mcq", question: "Solve: 3x - 7 = x + 5", options: ["x = 6", "x = 12", "x = -6", "x = 1"], correctAnswer: "x = 6", hint: "Subtract x and add 7" },
    ],
  },
  {
    id: "1.03",
    number: "1.03",
    title: "Equations with Fractions",
    description: "Clear denominators and solve equations with fractions",
    type: "lesson",
    xpReward: 70,
    badge: "fraction-fragger",
    questions: [
      { id: generateId(), type: "input", question: "Solve: x/2 + 3 = 7", correctAnswer: "8", hint: "Subtract 3, then multiply by 2" },
      { id: generateId(), type: "mcq", question: "Solve: x/3 = 5", options: ["x = 15", "x = 8", "x = 5/3", "x = 2"], correctAnswer: "x = 15", hint: "Multiply both sides by 3" },
      { id: generateId(), type: "input", question: "Solve: 2x/5 = 6", correctAnswer: "15", hint: "Multiply both sides by 5, then divide by 2" },
      { id: generateId(), type: "mcq", question: "Solve: (x + 2)/4 = 3", options: ["x = 10", "x = 14", "x = 1", "x = 12"], correctAnswer: "x = 10", hint: "Multiply by 4, then subtract 2" },
      { id: generateId(), type: "input", question: "Solve: x/4 - 2 = 5", correctAnswer: "28", hint: "Add 2, then multiply by 4" },
      { id: generateId(), type: "mcq", question: "Solve: 3x/4 = 9", options: ["x = 12", "x = 6", "x = 27/4", "x = 3"], correctAnswer: "x = 12", hint: "Multiply by 4, divide by 3" },
      { id: generateId(), type: "input", question: "Solve: (x - 1)/3 = 4", correctAnswer: "13", hint: "Multiply by 3, then add 1" },
      { id: generateId(), type: "mcq", question: "Solve: x/6 + 1 = 5", options: ["x = 24", "x = 4", "x = 30", "x = 36"], correctAnswer: "x = 24", hint: "Subtract 1, then multiply by 6" },
      { id: generateId(), type: "input", question: "Solve: 5x/2 = 20", correctAnswer: "8", hint: "Multiply by 2, divide by 5" },
      { id: generateId(), type: "mcq", question: "Solve: (2x + 1)/5 = 3", options: ["x = 7", "x = 8", "x = 14", "x = 2"], correctAnswer: "x = 7", hint: "Multiply by 5, subtract 1, divide by 2" },
      { id: generateId(), type: "input", question: "Solve: x/2 + x/4 = 6", correctAnswer: "8", hint: "Find common denominator, combine" },
      { id: generateId(), type: "mcq", question: "Solve: (x + 5)/2 = x - 1", options: ["x = 7", "x = 3", "x = 5", "x = -7"], correctAnswer: "x = 7", hint: "Multiply by 2 and solve" },
    ],
  },
  {
    id: "1.04",
    number: "1.04",
    title: "Graphing Linear Equations",
    description: "Identify slope, y-intercept, and match graphs to equations",
    type: "lesson",
    xpReward: 70,
    badge: "graphing-guru",
    questions: [
      { id: generateId(), type: "mcq", question: "What is the slope of y = 3x + 2?", options: ["3", "2", "-3", "1/3"], correctAnswer: "3", hint: "In y = mx + b, m is the slope" },
      { id: generateId(), type: "mcq", question: "What is the y-intercept of y = -2x + 5?", options: ["5", "-2", "2", "-5"], correctAnswer: "5", hint: "In y = mx + b, b is the y-intercept" },
      { id: generateId(), type: "input", question: "Find the slope of y = 4x - 7", correctAnswer: "4", hint: "Look at the coefficient of x" },
      { id: generateId(), type: "mcq", question: "Which line passes through (0, 3)?", options: ["y = 2x + 3", "y = 3x + 2", "y = x - 3", "y = 2x - 3"], correctAnswer: "y = 2x + 3", hint: "Y-intercept is the y-value when x = 0" },
      { id: generateId(), type: "input", question: "Find the y-intercept of y = -5x + 8", correctAnswer: "8", hint: "The constant term is the y-intercept" },
      { id: generateId(), type: "mcq", question: "A line with slope 0 is:", options: ["Horizontal", "Vertical", "Diagonal", "Undefined"], correctAnswer: "Horizontal", hint: "No rise means flat line" },
      { id: generateId(), type: "mcq", question: "Which equation has a negative slope?", options: ["y = -3x + 1", "y = 3x - 1", "y = 3x + 1", "y = x + 3"], correctAnswer: "y = -3x + 1", hint: "Negative slope means line goes down left to right" },
      { id: generateId(), type: "input", question: "If a line has m = 2 and b = -4, write y = mx + b", correctAnswer: "y = 2x - 4", hint: "Substitute m and b into the formula" },
      { id: generateId(), type: "mcq", question: "Find the slope between (1, 2) and (3, 8)", options: ["3", "2", "5", "6"], correctAnswer: "3", hint: "Slope = (y2 - y1)/(x2 - x1)" },
      { id: generateId(), type: "mcq", question: "Which line is steeper?", options: ["y = 5x + 1", "y = 2x + 3", "y = x + 5", "y = 0.5x + 2"], correctAnswer: "y = 5x + 1", hint: "Larger absolute slope = steeper" },
      { id: generateId(), type: "input", question: "Find slope between (0, 1) and (2, 5)", correctAnswer: "2", hint: "Rise over run" },
      { id: generateId(), type: "mcq", question: "y = 7 represents:", options: ["Horizontal line at y = 7", "Vertical line at x = 7", "Line through origin", "Slope of 7"], correctAnswer: "Horizontal line at y = 7", hint: "No x term means horizontal" },
    ],
  },
  {
    id: "1.05",
    number: "1.05",
    title: "Standard Form",
    description: "Convert between forms and find intercepts",
    type: "lesson",
    xpReward: 70,
    badge: "slope-master",
    questions: [
      { id: generateId(), type: "mcq", question: "Convert y = 2x + 4 to standard form", options: ["2x - y = -4", "-2x + y = 4", "2x + y = 4", "x - 2y = 4"], correctAnswer: "2x - y = -4", hint: "Move terms to get Ax + By = C" },
      { id: generateId(), type: "input", question: "Find the x-intercept of 3x + y = 9", correctAnswer: "3", hint: "Set y = 0 and solve for x" },
      { id: generateId(), type: "input", question: "Find the y-intercept of 2x + y = 6", correctAnswer: "6", hint: "Set x = 0 and solve for y" },
      { id: generateId(), type: "mcq", question: "Convert y = -x + 5 to standard form", options: ["x + y = 5", "x - y = 5", "-x + y = 5", "x + y = -5"], correctAnswer: "x + y = 5", hint: "Add x to both sides" },
      { id: generateId(), type: "input", question: "Find x-intercept of x + 2y = 8", correctAnswer: "8", hint: "Let y = 0" },
      { id: generateId(), type: "mcq", question: "What is standard form?", options: ["Ax + By = C", "y = mx + b", "y - y1 = m(x - x1)", "x = a"], correctAnswer: "Ax + By = C", hint: "Standard form has x and y on same side" },
      { id: generateId(), type: "input", question: "Find y-intercept of 4x - y = -8", correctAnswer: "8", hint: "Set x = 0, solve for y" },
      { id: generateId(), type: "mcq", question: "Convert y = 3x - 6 to standard form", options: ["3x - y = 6", "-3x + y = -6", "3x + y = 6", "y - 3x = 6"], correctAnswer: "3x - y = 6", hint: "Subtract y and add 6" },
      { id: generateId(), type: "input", question: "Find x-intercept of 5x + 2y = 10", correctAnswer: "2", hint: "Set y = 0" },
      { id: generateId(), type: "mcq", question: "Which is in standard form?", options: ["4x + 3y = 12", "y = 4x + 3", "3y = 4x + 12", "x = 4y - 3"], correctAnswer: "4x + 3y = 12", hint: "Both variables on left, constant on right" },
      { id: generateId(), type: "input", question: "Find y-intercept of x - 3y = 12", correctAnswer: "-4", hint: "Set x = 0, solve for y" },
      { id: generateId(), type: "mcq", question: "Convert 2x - 3y = 6 to slope-intercept", options: ["y = (2/3)x - 2", "y = (2/3)x + 2", "y = (3/2)x - 2", "y = -(2/3)x - 2"], correctAnswer: "y = (2/3)x - 2", hint: "Solve for y" },
    ],
  },
  {
    id: "1.06",
    number: "1.06",
    title: "Parallel & Perpendicular Lines",
    description: "Understand relationship between slopes of parallel and perpendicular lines",
    type: "lesson",
    xpReward: 80,
    badge: "parallel-pro",
    questions: [
      { id: generateId(), type: "mcq", question: "Parallel lines have:", options: ["Same slope", "Opposite slopes", "Negative reciprocal slopes", "No slope"], correctAnswer: "Same slope", hint: "Parallel means they never meet" },
      { id: generateId(), type: "mcq", question: "Perpendicular lines have slopes that are:", options: ["Negative reciprocals", "Equal", "Opposite", "Zero"], correctAnswer: "Negative reciprocals", hint: "Flip and negate" },
      { id: generateId(), type: "input", question: "Line has slope 3. Parallel line slope is:", correctAnswer: "3", hint: "Parallel = same slope" },
      { id: generateId(), type: "input", question: "Line has slope 2. Perpendicular slope is:", correctAnswer: "-1/2", hint: "Flip 2 to 1/2, then negate" },
      { id: generateId(), type: "mcq", question: "Which is parallel to y = 4x - 1?", options: ["y = 4x + 7", "y = -4x + 1", "y = (1/4)x - 1", "y = -(1/4)x + 2"], correctAnswer: "y = 4x + 7", hint: "Same slope (4)" },
      { id: generateId(), type: "mcq", question: "Which is perpendicular to y = 2x + 3?", options: ["y = -(1/2)x + 1", "y = 2x - 3", "y = -2x + 3", "y = (1/2)x + 3"], correctAnswer: "y = -(1/2)x + 1", hint: "Negative reciprocal of 2" },
      { id: generateId(), type: "input", question: "Slope perpendicular to m = -4:", correctAnswer: "1/4", hint: "Flip -4 to -1/4, then negate" },
      { id: generateId(), type: "mcq", question: "Are y = 3x + 1 and y = 3x - 5 parallel?", options: ["Yes", "No", "Perpendicular", "Same line"], correctAnswer: "Yes", hint: "Both have slope 3" },
      { id: generateId(), type: "input", question: "Slope parallel to m = -2/3:", correctAnswer: "-2/3", hint: "Parallel = same slope" },
      { id: generateId(), type: "mcq", question: "Are y = 2x + 1 and y = -0.5x + 3 perpendicular?", options: ["Yes", "No", "Parallel", "Same line"], correctAnswer: "Yes", hint: "2 and -1/2 are negative reciprocals" },
      { id: generateId(), type: "input", question: "Perpendicular to m = 1/5:", correctAnswer: "-5", hint: "Flip and negate" },
      { id: generateId(), type: "mcq", question: "Find equation parallel to y = -x + 4 through (0, 2)", options: ["y = -x + 2", "y = x + 2", "y = -x + 4", "y = -x - 2"], correctAnswer: "y = -x + 2", hint: "Same slope -1, y-int is 2" },
    ],
  },
  {
    id: "1.07",
    number: "1.07",
    title: "Equation Given Two Points",
    description: "Find the equation of a line given two points",
    type: "lesson",
    xpReward: 80,
    badge: "two-point-titan",
    questions: [
      { id: generateId(), type: "input", question: "Find slope between (1, 2) and (3, 6)", correctAnswer: "2", hint: "m = (y2-y1)/(x2-x1)" },
      { id: generateId(), type: "mcq", question: "Equation through (0, 4) with slope 2", options: ["y = 2x + 4", "y = 4x + 2", "y = 2x - 4", "y = -2x + 4"], correctAnswer: "y = 2x + 4", hint: "Use y = mx + b with m = 2, b = 4" },
      { id: generateId(), type: "input", question: "Find slope between (2, 1) and (4, 7)", correctAnswer: "3", hint: "Rise over run" },
      { id: generateId(), type: "mcq", question: "Line through (1, 5) and (2, 8) has slope:", options: ["3", "5", "2", "8"], correctAnswer: "3", hint: "m = (8-5)/(2-1)" },
      { id: generateId(), type: "input", question: "Find slope between (0, 0) and (5, 10)", correctAnswer: "2", hint: "10/5 = ?" },
      { id: generateId(), type: "mcq", question: "Equation through (0, -3) with m = 4", options: ["y = 4x - 3", "y = -3x + 4", "y = 4x + 3", "y = -4x - 3"], correctAnswer: "y = 4x - 3", hint: "b = -3 is y-intercept" },
      { id: generateId(), type: "input", question: "Slope between (3, 2) and (7, 10)", correctAnswer: "2", hint: "(10-2)/(7-3)" },
      { id: generateId(), type: "mcq", question: "Line through (0, 0) and (2, 6) is:", options: ["y = 3x", "y = 2x", "y = 6x", "y = x"], correctAnswer: "y = 3x", hint: "Slope = 6/2, passes through origin" },
      { id: generateId(), type: "input", question: "Write equation: m = 5, passes through (0, 1)", correctAnswer: "y = 5x + 1", hint: "Use y = mx + b" },
      { id: generateId(), type: "mcq", question: "Points (2, 3) and (2, 7) form:", options: ["Vertical line", "Horizontal line", "Slope of 2", "Slope of 4"], correctAnswer: "Vertical line", hint: "Same x-value" },
      { id: generateId(), type: "input", question: "Slope between (-1, 4) and (3, 0)", correctAnswer: "-1", hint: "(0-4)/(3-(-1))" },
      { id: generateId(), type: "mcq", question: "Through (1, 1) and (3, 5), find b", options: ["b = -1", "b = 1", "b = 0", "b = 2"], correctAnswer: "b = -1", hint: "m = 2, use y = mx + b with point" },
    ],
  },
  {
    id: "1.08",
    number: "1.08",
    title: "Word Problems with Lines",
    description: "Apply linear equations to real-world problems",
    type: "lesson",
    xpReward: 80,
    questions: [
      { id: generateId(), type: "mcq", question: "A taxi charges $3 base + $2/km. What's the equation?", options: ["C = 2k + 3", "C = 3k + 2", "C = 5k", "C = 2k - 3"], correctAnswer: "C = 2k + 3", hint: "Start fee + rate per km" },
      { id: generateId(), type: "input", question: "Phone plan: $20/month + $0.10/text. Cost for 50 texts:", correctAnswer: "25", hint: "20 + 0.10(50)" },
      { id: generateId(), type: "mcq", question: "Pool drains at 5L/min from 200L. Equation:", options: ["V = 200 - 5t", "V = 5t + 200", "V = 200t - 5", "V = 5t - 200"], correctAnswer: "V = 200 - 5t", hint: "Starts at 200, decreases by 5 each min" },
      { id: generateId(), type: "input", question: "Plumber: $50 call-out + $25/hour. 3 hours cost:", correctAnswer: "125", hint: "50 + 25(3)" },
      { id: generateId(), type: "mcq", question: "Candle 12 inches burns 0.5 in/hr. Height after 4 hrs:", options: ["10 inches", "8 inches", "6 inches", "11 inches"], correctAnswer: "10 inches", hint: "12 - 0.5(4)" },
      { id: generateId(), type: "input", question: "Car rental: $40/day + $0.20/km. 100km in 2 days:", correctAnswer: "100", hint: "40(2) + 0.20(100)" },
      { id: generateId(), type: "mcq", question: "Salary $500/week + $50/sale. 8 sales earns:", options: ["$900", "$800", "$400", "$550"], correctAnswer: "$900", hint: "500 + 50(8)" },
      { id: generateId(), type: "input", question: "Movie ticket $12, popcorn $5. 4 tickets + 2 popcorns:", correctAnswer: "58", hint: "12(4) + 5(2)" },
      { id: generateId(), type: "mcq", question: "Line perpendicular to road with slope 3:", options: ["Slope -1/3", "Slope 3", "Slope -3", "Slope 1/3"], correctAnswer: "Slope -1/3", hint: "Perpendicular = negative reciprocal" },
      { id: generateId(), type: "input", question: "Gym: $100 sign-up + $30/month. 6 months cost:", correctAnswer: "280", hint: "100 + 30(6)" },
      { id: generateId(), type: "mcq", question: "Parallel fence to y = 2x + 1 has slope:", options: ["2", "-2", "1/2", "-1/2"], correctAnswer: "2", hint: "Parallel = same slope" },
      { id: generateId(), type: "input", question: "Water tank fills 8L/min. Start 20L. After 5 min:", correctAnswer: "60", hint: "20 + 8(5)" },
    ],
  },
  {
    id: "1.09",
    number: "1.09",
    title: "Substitution Method",
    description: "Solve systems of equations using substitution",
    type: "lesson",
    xpReward: 90,
    badge: "substitution-samurai",
    questions: [
      { id: generateId(), type: "input", question: "y = 2x, x + y = 9. Find x:", correctAnswer: "3", hint: "Substitute y = 2x into second equation" },
      { id: generateId(), type: "mcq", question: "y = x + 1, 2x + y = 10. Find x:", options: ["x = 3", "x = 4", "x = 2", "x = 5"], correctAnswer: "x = 3", hint: "2x + (x+1) = 10" },
      { id: generateId(), type: "input", question: "y = 3x, x + y = 8. Find y:", correctAnswer: "6", hint: "Find x first, then y = 3x" },
      { id: generateId(), type: "mcq", question: "x = 4, 2x + 3y = 14. Find y:", options: ["y = 2", "y = 6", "y = 4", "y = 3"], correctAnswer: "y = 2", hint: "2(4) + 3y = 14" },
      { id: generateId(), type: "input", question: "y = x - 2, x + y = 10. Find x:", correctAnswer: "6", hint: "x + (x-2) = 10" },
      { id: generateId(), type: "mcq", question: "y = 2x + 1, 3x + y = 11. Find x:", options: ["x = 2", "x = 3", "x = 4", "x = 1"], correctAnswer: "x = 2", hint: "3x + (2x+1) = 11" },
      { id: generateId(), type: "input", question: "y = 5 - x, 2x + y = 8. Find x:", correctAnswer: "3", hint: "2x + (5-x) = 8" },
      { id: generateId(), type: "mcq", question: "x = 2y, 3x - y = 10. Find y:", options: ["y = 2", "y = 4", "y = 3", "y = 5"], correctAnswer: "y = 2", hint: "3(2y) - y = 10" },
      { id: generateId(), type: "input", question: "y = x + 4, 2x - y = 2. Find x:", correctAnswer: "6", hint: "2x - (x+4) = 2" },
      { id: generateId(), type: "mcq", question: "y = 3, x + 2y = 11. Find x:", options: ["x = 5", "x = 8", "x = 3", "x = 6"], correctAnswer: "x = 5", hint: "x + 2(3) = 11" },
      { id: generateId(), type: "input", question: "y = 2x - 1, x + y = 5. Find x:", correctAnswer: "2", hint: "x + (2x-1) = 5" },
      { id: generateId(), type: "mcq", question: "x = y + 3, 2x + y = 12. Find y:", options: ["y = 2", "y = 3", "y = 4", "y = 6"], correctAnswer: "y = 2", hint: "2(y+3) + y = 12" },
    ],
  },
  {
    id: "1.10",
    number: "1.10",
    title: "Elimination & Matrices Intro",
    description: "Solve systems using elimination and intro to matrices",
    type: "lesson",
    xpReward: 100,
    badge: "elimination-elite",
    questions: [
      { id: generateId(), type: "input", question: "x + y = 5, x - y = 1. Find x:", correctAnswer: "3", hint: "Add equations to eliminate y" },
      { id: generateId(), type: "mcq", question: "2x + y = 7, x + y = 4. Find x:", options: ["x = 3", "x = 2", "x = 4", "x = 1"], correctAnswer: "x = 3", hint: "Subtract equations" },
      { id: generateId(), type: "input", question: "x + 2y = 8, x - 2y = 0. Find x:", correctAnswer: "4", hint: "Add to eliminate y" },
      { id: generateId(), type: "mcq", question: "3x + y = 10, x + y = 6. Find x:", options: ["x = 2", "x = 4", "x = 3", "x = 1"], correctAnswer: "x = 2", hint: "Subtract second from first" },
      { id: generateId(), type: "input", question: "2x + 3y = 12, 2x + y = 8. Find y:", correctAnswer: "2", hint: "Subtract to eliminate x" },
      { id: generateId(), type: "mcq", question: "x + y = 7, 2x - y = 5. Find x:", options: ["x = 4", "x = 3", "x = 5", "x = 2"], correctAnswer: "x = 4", hint: "Add equations" },
      { id: generateId(), type: "input", question: "3x + 2y = 13, x + 2y = 7. Find x:", correctAnswer: "3", hint: "Subtract second from first" },
      { id: generateId(), type: "mcq", question: "Matrix [2 3] + [1 4] = ?", options: ["[3 7]", "[3 1]", "[2 12]", "[1 7]"], correctAnswer: "[3 7]", hint: "Add corresponding elements" },
      { id: generateId(), type: "input", question: "2x - y = 5, x + y = 7. Find y:", correctAnswer: "3", hint: "Add to get 3x = 12, then find y" },
      { id: generateId(), type: "mcq", question: "Matrix 2 × [3 1] = ?", options: ["[6 2]", "[5 3]", "[6 1]", "[3 2]"], correctAnswer: "[6 2]", hint: "Multiply each element by 2" },
      { id: generateId(), type: "input", question: "4x + y = 13, 2x + y = 7. Find x:", correctAnswer: "3", hint: "Subtract second from first" },
      { id: generateId(), type: "mcq", question: "[1 2] + [3 1] = ?", options: ["[4 3]", "[4 2]", "[3 3]", "[2 3]"], correctAnswer: "[4 3]", hint: "1+3 and 2+1" },
    ],
  },
  
// 2.01 Similar Triangles
  {
    id: "2.01",
    number: "2.01",
    title: "Similar Triangles",
    description: "Learn how to identify and work with similar triangles",
    type: "lesson",
    xpReward: 80,
    badge: "similar-savant",
    questions: [
      { id: generateId(), type: "input", question: "Triangle ABC is similar to triangle DEF. If AB = 6, BC = 8, DE = 9, find EF.", correctAnswer: "12", hint: "Use ratio of similarity" },
      { id: generateId(), type: "mcq", question: "Two triangles are similar. If the smaller triangle has a side of 5 and the scale factor is 2, what is the corresponding side in the larger triangle?", options: ["7", "10", "5", "12"], correctAnswer: "10", hint: "Multiply side by scale factor" },
      { id: generateId(), type: "input", question: "In similar triangles, the perimeter of the smaller triangle is 12 and the ratio of similarity is 1:3. Find the perimeter of the larger triangle.", correctAnswer: "36", hint: "Perimeter scales like sides" },
      { id: generateId(), type: "input", question: "Triangle XYZ is similar to triangle PQR. If XY = 5 and XZ = 7, and the ratio of similarity is 2:3, find the corresponding sides in PQR.", correctAnswer: "XY = 7.5, XZ = 10.5", hint: "Multiply each side by 3/2" },
      { id: generateId(), type: "mcq", question: "If two triangles are similar and one angle is 45°, the corresponding angle in the other triangle is:", options: ["45°", "90°", "30°", "Cannot determine"], correctAnswer: "45°", hint: "Corresponding angles are equal" },
      { id: generateId(), type: "input", question: "Given two similar triangles, the base of the larger triangle is 18 and the smaller triangle's base is 12. Find the ratio of similarity.", correctAnswer: "1:1.5", hint: "Ratio = smaller:larger" },
      { id: generateId(), type: "input", question: "Triangle LMN is similar to triangle STU. If LM = 10 and ST = 15, find the scale factor.", correctAnswer: "1.5", hint: "Scale factor = larger/smaller" },
      { id: generateId(), type: "mcq", question: "Two similar triangles have areas 25 and 100. What is the ratio of their sides?", options: ["1:4", "1:2", "1:3", "2:1"], correctAnswer: "1:2", hint: "Side ratio = sqrt(area ratio)" },
      { id: generateId(), type: "input", question: "A triangle has sides 3, 4, 5. Find the sides of a similar triangle with a scale factor of 3.", correctAnswer: "9, 12, 15", hint: "Multiply each side by 3" },
      { id: generateId(), type: "mcq", question: "If the corresponding sides of two similar triangles are in ratio 2:5, the corresponding perimeters are in ratio:", options: ["2:5", "4:25", "1:2", "5:2"], correctAnswer: "2:5", hint: "Perimeter scales same as sides" }
    ],
  },
  
  // 2.02 Primary Trigonometric Ratios (SOH CAH TOA)
  {
    id: "2.02",
    number: "2.02",
    title: "Primary Trigonometric Ratios (SOH CAH TOA)",
    description: "Learn sine, cosine, and tangent ratios",
    type: "lesson",
    xpReward: 80,
    badge: "trig-tyro",
    questions: [
      { id: generateId(), type: "input", question: "Find sin(30°).", correctAnswer: "0.5", hint: "SOH: sin = opposite/hypotenuse" },
      { id: generateId(), type: "input", question: "Find cos(60°).", correctAnswer: "0.5", hint: "CAH: cos = adjacent/hypotenuse" },
      { id: generateId(), type: "mcq", question: "tan(45°) equals:", options: ["1", "0", "√2", "√3"], correctAnswer: "1", hint: "TOA: tan = opposite/adjacent" },
      { id: generateId(), type: "input", question: "In a right triangle, opposite = 3, adjacent = 4. Find tan θ.", correctAnswer: "0.75", hint: "tan = opposite/adjacent" },
      { id: generateId(), type: "mcq", question: "cos θ = 0.6, opposite = 3. Find hypotenuse.", options: ["4", "5", "3", "6"], correctAnswer: "5", hint: "cos = adjacent/hypotenuse" },
      { id: generateId(), type: "input", question: "sin θ = 0.8, hypotenuse = 5. Find opposite.", correctAnswer: "4", hint: "sin = opposite/hypotenuse" },
      { id: generateId(), type: "mcq", question: "A right triangle has sides 5, 12, 13. Find sin θ where opposite = 5, hypotenuse = 13.", options: ["5/13", "12/13", "5/12", "12/5"], correctAnswer: "5/13", hint: "Use sin = opposite/hypotenuse" },
      { id: generateId(), type: "input", question: "Find cos θ if adjacent = 8 and hypotenuse = 10.", correctAnswer: "0.8", hint: "cos = adjacent/hypotenuse" },
      { id: generateId(), type: "mcq", question: "tan θ = 3/4. Find θ approximately.", options: ["36.87°", "45°", "53.13°", "30°"], correctAnswer: "36.87°", hint: "Use inverse tan" },
      { id: generateId(), type: "input", question: "Right triangle with opposite = 7, hypotenuse = 25. Find sin θ.", correctAnswer: "0.28", hint: "sin = opposite/hypotenuse" }
    ],
  },
  
  // 2.03 Primary Trigonometric Ratios Practice
  {
    id: "2.03",
    number: "2.03",
    title: "Primary Trigonometric Ratios Practice",
    description: "Practice solving for angles and sides using SOH CAH TOA",
    type: "lesson",
    xpReward: 80,
    badge: "trig-trainee",
    questions: [
      { id: generateId(), type: "input", question: "Right triangle with opposite = 4, hypotenuse = 5. Find sin θ.", correctAnswer: "0.8", hint: "sin = opposite/hypotenuse" },
      { id: generateId(), type: "input", question: "Right triangle with adjacent = 6, hypotenuse = 10. Find cos θ.", correctAnswer: "0.6", hint: "cos = adjacent/hypotenuse" },
      { id: generateId(), type: "mcq", question: "tan θ = opposite/adjacent = 3/4. Find θ.", options: ["36.87°", "53.13°", "45°", "30°"], correctAnswer: "36.87°", hint: "Use inverse tan" },
      { id: generateId(), type: "input", question: "sin θ = 0.6, hypotenuse = 10. Find opposite.", correctAnswer: "6", hint: "opposite = sin * hypotenuse" },
      { id: generateId(), type: "mcq", question: "cos θ = 0.8, hypotenuse = 10. Find adjacent.", options: ["6", "8", "10", "12"], correctAnswer: "8", hint: "adjacent = cos * hypotenuse" },
      { id: generateId(), type: "input", question: "Opposite = 7, adjacent = 24. Find tan θ.", correctAnswer: "0.2917", hint: "tan = opposite/adjacent" },
      { id: generateId(), type: "mcq", question: "Find sin θ if θ = 30°.", options: ["0.5", "0.6", "0.707", "1"], correctAnswer: "0.5", hint: "sin 30° = 1/2" },
      { id: generateId(), type: "input", question: "cos θ = 0.6, adjacent = 3. Find hypotenuse.", correctAnswer: "5", hint: "cos = adjacent/hypotenuse" },
      { id: generateId(), type: "mcq", question: "In a triangle with sides 9, 12, 15, find sin of angle opposite 9.", options: ["0.6", "0.8", "0.5", "0.75"], correctAnswer: "0.6", hint: "Use sin = opposite/hypotenuse" },
      { id: generateId(), type: "input", question: "tan θ = 2/3. Find θ approximately.", correctAnswer: "33.69", hint: "Use inverse tan" }
    ],
  },
    
  // 2.04 Applications of SOH CAH TOA
  {
    id: "2.04",
    number: "2.04",
    title: "Applications of SOH CAH TOA",
    description: "Use trigonometry to solve real-world problems",
    type: "lesson",
    xpReward: 80,
    badge: "trig-applier",
    questions: [
      { id: generateId(), type: "input", question: "A ladder leans against a wall making a 60° angle with the ground. If the ladder is 10 m long, find the height it reaches.", correctAnswer: "8.66", hint: "Use sin θ = opposite/hypotenuse" },
      { id: generateId(), type: "mcq", question: "A tree casts a 15 m shadow. If the angle of elevation of the sun is 30°, the height of the tree is:", options: ["7.5", "8.66", "15", "10"], correctAnswer: "8.66", hint: "Use tan θ = opposite/adjacent" },
      { id: generateId(), type: "input", question: "A ramp rises 3 m over a horizontal distance of 4 m. Find the angle of elevation.", correctAnswer: "36.87", hint: "tan θ = opposite/adjacent" },
      { id: generateId(), type: "mcq", question: "A kite string makes an angle of 50° with the ground. If the string is 20 m long, the height of the kite is:", options: ["15.3", "16.2", "12.5", "10"], correctAnswer: "15.3", hint: "Use sin θ = opposite/hypotenuse" },
      { id: generateId(), type: "input", question: "A building casts a shadow of 12 m. If the angle of elevation is 45°, find the height of the building.", correctAnswer: "12", hint: "tan 45° = 1, so height = shadow" },
      { id: generateId(), type: "mcq", question: "An observer sees the top of a tower at 30° elevation. If he is 50 m away, find the tower's height.", options: ["28.87", "50", "25", "43.3"], correctAnswer: "28.87", hint: "tan θ = opposite/adjacent" },
      { id: generateId(), type: "input", question: "A hill rises at 20° from a horizontal path. If you walk 100 m along the path, how high do you rise?", correctAnswer: "34.2", hint: "sin or tan depending on sides given" },
      { id: generateId(), type: "mcq", question: "Find the angle of elevation if a building 20 m tall casts a shadow of 20 m.", options: ["30°", "45°", "60°", "90°"], correctAnswer: "45°", hint: "tan θ = height/shadow" },
      { id: generateId(), type: "input", question: "A 5 m pole leans forming a 60° angle with the ground. Find the distance from the base to the tip of the pole on the ground.", correctAnswer: "2.5", hint: "Use cos θ = adjacent/hypotenuse" },
      { id: generateId(), type: "mcq", question: "If a ramp is 10 m long and rises 6 m, the angle of elevation is:", options: ["30°", "36.87°", "45°", "53.13°"], correctAnswer: "36.87°", hint: "Use sin or tan" }
    ],
  },
  
  // 2.05 Sine Law & Snell’s Law
  {
    id: "2.05",
    number: "2.05",
    title: "Sine Law & Snell’s Law",
    description: "Learn Sine Law and apply to physics problems",
    type: "lesson",
    xpReward: 80,
    badge: "sine-scholar",
    questions: [
      { id: generateId(), type: "input", question: "In triangle ABC, A=30°, B=45°, side a=10. Find side b using sine law.", correctAnswer: "14.14", hint: "b/sin B = a/sin A" },
      { id: generateId(), type: "mcq", question: "Triangle with sides a=8, b=10, angle A=60°. Find angle B.", options: ["45°", "60°", "75.5°", "30°"], correctAnswer: "75.5", hint: "sin B / b = sin A / a" },
      { id: generateId(), type: "input", question: "In triangle, a=12, b=9, A=50°. Find angle B using sine law.", correctAnswer: "36.87", hint: "sin B / b = sin A / a" },
      { id: generateId(), type: "mcq", question: "If sin θ1 / sin θ2 = n2 / n1 in Snell’s law, and n1=1, n2=1.5, θ1=30°, find θ2.", options: ["48.6°", "30°", "60°", "45°"], correctAnswer: "48.6", hint: "Use arcsin(sin θ1 * n1/n2)" },
      { id: generateId(), type: "input", question: "Triangle ABC: A=40°, B=60°, a=14. Find b.", correctAnswer: "17.15", hint: "Use sine law" },
      { id: generateId(), type: "mcq", question: "Triangle with sides 7, 9, and angle 50°. Find unknown side using sine law.", options: ["8.5", "7.5", "10", "9.5"], correctAnswer: "8.5", hint: "b = a*sinB/sinA" },
      { id: generateId(), type: "input", question: "Angle of incidence 45°, n1=1, n2=1.33. Find angle of refraction.", correctAnswer: "32.1", hint: "sin θ2 = n1/n2 * sin θ1" },
      { id: generateId(), type: "mcq", question: "Given A=30°, a=10, b=15. Find angle B.", options: ["48.6°", "30°", "60°", "45°"], correctAnswer: "48.6", hint: "Use sine law" },
      { id: generateId(), type: "input", question: "Triangle ABC: A=35°, B=55°, a=12. Find b.", correctAnswer: "16.04", hint: "Use sine law" },
      { id: generateId(), type: "mcq", question: "Snell’s law: n1*sin θ1 = n2*sin θ2. If θ1=60°, n1=1, n2=1.5, θ2≈?", options: ["41.8°", "45°", "60°", "30°"], correctAnswer: "41.8", hint: "sin θ2 = sin θ1 * n1/n2" }
    ],
  },
  
  // 2.06 Cosine Law
  {
    id: "2.06",
    number: "2.06",
    title: "Cosine Law",
    description: "Learn to find sides and angles using Cosine Law",
    type: "lesson",
    xpReward: 80,
    badge: "cosine-captain",
    questions: [
      { id: generateId(), type: "input", question: "Triangle with sides a=8, b=6, angle C=60°. Find side c.", correctAnswer: "7.94", hint: "c² = a² + b² - 2ab cos C" },
      { id: generateId(), type: "mcq", question: "Triangle a=7, b=9, c=10. Find angle C.", options: ["51.3°", "60°", "45°", "30°"], correctAnswer: "51.3", hint: "cos C = (a² + b² - c²)/2ab" },
      { id: generateId(), type: "input", question: "Triangle with sides 5, 7, 9. Find angle opposite side 9.", correctAnswer: "54.5", hint: "cos C = (a² + b² - c²)/2ab" },
      { id: generateId(), type: "mcq", question: "Triangle with sides 8, 15, 17. Find angle opposite side 17.", options: ["61.9°", "45°", "60°", "53°"], correctAnswer: "61.9", hint: "Use cosine law" },
      { id: generateId(), type: "input", question: "Triangle a=10, b=6, c=8. Find angle opposite c.", correctAnswer: "48.19", hint: "cos C = (a²+b²-c²)/2ab" },
      { id: generateId(), type: "mcq", question: "Triangle sides 13, 14, 15. Find angle opposite 15.", options: ["50.5°", "60°", "45°", "30°"], correctAnswer: "50.5", hint: "Use cosine law" },
      { id: generateId(), type: "input", question: "Triangle a=9, b=12, c=15. Find angle opposite 15.", correctAnswer: "53.13", hint: "cos C = (a² + b² - c²)/2ab" },
      { id: generateId(), type: "mcq", question: "Triangle a=6, b=8, c=10. Find angle opposite side 10.", options: ["53.13°", "45°", "60°", "30°"], correctAnswer: "53.13", hint: "Use cosine law" },
      { id: generateId(), type: "input", question: "Triangle with sides 7, 24, 25. Find angle opposite 25.", correctAnswer: "81.79", hint: "cos C = (a² + b² - c²)/2ab" },
      { id: generateId(), type: "mcq", question: "Triangle sides 3, 4, 5. Find angle opposite 5.", options: ["53.13°", "45°", "60°", "30°"], correctAnswer: "53.13", hint: "Use cosine law" }
    ],
  },
    // 2.07 Applications of Sine and Cosine Law
  {
    id: "2.07",
    number: "2.07",
    title: "Applications of Sine and Cosine Law",
    description: "Solve real-world problems using sine and cosine laws",
    type: "lesson",
    xpReward: 80,
    badge: "law-master",
    questions: [
      { id: generateId(), type: "input", question: "Triangle ABC: a=8, b=6, C=60°. Find side c.", correctAnswer: "7.94", hint: "Use cosine law" },
      { id: generateId(), type: "mcq", question: "Triangle with a=10, b=12, angle C=45°. Find c.", options: ["9.8", "12.4", "14.1", "10.5"], correctAnswer: "12.4", hint: "c² = a² + b² - 2ab cos C" },
      { id: generateId(), type: "input", question: "Triangle: a=7, B=50°, b=9. Find angle A using sine law.", correctAnswer: "38.68", hint: "sin A / a = sin B / b" },
      { id: generateId(), type: "mcq", question: "Triangle a=15, b=20, angle C=60°. Find side c.", options: ["16.6", "21.6", "18.3", "19.2"], correctAnswer: "16.6", hint: "Use cosine law" },
      { id: generateId(), type: "input", question: "Triangle: a=5, b=7, c=9. Find angle opposite c.", correctAnswer: "73.4", hint: "cos C = (a²+b²-c²)/2ab" },
      { id: generateId(), type: "mcq", question: "Triangle: a=9, b=12, A=45°. Find angle B.", options: ["60", "54.5", "50", "52"], correctAnswer: "52", hint: "Use sine law" },
      { id: generateId(), type: "input", question: "Triangle ABC: a=11, b=13, angle C=40°. Find side c.", correctAnswer: "10.6", hint: "Use cosine law" },
      { id: generateId(), type: "mcq", question: "Triangle sides a=6, b=8, c=10. Find angle opposite side c.", options: ["53.13°", "45°", "60°", "30°"], correctAnswer: "53.13", hint: "Use cosine law" },
      { id: generateId(), type: "input", question: "Triangle: a=7, b=10, C=80°. Find side c.", correctAnswer: "12.2", hint: "Use cosine law" },
      { id: generateId(), type: "mcq", question: "Triangle: a=8, b=6, angle C=50°. Find side c.", options: ["6.5", "7.3", "8.1", "7.0"], correctAnswer: "7.3", hint: "Use cosine law" }
    ],
  },
  
  // 2.08 Length of a Line Segment (Pythagorean Theorem)
  {
    id: "2.08",
    number: "2.08",
    title: "Length of a Line Segment",
    description: "Use the Pythagorean theorem to find distances",
    type: "lesson",
    xpReward: 80,
    badge: "pythagoras-pro",
    questions: [
      { id: generateId(), type: "input", question: "Find the hypotenuse of a right triangle with legs 3 and 4.", correctAnswer: "5", hint: "c² = a² + b²" },
      { id: generateId(), type: "mcq", question: "Triangle with legs 6 and 8. Find hypotenuse.", options: ["8", "10", "12", "14"], correctAnswer: "10", hint: "Use a²+b²=c²" },
      { id: generateId(), type: "input", question: "Find the missing leg if hypotenuse=13, other leg=5.", correctAnswer: "12", hint: "b² = c² - a²" },
      { id: generateId(), type: "mcq", question: "Right triangle: hypotenuse=17, one leg=8. Find other leg.", options: ["15", "12", "9", "16"], correctAnswer: "15", hint: "b² = c² - a²" },
      { id: generateId(), type: "input", question: "Triangle legs 7 and 24. Find hypotenuse.", correctAnswer: "25", hint: "Use Pythagoras" },
      { id: generateId(), type: "mcq", question: "Legs 9 and 12. Hypotenuse is:", options: ["15", "16", "14", "13"], correctAnswer: "15", hint: "c² = a² + b²" },
      { id: generateId(), type: "input", question: "Hypotenuse=10, leg=6. Find other leg.", correctAnswer: "8", hint: "b² = c² - a²" },
      { id: generateId(), type: "mcq", question: "Triangle legs 5 and 12. Find hypotenuse.", options: ["13", "12", "15", "14"], correctAnswer: "13", hint: "c² = a² + b²" },
      { id: generateId(), type: "input", question: "Legs 8 and 15. Find hypotenuse.", correctAnswer: "17", hint: "Pythagoras" },
      { id: generateId(), type: "mcq", question: "Hypotenuse 26, one leg 10. Other leg?", options: ["24", "20", "22", "18"], correctAnswer: "24", hint: "b² = c² - a²" }
    ],
  },
  
  // 2.09 Midpoint (Average between numbers)
  {
    id: "2.09",
    number: "2.09",
    title: "Midpoint",
    description: "Find the midpoint of a line segment",
    type: "lesson",
    xpReward: 80,
    badge: "midpoint-master",
    questions: [
      { id: generateId(), type: "input", question: "Find midpoint between (2,3) and (4,7).", correctAnswer: "(3,5)", hint: "Midpoint = ((x1+x2)/2, (y1+y2)/2)" },
      { id: generateId(), type: "mcq", question: "Midpoint of (0,0) and (6,8)?", options: ["(3,4)", "(6,4)", "(3,8)", "(0,4)"], correctAnswer: "(3,4)", hint: "Average x and y" },
      { id: generateId(), type: "input", question: "Midpoint of (-2,5) and (4,9)?", correctAnswer: "(1,7)", hint: "Use (x1+x2)/2, (y1+y2)/2" },
      { id: generateId(), type: "mcq", question: "Midpoint between (1,1) and (5,7)?", options: ["(3,4)", "(2,4)", "(3,5)", "(4,5)"], correctAnswer: "(3,4)", hint: "Average x and y" },
      { id: generateId(), type: "input", question: "Midpoint of (-3,-5) and (3,5)?", correctAnswer: "(0,0)", hint: "Average of coordinates" },
      { id: generateId(), type: "mcq", question: "Midpoint of (10,2) and (4,8)?", options: ["(7,5)", "(6,5)", "(8,5)", "(7,6)"], correctAnswer: "(7,5)", hint: "Use formula" },
      { id: generateId(), type: "input", question: "Midpoint of (7,-3) and (-1,5)?", correctAnswer: "(3,1)", hint: "Average x and y" },
      { id: generateId(), type: "mcq", question: "Midpoint between (2,0) and (6,4)?", options: ["(4,2)", "(3,2)", "(4,3)", "(3,3)"], correctAnswer: "(4,2)", hint: "Midpoint formula" },
      { id: generateId(), type: "input", question: "Midpoint of (-6,-2) and (0,4)?", correctAnswer: "(-3,1)", hint: "Average coordinates" },
      { id: generateId(), type: "mcq", question: "Midpoint of (1,9) and (5,1)?", options: ["(3,5)", "(2,4)", "(3,4)", "(4,5)"], correctAnswer: "(3,5)", hint: "Use formula" }
    ],
  },
  
  // 2.10 Verifying Properties of Shapes
  {
    id: "2.10",
    number: "2.10",
    title: "Verifying Properties of Shapes",
    description: "Check angles, sides, and diagonals of shapes",
    type: "lesson",
    xpReward: 80,
    badge: "shape-checker",
    questions: [
      { id: generateId(), type: "mcq", question: "Square: all sides equal? True or False", options: ["True", "False"], correctAnswer: "True", hint: "Check definition of square" },
      { id: generateId(), type: "input", question: "Rectangle sides: 8 and 5. Diagonal length?", correctAnswer: "9.43", hint: "Use Pythagoras" },
      { id: generateId(), type: "mcq", question: "Parallelogram: opposite angles equal? True or False", options: ["True", "False"], correctAnswer: "True", hint: "Definition of parallelogram" },
      { id: generateId(), type: "input", question: "Rhombus side = 6, angle=60°. Find diagonal.", correctAnswer: "10.39", hint: "Use trigonometry" },
      { id: generateId(), type: "mcq", question: "Square diagonal formula?", options: ["s√2", "2s", "s/2", "s²"], correctAnswer: "s√2", hint: "Use Pythagoras" },
      { id: generateId(), type: "input", question: "Rectangle: length=10, width=6. Diagonal?", correctAnswer: "11.66", hint: "Use Pythagoras" },
      { id: generateId(), type: "mcq", question: "Right triangle: angle sum?", options: ["180°", "90°", "270°", "360°"], correctAnswer: "180°", hint: "Sum of angles in triangle" },
      { id: generateId(), type: "input", question: "Trapezoid: bases=8, 12, height=5. Area?", correctAnswer: "50", hint: "Area = (b1+b2)/2 * h" },
      { id: generateId(), type: "mcq", question: "Diagonal of rectangle splits it into?", options: ["2 right triangles", "2 squares", "2 parallelograms", "2 rhombuses"], correctAnswer: "2 right triangles", hint: "Each triangle is right" },
      { id: generateId(), type: "input", question: "Equilateral triangle side=6. Height?", correctAnswer: "5.2", hint: "h = √(s²-(s/2)²)" }
    ],
  },
  
  // 2.11 Equations of Circles
  {
    id: "2.11",
    number: "2.11",
    title: "Equations of Circles",
    description: "Write and solve equations for circles",
    type: "lesson",
    xpReward: 80,
    badge: "circle-solver",
    questions: [
      { id: generateId(), type: "input", question: "Circle center (0,0), radius=5. Equation?", correctAnswer: "x² + y² = 25", hint: "(x-h)² + (y-k)² = r²" },
      { id: generateId(), type: "mcq", question: "Circle center (2,3), radius=4. Equation?", options: ["(x-2)²+(y-3)²=16", "(x+2)²+(y+3)²=16", "(x-2)²+(y-3)²=8", "(x+2)²+(y-3)²=16"], correctAnswer: "(x-2)²+(y-3)²=16", hint: "Use (x-h)²+(y-k)²=r²" },
      { id: generateId(), type: "input", question: "Circle center (-1,2), radius=3. Equation?", correctAnswer: "(x+1)²+(y-2)²=9", hint: "Plug h=-1,k=2,r=3" },
      { id: generateId(), type: "mcq", question: "Circle center (0,-2), radius=5. Equation?", options: ["x²+(y+2)²=25", "x²+(y-2)²=25", "x²+(y+2)²=5", "x²+(y-2)²=5"], correctAnswer: "x²+(y+2)²=25", hint: "Use formula" },
      { id: generateId(), type: "input", question: "Circle: center (3,-1), radius=7. Equation?", correctAnswer: "(x-3)²+(y+1)²=49", hint: "r² = 49" },
      { id: generateId(), type: "mcq", question: "Equation x²+y²=16: center?", options: ["(0,0)", "(4,4)", "(2,2)", "(-4,-4)"], correctAnswer: "(0,0)", hint: "Compare with (x-h)²+(y-k)²=r²" },
      { id: generateId(), type: "input", question: "Circle: center (1,1), radius=2. Equation?", correctAnswer: "(x-1)²+(y-1)²=4", hint: "Plug in h,k,r" },
      { id: generateId(), type: "mcq", question: "Circle: (x+2)²+(y-3)²=9. Radius?", options: ["3", "9", "5", "6"], correctAnswer: "3", hint: "r²=9 → r=3" },
      { id: generateId(), type: "input", question: "Circle: center (-2,-2), radius=6. Equation?", correctAnswer: "(x+2)²+(y+2)²=36", hint: "r²=36" }
    ],
  },
];


export function getLevelById(id: string): Level | undefined {
  return LEVELS.find(l => l.id === id);
}

export function getNextLevel(currentId: string): Level | undefined {
  const index = LEVELS.findIndex(l => l.id === currentId);
  if (index >= 0 && index < LEVELS.length - 1) {
    return LEVELS[index + 1];
  }
  return undefined;
}

export function isLevelUnlocked(levelId: string, completedLevels: string[]): boolean {
  const levelIndex = LEVELS.findIndex(l => l.id === levelId);
  if (levelIndex === 0) return true;
  const previousLevel = LEVELS[levelIndex - 1];
  return completedLevels.includes(previousLevel.id);
}
