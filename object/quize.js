// 1️⃣ Questions array
const questions = [
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["2", "3", "4"], // exactly 3 choices
    answer: "4",
  },
  {
    category: "Biology",
    question: "What is the powerhouse of the cell?",
    choices: ["Nucleus", "Ribosome", "Mitochondria"],
    answer: "Mitochondria",
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "King George III"],
    answer: "George Washington",
  },
  {
    category: "Politics",
    question:
      "Which of the following is a fundamental duty in a democratic country?",
    choices: [
      "Ignoring laws",
      "Respecting the Constitution",
      "Paying bribes to officials",
    ],
    answer: "Respecting the Constitution",
  },
  {
    category: "General Knowledge",
    question: "Which planet in our solar system is known for its rings?",
    choices: ["Saturn", "Mars", "Venus"],
    answer: "Saturn",
  },
];

// 2️⃣ Function to get a random question
function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

// 3️⃣ Function to get a random computer choice from the choices array
function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

// 4️⃣ Function to check the computer's answer
function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

// ✅ Example usage:
const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
const result = getResults(randomQuestion, computerChoice);
console.log(result);

console.log("Question:", randomQuestion.question);
console.log("Choices:", randomQuestion.choices);
console.log("Computer chose:", computerChoice);
console.log(getResults(randomQuestion, computerChoice));
