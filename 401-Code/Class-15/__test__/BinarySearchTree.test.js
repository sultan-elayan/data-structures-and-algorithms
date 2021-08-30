"use strict";


const BinarySearch = require('../BinarySearchTree');
describe("Binary Search Tree Tests ", () => {
  
    let binarySearchTree;
  beforeAll(() => {
    binarySearchTree = new BinarySearch();
    binarySearchTree.add(50);
    binarySearchTree.add(35);
    binarySearchTree.add(65);
    binarySearchTree.add(42);
    binarySearchTree.add(29);
    binarySearchTree.add(10);
    binarySearchTree.add(31);
    binarySearchTree.add(33);
    binarySearchTree.add(58);
    binarySearchTree.add(100);
    binarySearchTree.add(55);
    binarySearchTree.add(60);
    binarySearchTree.add(52);
  });
  it("1.Can successfully instantiate an empty tree", () => {
    let binarySearchTree = new BinarySearch();
    expect(binarySearchTree.root).toBe(null);
  });

  it("2.Can successfully using add method to add one root value", () => {
    let binarySearchTree = new BinarySearch();
    binarySearchTree.add("50");
    expect(binarySearchTree.root.value).toBe("50");
    expect(binarySearchTree.root.left).toBe(null);
    expect(binarySearchTree.root.right).toBe(null);
  });

  it("3.Can successfully add multiple nodes using add method", () => {
    let binarySearchTree = new BinarySearch();
    binarySearchTree.add("50");
    binarySearchTree.add("35");
    binarySearchTree.add("65");

    expect(binarySearchTree.root.value).toBe("50");
    expect(binarySearchTree.root.left.value).toBe("35");
    expect(binarySearchTree.root.right.value).toBe("65");
    expect(binarySearchTree.root.left.left).toBe(null);
    expect(binarySearchTree.root.left.right).toBe(null);
    expect(binarySearchTree.root.right.left).toBe(null);
    expect(binarySearchTree.root.right.right).toBe(null);
  });
  it("4.Can successfully create the whole tree using add method", () => {
    let expectedResults =
      "50 > 35 > 29 > 10 > 31 > 33 > 42 > 65 > 58 > 55 > 52 > 60 > 100 > ";
    
    expect(binarySearchTree.root.value).toBe(50);
    expect(binarySearchTree.root.left.value).toBe(35);
    expect(binarySearchTree.root.right.value).toBe(65);
    expect(binarySearchTree.root.left.right.value).toBe(42);
    
  });

  it("5.Can successfully search for an element if it exists or not, Contains method", () => {
    expect(binarySearchTree.Contains(42)).toBe(true);
    expect(binarySearchTree.Contains(70)).toBe(false);
    expect(binarySearchTree.Contains(1)).toBe(false);
    expect(binarySearchTree.Contains(58)).toBe(true);
    expect(binarySearchTree.Contains(-10)).toBe(false);
  });
});
