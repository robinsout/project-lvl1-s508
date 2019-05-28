export const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const isPrime = (num) => {
  let counter = 0;
  for (let i = 1; i <= num / 2; i += 1) {
    if (num % i === 0) {
      counter += 1;
    }
  }
  if (counter === 1) {
    return true;
  }
  return false;
};

export const isEven = num => (num % 2 === 0);
