import readlineSync from 'readline-sync';

export const functionHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = num => (num % 2 === 0);

const askUserAndCheckEven = () => {
  const randomNum = getRandomInteger(1, 100);
  console.log('Question:', randomNum);
  const userAnswer = readlineSync.question('Your answer: ');
  let correctAnswer = '';
  if (isEven(randomNum)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [userAnswer, correctAnswer];
};

export const checkEven = () => {
  const userName = functionHello();
  console.log('Answer "yes" if number even otherwise answer "no".');
  let i = 0;
  let ask;
  do {
    ask = askUserAndCheckEven();
    if (ask[0].toLowerCase() === ask[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${ask[0]}' is wrong answer ;(. Correct answer was '${ask[1]}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    i += 1;
  }
  while (i < 3 && ask[0] !== false);
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
