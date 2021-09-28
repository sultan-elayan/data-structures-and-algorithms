'use strict';
class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log('VERTEX DOES NOT EXIST');
            return;
        }
        const adjacencies = this.adjacencyList.get(start);
        adjacencies.push(new Edge(end, weight));
    }

    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log('VERTEX DOES NOT EXIST');
            return;
        }
        return this.adjacencyList.get(vertex);
    }

}


function graphDepthFirst(graph, vertex) {
    const visitedVertices = new Set();
    visitedVertices.add(vertex);
    const traverse = (current, visited) => {

        visited.add(current);

        const neighbors = graph.getNeighbors(current);

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor.vertex)) {
                traverse(neighbor.vertex, visited);
            }
        }
    };
    traverse(vertex, visitedVertices);
    return Array.from(visitedVertices);
}

module.exports = { Graph,graphDepthFirst};