const twoSum = require("./TwoNumSum");

describe("TwoNumSum", () => {
  describe("#iterative", () => {
    it("returns numbers that will result in target", () => {
      const numbers = [3, 5, -4, 8, 11, 1, -1, 6];

      const result = twoSum.iterative(numbers, 10);

      expect(result).toEqual([11, -1]);
    });

    it("returns empty array when does not result in target", () => {
      const numbers = [2, 6];

      const result = twoSum.iterative(numbers, 10);

      expect(result).toEqual([]);
    });
  });

  describe("#withPointers", () => {
    it("returns numbers that will result in target", () => {
      const numbers = [3, 5, -4, 8, 11, 1, -1, 20];

      const result = twoSum.withPointers(numbers, 10);

      expect(result).toEqual([11, -1]);
    });

    it("returns empty array when does not result in target", () => {
      const numbers = [-7, -5, -3, -1, 0, 1, 3, 5, 7];

      const result = twoSum.withPointers(numbers, 19);

      expect(result).toEqual([]);
    });
  });
});
