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

//----------------------------------------------------------
// insert node

const insertNode = (head, value, index) => {
  // todo
  if (index === 0) {
    const first = new Node(value);
    first.next = head;
    return first;
  }
  let count = 0;
  let current = head;
  while (current) {
    console.log('count', count);
    if (count === index - 1) {
      const next = current.next;
      current.next = new Node(value);
      current.next.next = next;
    }

    count++;
    current = current.next;
  }
  return head;
};

//----------------------------------------------------------
// create linked list

const createLinkedList = (values) => {
  // todo
  if (values === null) return [];
  let list = new Node(null);
  const result = list;

  values.forEach((el) => {
    const nextNode = new Node(el);
    list.next = nextNode;
    list = list.next;
  });
  return result.next;
};

//----------------------------------------------------------
// add lists

const addLists = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return null;

  const val1 = head1 === null ? 0 : head1.val;
  const val2 = head2 === null ? 0 : head2.val;

  const sum = val1 + val2 + carry;
  const nextCarry = sum > 9 ? 1 : 0;
  const digit = sum % 10;
  const result = new Node(digit);

  const next1 = head1 === null ? null : head1.next;
  const next2 = head2 === null ? null : head2.next;

  result.next = addLists(next1, next2, nextCarry);

  return result;
};
