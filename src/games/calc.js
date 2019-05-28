import {
  getUserName, askQuestionAndGetAnswer, checkAndShowResults,
} from '..';
import generateNumber from '../utils';

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

const calcGame = () => {
  const userName = getUserName();
  console.log('What is the result of the expression?');
  let iter = 0;
  const numberOfQuestions = 3;
  do {
    iter += 1;
    const selectedOperator = Math.floor(Math.random() * operators.length);
    const randomNum1 = generateNumber(1, 30);
    const randomNum2 = generateNumber(1, 30);
    const questionExpression = `${randomNum1} ${operators[selectedOperator].sign} ${randomNum2}`;
    const userAnswer = askQuestionAndGetAnswer(questionExpression);
    const correctAnswer = operators[selectedOperator].method(randomNum1, randomNum2).toString();
    const result = checkAndShowResults(userAnswer, correctAnswer, userName, iter);
    if (result === false) {
      break;
    }
  } while (iter < numberOfQuestions);
};

export default calcGame;
