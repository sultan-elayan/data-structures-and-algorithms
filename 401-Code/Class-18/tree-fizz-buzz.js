"use strict";

let fizzBuzz = (tree) => {

  let current = tree.root;
  let result = [];
  if (!current) 
  return "no binary tree";

  let traverse = (node) => {
    if (node.value % 3 == 0 && node.value % 5 == 0) {
      node.value = "fizzBuzz";
      result.push(node.value);
    } else if (node.value % 3 == 0) {
      node.value = "fizz";
      result.push(node.value);
    } else if ((node.value & 5) == 0) {
      node.value = "buzz";
      result.push(node.value);
    } else {
      result.push(node.value.toString());
    }

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(current);
  return result;
};
module.exports = fizzBuzz;