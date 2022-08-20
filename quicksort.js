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
    console.log(quicksort(trueArray));
  } else {
    console.log(`Provided input is not a array :(`);
  }

  readline.close();
};

readline.question(
  `Quicksort numbers seperated by comma \n [EX: 1,2,3,4] \n Enter numbers: `,
  readlineCB
);

const quicksort = (array) => {
  if (array.length < 2) {
    return array;
  } else {
    let pivot = array[0];
    array.shift();
    let less = array
      .map((number) => {
        if (number <= pivot) {
          return number;
        }
      })
      .filter((number) => number !== undefined);

    let greater = array
      .map((number) => {
        if (number > pivot) {
          return number;
        }
      })
      .filter((number) => number !== undefined);

    console.log("less", less);
    console.log("greater", greater);

    return [...quicksort(less), pivot, ...quicksort(greater)];
  }
};
