const transpose = (matrix) => {
  const result = [];

  for (let col = 0; col < matrix[0].length; col++) {
    const transposedRow = [];

    for (const row of matrix) {
      transposedRow.push(row[col]);
    }

    result.push(transposedRow);
  }

  return result;
};

// Time complexity o(n*m) | Space o(n*m)

const transposeSquare = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row + 1; col < matrix.length; col++) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }

  return matrix;
};
// in place, but only work for square matrix => Time complexity o(n*m) | Space o(1)

const transposeLoop = (matrix) => {
  let arr = [];
  let total = matrix.length * matrix[0].length;
  let i = 0;
  let j = 0;
  let count = 0;

  while (count < total) {
    if (!arr[j]) {
      arr[j] = [];
    }

    arr[j].push(matrix[i][j]);
    j++;

    if (j === matrix[0].length) {
      i++;
      j = 0;
    }

    count++;
  }

  return arr;
};
// Time complexity o(n*m) | Space o(n*m)

const TransposeMatrix = { transpose, transposeSquare, transposeLoop };

module.exports = TransposeMatrix;
