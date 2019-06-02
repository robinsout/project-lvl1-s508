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
  let result;
  if (gameStarted === false) { // Game not started yet, passing game function to the engine
    result = gameProcess(calcGame);
  } else if (gameStarted === true) { // Game already started, passing game data to the engine
    const selectedOperator = generateNumber(1, operations.length);
    const randomNum1 = generateNumber(1, 30);
    const randomNum2 = generateNumber(1, 30);
    const question = `${randomNum1} ${operations[selectedOperator].sign} ${randomNum2}`;
    const correctAnswer = operations[selectedOperator].method(randomNum1, randomNum2).toString();
    result = [gameDescription, question, correctAnswer];
  }
  return result;
};

export default calcGame;
