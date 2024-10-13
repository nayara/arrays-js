// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const iterative = (numbers, targetSum) => {
  let current = 0;

  while (current <= numbers.length) {
    for (let i = 0; i < numbers.length; i++) {
      if (
        numbers[current] + numbers[i] === targetSum &&
        numbers[current] !== numbers[i]
      ) {
        return [numbers[current], numbers[i]];
      }
    }
    current++;
  }

  return [];
};

const withPointers = (numbers, targetSum) => {
  let left = 0;
  let right = numbers.length - 1;

  for (let i = 0; i < numbers.length; i++) {
    let sum = numbers[left] + numbers[right];

    if (sum === targetSum) return [numbers[left], numbers[right]];

    if (sum < targetSum) {
      left++;
    } else if (sum > targetSum) {
      right--;
    }
  }

  return [];
};

const twoSum = {
  iterative,
  withPointers,
};

module.exports = twoSum;
