import generateNumber from '../utils';
import gameProcess from '..';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = () => {
  const difference = generateNumber(-20, 20);
  const numberOfTerms = 10;
  const initialTerm = generateNumber(-20, 20);
  const progressionGenerator = a => a + difference;
  const generatedProgression = [initialTerm];
  for (let j = 0; j < (numberOfTerms - 1); j += 1) { // Filling progression array
    const newElement = progressionGenerator(generatedProgression[j]);
    generatedProgression.push(newElement);
  }
  return generatedProgression;
};

const progressionGame = (gameStarted = false) => {
  let result;
  if (gameStarted === false) { // Game not started yet, passing game function to the engine
    result = gameProcess(progressionGame);
  } else if (gameStarted === true) { // Game already started, passing game data to the engine
    const generatedProgression = generateProgression();
    const hiddenElementIndex = generateNumber(0, generatedProgression.length - 1);
    const hiddenElement = generatedProgression[hiddenElementIndex];
    generatedProgression[hiddenElementIndex] = '..';
    let question = '';
    for (let j = 0; j < generatedProgression.length; j += 1) { // Preparing progression to display
      if (question !== '') {
        question = `${question} ${generatedProgression[j]}`;
      } else {
        question = generatedProgression[j];
      }
    }
    const correctAnswer = hiddenElement.toString();
    result = [gameDescription, question, correctAnswer]; // Passing data to engine
  }
  return result;
};

export default progressionGame;
