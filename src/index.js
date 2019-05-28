import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('What is your name? ');
console.log(`Hello, ${userName}!`);

function checkAndShowResults(rules, question, correctAnswer, iter) {
  if (iter === 0) {
    console.log(rules);
  }
  console.log('Question:', question);
  const userAnswer = readlineSync.question('Your answer: ');
  let correctAnswerIndex = true;
  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    correctAnswerIndex = false;
  }
  const numberOfQuestions = 3;
  if (iter === numberOfQuestions && correctAnswerIndex === true) {
    console.log(`Congratulations, ${userName}!`);
  }
  return correctAnswerIndex;
}

export default checkAndShowResults;
