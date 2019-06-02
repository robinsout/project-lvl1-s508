import readlineSync from 'readline-sync';

const gameProcess = (inputGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(inputGame(true)[0]);
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);

  const numberOfQuestions = 3;

  for (let iter = 1; iter <= numberOfQuestions; iter += 1) {
    const inputGameData = inputGame(true);
    console.log('Question:', inputGameData[1]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() !== inputGameData[2]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${inputGameData[2]}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    if (iter === numberOfQuestions) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameProcess;
