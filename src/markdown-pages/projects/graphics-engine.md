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
githubLink: "https://github.com/cookies-xor-cream/Aquila"
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

### Ommited Features
There are many features that we will not include as they either won't teach us much or require a disproportionate amount of work:
- Colour
- Rasterization
- Interpolation
- Specular Lighting

(Rasterization, interpolation, and specular lighting all require us to write our own algorithm to render triangles, and that will definitely not be able to run in real time on the CPU. I will opt to use [SFML](/technologies#sfml) in order to render triangles instead).

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
There is some background terminology that is important to cover so the next few sections are as clear as possible.

### Primitive
A simple object (shape) that can be directly rendered (such as a line, or a point). We will be solely using triangles as our primitive. This is due to a few useful properties that they have, which are not guaranteed by other shapes.

### Vertex
Exactly what it means in English: it's simply a boundary point on an object.

### Fragment
This term is *almost* interchangeable with pixel: we won't deal with them directly since we are only implementing rendering at the vertex level but a fragment is the smallest unit within a primitive that is distinct (has its own lighting).

### Mesh
A collection of faces, normally primitives (quadrilaterals or triangles). Meshes can have more data than this, for example including the normal data (normal map), texture mappings (UV map) etc.

We will only focus on the vertices.

### Space
A vectorspace centered at a given position (world space has an arbitrary centre, camera space is centered on the camera, screen space is centered in the top left of the screen).

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
Instead of talking about the full $4\times 4$ matrix for translation we will talk about a column vector ($1\times 4$) matrix. This simply reduces the amount of clutter and simplifies the notation.

Our translation matrix for a given translation $T$ will encode how many units in each cardinal direction we are to move the object.
$$
T(x, y, z) =
\begin{bmatrix}
T_{x} \\ T_{x} \\ T_{y} \\ T_{z} \\ 1
\end{bmatrix}
$$

The 1 at the end is simply so that when it comes to the composition of the matrices we can combine it into a $4\times 4$ matrix. It is called the *perspective scale*.

#### Inverse Translation Matrix
The inverse of the translation matrix is easy to construct, you simply negate all the components (but not the perspective scale):
$$
T^{-1}(x, y, z) = T(-x, -y, -z)
$$

### Rotation
The rotation matrix that represents the desired rotation can be constructed by combining $3$ separate rotations, one on each axis.

#### Euler Angles
Euler angles are the name for the angles of each axis. They will be written as $\theta_{x}, \theta_{y}, \text{and} \theta_{z}$. These angles encode every possible $3$D rotation, but each rotation does not correspond to a unique set of euler angles and so it leads to a problem called *gimbal lock* where one degree of freedom is lost in rotation.

#### Gimbal Lock
When the axes align in a particular arrangement it can give rise to a problem called gimbal lock where rotation cannot be applied in an arbitrary direction any longer. This happens when two directions ('gimbals') are parallel and therefore moving either of them would result in the same axis of rotation. For example consider the case that a camera is pointing straight up:
- If it rotates on the $x$ axis it will shift the view downwards
- If it rotates on the $y$ axis it will turn the view in place
- If it rotates on the $z$ axis it will turn the view in place
- The $y$ and $z$ axis rotations now result in the same outcome, leaving only 2 possible axes of rotation

#### Quaternions
Quaternions are four dimensional complex numbers with three complex components and one real component. They are a more robust (and efficient) way to represent rotations in $3$D space. However they can be tedious to implement and test, and this project has neither animations, nor a huge need to solve gimbal lock.

Since these are the two main advantages of quaternions I will not be implementing them.
If you wish to learn more about what they are, I suggest [this video by 3Blue1Brown](https://www.youtube.com/watch?v=d4EgbgTm0Bg&t=1s).

#### Rotation Matrix
The rotation matrix $R(\theta_{x}, \theta_{y}, \theta_{z})$ corresponds to the rotation of the $xyz$ axes. It can be represented as the composition of the rotation of each axis separately (where $R_{n}$ is the rotation of the axis $n$), like so:

$$
\begin{align*}
R_{x}(\theta) &=
\begin{bmatrix*}
1 & 0 & 0 \\
0 & \cos{(\theta)} & \sin{(\theta)} \\
0 & -\sin{(\theta)} & \cos{(\theta)} \\
\end{bmatrix*} \\

R_{y}(\theta) &=
\begin{bmatrix*}
\cos{(\theta)} & 0 & \sin{(\theta)} \\
0 & 1 & 0 \\
-\sin{(\theta)} & 0 & \cos{(\theta)} \\
\end{bmatrix*} \\

R_{z}(\theta) &=
\begin{bmatrix*}
\cos{(\theta)} & -\sin{(\theta)} & 0 \\
\sin{(\theta)} & \cos{(\theta)} & 0 \\
0 & 0 & 1 \\
\end{bmatrix*} \\

R(\theta_{x}, \theta_{y}, \theta_{z}) &= R_{z} R_{y} R_{x} \\
\end{align*}
$$

#### Inverse Rotation Matrix
$$
R(\theta_{x}, \theta_{y}, \theta_{z}) = R(-\theta_{x}, -\theta_{y}, -\theta_{z})
$$

### Scaling
Scaling is the only transformation that isn't required in order to convert from camera space to world space, though it is certainly a useful transformation and will therefore be covered.

#### Scaling Matrix
To scale by a factor $x$ where $I_{4}$ is the $4$D [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix):
$$
S(x) = sI_{4}
$$

#### Inverse Scaling Matrix
$$
S^{-1}(x) = S(\dfrac{1}{x})
$$

### Composition
To rotate an object about a point $p$ (can be the object's centre point to rotate in place) by a vector of euler angles $\theta$ one must apply the inverse translation first:
$$
\text{Rotation:} \\
T(p) R(\theta) T^{-1}(p)
$$

Scaling must be done with the object at the origin, so with the centre of the object at $t$ and the scaling factor $x$:
$$
\text{Scaling:} \\
T(t) S(x) T^{-1}(t)
$$

Translation can be done in isolation at the end by some displacement $d$.

Combining all transformations:
$$
\text{Rotate, Scale, and Translate:} \\
T(d) T(t) S(x) T^{-1}(t) T(p) R(\theta) T^{-1}(p)
$$

Let's represent this composite transformation matrix by $M$.

## Camera
### View Fulcrum
The viewing fulcrum is the area in which the camera can see, it is defined by a width ($w$), a height ($h$), a focal length ($f$ that defines the near clipping plane), and a field of view ($\theta$) that defines the angle of vision.

All objects closer than the clipping plane are invisible in order to not obstruct large objects in the scene by extremely small but close ones.

### Perspective Projection
The perspective projection is a type of projection that tries to adhere to how optics works in reality. It is not an accurate model of the objects it presents but aims to emulate real life vision.

It's construction as follows:
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

### Orthographic Projection
Orthographic projection does not aim for realism but instead accuracy. It more accurately represents distances and axes and is often used in engineering or $3$D modelling. There are definitely usecases for orthographic projection in graphics (isometric games for example) but I will not be covering them.

### World Space
World space means the space that contains the 'absolute' position of all the objects. The motion of any object doesn't change the world coordinates of any other object. This is the default representation of all coordinates before they are transformed into other spaces.

### Camera Space
Camera space means the space that contains all positions relative to the camera. The camera is the origin $(0, 0)$ in camera space, while all objects have coordinates based on where they are relative to the camera.

### Screen Space
Screen space represents the coordinates on the screen where $(0, 0)$ is the top left and $(1, 1)$ is the bottom right. It provides an easy way to draw $2$D primitives on the scrreen in order to represent $3$D shapes.

### Transformation of The Camera
To transform the camera maintain the translation vector and the euler angles. When translating simply add to the component of the translation vector by projecting the forward vector of the camera onto the $xyz$ planes and when rotating the camera simply increment the euler angle being rotated on.

Non-axis-aligned rotations may look awkward, but that must be solved by using *quaternions*.

### Converting to Screen Space
Compute the transformation matrix $M$ and the perspective projection matrix $P$.
Take some vector $v$ that you would like to convert into screen space, and extend it to a $4$ component vector (where the last component is $1$).

The screen space coordinates of it are given by the components of the following vector:
$$
\begin{bmatrix}x & y & z & 1\end{bmatrix} = PMv
$$

To convert the positions from proportions to pixels simply multiply by the width and height of the screen as needed.

## Directional Lighting
Directional lights are a type of light source where every ray is parallel (going in the same direction). They are the simplest light source to implement as they only have a direction and intensity (no position or angle!).

A directional light is simply assumed to be infinitely far away and never attenuate (get dimmer). This is analogous to extremely bright, extremely far away objects (such as the sun or the moon).

### Direction
The direction of the light is encoded in a vector, and can be found by normalising the vector. For example if the vector $(1, 0)$ represents the directional light then we know that it goes in the direction $(1, 0)$ (since it's already normalized).

### Intensity
Likewise the intensity of the light is encoded as the magnitude of the vector. For example if hte vector $(3, 4)$ represents the directional light then the intensity of the light is $5$ (using the pythagorean theorem). This extends to $3$ (or really any number of) dimensions.

### Lighting Calculations
The lighting calculation relies on two angles and an intensity: the angle from the camera to the object, and the angle from the light to the object.

Given a directional light vector $l$ we can compute the direction $\hat{l}$ and the intensity $I$:
$$
\begin{align*}
I &= |l| \\
\hat{l} &= \dfrac{l}{I} \\
\end{align*}
$$

When tlaking about angles from the object this really means the angle of the *surface normal* (which is the directional perpendicular to the surface where the light reflects).

$$
\text{Needed Constants:} \\
\begin{align*}
I &= \text{intensity of the light} \\
\theta_{l} &= \text{angle from the light to the object} \\
\theta_{c} &= \text{angle from the camera to the object} \\
\end{align*}
$$

The angle between two unit vectors $x$ and $y$ can be computed using the dot product (a type of vector product). The formula for it is:
$$
\arccos{(x \cdot y)}
$$

A useful property of triangles in graphics is that they are coplanar, meaning that the entire shape only lies on a single plane and therefore has a single surface normal across the entire shape. We can find the surface normal ($\hat{n}$) in the direction of the light with a cross product.

$$
\begin{align*}
v_{1}, v_{2}, v_{3} &= \text{the vertices of the triangle} \\
d_{1} &= v_{1} - v{2} \\
d_{2} &= v_{1} - v{3} \\
n &= d_{1} \times d_{2} \\
\hat{n} &= \frac{n}{|n|} \\
\end{align*}
$$

With our new-found surface normal we can now compute all the values we need. Our final luminosity will be computed as $b$ meaning 'brightness'.
$$
\text{Lighting Computation:} \\
\begin{align*}
I &= \text{intensity of the light} \\
\hat{n} &= \text{surface normal} \\
\hat{l} &= \text{light unit vector} \\
c &= \text{camera forward unit vector} \\
\theta_{l} &= \arccos{(\hat{n} \cdot \hat{l})} \\
\theta_{c} &= \arccos{(\hat{n} \cdot c)} \\
b &= (1 - \theta_{l}) (1 - \theta_{c}) I
\end{align*}
$$

Once $b$ is computed the triangle can be rendered with a brightness of $b$ (RGB value of $(255b, 255b, 255b)$).


## Rendering Meshes
To render a mesh we first need to read all the mesh data, then convert it into screen coordinates and to render the individual primitives of the mesh.

### File Format
I have decided to work with [wavefront files](https://en.wikipedia.org/wiki/Wavefront_.obj_file) as they are a simple format to parse and view directly. They natively provide the vertex and index buffer to use, and it is a very human readable/useable format.

### Vertex Buffer
The vertex buffer holds all the vertices in a single 'array'. The reasoning for this is that if the vertices were loaded directly in the mesh data there would be a lot of duplication since each vertex can be used many times. We will load each unique vertex into this buffer and replace all references to vertices by their index inside of the index buffer.

### Index Buffer
The index buffer holds all the primitives of the mesh in a single 'array'. We will assume for our purposes that the index buffer will only ever hold triangles as that is the only primitive we render. In the index buffer every group of $3$ consecutive indices represent a single triangle's vertices.

As such we can store the entire mesh as a single long index buffer and look up the vertex data as required when rendering.

### Triangulation
Triangulation is the process of turning the quads that are present in the mesh data into triangles in order to render them. This is sometimes a trivial process since primitive vertices can be given in the same order for each primitive (clockwise or counter-clockwise).

In that case to triangulate you take the $4$ vertices of the quad and construct $2$ triangles:
- Triangle $1$ has vertices $1$, $2$, and $3$
- Triangle $2$ has vertices $1$, $3$, and $4$

However in the more general case there might be a need to triangulate them yourself. You *can* do this in code but please for the love of god load it into blender and export it already triangulated, saving yourself a lovely afternoon of misery.

### Rendering
To finally draw the mesh you must convert all vertices into screen space, and ignoring the $z$ component draw each triangle of the mesh.

### Painter's Algorithm
When drawing the triangles in an arbitrary order you can expect to see a self-intersecting abomination where far objects overlay near ones. The simplest solution by far is to sort them by their $z$ value (depth) before drawing them. This means that far objects are drawn first, and close objects are drawn over them subsequently.

## Extensions to The Engine
### Blinn-Phong Model
The Blinn-Phong model is a lighting model that provides more depth to the lighting than how bright each primitive is.

It specifies the ambient, diffuse, and specular components which can more accurately display objects. For example due to the specular components spheres have the halo/shiny region that they would when viewed directly under a light source.

This model of lighting also specifies how to interpolate lighting data correctly between fragments of a given primitive which will eliminate the seams present between neighbouring primitives in our current lighting model.

### Different Types of Lighting
There are various types of light sources which all interact with their environment different and are used for varying purposes/effects. If you are curious then you can read more about them [here](https://www.pluralsight.com/blog/film-games/understanding-different-light-types).

These are the types of lighting you can implement:
- Point Light
- Spot Light
- Volume Light
- Ambient Light
- Area Light

### Quaternions
Quaternions are a more robust method of performing rotations and they allow different techniques such as SLERP (spherical interpolation) which allows for smooth animations, as well as avoiding gimbal lock altogether.

### z-buffering
Z-buffering aims to avoid the downfalls of the painter's algorithm by maintaining a buffer of depth values and only writing to a fragment if the new depth value is less than the current one, meaning the new fragment is 'on top' of the current one.
