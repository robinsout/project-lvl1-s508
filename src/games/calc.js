import { functionHello, askQuestionAndGetAnswer, checkAndShowResults } from '..';
import { getRandomInteger } from './even';

const calcGame = () => {
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
    const correctAnswer = operators[selectedOperator].method(randomNum1, randomNum2).toString();
    const result = checkAndShowResults(userAnswer, correctAnswer, userName, iter);
    if (result === false) {
      break;
    }
  } while (iter < 3);
};

export default calcGame;
