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
  const selectedOperator = Math.floor(Math.random() * operators.length);
  const randomNum1 = generateNumber(1, 30);
  const randomNum2 = generateNumber(1, 30);
  const question = `${randomNum1} ${operators[selectedOperator].sign} ${randomNum2}`;
  const correctAnswer = operators[selectedOperator].method(randomNum1, randomNum2).toString();
  return [gameRules, question, correctAnswer];
};

export default calcGame;
