import checkAndShowResults from '..';
import generateNumber from '../utils';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numberOfQuestions = 3;

export const isPrime = (num) => {
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

const checkPrimeGame = () => {
  let iter = 0;
  do {
    iter += 1;
    const question = generateNumber(1, 50);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    const result = checkAndShowResults(gameRules, question, correctAnswer, iter);
    if (result === false) {
      break;
    }
  } while (iter < numberOfQuestions);
};

export default checkPrimeGame;
