import checkAndShowResults from '..';
import { generateNumber, isEven } from '../utils';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';
const numberOfQuestions = 3;

const checkEvenGame = () => {
  let iter = 0;
  do {
    iter += 1;
    const question = generateNumber(1, 100);
    const correctAnswer = isEven(question) ? ('yes') : ('no');
    const result = checkAndShowResults(gameRules, question, correctAnswer, iter);
    if (result === false) {
      break;
    }
  } while (iter < numberOfQuestions);
};

export default checkEvenGame;
