import checkAndShowResults from '..';
import generateNumber from '../utils';

const gameRules = 'What number is missing in the progression?';
const numberOfQuestions = 3;

const progressionGame = () => {
  let iter = 0;
  do {
    iter += 1;
    const d = generateNumber(-20, 20);
    const n = 10;
    const a1 = generateNumber(-20, 20);
    const progressions = [{
      progression: a => a + d,
    }];

    const selectedProgression = Math.floor(Math.random() * progressions.length);
    const randomArray = [a1];

    for (let j = 0; j < (n - 1); j += 1) {
      const newElement = progressions[selectedProgression].progression(randomArray[j]);
      randomArray.push(newElement);
    }

    const hiddenElementIndex = generateNumber(0, randomArray.length - 1);
    const hiddenElement = randomArray[hiddenElementIndex];
    randomArray[hiddenElementIndex] = '..';

    let question = '';
    for (let j = 0; j < randomArray.length; j += 1) {
      if (question !== '') {
        question = `${question} ${randomArray[j]}`;
      } else {
        question = randomArray[j];
      }
    }

    const correctAnswer = hiddenElement.toString();
    const result = checkAndShowResults(gameRules, question, correctAnswer, iter);
    if (result === false) {
      break;
    }
  } while (iter < numberOfQuestions);
};

export default progressionGame;
