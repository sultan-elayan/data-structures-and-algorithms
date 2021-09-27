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
            return;
        }
        const adjacencies = this.adjacencyList.get(start);
        adjacencies.push(new Edge(end, weight));
    }

    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            return;
        }
        return this.adjacencyList.get(vertex);
    }
}

function businessTrip(graph, cityArray) {
    let totalCost = 0;
    let check = false;
    for (let i = 0; i < cityArray.length - 1; i++) {
        let neighbors = graph.getNeighbors(cityArray[i]);
        for (let j = 0; j <= neighbors.length - 1; j++) {
            if (cityArray[i + 1] === neighbors[j].vertex) {
                totalCost += neighbors[j].weight;
                check = true;
            }
        }
        if (check === false) {
            totalCost = 0;
            check = false;
            return `False, $${totalCost}`;
        }
    }

    return `True, $${totalCost}`;
}
module.exports = { Graph, businessTrip};