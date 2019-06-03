import generateNumber from '../utils';
import gameProcess from '..';

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

const calcGame = (gameStarted = false) => {
  // If game not started yet, passing game function to the engine
  // If no, game already started, passing game data to the engine
  if (gameStarted === false) {
    return gameProcess(calcGame);
  }
  const selectedOperator = generateNumber(1, operations.length);
  const randomNum1 = generateNumber(1, 30);
  const randomNum2 = generateNumber(1, 30);
  const question = `${randomNum1} ${operations[selectedOperator].sign} ${randomNum2}`;
  const correctAnswer = operations[selectedOperator].method(randomNum1, randomNum2).toString();
  return [gameDescription, question, correctAnswer];
};

export default calcGame;
