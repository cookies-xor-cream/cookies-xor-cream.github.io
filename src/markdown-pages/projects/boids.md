---
slug: /projects/boids/
date: "2019-06-04"
title: "Boids"

videoName: "BoidVid"

carddesc: "Simulates bird-like or fish-like behaviours through three simple rules: separation, alignment, and cohesion. An example of emergent behaviours."
tags: ["simulation"]

overview: "Emergent bird-like behaviours using three simple rules"
techStack: []
prereqs: []
timeest: ""
difficulty: 10
---

## What Are Boids?
Boids are an implementation of swarmlike behaviours intended to emulate animals such as birds or fish. In fact &#8212; boids is short for birdlike object.

Each boid is an entity with a position, velocity, and a field of view. As with many simulations of physical systems the program splits execution into discrete timesteps and the program state is updated at each timestep.

The force or acceleration at each timestep is adjusted according to three simple rules and then normalized.

## Behavioural Rules
### Cohesion
Cohesion dictates that a flock of boids will attempt to stay together. This can be achieved by making the boids move to the center of mass of the boids in their vision.

To keep the boids flocking together a force should be applied in the direction of the average position of nearby boids.

### Separation
Separation dictates that a boid wil attempt not to collide with any other boids, and therefore must attempt to keep distance from nearby boids in its vision.

To keep the boids from colliding a force will be applied away from all boids in vision, scaled by the reciprocal of the distance between them.

### Alignment
Alignment dictates that a flock of boids will attempt to travel in the same direction as each other. This can be achieved by making the boids attempt to travel towards the same direction as boids in their vision.

To keep the boids travelling as a flock a force will be applied in the direction of the average velocitiy of nearby boids

## Vision
The term 'vision' or 'nearby' make intuitive sense but how would they actually be implemented?

All boids within vision of a boid will be defined as the boids whose position lie in a radius of that boid and make an angle less than the field of view with the 'direction' of the boid. 

Whether a boid lies within a radius of another boid can be calculated by the distance between the position of the two boids. And the direction in which a boid faces is given by its velocity vector, and the angle between a boids 'direction' and another boids position can be caluclate by the dot product of the normalized vectors.

When both of these checks pass that the boid is in the vision of the boid in question.

## Boundaries and Behavioural Evolution
When boids flock they tend to have no tendency to change direction once they reach an equilibrium. As such they will travel in a line off to infinity. How could we keep them on the screen?

### Wraparound edges
The simple but uninteresting solution is to make boids that exit on one side of the screen appear on the other side.

### Edge avoidance
A slightly more interesting solution is to make the boids avoid the edges of the screen by exerting a force in proportion to how close the boids are to the screen boundaries.

### Evolving flock velocities
The velocity of a flock can be made to evolve with time randomly. The velocity of boids cannot be effectively randomly altered as in a flock these random changes would in theory negate each other on average.

When adding random velocities at each timestep to a flock over a period of time those velocities will cancel out if the timesteps themselves are very small (averaging to zero, like in the case of altering individual boid velocity). There are many ways to deal with this problem, such as adding the same velocitiy for many contiguous time steps but perhaps the most elegant solution is to use *noise*

#### Noise
Noise can be defined by a function that outputs similar values for similar inputs but is random overall. As such it can generate random values that evolve over space or time. This makes it useful in determining flock direction as it avoid the problem of determining which boids are in the same flocks and what velocity to apply to each flock of boids, thereby solving our problem.

Any noise function can be used in practice but a good candidate for this would be low frequency perlin or simplex noise in three dimensions (or four if the implementation of boids is three dimensional). This means that one direction can be assigned to time and the noise function with smoothly change over time.

#### Advantages and disadvantages
Unfortunately while this approach does dictate that on average boids will remain in the center and therefore not fly off to infinity, it does not guarantee anything and the likelihood of boids deviating from the center increases over time.

A pleasant sideeffect of this approach however is that it causes the boids to have some more unique flourishes and gives depth to their behaviour.

## Optimizations
Naively checking for nearby boids runs in quadratic time, but the question is can we do better than (LATEX HERE) O(N^2)?

### Spatial Hashing
Turns out that O(N) is possible! So how do we achieve it? Well it's quite simple with a concept known as spatial hashing. We will divide the screen into a set of grids and assign each boid to the grid that it's currently in. Now when doing neighbour lookups only nearby grid cells need to be checked for neighbouring boids.

### Quadtree
While O(N log(N)) so technically slower than spatial hashing it is both much more interesting and works much better on sparse maps as it has a varying resolution. It defines nonuniform cells that the boids could be in and only searches for nearby boids from nearby cells.

#### Structure of a Quadtree
A quadtree is akin to a binary tree but with a branching factor of 4 as the name suggests. This gives a way to systematically partition two dimensional space: when there more than a certain number of boids in a region, split up the region into four quadrants, and recursively apply this process to each of the quadrants.

This means area of dense populations will be more densely represented in the tree, and areas that are sparse will be sparsely represented in the tree.

#### Generalizations
A quadtree is fine for two dimensions where space can be partioned into four quadrants but what about three dimensional (or curiously: N-dimensional) space? In that case a (LATEX HERE) $2^{N}$ary tree will partition the space appropriately. As an example in three dimensional space you could use an *octree*.

Higher dimensions are of course not applicable to boid simulations but there are applications in fields such as data analysis and machine learning where they could be used as an alternative to data structures such as kd trees for fast spacial partioning and lookups.
