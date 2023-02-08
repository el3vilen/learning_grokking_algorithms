const findSmallest = (array) => {
  let smallest = array[0]; // stores the smallest value
  let smallestIndex = 0; // stores the index of the smallest value

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = (array) => {
  const newArray = [];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let smallest = findSmallest(array); // finds the smallest werelement in the array, and adds it to the new array
    newArray.push(array.splice(smallest, 1)[0]);
  }

  return newArray;
};

console.log(selectionSort([5, 3, 6, 2, 10, 7, 23, 67, 24]));
