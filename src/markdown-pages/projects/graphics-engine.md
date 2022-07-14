---
slug: /projects/graphics-engine/
date: "2022-05-04"
title: "Graphics Engine"

videoName: "GraphicsVid"

carddesc: "A rudimentary graphics engine that runs solely on 1 CPU thread, written to practice the mathematical foundations of graphics programming."
tags: ["interactive", "realtime"]

overview: "A rudimentary graphics engine built to teach about vectorspaces, graphics, directional lighting"
techStack: ["cpp", "sfml"]
prereqs: ["vectors", "matrices", "trig"]
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
It's hard to go over what the pre-requisites are for while dodging all the needed terminology. If you see anything that you don't know the meaning of (yet):
1. It will be explained soon
2. It probably means what it sounds like anyways

### Vectors
Vectors are an important concept because they can represent simultaneously direction and distance, which are definitely two things we need to know if we are figure out *where* to draw things.

#### Point Vectors
Point vectors represent a position relative to some assumed position (normally the coordinate $(0, 0)$ though they can represent the displacement between any two objects). These are vital in describing where objects are located. For example if a sphere is $1m$ in front of the camera and $2m$ above it, then it's coordinate in *camera space* is $(1, 2)$ (more on this later).

#### Rays
Rays are like point vectors but they don't represent the relative position of two things, they simply represent a direction. For example is a *ray* of light is travelling at $45\degree$ upwards and to the right then the vector representing it might be $(1, 1)$ (though they are often normalized).

### Matrices
Matrices are vectors of vectors (drawn as a square of numbers) that can represent transformations in space. For example if we rotate an object that can be represented by a *rotation matrix*. They are to convert the position of *vertices* from *world space* to *camera space*. They can also be used to manipulate objects in general.

Their most useful property is *composition* where if we have two matrices $M$ and $N$ that represent two separate transformations, their product $NM$ represents applying the transformation $M$, and then applying the transformation $N$ (read right to left).

4-dimensional matrices are used ($4\times 4$) matrices in order to represent translations.

#### Vectorspaces
Vectorspaces are a way to think about objects and transformation. When teaching the maths behind graphics it is generally conceptualized as transformations on the vectorspace rather than the objects being transformed. For example if we scale an object by a factor of $2$ (make it twice as big) that is equivalent to doubling the distance of every point to the origin (multiplying all vectors in the space by $2$).

#### Transformations
You should know about a few transformations when implementing a graphics engine:
1. Translation
2. Rotation
3. Scaling

## Background Terminology
### Vertex
### Fragment
### Primitive
### Mesh

## Matrix Operations
Matrix operations are composed in order to place objects at their desired position on the screen.

### Matrix Structure
Matrices are assumed to be constructed with row vectors for our purposes (though it doesn't matter if it's row vectors). We will be using affine matrices, which are a type of $4\times 4$ matrix that can represent and compose translation as well as the other operations.

The structure of the affine matrix will be explained separately in due time. For now we can simply ignore the $4$th row and $4$th column.


### Inverse Transformations
Each matrix implies a transformation, but there also exists an *inverse* matrix that undoes this transformation. Inverting matrices is not a trivial problem, therefore for speed and clarity we will be doing each inversion individually.

### Translation
Translation (also sometimes called displacement by *physics majors*) is a transformation that takes an object and moves it in space. It preserves everything about the object except for its position. All angles, rotations, etc. are conserved.

#### Translation Matrix
#### Inverse Translation Matrix

### Rotation
#### Euler Angles
#### Gimbal Lock
#### Quaternions
#### Rotation Matrix
#### Inverse Rotation Matrix

### Scaling
#### Scaling Matrix
#### Inverse Scaling Matrix

### Composition

### Camera
#### Orthographic Projection
#### Perspective Projection
The perspective projection is constructed as follows:
$$
\begin{align*}
&\text{Constants:} \\
w &= \text{near clipping plane width} \\
h &= \text{near clipping plane height} \\
\theta &= \text{field of view} \\
f &= \text{focal length} \\
b &= n\tan{\frac{\theta}{2}} \\
r &= \frac{nw}{h}\tan{\frac{\theta}{2}}
\end{align*}
$$
---
$$
\text{Perspective Projection Matrix:} \\
\begin{bmatrix}
\dfrac{n}{r} & 0 & 0 & 0 \\
0 & \dfrac{n}{b} & 0 & 0 \\
0 & 0 & \dfrac{f}{f - n} & \dfrac{-fn}{f - n} \\
0 & 0 & 1 & 0
\end{bmatrix}
$$

#### World Space
#### Camera Space
#### Transformation of The Camera

### Directional Lighting
Directional lights are a type of light source where every ray is parallel (going in the same direction). They are the simplest light source to implement as they only have a direction and intensity (no position or angle!).

A directional light is simply assumed to be infinitely far away and never attenuate (get dimmer). This is analogous to extremely bright, extremely far away objects (such as the sun or the moon).

#### Direction
The direction of the light is encoded in a vector, and can be found by normalising the vector. For example if the vector $(1, 0)$ represents the directional light then we know that it goes in the direction $(1, 0)$ (since it's already normalized).

#### Intensity
Likewise the intensity of the light is encoded as the magnitude of the vector. For example if hte vector $(3, 4)$ represents the directional light then the intensity of the light is $5$ (using the pythagorean theorem). This extends to $3$ (or really any number of) dimensions.

#### Lighting Calculations

### Extensions to The Engine
### Blinn-Phong Model
The Blinn-Phong model is a lighting model that provides more depth to the lighting than how bright each primitive is.

It specifies the ambient, diffuse, and specular components which can more accurately display objects. For example due to the specular components spheres have the halo/shiny region that they would when viewed directly under a light source.

This model of lighting also specifies how to interpolate lighting data correctly between fragments of a given primitive.

### Different Types of Lighting
There are various types of light sources which all interact with their environment different and are used for varying purposes/effects. If you are curious then you can read more about them [here](https://www.pluralsight.com/blog/film-games/understanding-different-light-types).

These are the types of lighting you can implement:
- Point Light
- Spot Light
- Volume Light
- Ambient Light
- Area Light
