//----------------------------------------------------------
// linked list values

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head, result = []) => {
  // todo
  if (head){
    result.push(head.val);
    linkedListValues(head.next, result);
  }
  return result
};

//----------------------------------------------------------
// sum list

const sumList = (head, sum = 0) => {
  // todo
  if (head){
    sum += head.val;
    return sumList(head.next, sum);
  }
  return sum;
};

//----------------------------------------------------------
// linked list find

const linkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);
};