// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.
// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.
// Return that number, or -1 if it is impossible.
// Good Luck!!!

function solve(n) {
  if (n % 10 !== 0) {
    return -1; // If the withdrawal amount is not a multiple of 10, it's impossible
  }

  let banknotes = [500, 200, 100, 50, 20, 10];
  let count = 0;

  for (let i = 0; i < banknotes.length; i++) {
    count += Math.floor(n / banknotes[i]);
    n %= banknotes[i];
  }

  return count;
}