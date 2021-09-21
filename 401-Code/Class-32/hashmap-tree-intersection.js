"use strict";

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}


class BinaryTree {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    inOrder() {
        if (this.root == null) {
            return null;
        } else {
            let result = new Array();
            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        };
    }

}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
        this.size2 = 0;
    }
    hash(key) {
        return key % this.size
    }
    add(key, value) {
        let hash = this.hash(key);
        if (!this.map[hash]) {
            this.map[hash] = value;
        }
        let entry = { [key]: value }
        this.map[hash] = entry;
        this.size2++;
        return hash

    }


}
function treeIntersection(tree1, tree2) {
    let output = [];
    if (tree1.root && tree2.root) {
        let hashmap = new Hashmap(1024);
        let firstTreeValues = tree1.inOrder();
        firstTreeValues.forEach(value => {
            hashmap.add(value);
        });

        let secondTreeValues = tree2.inOrder();
        secondTreeValues.forEach(value => {
            let key = hashmap.hash(value);
            if (hashmap.map[key]) {
                output.push(Object.keys(hashmap.map[key]));
            }
        });
        return output;
    }
    else
        return 'Exception'

};


module.exports = { BinaryTree, treeIntersection };