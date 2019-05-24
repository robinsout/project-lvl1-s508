import {
  functionHello, askQuestionAndGetAnswer, checkAndShowResults, getRandomInteger,
} from '..';

const progressionGame = () => {
  const userName = functionHello();
  console.log('What number is missing in the progression?');
  let iter = 0;
  do {
    iter += 1;
    const randomAddition = getRandomInteger(-20, 20);
    const progressions = [{
      progression: a => a + randomAddition,
    }];

    const selectedProgression = Math.floor(Math.random() * progressions.length);
    const randomArray = [getRandomInteger(1, 20)];

    for (let j = 1; j < 10; j += 1) {
      const newElement = progressions[selectedProgression].progression(randomArray[j - 1]);
      randomArray.push(newElement);
    }

    const hiddenElementIndex = getRandomInteger(0, randomArray.length - 1);
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
  } while (iter < 3);
};

export default progressionGame;
