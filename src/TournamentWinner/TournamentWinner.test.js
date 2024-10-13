const TournamentWinner = require("./TournamentWinner");

const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
// home team | away team

const results = [0, 0, 1];
// 0 means the away team won, 1 mean home team won
// Python is winner
describe("TournamentWinner", () => {
  describe("#calculate", () => {
    it("returns the winner", () => {
      const result = TournamentWinner.calculate(competitions, results);

      expect(result).toBe("Python");
    });
  });
});
