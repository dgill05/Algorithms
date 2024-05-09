const {
  fib,
  tribonacci,
  sumPossible,
  minChange,
  countPaths,
  maxPathSum,
  nonAdjacentSum,
  summingSquares,
  countingChange,
  arrayStepper,
  maxPalinSubsequence,
  overlapSubsequence,
  canConcat,
  quickestConcat,
  knightlyNumber
} = require('./1-dynamic');// adjust the path as needed if your test file is in a different directory

describe('fib function', () => {
  test('fib(0) should return 0', () => {
    expect(fib(0)).toBe(0);
  });

  test('fib(1) should return 1', () => {
    expect(fib(1)).toBe(1);
  });

  test('fib(2) should return 1', () => {
    expect(fib(2)).toBe(1);
  });

  test('fib(3) should return 2', () => {
    expect(fib(3)).toBe(2);
  });

  test('fib(10) should return 55', () => {
    expect(fib(10)).toBe(55);
  });

  test('fib(20) should return 6765', () => {
    expect(fib(20)).toBe(6765);
  });
});

describe('tribonacci function', ()=> {
  test('tribonacci(0) should return 0', () => {
    expect(tribonacci(0).toBe(0));
  })
});