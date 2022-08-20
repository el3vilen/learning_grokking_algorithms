const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readlineCB = (array) => {
  let trueArray = array.split(",").map(function (num) {
    return parseInt(num, 10);
  });
  console.log("Array", trueArray);

  if (Array.isArray(trueArray)) {
    console.log(sum(trueArray));
  } else {
    console.log(`Provided input is not a array :(`);
  }
  readline.close();
};

readline.question(
  `Calculate sum of numbers seperated by comma \n [EX: 1,2,3,4] \n Enter numbers: `,
  readlineCB
);

const sum = (array) => {
  const num = array.pop();

  if (num) {
    return num + sum(array);
  } else {
    return 0;
  }
};
