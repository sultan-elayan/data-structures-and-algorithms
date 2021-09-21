'use strict'

const { BinaryTree, treeIntersection } = require('../hashmap-tree-intersection')

describe(' Tree Intersection Tests', () => {

    it('Tree Intersection hash table , Correct output', () => {


        const tree1 = new BinaryTree();

        tree1.add(150);
        tree1.add(100);
        tree1.add(250);
        tree1.add(75);
        tree1.add(160);
        tree1.add(125);
        tree1.add(175);
        tree1.add(200);
        tree1.add(350);
        tree1.add(300);
        tree1.add(500);
        const tree2 = new BinaryTree();

        tree2.add(42);
        tree2.add(100);
        tree2.add(600);
        tree2.add(15);
        tree2.add(160);
        tree2.add(200);
        tree2.add(350);
        tree2.add(125);
        tree2.add(175);
        tree2.add(4);
        tree2.add(500);

        let tree= treeIntersection(tree1, tree2);
        expect(tree).toEqual([ [ '100' ],
        [ '125' ],
        [ '160' ],
        [ '175' ],
        [ '200' ],
        [ '350' ],
        [ '500' ] ]);

    })
    it('Tree Intersection hash table , Wrong output', () => {


        const tree1 = new BinaryTree();

        tree1.add(150);
        tree1.add(100);
        tree1.add(250);
        tree1.add(75);
        tree1.add(160);
        tree1.add(125);
        tree1.add(175);
        tree1.add(200);
        tree1.add(350);
        tree1.add(300);
        tree1.add(500);
        const tree2 = new BinaryTree();


        let tree= treeIntersection(tree1, tree2);
        expect(tree).toEqual('Exception');

    })


})