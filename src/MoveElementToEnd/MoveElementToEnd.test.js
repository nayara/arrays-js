const MoveElementToEnd = require("./index");

describe("MoveToEnd", () => {
  describe("#bubbleSort", () => {
    it("move all target elements to end of array", () => {
      const array = [2, 1, 2, 2, 2, 3, 4, 2];
      const toMove = 2;

      const result = MoveElementToEnd.bubbleSort(array, toMove);

      expect(result).toEqual([1, 3, 4, 2, 2, 2, 2, 2]);
    });
  });

  describe("#twoPointer", () => {
    it("move all target elements to end of array", () => {
      const array = [2, 1, 2, 2, 2, 3, 4, 2];
      const toMove = 2;

      const result = MoveElementToEnd.twoPointer(array, toMove);

      expect(result).toEqual([1, 3, 4, 2, 2, 2, 2, 2]);
    });
  });
});
