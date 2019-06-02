import generateNumber from '../utils';
import gameProcess from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export const isEven = num => (num % 2 === 0);

const evenGame = (gameStarted = false) => {
  let result;
  if (gameStarted === false) { // Game not started yet, passing game function to the engine
    result = gameProcess(evenGame);
  } else if (gameStarted === true) { // Game already started, passing game data to the engine
    const question = generateNumber(1, 100);
    const correctAnswer = isEven(question) ? ('yes') : ('no');
    result = [gameDescription, question, correctAnswer];
  }
  return result;
};

export default evenGame;
