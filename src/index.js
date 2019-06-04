import readlineSync from 'readline-sync';

const questionsCount = 3;

const playGame = (gameDescription, inputGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= questionsCount; i += 1) {
    const inputGameData = inputGame();
    console.log('Question:', inputGameData[0]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() !== inputGameData[1]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${inputGameData[1]}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
