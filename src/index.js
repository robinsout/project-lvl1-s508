import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const askQuestionAndGetAnswer = (question) => {
  console.log('Question:', question);
  return readlineSync.question('Your answer: ');
};

export const checkAndShowResults = (userAnswer, correctAnswer, userName, iter) => {
  let correctAnswerIndex = true;
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    correctAnswerIndex = false;
  }
  const numberOfQuestions = 3;
  if (iter === numberOfQuestions && correctAnswerIndex !== false) {
    console.log(`Congratulations, ${userName}!`);
  }
  return correctAnswerIndex;
};
