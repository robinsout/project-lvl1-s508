import {
  getUserName, askQuestionAndGetAnswer, checkAndShowResults,
} from '..';
import generateNumber from '../utils';

const isEven = num => (num % 2 === 0);

const checkEvenGame = () => {
  const userName = getUserName();
  console.log('Answer "yes" if number even otherwise answer "no".');
  let iter = 0;
  const numberOfQuestions = 3;
  do {
    iter += 1;
    const randomNum = generateNumber(1, 100);
    const userAnswer = askQuestionAndGetAnswer(randomNum);
    const correctAnswer = isEven(randomNum) ? ('yes') : ('no');
    const result = checkAndShowResults(userAnswer.toLowerCase(), correctAnswer, userName, iter);
    if (result === false) {
      break;
    }
  } while (iter < numberOfQuestions);
};

export default checkEvenGame;
