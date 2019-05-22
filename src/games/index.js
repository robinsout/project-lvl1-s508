/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export const functionHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const askQuestionAndGetAnswer = (question) => {
  console.log('Question:', question);
  return readlineSync.question('Your answer: ');
};

const checkAndShowResults = (userAnswer, correctAnswer, userName, iter) => {
  // eslint-disable-next-line eqeqeq
  if (userAnswer == correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  if (iter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
  return true;
};

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = num => (num % 2 === 0);

export const checkEvenGame = () => {
  const userName = functionHello();
  console.log('Answer "yes" if number even otherwise answer "no".');
  let iter = 0;
  do {
    iter += 1;
    const randomNum = getRandomInteger(1, 100);
    const userAnswer = askQuestionAndGetAnswer(randomNum);
    let correctAnswer = '';
    if (isEven(randomNum)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const result = checkAndShowResults(userAnswer.toLowerCase(), correctAnswer, userName, iter);
    if (result === false) {
      break;
    }
  } while (iter < 3);
};

export const calcGame = () => {
  const userName = functionHello();
  console.log('Answer "yes" if number even otherwise answer "no".');
  let iter = 0;
  do {
    iter += 1;
    const operators = [{
      sign: '+',
      method: (a, b) => (a + b),
    }, {
      sign: '-',
      method: (a, b) => a - b,
    }, {
      sign: '*',
      method: (a, b) => a * b,
    }];
    const selectedOperator = Math.floor(Math.random() * operators.length);
    const randomNum1 = getRandomInteger(1, 30);
    const randomNum2 = getRandomInteger(1, 30);
    const questionExpression = `${randomNum1} ${operators[selectedOperator].sign} ${randomNum2}`;
    const userAnswer = askQuestionAndGetAnswer(questionExpression);
    const correctAnswer = operators[selectedOperator].method(randomNum1, randomNum2);
    const result = checkAndShowResults(userAnswer, correctAnswer, userName, iter);
    if (result === false) {
      break;
    }
  } while (iter < 3);
};
