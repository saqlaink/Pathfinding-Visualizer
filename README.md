# Pathfinding-Visualizer
This project is aimed to help visualize different pathfinding algorithms. The algorithms included in it are Depth First Search, Breadth First Search, Dijkstra's Algorithm, Greedy Best First Search, A* Algorithm.
# About Algorithms
Following are the 5 Algorithm:
1. **Breath-first Search (unweighted):**
![BFS](https://miro.medium.com/max/2253/1*GChPGXvZQiVwjok9EvKPIA.gif)
Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'), and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. This algorithm guarantees shortest path.
For more information and pseudocode on BFS->[Brilliant](https://brilliant.org/wiki/breadth-first-search-bfs/)

2. **Depth-first Search (unweighted)**
![DFS](https://miro.medium.com/max/2253/1*yBXw4Q8rSMRqGYC-iZI0yg.gif)
Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. This algorithm does not guarantee shortest path.
For more information and pseudocode on DFS->[Brilliant](https://brilliant.org/wiki/depth-first-search-dfs/)

3. **Greedy Best-first Search (weighted):**
![Greedy](https://miro.medium.com/max/2253/1*mVI8w1-tOSsN78kIhYK1YA.gif)
Best-first search is a search algorithm which explores a graph by expanding the most promising node chosen according to a specified rule. Judea Pearl described best-first search as estimating the promise of node n by a "heuristic evaluation function {\displaystyle f(n)}f(n) which, in general, may depend on the description of n, the description of the goal, the information gathered by the search up to that point, and most important, on any extra knowledge about the problem domain." Some authors have used "best-first search" to refer specifically to a search with a heuristic that attempts to predict how close the end of a path is to a solution, so that paths which are judged to be closer to a solution are extended first. This specific type of search is called greedy best-first search or pure heuristic search. This algorithm does not guarantee shortest path.

4. **Dijkstra's Algorithm (weighted):**
![Dijkstra](https://miro.medium.com/max/2253/1*3aibaGt1-zimnwreliwX0A.gif)
Dijkstra's algorithm (or Dijkstra's Shortest Path First algorithm, SPF algorithm) is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.
The algorithm exists in many variants. Dijkstra's original algorithm found the shortest path between two given nodes, but a more common variant fixes a single node as the "source" node and finds shortest paths from the source to all other nodes in the graph, producing a shortest-path tree. It guarantees the shortest path.
For more information and pseudocode on Dijkstra's->[Brilliant](https://brilliant.org/wiki/dijkstras-short-path-finder/)

5. **A\* Search (weighted):**
![Dijkstra](https://miro.medium.com/max/2253/1*sbUuCeAb1EHgYBszGOXSWg.gif)
A* (pronounced "A-star") is a graph traversal and path search algorithm, which is often used in many fields of computer science due to its completeness, optimality, and optimal efficiency.One major practical drawback is its {\displaystyle O(b^{d})}O(b^d) space complexity, as it stores all generated nodes in memory. Thus, in practical travel-routing systems, it is generally outperformed by algorithms which can pre-process the graph to attain better performance, as well as memory-bounded approaches; however, A* is still the best solution in many cases. Still arguably the best pathfinding algorithm; uses heuristics to guarantee the shortest path much faster than Dijkstra's Algorithm.
For more information and pseudocode on A*->[Brilliant](https://brilliant.org/wiki/a-star-search/)


> **_NOTE:_**  GIF taken from [Medium](https://medium.com/omarelgabrys-blog/path-finding-algorithms-f65a8902eb40) Article of omar Elbary.
