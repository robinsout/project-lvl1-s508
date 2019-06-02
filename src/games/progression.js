import generateNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';

const progressionGame = () => {
  const difference = generateNumber(-20, 20);
  const numberOfTerms = 10;
  const initialTerm = generateNumber(-20, 20);
  const progressionGenerator = a => a + difference;
  const generatedProgression = [initialTerm];

  for (let j = 0; j < (numberOfTerms - 1); j += 1) {
    const newElement = progressionGenerator(generatedProgression[j]);
    generatedProgression.push(newElement);
  }

  const hiddenElementIndex = generateNumber(0, generatedProgression.length - 1);
  const hiddenElement = generatedProgression[hiddenElementIndex];
  generatedProgression[hiddenElementIndex] = '..';

  let question = '';
  for (let j = 0; j < generatedProgression.length; j += 1) {
    if (question !== '') {
      question = `${question} ${generatedProgression[j]}`;
    } else {
      question = generatedProgression[j];
    }
  }

  const correctAnswer = hiddenElement.toString();

  return [gameDescription, question, correctAnswer];
};

export default progressionGame;
