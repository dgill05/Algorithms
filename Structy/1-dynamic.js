const fib = (n) => {
  // todo
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  return fib(n-1) + fib(n-2)
};

module.exports = {
  fib,
};