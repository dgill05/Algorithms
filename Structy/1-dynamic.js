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

//----------------------------------------------------------
// count paths

const countPaths = (grid, r=0, c=0, memo = {}) => {
  // todo
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  
  if (r === grid.length || c === grid[0].length || grid[r][c] === 'X') return 0;
  if (r === grid.length - 1 && c === grid[0].length - 1) return 1;
  
  const rightPath = countPaths(grid, r, c + 1, memo);
  const leftPath = countPaths(grid, r + 1, c, memo);
  memo[pos] = rightPath + leftPath;
  return memo[pos];
};

//----------------------------------------------------------
// Max Path Sum

const maxPathSum = (grid, r=0, c=0, memo={}) => {
  // todo
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  
  if (r === grid.length || c === grid[0].length) return 0;
  if (r === grid.length -1 && c === grid[0].length - 1) return grid[r][c];
  
  let max = -Infinity
  const downPath = grid[r][c] + maxPathSum(grid, r + 1, c, memo);
  const rightPath = grid[r][c] + maxPathSum(grid, r, c + 1, memo);
  max = Math.max(downPath, rightPath);
  memo[pos] = max;
  return memo[pos];
};

//----------------------------------------------------------
// non adjacent sum

const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  // todo
  if (i in memo) return memo[i];
  if (i >= nums.length) return 0;
  
  const include = nums[i] + nonAdjacentSum(nums, i + 2, memo);
  const exclude = nonAdjacentSum(nums, i + 1, memo);
  memo[i] = Math.max(include, exclude);
  return memo[i];
};

//----------------------------------------------------------
// summing squares
const summingSquares = (n) => {
  // todo
  if (n === 0) return 0;
  let min = Infinity
  for (let i = 1; i <= Math.sqrt(n); i++){
    const square = i * i
    const val = 1 + summingSquares(n - square);
    min = Math.min(min, val);
  }
  return min;
};

//----------------------------------------------------------
// counting change

const countingChange = (amount, coins, i = 0) => {
  // todo
  if (amount === 0) return 1;
  
  
  let coin = coins[i];
  let total = 0;
  for (let qty = 0; qty * coin <= amount; qty++){
    const remainder = amount - qty * coin;
    total += countingChange(remainder, coins, i + 1);
  }
  return total;
};

//----------------------------------------------------------
// array stepper

const arrayStepper = (nums, i = 0, memo = {}) => {
  // todo
  if (memo.hasOwnProperty(i)) return memo[i];
  if (i === nums.length - 1) return true;
  
  const maxStep = nums[i];
  for (let step = 1 ; step <= maxStep; step++){
    if (arrayStepper(nums, i + step, memo) === true){
      memo[i] = true;
      return memo[i];
    }
}
  memo[i] = false;
  return memo[i];
};

//----------------------------------------------------------
// max palin subsequence

const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
  // todo
  // if (str.length === 0) return 0;
  const pos = i + ',' + j;
  if (pos in memo) return memo[pos];
  if (i === j) return 1;
  if (i > j) return 0;
  
  const first = str[i];
  const last = str[j];
  

  if (first === last){
    memo[pos] = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);
    return memo[pos]
  } else {
    const left = maxPalinSubsequence(str, i + 1, j, memo);
    const right = maxPalinSubsequence(str, i, j - 1, memo);
    memo[pos] = Math.max(left, right);
    return memo[pos];
  }
};

//----------------------------------------------------------
// overlap subsequence

const overlapSubsequence = (str1, str2, i = 0, j = 0, memo = {}) => {
  // todo
  const key = i + ',' + j;
  if (key in memo) return memo[key];
  if (i === str1.length || j === str2.length) return 0;
  if (str1[i] === str2[j]){
    memo[key] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);
    return memo[key];
  } else {
    memo[key] = Math.max(
    overlapSubsequence(str1, str2, i + 1, j, memo),
    overlapSubsequence(str1, str2, i, j + 1, memo)
    )
    return memo[key];
  }
};

//----------------------------------------------------------
// can concat

const canConcat = (s, words, memo = {}) => {
  // todo
  if (s in memo) return memo[s];
  if (s.length === 0) return true;
  
  for (let word of words){
    if (s.startsWith(word)){
      canConcat(s.slice(word.length), words, memo)
        memo[s] = true;
        return memo[s];
      
    }
  }
  memo[s] = false;
  return memo[s];
};

//----------------------------------------------------------
// quickest concat

const quickestConcat = (s, words) => {
  // todo
  const answer = quickestConcat_(s, words);
  if ( answer === Infinity){
    return -1;
  } else {
    return answer;
  }
};

const quickestConcat_ = (s, words, memo = {}) => {
  // todo
  if (s.length === 0) return 0;
  if (s in memo) return memo[s];
  
  let min = Infinity;
  for (let word of words){
    if (s.startsWith(word) === true){
      const attempt = 1 + quickestConcat_(s.slice(word.length), words, memo)
      min = Math.min(min, attempt);
    }
  }
  memo[s] = min;
  return min;
};

//----------------------------------------------------------
// knightly number

const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
  const key = m + ',' + kr + ',' + kc;
  if (key in memo) {
    return memo[key];
  }
  
  if (kr < 0 || kr >= n || kc < 0 || kc >= n) {
    return 0;
  }
  
  if (m === 0) {
    if (kr === pr && kc === pc) {
      return 1;
    } else {
      return 0;
    }
  }
  
  const neighbors = [
    [ kr + 2, kc + 1 ],
    [ kr - 2, kc + 1 ],
    [ kr + 2, kc - 1 ],
    [ kr - 2, kc - 1 ],
    [ kr + 1, kc + 2 ],
    [ kr - 1, kc + 2 ],
    [ kr + 1, kc - 2 ],
    [ kr - 1, kc - 2 ],
  ];
  
  let count = 0;
  for (let neighbor of neighbors) {
    const [neighborRow, neighborCol] = neighbor;
    count += knightlyNumber(n, m - 1, neighborRow, neighborCol, pr, pc, memo);
  }
  
  memo[key] = count;
  return count;
};