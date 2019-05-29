import checkAndShowResults from '..';
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

const gameRules = 'What is the result of the expression?';

const calcGame = () => {
  let iter = 0;
  const numberOfQuestions = 3;
  do {
    iter += 1;
    const selectedOperator = Math.floor(Math.random() * operators.length);
    const randomNum1 = generateNumber(1, 30);
    const randomNum2 = generateNumber(1, 30);
    const question = `${randomNum1} ${operators[selectedOperator].sign} ${randomNum2}`;
    const correctAnswer = operators[selectedOperator].method(randomNum1, randomNum2).toString();
    const result = checkAndShowResults(gameRules, question, correctAnswer, iter);
    if (result === false) {
      break;
    }
  } while (iter < numberOfQuestions);
};

export default calcGame;
