const ThreeNumSum = require("./index");

describe("ThreeNumSum", () => {
  describe("#threeSum", () => {
    it("return possible nums to sum", () => {
      const array = [12, 3, 1, 2, -6, 5, -8, 6];
      const target = 0;

      const result = ThreeNumSum.execute(array, target);

      expect(result).toEqual([
        [-8, 2, 6],
        [-8, 3, 5],
        [-6, 1, 5],
      ]);
    });
  });
});
