const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Calculate factorial of number: `, (number) => {
  console.log(findFactorial(number));
  readline.close();
});

const findFactorial = (number) => {
  if (isNaN(number)) {
    return `Provided input is not a number :(`;
  }

  if (number > 1) {
    return number * findFactorial(number - 1);
  } else {
    return 1;
  }
};
