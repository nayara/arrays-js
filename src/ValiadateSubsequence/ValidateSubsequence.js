// Given two non-empty arrays of integers, write a function
// that determines wheather the second array is subsequence
// of the first one, not necessarily adjacent in the array
// but that are in the same order as they appear in both.

class ValidadeSubsequence {
  constructor() {}

  iterative(array, sequence) {
    let current = 0;
    const result = [];

    while (current < sequence.length) {
      array.forEach((element, index) => {
        if (sequence[current] === array[index]) {
          result.push(element);
        }
      });

      current++;
    }

    return JSON.stringify(result) === JSON.stringify(sequence);
  }
  // complexity o(n2) => worst case go throught every element of the arrays

  twoPointers(array, sequence) {
    let counter = 0;
    let index = 0;

    while (index < array.length) {
      if (array[index] === sequence[counter]) {
        counter++;
      }

      index++;
    }

    return counter === sequence.length;
  }
}
// complexity o(n) => worst case go throught every element of array once

module.exports = ValidadeSubsequence;
