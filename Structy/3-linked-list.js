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