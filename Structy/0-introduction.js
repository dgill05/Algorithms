//Max Value
const maxValue = (nums) => {
  // todo
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] > max) max = nums[i];
  }
  return max;
};

console.log(maxValue([2,5,-2,10]));

//----------------------------------------------------------
// Is prime

const isPrime = (n) => {
  // todo
  if (n === 1) return false;
  if (n === 2) return true;
  for (let i = 2; i < n; i++){
    if (n % i === 0) return false;
  }
  return true;
};