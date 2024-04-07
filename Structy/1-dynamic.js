const fib = (n) => {
  // todo
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  return fib(n-1) + fib(n-2)
};

module.exports = {
  fib,
};

//----------------------------------------------------------
// Tribonacci

const tribonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n === 0 || n === 1) return 0;

  if (n === 2) return 1;

  memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  return memo[n];
};

//----------------------------------------------------------
// sum possible

const sumPossible = (amount, numbers) => {
  // todo
  if (amount === 0) return true;
  if (amount < 0) return false;
  
  for (let num of numbers){
    const sum = amount - num;
    if (sumPossible(sum, numbers) === true){
      return true;
    }
  }
  return false;
};

//----------------------------------------------------------
// min change

const minChange = (amount, coins) => {
  // todo
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  
  let min = Infinity;
  for (let coin of coins){
    const resultCoin = 1 + minChange(amount - coin, coins)
    min = Math.min(resultCoin, min);
  }
  console.log(min);
  return min;
};
