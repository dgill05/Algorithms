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

//----------------------------------------------------------
// zipper lists

const zipperLists = (head1, head2) => {
  // todo
  let current1 = head1.next;
  let current2 = head2;
  let tail = head1;
  let count = 0;
  while (current1 && current2) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }
  if (current1) tail.next = current1;
  if (current2) tail.next = current2;
  return head1;
};

//----------------------------------------------------------
// merge lists

const mergeLists = (head1, head2) => {
  // todo
  let dummy = new Node(null);
  let tail = dummy;
  let current1 = head1;
  let current2 = head2;
  while (current1 && current2) {
    if (current1.val > current2.val) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
  }

  if (current1) tail.next = current1;
  if (current2) tail.next = current2;

  return dummy.next;
};

//----------------------------------------------------------
// is univalue list

const isUnivalueList = (head, prevVal = null) => {
  if (head === null) return true;
  if (prevVal === null || prevVal === head.val) {
    return isUnivalueList(head.next, head.val);
  } else {
    return false;
  }
};

//----------------------------------------------------------
// longest streak

const longestStreak = (head) => {
  // todo
  if (head === null) return 0;
  let max = 0;
  let count = 1;
  let prev = null;
  let current = head;
  while (current) {
    if (prev === current.val) {
      count++;
    } else {
      count = 1;
    }
    if (count > max) max = count;
    prev = current.val;
    current = current.next;
  }
  return max;
};

//----------------------------------------------------------
// remove node

const removeNode = (head, targetVal) => {
  // todo
  if (head.val === targetVal) return head.next;

  let current = head;
  let prev = null;
  while (current) {
    if (current.val === targetVal) {
      prev.next = current.next;
      break;
    }
    prev = current;
    current = current.next;
  }
  return head;
};
