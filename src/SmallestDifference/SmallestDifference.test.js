const SmallestDifference = require("./index");

describe("SmallestDifference", () => {
  describe("#iterative", () => {
    it("returns a pair that difference is closer to 0", () => {
      const arrayOne = [-1, -5, 10, 20, 28, 3];
      const arrayTwo = [26, 134, 135, 15, 17];

      const result = SmallestDifference.iterative(arrayOne, arrayTwo);

      expect(result).toEqual([28, 26]);
    });
  });

  describe("#withPointers", () => {
    it("returns a pair that difference is closer to 0 without equal numbers on array", () => {
      const arrayOne = [-1, -5, 10, 20, 28, 3];
      const arrayTwo = [26, 134, 135, 15, 17];

      const result = SmallestDifference.withPointers(arrayOne, arrayTwo);

      expect(result).toEqual([28, 26]);
    });

    it("returns a pair that difference is closer to 0 with equal numbers on array", () => {
      const arrayOne = [-1, -5, 10, 20, 28, 3];
      const arrayTwo = [26, 134, 3, 15, 17];

      const result = SmallestDifference.withPointers(arrayOne, arrayTwo);

      expect(result).toEqual([3, 3]);
    });
  });
});
