import generateNumber from '../utils';
import playGame from '..';

const gameDescription = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const generateProgression = () => {
  const difference = generateNumber(0, 20);
  const initialTerm = generateNumber(0, 20);
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    const newElement = i === 0 ? initialTerm : progression[i - 1] + difference;
    progression.push(newElement);
  }
  return progression;
};

const progressionGame = () => {
  const progression = generateProgression();
  const hiddenElementIndex = generateNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => playGame(gameDescription, progressionGame);
