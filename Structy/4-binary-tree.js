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

//----------------------------------------------------------
// max root to leaf path sum

const maxPathSum = (root) => {
  // todo
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

//----------------------------------------------------------
// tree path finder

const pathFinder = (root, target) => {
  // todo
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinder(root.left, target);
  const rightPath = pathFinder(root.right, target);

  if (leftPath) {
    return [root.val, ...leftPath];
  }

  if (rightPath) {
    return [root.val, ...rightPath];
  }

  return null;
};

//----------------------------------------------------------
// tree value count

const treeValueCount = (root, target) => {
  // todo
  if (root === null) return 0;
  const match = root.val === target ? 1 : 0;
  const left = treeValueCount(root.left, target);
  const right = treeValueCount(root.right, target);
  return match + left + right;
};

//----------------------------------------------------------
// how high

const howHigh = (node) => {
  // todo
  if (node === null) return -1;
  return 1 + Math.max(howHigh(node.left), howHigh(node.right));
};

//----------------------------------------------------------
// bottom right value

const bottomRightValue = (root) => {
  // todo
  let result = 0;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    result = node.val;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
};

//----------------------------------------------------------
// all tree paths

const allTreePaths = (root) => {
  // todo
  if (root === null) return [];
  if (root.left === null && root.right === null) return [[root.val]];
  const path = [];

  const leftPath = allTreePaths(root.left);
  for (let subPath of leftPath) {
    path.push([root.val, ...subPath]);
  }

  const rightPath = allTreePaths(root.right);
  for (let subPath of rightPath) {
    path.push([root.val, ...subPath]);
  }
  return path;
};
