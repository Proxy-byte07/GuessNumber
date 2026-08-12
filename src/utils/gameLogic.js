export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function validateGuess(guess, min, max) {
  if (guess === "" || guess === null || guess === undefined) {
    return "Please enter a guess.";
  }

  const number = Number(guess);

  if (!Number.isInteger(number)) {
    return "Please enter a whole number.";
  }

  if (number < min || number > max) {
    return `Please enter a number between ${min} and ${max}.`;
  }

  return null;
}

export function checkGuess(guess, target) {
  if (guess < target) {
    return "low";
  }

  if (guess > target) {
    return "high";
  }

  return "correct";
}