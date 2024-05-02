//----------------------------------------------------------
// uncompress

const uncompress = (s) => {
  // todo
  let i = 0;
  let j = 0;
  let result = '';
  const digit = '0123456789'
  
  while (j < s.length){
    if (digit.includes(s[j])){
      j++;
    } else {
      const next = Number(s.slice(i, j));
      console.log('num: ' , next)
      for (let count = 0; count < next; count++){
        result += s[j];
      }
      j++;
      i = j;
      
      console.log('j: ', j)
    }
  }
  return result;
};

//----------------------------------------------------------
// compress

const compress = (s) => {
  // todo
  let i = 0;
  let j = 0;
  let result = [];
  while (j <= s.length){
    console.log('i ' , s[i], i)
    console.log('j ' , s[j], j)
    if (s[j] === s[i]){
      j++;
    } else {
      const num = s.slice(i, j);
      console.log('num ', num)
      if (num.length > 1) result.push(num.length);
      result.push(s[i]);
      i = j;
      j++;
    }
  }
  return result.join('');
};

//----------------------------------------------------------
// anagrams

const anagrams = (s1, s2) => {
  // todo
  const cache = {};
  for (let char of s1){
    if (!cache[char]){
      cache[char] = 1;
    } else {
      cache[char]++;
    }
  }
  
  for (let char of s2){
    console.log(cache)
    if(!cache[char]){
      return false;
    } else {
      cache[char]--;
    }
    
  }
  
  for (let char in cache){
    if (cache[char] !== 0) return false;
  }
  
  return true;
};

//----------------------------------------------------------
// most frequent char

const mostFrequentChar = (s) => {
  // todo
  const cache = {};
  for (let char of s) {
    if (!cache[char]){
      cache[char] = 1
    } else {
      cache[char]++;
    }
  }
  
  let maxKey = '';
  let maxValue = -Infinity;
  for (let char in cache){
    const num = Number(cache[char]);
    if (num > maxValue){
      maxValue = num;
      maxKey = char;
    }
  }
  return maxKey;
};

//----------------------------------------------------------
// pair sum

const pairSum = (numbers, targetSum) => {
  
  const cache = {};
  const result = []
  for (let i = 0; i < numbers.length; i++){
    const complement = targetSum - numbers[i];
    
    if (complement in cache){
      console.log('i ', i)
      console.log('comp ', cache[complement])
      result.push(i)
      result.push(cache[complement])
    }
    cache[numbers[i]] = i;
  }
  return cache;
};

//----------------------------------------------------------
// pair product

const pairProduct = (numbers, targetProduct) => {
  // todo
  const cache = {};
  for (let i = 0; i < numbers.length; i++){
    const product = targetProduct / numbers[i];
    if (product in cache) return [cache[product], i];
    cache[numbers[i]] = i;
  }
};

//----------------------------------------------------------
// intersection

const intersection = (a, b) => {
  // todo
  const result = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
};