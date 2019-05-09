'use strict';

const { alphaNumeric } = require('faker').random;
const { Edge, Graph, Node } = require('../graph');

const log = jest.spyOn(global.console, 'log').mockImplementation(() => {});

describe('`Graph` class', () => {
  it('instantiates a graph', () => {
    const graph = new Graph();
    expect(graph).toBeDefined();
  });

  describe('`addNode` method', () => {
    it('adds a new node to the graph', () => {
      const graph = new Graph();
      const a = alphaNumeric();

      expect(() => graph.addNode(a)).not.toThrow();
    });
    it('takes in the value of that node', () => {
      const graph = new Graph();
      const a = alphaNumeric();
      const b = alphaNumeric();
      graph.addNode(a);
      graph.addNode(b);

      expect(graph.adjacencyList.has(a));
      expect(graph.adjacencyList.has(b));
    });
    it('returns the added node', () => {
      const graph = new Graph();
      const a = alphaNumeric();
      const result = graph.addNode(a);
      expect(result.data).toBe(a);
    });
  });

  describe('`addDirectedEdge` method', () => {
    it('takes in the two nodes to be connected by the edge', () => {
      const graph = new Graph();
      const ad = alphaNumeric();
      const bd = alphaNumeric();
      const a = graph.addNode(ad);
      const b = graph.addNode(bd);

      expect(() => graph.addDirectedEdge(a, b, 10)).not.toThrow();
    });
    it('requires both nodes to already be in the graph', () => {
      const graph = new Graph();
      const ad = alphaNumeric();
      const bd = alphaNumeric();
      const a = new Node(ad);
      const b = new Node(bd);

      const result = graph.addDirectedEdge(a, b, 10);
      expect(result).toBeNull();
    });
    it('adds a new edge between two nodes in the graph', () => {
      const graph = new Graph();
      const ad = alphaNumeric();
      const bd = alphaNumeric();
      const a = graph.addNode(ad);
      const b = graph.addNode(bd);

      const result = graph.addDirectedEdge(a, b, 10);
      expect(result).toBeInstanceOf(Edge);
    });
    it('includes the ability to have a `weight`', () => {
      const graph = new Graph();
      const ad = alphaNumeric();
      const bd = alphaNumeric();
      const a = graph.addNode(ad);
      const b = graph.addNode(bd);

      const result = graph.addDirectedEdge(a, b, 10);
      expect(result).toHaveProperty('node');
      expect(result).toHaveProperty('weight');
    });

    it('only adds the new edge to the `start` node', () => {
      const graph = new Graph();
      const ad = alphaNumeric();
      const bd = alphaNumeric();
      const a = graph.addNode(ad);
      const b = graph.addNode(bd);

      const result = graph.addDirectedEdge(a, b, 10);
      expect(result).toHaveProperty('node');
      expect(result).toHaveProperty('weight');

      const endVal = graph.adjacencyList.get(b);
      const empty = [];
      expect(endVal).toEqual(empty);
    });
  });

  describe('`addUndirectedEdge` method', () => {
    xit('returns an array of reciprocal edges', () => {
      //
    });
    xit('adds the new edge to both argument nodes', () => {
      //
    });
  });

  describe('`breadthFirst` method', () => {
    it('returns `null` if the graph is empty', () => {
      const graph = new Graph();
      const result = graph.breadthFirst();
      expect(result).toBeNull();
    });
    it('logs each value', () => {
      log.mockClear();
      const graph = new Graph();
      const a = graph.addNode(alphaNumeric());
      const b = graph.addNode(alphaNumeric());
      const c = graph.addNode(alphaNumeric());
      const d = graph.addNode(alphaNumeric());
      const e = graph.addNode(alphaNumeric());
      const f = graph.addNode(alphaNumeric());

      graph.addUndirectedEdge(a, b, 1);
      graph.addUndirectedEdge(b, c, 1);
      graph.addUndirectedEdge(b, d, 1);
      graph.addUndirectedEdge(c, d, 1);
      graph.addUndirectedEdge(c, e, 1);
      graph.addUndirectedEdge(c, f, 1);
      graph.addUndirectedEdge(d, f, 1);
      graph.addUndirectedEdge(e, f, 1);

      const result = graph.breadthFirst(a);

      expect(log).toHaveBeenCalledWith(result);

      log.mockClear();
    });
    it('returns `null` if given an argument with no `data`', () => {
      const graph = new Graph();
      const a = graph.addNode(alphaNumeric());
      const b = graph.addNode(alphaNumeric());
      const c = graph.addNode(alphaNumeric());
      graph.addUndirectedEdge(a, b, 1);
      graph.addUndirectedEdge(b, c, 1);

      const empty = {};
      const result = graph.breadthFirst(empty);
      expect(result).toBeNull();
    });
    it('can successfully return a collection from a breadth-first order traversal', () => {
      const graph = new Graph();
      const a = graph.addNode(alphaNumeric());
      const b = graph.addNode(alphaNumeric());
      const c = graph.addNode(alphaNumeric());
      const d = graph.addNode(alphaNumeric());
      const e = graph.addNode(alphaNumeric());
      const f = graph.addNode(alphaNumeric());

      graph.addUndirectedEdge(a, b, 1);
      graph.addUndirectedEdge(b, c, 1);
      graph.addUndirectedEdge(b, d, 1);
      graph.addUndirectedEdge(c, d, 1);
      graph.addUndirectedEdge(c, e, 1);
      graph.addUndirectedEdge(c, f, 1);
      graph.addUndirectedEdge(d, f, 1);
      graph.addUndirectedEdge(e, f, 1);

      const result = graph.breadthFirst(a);
      const expected = [a, b, c, d, e, f];

      expect(result).toEqual(expected);
    });
  });

  describe('`depthFirst` method', () => {
    xit('returns `null` if the graph is empty', () => {
      const graph = new Graph();
      const result = graph.breadthFirst();
      expect(result).toBeNull();
    });

    it('returns `null` if given an argument with no `data`', () => {
      const graph = new Graph();
      const a = graph.addNode(alphaNumeric());
      const b = graph.addNode(alphaNumeric());
      const c = graph.addNode(alphaNumeric());
      graph.addUndirectedEdge(a, b, 1);
      graph.addUndirectedEdge(b, c, 1);

      const empty = {};
      const result = graph.breadthFirst(empty);
      expect(result).toBeNull();
    });
    xit('can successfully return a collection from a depth-first, preorder traversal', () => {
      const graph = new Graph();
      const a = graph.addNode(alphaNumeric());
      const b = graph.addNode(alphaNumeric());
      const c = graph.addNode(alphaNumeric());
      const d = graph.addNode(alphaNumeric());
      const e = graph.addNode(alphaNumeric());
      const f = graph.addNode(alphaNumeric());

      graph.addUndirectedEdge(a, b, 1);
      graph.addUndirectedEdge(b, c, 1);
      graph.addUndirectedEdge(b, d, 1);
      graph.addUndirectedEdge(c, d, 1);
      graph.addUndirectedEdge(c, e, 1);
      graph.addUndirectedEdge(c, f, 1);
      graph.addUndirectedEdge(d, f, 1);
      graph.addUndirectedEdge(e, f, 1);

      const result = graph.breadthFirst(a);
      const expected = [a, b, c, d, e, f];

      expect(result).toEqual(expected);
    });
  });

  describe('`getNodes` method', () => {
    it('returns all of the nodes in the graph as a collection', () => {
      const graph = new Graph();
      const ad = alphaNumeric();
      const bd = alphaNumeric();
      const a = graph.addNode(ad);
      const b = graph.addNode(bd);
      const result = graph.getNodes();
      const expected = [a, b];
      expect(result).toEqual(expected);
    });
  });

  describe('`getNeighbors` method', () => {
    it('takes in a given node', () => {
      const graph = new Graph();
      const ad = alphaNumeric();
      const bd = alphaNumeric();
      const cd = alphaNumeric();
      const a = graph.addNode(ad);
      const b = graph.addNode(bd);
      const c = graph.addNode(cd);

      graph.addUndirectedEdge(a, b, 1);
      graph.addUndirectedEdge(a, c, 2);

      const result = graph.getNeighbors(a);

      expect(result).toBeDefined();
    });
    it('returns a collection of nodes connected to the given node', () => {
      const graph = new Graph();
      const ad = alphaNumeric();
      const bd = alphaNumeric();
      const cd = alphaNumeric();
      const a = graph.addNode(ad);
      const b = graph.addNode(bd);
      const c = graph.addNode(cd);

      graph.addUndirectedEdge(a, b, 1);
      graph.addUndirectedEdge(a, c, 2);

      const result = graph.getNeighbors(a);

      expect(result[0].node).toBe(b);
      expect(result[1].node).toBe(c);
    });
    it('includes the weight of the connection in the returned collection', () => {
      const graph = new Graph();
      const ad = alphaNumeric();
      const bd = alphaNumeric();
      const cd = alphaNumeric();
      const a = graph.addNode(ad);
      const b = graph.addNode(bd);
      const c = graph.addNode(cd);

      graph.addUndirectedEdge(a, b, 1);
      graph.addUndirectedEdge(a, c, 2);

      const result = graph.getNeighbors(a);

      expect(result[0].weight).toBe(1);
      expect(result[1].weight).toBe(2);
    });
  });

  describe('`size` method', () => {
    it('returns the total number of nodes in the graph', () => {
      const graph = new Graph();
      const ad = alphaNumeric();
      const bd = alphaNumeric();
      graph.addNode(ad);
      graph.addNode(bd);

      const result = graph.size();
      const expected = 2;
      expect(result).toEqual(expected);
    });
  });

  describe('`print` method', () => {
    it('logs all the nodes and edges in the graph', () => {
      log.mockClear();
      const graph = new Graph();
      const ad = alphaNumeric();
      const bd = alphaNumeric();
      const a = graph.addNode(ad);
      const b = graph.addNode(bd);
      const times = graph.size();

      graph.print();
      expect(log).toHaveBeenCalledTimes(times);
      expect(log).toHaveBeenCalledWith([a, []]);
      expect(log).toHaveBeenCalledWith([b, []]);

      log.mockClear();
    });
  });
});
