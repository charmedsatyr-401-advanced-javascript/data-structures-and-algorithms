# Code: Graph
* [PR]()
* Travis

### Hash Table
* Implement a Graph.

## Challenges
### Graph
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:
* `AddNode()`
  * Adds a new node to the graph
  * Takes in the value of that node
  * Returns the added node
* `AddEdge()`
  * Adds a new edge between two nodes in the graph
  * Include the ability to have a “weight”
  * Takes in the two nodes to be connected by the edge
  * Both nodes should already be in the Graph
* `GetNodes()`
  * Returns all of the nodes in the graph as a collection (set, list, or similar)
* `GetNeighbors()`
  * Returns a collection of nodes connected to the given node
  * Takes in a given node
  * Include the weight of the connection in the returned collection
* `Size()`
  * Returns the total number of nodes in the graph

## Approach & Efficiency
I created `Node` and `Edge` classes. The `Node` takes a `data` property and the `Edge` takes `node` and `weight` properties. A `Graph` class uses a JavaScript `Map` as an adjacency list and employs that structure's methods to implement the required functions. The `Graph` class has the following methods:

* `addNode(data)`
* `addDirectedEdge(start, end, weight)`
* `addUndirectedEdge(a, b, weight)`
* `getNodes()`
* `getNeighbors(node)`
* `size()`

Most methods have an efficiency of O(1) for time and space. `getNodes` has an efficiency of O(n) for both.

## API
* `addNode(data)` → added node
* `addDirectedEdge(start, end, weight)` → new instance of `Edge` or `null`
* `addUndirectedEdge(a, b, weight)` → array of `Edge` instances
* `getNodes()` → array of nodes
* `getNeighbors(node)` → array of edges
* `size()` → number

## Whiteboard
N/A