import generateNumber from '../utils';
import playGame from '..';

const operations = [{
  sign: '+',
  method: (a, b) => (a + b),
}, {
  sign: '-',
  method: (a, b) => a - b,
}, {
  sign: '*',
  method: (a, b) => a * b,
}];

const gameDescription = 'What is the result of the expression?';

const playCalcGame = () => {
  const operator = generateNumber(0, operations.length - 1);
  const randomNum1 = generateNumber(1, 30);
  const randomNum2 = generateNumber(1, 30);
  const question = `${randomNum1} ${operations[operator].sign} ${randomNum2}`;
  const correctAnswer = operations[operator].method(randomNum1, randomNum2).toString();
  return [question, correctAnswer];
};

export default () => playGame(gameDescription, playCalcGame);
