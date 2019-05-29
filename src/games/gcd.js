import generateNumber from '../utils';

const getGcd = (randomNum1, randomNum2) => {
  let x = Math.abs(randomNum1);
  let y = Math.abs(randomNum2);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const randomNum1 = generateNumber(1, 30);
  const randomNum2 = generateNumber(1, 30);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = getGcd(randomNum1, randomNum2).toString();
  return [gameRules, question, correctAnswer];
};

export default gcdGame;
