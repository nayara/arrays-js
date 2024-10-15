const iterative = (arrayOne, arrayTwo) => {
  let currentMinPair = [];
  let currentMinAbs = Infinity;

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      const absDiff = Math.abs(arrayOne[i] - arrayTwo[j]);

      if (absDiff < currentMinAbs) {
        currentMinAbs = absDiff;

        currentMinPair = [arrayOne[i], arrayTwo[j]];
      }
    }
  }

  return currentMinPair;
};
// complexity: worst case o(n*m) => pass througth all elements of each arr

const withPointers = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let arrayOnePointer = 0;
  let arrayTwoPointer = 0;
  let currentMinAbs = Infinity;

  let currentMinPair = [];
  let currentDiff;

  while (
    arrayOnePointer < arrayOne.length &&
    arrayTwoPointer < arrayTwo.length
  ) {
    let numOfFirstArr = arrayOne[arrayOnePointer];
    let numOfSecondArr = arrayTwo[arrayTwoPointer];

    if (numOfFirstArr < numOfSecondArr) {
      currentDiff = Math.abs(numOfFirstArr - numOfSecondArr);
      arrayOnePointer++;
    } else if (numOfFirstArr > numOfSecondArr) {
      currentDiff = Math.abs(numOfFirstArr - numOfSecondArr);
      arrayTwoPointer++;
    } else {
      return [numOfFirstArr, numOfSecondArr];
    }

    if (currentDiff < currentMinAbs) {
      currentMinAbs = currentDiff;
      currentMinPair = [numOfFirstArr, numOfSecondArr]
    }
  }

  return currentMinPair;
};
// complexity: worst case o(n*m) => pass through all elements of both arrays; avg o(nlogn+mlogm) not pass throught all elements

const SmallestDifference = {
  iterative,
  withPointers,
};

module.exports = SmallestDifference;
