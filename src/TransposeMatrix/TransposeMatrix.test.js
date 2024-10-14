const TransposeMatrix = require("./index");

describe("TransposeMatrix", () => {
  describe("#transpose", () => {
    it("returns transposed matrix", () => {
      const matrix = [[1, 2]];

      const transposedMatrix = TransposeMatrix.transpose(matrix);

      expect(transposedMatrix).toEqual([[1], [2]]);
    });
  });

  describe("#transposeSquare", () => {
    it("returns transposed matrix", () => {
      const matrix = [
        [1, 2],
        [1, 2],
      ];

      const transposedMatrix = TransposeMatrix.transposeSquare(matrix);

      expect(transposedMatrix).toEqual([
        [1, 1],
        [2, 2],
      ]);
    });
  });

  describe("#transposeLoop", () => {
    it("returns transposed matrix", () => {
      const matrix = [
        [1, 2],
        [1, 2],
      ];

      const transposedMatrix = TransposeMatrix.transposeLoop(matrix);

      expect(transposedMatrix).toEqual([
        [1, 1],
        [2, 2],
      ]);
    });
  });
});
