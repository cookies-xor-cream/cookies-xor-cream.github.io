---
slug: /projects/quadtree/
date: "2021-11-13"
title: "Quadtree Compression"

videoName: "QuadVid"

carddesc: "Compresses an image by recursively decomposing areas of high deviation into four smaller sections."
tags: ["imageprocessing"]

overview: "Image compression via compact representations of regions of colour"
techStack: ["python", "pillow"]
prereqs: ["trees"]
timeest: "1 week"
difficulty: 3
---

## What Is a Quadtree?
### Structure of a Quadtree
A quadtree is a tree where each node is either a leaf or has four children. It is akin to a binary tree but with a branching factor of four instead of two.

The quadtree represents a rectangular region of space, and each branch recursively represents quadrant subdivisions of that space. All nodes at depth two of the tree will represent quadrants of the entire area, all nodes at depth three will represent quadrants of those quadrants, and so on. 

### How Does It Relate To Image Compression?
Every image is digitally represented as a set of pixels, and each pixel can be thought of as the leaf node of a quadtree. Each leaf node of the quadtree represents a single colour in the image.
What if we don't need the image to have pixel-perfect colour information? 

Think of an image that has little colour variation in some regions of the image, for example a backdrop of the sky will be roughly the same shade of blue throughout. We do not need to represent all individual pictures in such a region and can instead represent it by a big blue node that's many pixels in width and height.

## Constructing The Quadtree
### Top-down Construction
When constructing the quadtree it is done top-down generally for ease of use, rather than bottum-up like the explanation I have provided. So what determines how we construct such a tree via a top-down approach?

We start with the root node of the quadtree and we set that as being the whole image. Now we need to work out the colour of this node. It will be set to the average colour of all pixels within the node, which is the average colour of the whole image.

Now we will check if the colour of the pixels of the region vary too much from the average colour (this will be explained later). If they vary more than a given threshold then the quadtree will be broken down into four quadrants and the same splitting process will be recursively applied to them until either a certain maximum depth is reached or the node represents the pixels in it to a satisfactory degree of accuracy.

### Result and Caveats
This will result in a tree that accurately represents the image with a minimal number of nodes and therefore a minimal number of bytes. In theory this will preserve the majority of the detail and fidelity of the image as the data lost will be due to regions of sparse colour variation.

Nevertheless this is a lossy compression algorithm and therefore a compromise must be made between quality and file size, and in images with very sparse, large backgrounds (which this compression algorithm works well for) there will often be seams in said background when there are gradual colour variations such as gradients.

## Image Construction
The construction of the image from the quadtree is fairly straight forward. It begins with a blank canvas and the tree is traversed recursively (order doesn't matter). At every leaf node the quadrant that the node represents will be filled by the representative colour of the node (remember, this is the average colour of the node, and will be elaborated on later).

To construct an animation (like the one at the top of the page) the frames can be created by rendering nodes at a limited depth instead of rendering only leaf nodes. This will cause the rendering to treat nodes of the given depth as if they were leaf nodes.

Since all the children of a node represent the entire area of their parent without any overlap, then all the leaf nodes will represent exactly the area of the image.

## Formalizing Definitions

Formalizing what the 'average' colour and how much 'deviation' of colour there is in a certain region is the last step to implement the algorithm, and thankfully by treating colours as three dimensional vectors, the underlying math becomes much simpler.
### The Mean and Standard Deviation of Colours
How do you take the mean and standard deviations of colours then? Well the same way you do with vectors!

In truth it's a little more complicated but the mean can be thought of as the mean of each component of the vector, and the standard deviation as the magnitude of the standard deviation of each component. This makes them computationally efficient to calculate as they are highly parallelizable and makes them simple for humans to comprehend as it extends maths that they are already familiar with.

Given the sets of $x$, $y$ and $z$ components of all colour vectors $V$ as $X$, $Y$, $Z$:
$$
\mu_{V} = \dfrac{(\sum X, \sum Y, \sum Z)}{|V|} \\
\sigma_{V} = |(\sigma_{X}, \sigma_{Y}, \sigma_{Z})|
$$

## Pros and Cons of Quadtree Compression
### Pros
- Has varying resolution across the image
- Simple to understand and implement
- Little math pre-requisites involved
- Can be combined with generalized lossless compression: 
    - Huffman Coding

### Cons
- Works poorly when image doesn't have varying
- Can result in visible seams on the image
- Outclassed by more modern compression algorithms:
    - Frequency-transform based compressions
