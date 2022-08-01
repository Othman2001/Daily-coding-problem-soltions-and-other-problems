// Good morning! Here's your coding interview problem for today.

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

const getTheProductOfNumber = (numbers = [1, 2]) => {
  let product = 1;
  numbers.map((number, index) => {
    product =
      number *
      numbers.slice(0, index).reduce((acc, curr) => acc * curr, 1) *
      numbers.slice(index + 1).reduce((acc, curr) => acc * curr, 1);
  });
  return product;
};

console.log(getTheProductOfNumber([1, 2, 3, 4, 5]));

// This problem was asked by Google.
