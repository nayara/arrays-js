/* 
Given an array of positive integers representing the values of coins in your
possession, write a function that returns the minimum amount of change (the
minimum sum of money) that you cannot create. The given coins can have
any positive integer value and aren't necessarily unique (i.e., you can have
multiple coins of the same value).

For example, if you're given <span>coins = [1, 2, 5]</span>, the minimum
amount of change that you can't create is 4. If you're given no
coins, the minimum amount of change that you can't create is 1.
*/

const caculate = (coins) => {
  coins.sort((a, b) => a - b);

  let currentChangeCreated = 0;

  for (const coin of coins) {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;

    currentChangeCreated += coin;
  }

  return currentChangeCreated + 1;
};

const NonConstructibleChange = {
  caculate,
};

module.exports = NonConstructibleChange;
