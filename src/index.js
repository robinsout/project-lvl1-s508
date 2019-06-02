import readlineSync from 'readline-sync';
import progressionGame from './games/progression';
import primeGame from './games/prime';
import gcdGame from './games/gcd';
import evenGame from './games/even';
import calcGame from './games/calc';

const gameProcess = (gameName) => {
  const getGame = () => {
    switch (gameName) {
      case 'progression':
        return progressionGame();
      case 'prime':
        return primeGame();
      case 'gcd':
        return gcdGame();
      case 'even':
        return evenGame();
      case 'calc':
        return calcGame();
      default:
        return false;
    }
  };
  const gameDescription = getGame()[0];

  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);

  const numberOfQuestions = 3;

  for (let iter = 1; iter <= numberOfQuestions; iter += 1) {
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
    if (iter === numberOfQuestions) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameProcess;
