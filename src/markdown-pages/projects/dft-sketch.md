---
slug: /projects/dft-sketch/
date: "2019-11-04"
title: "DFT"

videoName: "DFTVid"

carddesc: "Graphs the contours of an image via epicycles by using the discrete Fourier transform."
tags: ["imageprocessing"]

overview: "Tracing of image outline via fourier transform"
techStack: ["python", "pillow", "numpy", "pygame"]
prereqs: ["vectors", "trig"]
timeest: "2 weeks"
difficulty: 4
---

## Objective
The animation is a lovely high-level visual representation of what's happening but in order to implement it robustly first you need to concretely define the problem statement. For this project we will be aiming to achieve the following goal:

Create a set of epicycles (rotating arms) that plot the outline of an image.

## Definitions
Let's define a few key terms so we can better understand how to approach the problem.

### Contours
This is the formal definition of the 'outline' of an image. It is generally defined as a set of points that have similar colour and high contrast with the background. The contour points are ordered in a cycle (linked list).

### Epicycles
This is the chain of the circles in the video. Each arm rotates at a constant speed and the centre of each epicycle is the at the end of the arm of the previous epicycle. For the purposes of a cleaner animation they will be sorted in decreasing order of *amplitude* although when we calculate what the epicycles should be we do so in increasing order of *frequency*.

## Contours
Contour detection can range from incredible naive - being a short script that can fit on a page, to extremely complex - being a long-winded algorithm with multiple heuristics and decisions.

The contour detection won't be touched on too thoroughly but you could always do your own research if interested.

### Naive Approach
#### Image Derivatives
Just as there are continuous derivatives in calculus we can formulate *discrete* derivatives in *discrete* calculus. We can think of the RGB value of each point in the image as a function that maps a position to a colour:
$$
f: (x,y) \rightarrow (R,G,B)
$$

$(x,y)$ is a point on the image (measured in pixels) and $(R,G,B)$ is the colour values of the individual channels of that pixel.

In reality we need to convert to a colourspace in order to do distance calculations but for the sake of simplicity we will assume that Euclidean distance can be used in place of any colourspace transformations. We'll use the symbol $d$ to substitute for the *Euclidean distance function*.

With this function we can take the partial (discrete) derivatives with respect to $x$ and $y$. We take a dot product to find the magnitude in difference given the vector (we can ignore finding the Euclidean distance as this would cancel out in later steps anyways. If curious you can solve for it as an exercise):
$$
\dfrac{\partial f}{\partial x} = d(\dfrac{f(x-1,y) + f(x+1,y)}{2}) \\
\dfrac{\partial f}{\partial y} = d(\dfrac{f(x,y-1) + f(x,y+1)}{2})
$$

Notice that this function is not well defined for the points on the boundary of the image so we will ignore each row or column of pixels at the top/bottom/left/right. This won't make a significant difference on the output generally as images can be thousands of pixels in width or height.

#### Contrast as the Gradient
The gradient of the function at a point represents the change in colours of that point in the image. We can thus compute the *gradient vector*:
$$
\nabla_{x,y} = (\dfrac{\partial f}{\partial x}, \dfrac{\partial f}{\partial y})
$$

Now all that this leaves us to do is compute the magnitude of the gradient vector (assuming a Euclidean RGB space):
$$
|\nabla_{x,y}| = \sqrt{(\dfrac{\partial f} {\partial x})^{2} + (\dfrac{\partial f} {\partial y})^{2}}
$$

$|\nabla_{x,y}|$ is our estimation for the contrast at a point $(x,y)$ on the image.


#### Picking Contrast Threshold
Now that we have our estimation for a contrast at a given point we can compute the contrast at every point. we also need to pick a threshold value for what contrast should classify the point as being on a contour. Call this number $C$.

RGB values are between $0$ and $255$, therefore the largest distance between two pixels is the difference of these tuples:
$$
\begin{align}
& = d((255,255,255) - (0,0,0)) \\
& = d((255,255,255)) \\
& = \sqrt{(255^{2} \cdot 3)} \\
& \approx 442 \\
& \therefore C \in (0, 442)
\end{align}
$$

The exact value of $C$ is still context dependent and best found by experimentation.

#### Disclaimer
If using this approach to implement the program you will lose *a lot* of efficiency and will likely be sitting around for minutes (or even hours for large images) to get an output.


#### Solving for the Contours
To now solve for the (ordering of the points on the) contours we need to get the set of all contours. The set of all contours is simply all points $(x,y)$ for which $|\nabla_{x, y}| < C$. We will denote this set with the symbol $P$.

Once this set is obtained to order the points we must solve something known as the [*traveling salesman problem*](https://en.wikipedia.org/wiki/Travelling_salesman_problem). Anyone who has encountered this problem before knows that there is no fast perfect solution. But thankfully there exist crude approximations that can be found in a short amount of time.

For the purposes of this application we will use a *greedy algorithm* based on the *shortest distance*.

Once again the distance metric used will be Euclidean distance.

This algorithm will pick an ordering for the points on the points on the contour:
1. Pick a random point, assign it as the first point: $P_{1}$
2. Pick the closest point to the previously picked point that is not already picked: label is $P_{n}$
3. Mark this point as picked (as to not pick it again)
4. If there are any points not already picked go to step 2
5. Connect the final point in the tour back to $P_{1}$

Now all the points on the contour have been found in the (approximate) ordering desired.

### Kernel Convolutions and 2-opt
#### Calculating Contrast
The idea of an image derivative as previously stated can be extended into a more flexible format known as a *kernel convolution*. A kernel convolution calculates the contrast of a given point on the image. Like before we have to skip some number of rows and columns on the edge of the pixel (or chose some other way to deal with the constraint).

Kernel in this instance is simply referring to some matrix of real numbers. A pixel is chosen to be the center of the kernel and then each value of the kernel will be multiplied with the corresponding value 

### Canny Edge Detection
The problem of calculating contours can be made far far more complex and robust and that's exactly what canny edge detection aims to do! Canny edge detection is an algorithm that not only calculates the points on the contour but orders them at the same time.

