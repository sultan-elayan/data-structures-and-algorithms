'use strict';

class Node {
    constructor() {
        this.data = 0;
        this.left = null;
        this.right = null;
    }
}

// Iterative method to find height of Binary Tree
function areIdentical(root1, root2) {
    // Return true if both trees are empty
    if (root1 == null && root2 == null)
        return true;

    // Return false if one is empty and other is not
    if (root1 == null || root2 == null)
        return false;

    // Create an empty queues for
    var q1 = [];
    var q2 = [];

    // push Roots of trees in respective queues
    q1.push(root1);
    q2.push(root2);

    while (q1.length != 0 && q2.length != 0) {
        // Get front nodes and compare them
        var n1 = q1[0];
        var n2 = q2[0];

        if (n1.data != n2.data)
            return false;

        // Remove front nodes from queues
        q1.shift();
        q2.shift();

        /* push left children of both nodes */
        if (n1.left != null && n2.left != null) {
            q1.push(n1.left);
            q2.push(n2.left);
        }

        // If one left child is empty and other is not
        else if (n1.left != null || n2.left != null)
            return false;

        // Right child code (Similar to left child code)
        if (n1.right != null && n2.right != null) {
            q1.push(n1.right);
            q2.push(n2.right);
        }
        else if (n1.right != null || n2.right != null)
            return false;
    }

    return true;
}
// =========================== FOR TESTING ====================================================

function newNode(data) {
    var temp = new Node();
    temp.data = data;
    temp.left = null;
    temp.right = null;
    return temp;
}


var root1 = newNode(1);
root1.left = newNode(2);
root1.right = newNode(3);
root1.left.left = newNode(4);
root1.left.right = newNode(5);
var root2 = newNode(1);
root2.left = newNode(2);
root2.right = newNode(3);
root2.left.left = newNode(4);
root2.left.right = newNode(25);
if (areIdentical(root1, root2) == true)
    console.log("Yes");
else
    console.log("No");


