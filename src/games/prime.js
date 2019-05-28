import checkAndShowResults from '..';
import { generateNumber, isPrime } from '../utils';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numberOfQuestions = 3;

const checkPrimeGame = () => {
  let iter = 0;
  do {
    iter += 1;
    const question = generateNumber(1, 50);
    let correctAnswer = '';
    if (isPrime(question)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const result = checkAndShowResults(gameRules, question, correctAnswer, iter);
    if (result === false) {
      break;
    }
  } while (iter < numberOfQuestions);
};

export default checkPrimeGame;
