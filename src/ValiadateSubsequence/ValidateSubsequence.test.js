const ValidadeSubsequence = require("./ValidateSubsequence");

describe("ValidateSubsequence", () => {
  describe("#interative", () => {
    it("return true when is a subsequence", () => {
      const validateSubsequence = new ValidadeSubsequence();

      const result = validateSubsequence.iterative(
        [5, 1, 22, 25, 6, -1, 8, 10],
        [1, 6, -1, 10]
      );

      expect(result).toBeTruthy();
    });

    it("return false when is not a subsequence", () => {
      const validateSubsequence = new ValidadeSubsequence();

      const result = validateSubsequence.iterative(
        [5, 1, 22, 25, 6, -1, 8, 10],
        [5, 7, 24, 36]
      );

      expect(result).toBeFalsy();
    });
  });

  describe("#twoPointers", () => {
    it("return true when is a subsequence", () => {
      const validateSubsequence = new ValidadeSubsequence();

      const result = validateSubsequence.twoPointers(
        [5, 1, 22, 25, 6, -1, 8, 10],
        [1, 6, -1, 10]
      );

      expect(result).toBeTruthy();
    });

    it("return false when is not a subsequence", () => {
      const validateSubsequence = new ValidadeSubsequence();

      const result = validateSubsequence.twoPointers(
        [5, 1, 22, 25, 6, -1, 8, 10],
        [5, 7, 24, 36]
      );

      expect(result).toBeFalsy();
    });
  });
});
