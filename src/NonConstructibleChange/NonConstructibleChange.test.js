const NonConstructibleChange = require("./index");

describe("NonConstructibleChange", () => {
  describe("#calculate", () => {
    describe("when has different coins", () => {
      it("returns min not possible change", () => {
        const coins = [5, 7, 1, 1, 2, 3, 22];

        const result = NonConstructibleChange.caculate(coins);

        expect(result).toBe(20);
      });
    });

    describe("when has same coins", () => {
      it("returns min not possible change", () => {
        const coins = [1, 1, 1];

        const result = NonConstructibleChange.caculate(coins);

        expect(result).toBe(4);
      });
    });
  });

  describe("when do not have coins", () => {
    it("returns 1", () => {
      const coins = [];

      const result = NonConstructibleChange.caculate(coins);

      expect(result).toBe(1);
    });
  });
});
