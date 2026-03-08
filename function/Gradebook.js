// Build a Gradebook App

// You should have a function named getAverage that takes an array of test scores as a parameter and returns the average score.

// You should have a function named getGrade that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:

// function getAverage(scores) {
//   let sum = 0;
//   for (let i = 0; i < scores.length; i++) {
//     sum += scores[i] / scores.length;
//     // console.log(sum);
//   }
//   return sum;
// }

console.log(getAverage([50, 35, 35]));

function getAverage(scores) {
  let average = 0;
  for (let i = 0; i < scores.length; i++) {
    average += scores[i];
  }
  return average / scores.length;
}
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score < 60) {
    return "F";
  }
}

function hasPassingGrade(score) {
  if (score <= 100 && score >= 60) {
    return true;
  } else {
    return false;
  }
}

function studentMsg(scores, score) {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You failed the course.`;
  }
}
