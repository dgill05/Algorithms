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