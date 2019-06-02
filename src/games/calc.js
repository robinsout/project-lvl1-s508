import generateNumber from '../utils';

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

const calcGame = () => {
  const selectedOperator = generateNumber(1, operations.length);
  const randomNum1 = generateNumber(1, 30);
  const randomNum2 = generateNumber(1, 30);
  const question = `${randomNum1} ${operations[selectedOperator].sign} ${randomNum2}`;
  const correctAnswer = operations[selectedOperator].method(randomNum1, randomNum2).toString();
  return [gameDescription, question, correctAnswer];
};

export default calcGame;
