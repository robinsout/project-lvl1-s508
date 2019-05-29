import readlineSync from 'readline-sync';
import progressionGame from './games/progression';
import checkPrimeGame from './games/prime';
import gcdGame from './games/gcd';
import checkEvenGame from './games/even';
import calcGame from './games/calc';

const checkAndShowResults = (gameName) => {
  const getGame = () => {
    switch (gameName) {
      case 'progression':
        return progressionGame();
      case 'prime':
        return checkPrimeGame();
      case 'gcd':
        return gcdGame();
      case 'even':
        return checkEvenGame();
      case 'calc':
        return calcGame();
      default:
        return false;
    }
  };
  const rules = getGame()[0];

  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);

  let iter = 0;
  const numberOfQuestions = 3;

  do {
    iter += 1;
    const game = getGame();
    console.log('Question:', game[1]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() === game[2]) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${game[2]}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } while (iter < numberOfQuestions);

  if (iter === numberOfQuestions) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default checkAndShowResults;
