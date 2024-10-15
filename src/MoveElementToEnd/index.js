const bubbleSort = (array, toMove) => {
  let swapped;

  for (let i = 0; i < array.length - 1; i++) {
    swapped = false;

    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] === toMove) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return array;
};
// complexity: worst case o(n2) => pass multiple times to array until order

const twoPointer = (array, toMove) => {
  let pointer = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== toMove) {
      array[pointer] = array[i];
      pointer++;
    }
  }

  while (pointer < array.length) {
    array[pointer] = toMove;
    pointer++;
  }

  console.log(array);

  return array;
};
// complexity: o(n) => pass throught the array once

const MoveElementToEnd = {
  bubbleSort,
  twoPointer,
};

module.exports = MoveElementToEnd;
