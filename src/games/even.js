import generateNumber from '../utils';
import gameProcess from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const evenGame = (gameStarted = false) => {
  const isEven = num => (num % 2 === 0);

  // If game not started yet, passing game function to the engine
  // If no, game already started, passing game data to the engine
  if (gameStarted === false) {
    return gameProcess(evenGame);
  }
  const question = generateNumber(1, 100);
  const correctAnswer = isEven(question) ? ('yes') : ('no');
  return [gameDescription, question, correctAnswer];
};

export default evenGame;
