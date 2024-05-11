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
  if (head) {
    result.push(head.val);
    linkedListValues(head.next, result);
  }
  return result;
};

//----------------------------------------------------------
// sum list

const sumList = (head, sum = 0) => {
  // todo
  if (head) {
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

//----------------------------------------------------------
// get node value

const getNodeValue = (head, index, count = 0) => {
  // todo
  if (head === null) return null;
  if (index === count) return head.val;
  return getNodeValue(head.next, index, count + 1);
};

//----------------------------------------------------------
// reverse list

const reverseList = (head) => {
  // todo
  let current = head;
  let prev = null;
  while (current) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};
