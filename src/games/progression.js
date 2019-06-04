import generateNumber from '../utils';
import playGame from '..';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = () => {
  const difference = generateNumber(0, 20);
  const lengthOfProgression = 10;
  const initialTerm = generateNumber(0, 20);
  const progressionGenerator = a => a + difference;
  const progression = [initialTerm];
  for (let j = 0; j < (lengthOfProgression - 1); j += 1) { // Filling progression array
    const newElement = progressionGenerator(progression[j]);
    progression.push(newElement);
  }
  return progression;
};

const progressionGame = () => playGame(gameDescription, () => {
  const progression = generateProgression();
  const hiddenElementIndex = generateNumber(0, progression.length - 1);
  const hiddenElement = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';

  let question = '';
  for (let j = 0; j < progression.length; j += 1) { // Preparing progression to display
    if (question !== '') {
      question = `${question} ${progression[j]}`;
    } else {
      question = progression[j];
    }
  }

  const correctAnswer = hiddenElement.toString();
  return [question, correctAnswer]; // Passing data to engine
});

export default progressionGame;
