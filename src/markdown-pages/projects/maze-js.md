---
slug: /projects/maze-js/
date: "2019-05-04"
title: "Maze Generator/Solver"

videoName: "MazeGenVid"

carddesc: "A program that generates and solves mazes using a variety of seemingly unrelated graph algorithms."
tags: ["graphtheory"]

overview: "test"
techStack: ["html", "css", "javascript"]
prereqs: ["trees"]
timeest: "2 days"
difficulty: 4
---

## What Is a Maze?
### Structure of a Maze
It's often the case when studying maths and computer science that a question that can seem so obvious becomes indescribably difficult only to result in the incredibly simple answer of "it's a graph".

But what is a graph exactly? Most simply put it's a set of nodes and that are interconnected. In the case of a maze there's a set of cells in a grid structure and each cell can be connected to at most four adjacent cells.

A maze is a little bit of an extension on a graph though, for example graphs don't inherently have an entry/exit vertex. A maze however does. And graphs can have vertices connected in arbitrary ways, but a maze has strict rules for what connections (edges) are valid.

#### Mazes Done Formally
We can define a maze to be a graph and a graph $G$ is defined to be $(V, E)$ where $V$ is vertices and $E$ is edges. Sets of vertices/edges are denoted by uppercase letters, while a single edge is denoted as $e$ and a single vertex as $u$ or $v$.

An edge $e$ is a tuple of two vertices $(u, v)$. We can infer other properties of graphs from this definition, for example every connection is a two way connection. If you can go from one cell to the other, you can go back.

This is called symmetry and is written as $(u, v) \in E \implies (v, u) \in E$

From here we can start to derive many cool properties of mazes, for example that taking every left turn will eventually solve the maze! (If it's reducible to a tree anyways...)

Symmetry isn't directly applicable to our solutions but understanding properties of mazes as properties of graphs and reasoning about them in this way is good practice for reasoning about the derived solutions.

### Solving a Maze
Now that we know what a maze is, a set of nodes with connections, how do we solve it? Well, the first and most important step is to define what a solution is.

Coloquially speaking a solution is a path from the entry to the exit. We can break this down into being an 'ordered list of cells' that we visit on this path. A list like this can be represented by a tuple (fancy math word for list). If we define out entry as $u_{1}$ and our exit as $u_{n}$ on an $n$-path solution then our solution will look like so:
$$
(u_{1}, u_{2}, \ldots, u_{n})
$$

### Constraining The Solution Set
Brute force is the first obvious answer, we can try all the cells in every order until we find something good.

One possible way to solve the maze is to add constraints to what these set of vertices could possibly be, this approach is called *pruning* the solution space. However even with the strictest definition possible for the solution of a maze this is an incredibly hard problem. We are simply left with too many combinations of vertices after we are done pruning.

Let's look at the following constraints:
$$
\begin{align*}
&\text{Solution is assumed to be in the form: } (u_{1}, u_{2} \ldots, u_{n})\\
\\
&\text{Constraints:} \\
1.&\forall i \in [1, n)\ldotp\ (u_{i}, u_{i+1}) \in E & \text{All adjacent cells are connected} \\
2.&\forall i \in [1, n)\ldotp\ \forall j \in [1, n) \setminus i.\ i \neq j & \text{Each cell visited is unique (no cycles)} \\
3.&\forall v \in V\ldotp\ \forall u \in (a, b, c, d, v)\ldotp\ (u, v) \in E\\ &\quad \implies \forall u \notin (a, b, c, d, v)\ldotp\ (u, v) \notin E & \text{Vertices have at most 4 neighbours} \\
4.&(u, v) \in E \land (t, v) \in E \\ &\quad \implies (u, t) \notin E & \text{Two vertices connected to the same vertex are not connected} \\
\end{align*}
$$

We can keep expanding the constraints as we wish, but these are an example of a set of four good and obvious constraints we can begin our computations with. The problems that arise with trying to deal with mazes and their solutions by narrowing possible solutions based on constraints can already be seen with these first four.

Generally as you constraint your possible solutions more and more further constraints begin to become much less useful.
