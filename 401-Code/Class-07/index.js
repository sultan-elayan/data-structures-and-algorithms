"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  kthFromEnd(k) {
    if (!this.head) {
      return "empty linked list";
    } else {
      let total = 0;
      let currentNode = this.head;
      while (currentNode.next) {
        total++;
        currentNode = currentNode.next;
      }
      if (k > total) {
        return "Where k is greater than the length of the linked list";
      }

      if (k < 0) {
        return "empty linked list";
      }

      let requiredNode = total - k;
      let counter = 0;
      currentNode = this.head;
      while (currentNode.next) {
        counter++;
        currentNode = currentNode.next;
        if (counter == requiredNode) {
          return currentNode.value;
        }
      }
    }
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }
}

module.exports = LinkedList;
