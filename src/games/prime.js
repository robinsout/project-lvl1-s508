import generateNumber from '../utils';
import playGame from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let counter = 0;
  for (let i = 1; i <= num / 2; i += 1) {
    if (num % i === 0) {
      counter += 1;
    }
  }
  if (counter === 1) {
    return true;
  }
  return false;
};

const primeGame = () => playGame(gameDescription, () => {
  const question = generateNumber(1, 50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
});

export default primeGame;
