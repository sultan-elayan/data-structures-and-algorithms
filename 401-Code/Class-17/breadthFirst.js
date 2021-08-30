'use strict';


let breadthFirst = (tree) => {

    if (!tree.root) return 'Tree is empty!'; 

    let queue = [];
    let tree = []; 

    queue.push(tree.root); 

    while (queue.length > 0) { 

        let frontNode = queue.shift(); 

        tree.push(frontNode.value);

        if (frontNode.left) { 
            queue.push(frontNode.left); 
        }
        if (frontNode.right) { 
            queue.push(frontNode.right); 
        }
    }
    return tree; 
}


module.exports = breadthFirst;
