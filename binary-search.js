const values = [10, 15, 3, 7];

const binarySearch = (val, arr) => {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    const middle = lower + Math.floor((upper - lower) / 2);
    if (val === arr[middle]) {
      return middle;
    }
    if (val < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }

  return -1;
};

console.log(binarySearch(10, values));
