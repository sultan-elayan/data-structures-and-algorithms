'use strict';


class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }


    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }


    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }

    maxValue(){
        if(!this.root){
            return 'no binary tree';
        }
        let result = this.root.value;
        let findMax=(node)=>{
            if (node == null)
            return 'no binary tree';
       result=node.value
        let leftResult = findMax(node.left);
        let rightResult = findMax(node.right);
   
        if (leftResult > result)
        result = leftResult;
        if (rightResult > result)
        leftResult = rightResult;
        return result;
    }
    findMax(this.root)
    return result
}


}




module.exports = BinaryTree;