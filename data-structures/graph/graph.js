'use strict';

class Node {
  constructor(data = null) {
    this.data = data;
  }
}

class Edge {
  constructor(node = null, weight = null) {
    this.node = node;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(data) {
    const node = new Node(data);
    this.adjacencyList.set(node, []);
    return node;
  }

  addDirectedEdge(start, end, weight) {
    const edges = this.adjacencyList.get(start);
    if (edges) {
      const edge = new Edge(end, weight);
      edges.push(edge);
      return edge;
    } else {
      return null;
    }
  }

  addUndirectedEdge(a, b, weight) {
    const first = this.addDirectedEdge(a, b, weight);
    const second = this.addDirectedEdge(b, a, weight);
    return [first, second];
  }

  getNodes() {
    // Returns an iterator
    const keys = this.adjacencyList.keys();

    // Add the nodes to an array
    let node = keys.next();
    const result = [];
    while (!node.done) {
      const { value } = node;
      result.push(value);
      node = keys.next();
    }
    // Return the array
    return result;
  }

  getNeighbors(node) {
    return this.adjacencyList.get(node);
  }

  size() {
    return this.adjacencyList.size;
  }

  print() {
    // Returns an iterator
    const entries = this.adjacencyList.entries();

    // Iterate to log the entries
    let entry = entries.next();
    while (!entry.done) {
      const [key, value] = entry.value;
      console.log([key, value]);
      entry = entries.next();
    }
  }
}

module.exports = { Edge, Graph, Node };
