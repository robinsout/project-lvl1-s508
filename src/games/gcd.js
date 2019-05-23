import {
  functionHello, askQuestionAndGetAnswer, checkAndShowResults, getRandomInteger,
} from '..';

const getGCD = (randomNum1, randomNum2) => {
  let x = Math.abs(randomNum1);
  let y = Math.abs(randomNum2);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const gcdGame = () => {
  const userName = functionHello();
  console.log('Find the greatest common divisor of given numbers.');
  let iter = 0;
  do {
    iter += 1;
    const randomNum1 = getRandomInteger(1, 30);
    const randomNum2 = getRandomInteger(1, 30);
    const questionExpression = `${randomNum1} ${randomNum2}`;
    const userAnswer = askQuestionAndGetAnswer(questionExpression);
    const correctAnswer = getGCD(randomNum1, randomNum2).toString();
    const result = checkAndShowResults(userAnswer, correctAnswer, userName, iter);
    if (result === false) {
      break;
    }
  } while (iter < 3);
};

export default gcdGame;
