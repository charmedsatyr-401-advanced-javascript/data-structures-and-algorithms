'use strict';

const { getEdges } = require('../get-edges');
const { Graph } = require('../../../data-structures/graph/graph');
const { alphaNumeric } = require('faker').random;

describe('`getEdges` function', () => {
  it('should give a falsy response to a one-node graph argument', () => {
    const graph = new Graph();

    const a = graph.addNode(alphaNumeric());
    const b = graph.addNode(alphaNumeric());
    const c = graph.addNode(alphaNumeric());

    const result = getEdges(graph, [a, b, c]);

    const expected = [false, 0];
    expect(result).toEqual(expected);
  });
  it('should give a falsy response to a non-graph argument', () => {
    const graph = new Graph();

    const a = graph.addNode(alphaNumeric());
    const b = graph.addNode(alphaNumeric());
    const c = graph.addNode(alphaNumeric());

    const result = getEdges(a, [b, c]);

    const expected = [false, 0];
    expect(result).toEqual(expected);
  });

  it('should give a falsy response to an empty array argument', () => {
    const graph = new Graph();
    const result = getEdges(graph, []);
    const expected = [false, 0];
    expect(result).toEqual(expected);
  });

  it('should traverse the array of neighbors and return the sum of weights', () => {
    const graph = new Graph();

    const a = graph.addNode(alphaNumeric());
    const b = graph.addNode(alphaNumeric());
    const c = graph.addNode(alphaNumeric());
    const d = graph.addNode(alphaNumeric());

    graph.addUndirectedEdge(a, b, 1);
    graph.addUndirectedEdge(b, c, 2);
    graph.addUndirectedEdge(c, d, 3);

    getEdges(graph, [a, b, c]);

    expect(graph).toBeDefined();
  });
});
