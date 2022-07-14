---
slug: /projects/graphics-engine/
date: "2022-05-04"
title: "Graphics Engine"

videoName: "GraphicsVid"

carddesc: "A rudimentary graphics engine that runs solely on 1 CPU thread, written to practice the mathematical foundations of graphics programming."
tags: ["interactive", "realtime"]

overview: "" # "A rudimentary graphics engine built to teach about vectorspaces, graphics, directional lighting"
techStack: ["cpp", "sfml"]
prereqs: ["vectors", "matrices"]
timeest: "2 weeks"
difficulty: 8
---

## What Is a Graphic Engine?
### Definiton
A graphics engine is any software that provides the capability to draw objects to the screen. Objects can be anything from triangles to complex meshes (which are generally made of triangles anyways...).

### What's The Point?
Why would we want a graphics engine rather than writing the code to draw everything from scratch? Well, it provides a number of advantages.

However in our case the purpose of the engine is to *learn about graphics* rather than implement them well.
The following points explain the advantages of a properly implemented graphics engine, but not what we will be doing:
1. Performance
   - the engine is very good at what it does because it's been optimised to do it
2. Efficiency
   - if you don't constantly have to worry about rendering/drawing objects correctly it frees up time for development
3. Correctness
   - you can (or rather, hope you can) trust that the implementation of the graphics implementation is more robust than something you can write in a timely manner (less bugs, less edge cases)

### So What Are We Trying To Achieve?
To learn about graphics, and the underlying maths.
To be absolutely specific we will learn about how objects are rendered, and the underlying computation, but not the graphics pipeline itself.

Our engine will run all the code on the CPU, using only a single thread. As such the performance will be abysmal since we are not taking advantage of the graphics components in our computer (the GPU). If you would like to learn about the graphics pipeline instead, [this is a good start](https://www.khronos.org/opengl/wiki/Rendering_Pipeline_Overview) and explains how the graphics pipeline is optimized and leveraged in order to squeeze out every ounce of performance.

## What Do I Need To Know?
It's hard to go over what the pre-requisites are for while dodging all the needed terminology. If you see anything that you don't know the meaning of:
1. It will be explained soon
2. It probably means what it sounds like anyways

### Vectors
Vectors are an important concept because they can represent simultaneously direction and distance, which are definitely two things we need to know if we are figure out *where* to draw things.

#### Point Vectors
Point vectors represent a position relative to some assumed position (normally the coordinate $(0, 0)$ though they can represent the displacement between any two objects). These are vital in describing where objects are located. For example if a sphere is $1m$ in front of the camera and $2m$ above it, then it's coordinate in *camera space* is $(1, 2)$ (more on this later).

#### Rays
Rays are like point vectors but they don't represent the relative position of two things, they simply represent a direction. For example is a *ray* of light is travelling at $45\degree$ upwards and to the right then the vector representing it might be $(1, 1)$ (though they are often normalized).

### Matrices
Matrices are vectors of vectors (drawn as a square of numbers) that can represent transformations in space. For example if you rotate an object that can be represented by a *rotation matrix*. They are to convert the position of *vertices* from *world space* to *camera space*. They can also be used to manipulate objects in general.

Their most useful property is *composition* where if you have two matrices $M$ and $N$ that represent two separate transformations, their product $NM$ represents applying the transformation $M$, and then applying the transformation $N$ (read right to left).

4-dimensional matrices are used ($4\times 4$) matrices in order to represent translations.

#### Vectorspaces
Vectorspaces are a way to think about objects and transformation. When teaching the maths behind graphics it is generally conceptualized as transformations on the vectorspace rather than the objects being transformed. For example if you scale an object by a factor of $2$ (make it twice as big) that is equivalent to doubling the distance of every point to the origin (multiplying all vectors in the space by $2$).

#### Transformations
You should know about a few transformations when implementing a graphics engine:
1. Translation
2. Rotation
3. Scaling

## First Steps
TODO

## TODO:
- Matrix Operations
  - 4D Affine Matrix composition
  - Inverse transformations
  - Translation
  - Rotation
    - Euler Angles
    - Gimbal Lock
    - Quaternions
  - Scaling
  - Composition of all transformations
- Camera
  - Perspective Projection
  - Spaces
    - World Space
    - Camera Space
  - Transforming (moving/rotating) the camera
- Directional Lighting
  - Direction
  - Intensity
  - Reflection calculation
    - Blinn-phong model
