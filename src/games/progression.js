import generateNumber from '../utils';
import playGame from '..';

const gameDescription = 'What number is missing in the progression?';
const lengthOfProgression = 10;


const generateProgression = () => {
  const difference = generateNumber(0, 20);
  const initialTerm = generateNumber(0, 20);
  const progressionGenerator = a => a + difference;
  const progression = [initialTerm];
  for (let i = 0; i < (lengthOfProgression - 1); i += 1) { // Filling progression array
    const newElement = progressionGenerator(progression[i]);
    progression.push(newElement);
  }
  return progression;
};

const progressionGame = () => {
  const progression = generateProgression();
  const hiddenElementIndex = generateNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';

  let question = '';
  for (let i = 0; i < progression.length; i += 1) { // Preparing progression to display
    question = question !== '' ? `${question} ${progression[i]}` : progression[i];
  }

  return [question, correctAnswer]; // Passing data to engine
};

export default () => playGame(gameDescription, () => progressionGame());
