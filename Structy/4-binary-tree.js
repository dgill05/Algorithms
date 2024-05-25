class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//----------------------------------------------------------
// depth first values

const depthFirstValues = (root) => {
  // todo
  if (root === null) return [];

  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};

//----------------------------------------------------------
// breadth first values

const breadthFirstValues = (root) => {
  // todo
  if (root === null) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return result;
};

//----------------------------------------------------------
// tree sum

const treeSum = (root, sum = 0) => {
  // todo
  if (root === null) return 0;
  const right = treeSum(root.right, sum);
  const left = treeSum(root.left, sum);
  return root.val + right + left;
};

//----------------------------------------------------------
// tree includes

const treeIncludes = (root, target) => {
  // todo
  if (root === null) return false;
  if (root.val === target) return true;

  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

//----------------------------------------------------------
// tree min value

const treeMinValue = (root) => {
  // todo
  if (root === null) return Infinity;

  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};
