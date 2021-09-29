'use strict';


function addEdge(adj, u, v) {
    adj[u].push(v);
    adj[v].push(u);
}

function printGraph(adj) {
    let result = [];
    for (let i = 0; i < adj.length; i++) {
        result.push(i, ' | ')
        for (let j = 0; j < adj[i].length; j++) {
            result.push(adj[i][j], " -> ")
        }
        result.pop()
        result.push("\n")
    }
    return result.join('');
}

module.exports = { printGraph, addEdge }