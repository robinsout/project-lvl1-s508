import readlineSync from 'readline-sync';

const questionsCount = 3;

const playGame = (gameDescription, getInputGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= questionsCount; i += 1) {
    const [question, correctAnswer] = getInputGame();
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
