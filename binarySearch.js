const list = [1, 2, 3, 5, 7, 9];

const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.ceil((low + high) / 2);
        let guess = list[mid];

        if (guess == item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
};

console.log("list", list);
console.log("Looking for 3", binarySearch(list, 3));
console.log("Looking for -1", binarySearch(list, -1));