const execute = (array, target) => {
  array.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > target) break;

    let start = i + 1;
    let end = array.length - 1;

    while (start < end) {
      const sum = array[i] + array[start] + array[end];

      if (sum === target) {
        result.push([array[i], array[start], array[end]]);
        start++;
        end--;
      } else if (sum < target) {
        start++;
      } else {
        end--;
      }
    }
  }

  return result;
};

const ThreeNumSum = {
  execute,
};

module.exports = ThreeNumSum;
