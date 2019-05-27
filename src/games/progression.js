import {
  getUserName, askQuestionAndGetAnswer, checkAndShowResults, generateNumber,
} from '..';

const progressionGame = () => {
  const userName = getUserName();
  console.log('What number is missing in the progression?');
  let iter = 0;
  const numberOfQuestions = 3;
  do {
    iter += 1;
    const progressionStep = generateNumber(-20, 20);
    const numberOfElements = 10;
    const firstElement = generateNumber(-20, 20);
    const progressions = [{
      progression: a => a + progressionStep,
    }];

    const selectedProgression = Math.floor(Math.random() * progressions.length);
    const randomArray = [firstElement];

    for (let j = 1; j < numberOfElements; j += 1) {
      const newElement = progressions[selectedProgression].progression(randomArray[j - 1]);
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

    const userAnswer = askQuestionAndGetAnswer(question);

    const correctAnswer = hiddenElement.toString();

    const result = checkAndShowResults(userAnswer, correctAnswer, userName, iter);
    if (result === false) {
      break;
    }
  } while (iter < numberOfQuestions);
};

export default progressionGame;
