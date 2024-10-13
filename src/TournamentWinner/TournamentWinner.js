const calculate = (competitions, results) => {
  let winner = { score: 0, name: "" };
  let scoreBoard = {};

  for (let i = 0; i < competitions.length; i++) {
    const team = results[i] === 0 ? competitions[i][1] : competitions[i][0];

    if (!(team in scoreBoard)) {
      scoreBoard[team] = 1;
    } else {
      scoreBoard[team] = scoreBoard[team] + 1;
    }

    if (scoreBoard[team] > winner.score) {
      winner.score = scoreBoard[team];
      winner.name = team;
    }
  }

  return winner.name;
};
// complexity o(n) => worst case go through the array once


const TournamentWinner = {
  calculate,
};

module.exports = TournamentWinner;
