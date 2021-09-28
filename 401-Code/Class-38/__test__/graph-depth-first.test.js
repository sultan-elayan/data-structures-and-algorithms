'use strict';

const  { Graph,graphDepthFirst} = require('../graph-depth-first');

describe("graph depth first test", () => {

    let graph = new Graph();
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")
    graph.addVertex("D")
    graph.addVertex("F")
    graph.addVertex("E")
    graph.addVertex("H")
    graph.addVertex("G")
    
    graph.addEdge("A", "B" )
    graph.addEdge("A","D" )
    graph.addEdge("B","C")
    graph.addEdge("B","D")
    graph.addEdge("D","E")
    graph.addEdge("D","H")
    graph.addEdge("F","H")
    graph.addEdge("C","G")
    graph.addEdge("D","F")
    
    it("Input [Metroville, Pandora, ]", () => {
 
        expect(graphDepthFirst(graph ,'A')).toEqual([ 'A', 'B', 'C', 'G', 'D', 'E', 'H', 'F' ]);
    })
  

})