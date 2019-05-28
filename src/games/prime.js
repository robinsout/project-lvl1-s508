import {
  getUserName, askQuestionAndGetAnswer, checkAndShowResults,
} from '..';
import generateNumber from '../utils';

const isPrime = (num) => {
  let counter = 0;
  for (let i = 1; i <= num / 2; i += 1) {
    if (num % i === 0) {
      counter += 1;
    }
  }
  if (counter === 2) {
    return true;
  }
  return false;
};

const checkPrimeGame = () => {
  const userName = getUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let iter = 0;
  const numberOfQuestions = 3;
  do {
    iter += 1;
    const randomNum = generateNumber(1, 50);
    const userAnswer = askQuestionAndGetAnswer(randomNum);
    let correctAnswer = '';
    if (isPrime(randomNum)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const result = checkAndShowResults(userAnswer.toLowerCase(), correctAnswer, userName, iter);
    if (result === false) {
      break;
    }
  } while (iter < numberOfQuestions);
};

export default checkPrimeGame;
