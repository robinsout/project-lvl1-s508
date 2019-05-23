import { functionHello, askQuestionAndGetAnswer, checkAndShowResults } from '..';

export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = num => (num % 2 === 0);

const checkEvenGame = () => {
  const userName = functionHello();
  console.log('Answer "yes" if number even otherwise answer "no".');
  let iter = 0;
  do {
    iter += 1;
    const randomNum = getRandomInteger(1, 100);
    const userAnswer = askQuestionAndGetAnswer(randomNum);
    let correctAnswer = '';
    if (isEven(randomNum)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const result = checkAndShowResults(userAnswer.toLowerCase(), correctAnswer, userName, iter);
    if (result === false) {
      break;
    }
  } while (iter < 3);
};

export default checkEvenGame;
