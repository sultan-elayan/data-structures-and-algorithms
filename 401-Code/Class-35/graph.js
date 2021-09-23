'use strict';
const Vertex = require('./vertex');
const Edge = require('./edge');


class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // add node
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    //add edge
    addDirectedEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {

            return "vertex not exist"
        }

        const adjacencies = this.getNeighbors(start)
        adjacencies.push(new Edge(end, weight));
    }
    
    //get node
    getVertex() {
        let allVertex = [];
        for (const [vertex, edge] in this.adjacencyList.entries()) {
            allVertex.push(vertex);
        }
        return allVertex;
    }


    // get neighbors
    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)) {

            return "vertex not exist"
        }
        return this.adjacencyList.get(vertex);
    }

    // size
    size() {
        if (this.adjacencyList.size > 0) {
            return this.adjacencyList.size;
        } else {
            return "no graph found !!";
        }
    }

}

const myGraph = new Graph();
const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(two, four);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(four, five);
myGraph.addDirectedEdge(one, three);
myGraph.addDirectedEdge(five, three);


console.log(myGraph.getNeighbors(two));

for (const [k, v] of myGraph.adjacencyList.entries()) {
    console.log("k = ", k, " v =", v);
}

// addEdge(vertex, weight) {
    //     this.adjacencyList.get(vertex).push(weight);
    //     this.adjacencyList.get(weight).push(vertex);
    // }



// [ Vertex { value: 0 }, Vertex { value: 4 }, Vertex { value: 3 } ]
// k =  Vertex { value: 0 }  v = [ Vertex { value: 2 } ]
// k =  Vertex { value: 1 }  v = [ Vertex { value: 3 } ]
// k =  Vertex { value: 2 }  v = [ Vertex { value: 0 }, Vertex { value: 4 }, Vertex { value: 3 } ]
// k =  Vertex { value: 3 }  v = [ Vertex { value: 2 }, Vertex { value: 1 }, Vertex { value: 5 } ]
// k =  Vertex { value: 4 }  v = [ Vertex { value: 2 }, Vertex { value: 5 } ]
// k =  Vertex { value: 5 }  v = [ Vertex { value: 4 }, Vertex { value: 3 } ]
// ========================================================================================================
// [
//     Edge { vertex: Vertex { value: 4 }, weight: 0 },
//     Edge { vertex: Vertex { value: 3 }, weight: 0 }
//   ]
//   k =  Vertex { value: 0 }  v = [ Edge { vertex: Vertex { value: 2 }, weight: 0 } ]
//   k =  Vertex { value: 1 }  v = [ Edge { vertex: Vertex { value: 3 }, weight: 0 } ]
//   k =  Vertex { value: 2 }  v = [
//     Edge { vertex: Vertex { value: 4 }, weight: 0 },
//     Edge { vertex: Vertex { value: 3 }, weight: 0 }
//   ]
//   k =  Vertex { value: 3 }  v = []
//   k =  Vertex { value: 4 }  v = [ Edge { vertex: Vertex { value: 5 }, weight: 0 } ]
//   k =  Vertex { value: 5 }  v = [ Edge { vertex: Vertex { value: 3 }, weight: 0 } ]