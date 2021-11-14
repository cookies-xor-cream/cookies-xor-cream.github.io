---
slug: /projects/dft-sketch/
date: "2021-11-14"
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

### Kernel Convolutions
#### Calculating Contrast
The idea of an image derivative as previously stated can be extended into a more flexible format known as a *kernel convolution*. A kernel convolution calculates the contrast of a given point on the image. Like before we have to skip some number of rows and columns on the edge of the pixel (or chose some other way to deal with the constraint).

Kernel in this instance is simply referring to some matrix of real numbers. A pixel is chosen to be the center of the kernel and then each value of the kernel will be multiplied with the corresponding value.

These values are then summed to give the convolution of the kernel with a region of the image. This value is identical to the contrast ($|\nabla|_{x,y}|$ in the previous calculation).

The contour can be solved by formulating the problem as a traveling salesman problem like before or by simply starting at a pixel and then checking for all nearby pixels with a similar contrast. This method tends to use kernels that take direction and distance into account and so similar contrast values more accurately relate to whether two pixels are part of a contour than the previous method.

The good thing about kernel convolutions is that they are not only more accurate and expressive but extremely paralelizable on the GPU.

### Canny Edge Detection
The problem of calculating contours can be made far far more complex and robust and that's exactly what canny edge detection aims to do! Canny edge detection is an algorithm that not only calculates the points on the contour but orders them at the same time.

### Preprocessing
Contours and the points on the contours can get extremely messy and grainy if computed carelessly. As such there are a few ways to reduce noise and decrease the false positive rate of contour detection:
- Converting the image into grayscale
- Applying blur (Gaussian blur or box blur for realtime applications)

Converting the image into grayscale removes regions of similar brightness but different colour (if that is desirable) meanwhile applying blur simply increases the tolerance of the contrast to extremely local variations in the image (such as grain).

## Frequency Domain
### Time Domain
Once the contours are obtained (remember that the ordering of the points must be approximately correct) we can transform them to something called the *frequency domain*.

Traditionally data (both audio and images) are encoded in the time domain. This means that each time has a corresponding amplitude. When plotting this representation one would plot the amplitude ($y$ axis) against the time ($x$ axis).

For audio this abstraction is very intuitive: audio can be generated by a vibrating speaker. The position of the speaker at each moment in time is its amplitude, and its amplitude varies with time. If you know the amplitude at each time you can know the speaker's exact motion and therefore replicate the sound.

### Mapping The Frequency Domain To The Time Domain
There's another way to think of the motion of the speaker however. Instead of the sound being conceptualized as the amplitude over time it can be thought of as amplitude over frequency. Think of the sound resulting from a set of notes being pressed on a piano. Each key has a corresponding frequency and when the key is pressed at a given volume the amplitude of that frequency increases correspondingly.

Once the amplitude at each frequency is obtained it can be transformed into the time domain representation by simply adding waves of all frequencies at their corresponding amplitude. (Waves here being pure sine waves).

The relation of this concept to an image is a little more difficult but an image can be thought of as a single moving pixel that changes colour over time, such that each position on the image represents a given time.

### The Fourier Transform
But can we go the other way? Given the time domain representation of an image can we transform it into the frequency domain? The short answer is yes! This is called the Fourier transform.

The Fourier transform is a fascinating piece of maths and has already been taught and talked to death many times on the internet. To stop this post from becomming an hour's read I will ommit the exact details of the Fourier transform but I highly recommend that you investigate this yourself.

You will simply have to trust that the following expression really does the transformation we need on the image:

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty}f(x)\mathop{e}^{-2\pi i x \xi} dx
$$

In order to take the Fourier transform of our function we need to convert the points on the contour to complex coordinates via the following transformation $f: (x,y) \rightarrow (x,iy)$. Although now we are left with the problem of taking an integral over a discrete function, which is not possible.

We must use the *discrete* fourier transform instead.

### Discretizing The Fourier Transform

The discrete Fourier transform *(DFT)* is what we're really after. This is able to take a discrete signal and give us information about the resulting frequency distribution.

The expression for the DFT is:
$$
X_{k} = \sum\limits_{n=0}^{N-1}x_{n} \mathop{e}^{-\tfrac{2i\pi}{N}kn}
$$

$x$ is the sequence of points on the contour<br/>
$X$ is the sequence of complex values corresponding to the frequency domain representation of $x$

$X$ is calculated to $k$ terms since the whole set of infinite frequencies can't be accounted for in a `for` loop.

### Interpretting The DFT
Once $X$ is calculated, what do we do with it? What does each entry mean?

Given a fundemental frequency (lowest frequency) $f$ each $X_{n}$ corresponds to the frequency $nf$.

Each frequency corresponds to the epicycle whose arm rotates at that frequency. For each frequency there is a *phase* and an *amplitude*.

#### Phase
The phase of a frequency is simply 'how far through' a period the wave is at $time = 0$. This represents the offset of a frequency. The phase is given by $b$ in the following equation:
$$
a \sin(nx + b)
$$

The phase is calculated as the argument (angle) of the complex number:
$$
\arg(X_{n}) = \mathrm{atan2}(\Im(X_{n}), \Re(X_{n}))
$$

Where $\Im(X)$ is the imaginary component of $X$ and $\Re(X)$ is the real component of $X$.

#### Amplitude
The amplitude is of course 'how much' of a frequency is in the wave. This represents the contribution of a frequency. the amplitude is given by the $a$ in the following equation:
$$
a \sin(nx +b)
$$

The amplitude is calculated as the magnitude of the complex number:
$$
|X_{n}| = \sqrt{\Re(X_{n})^{2} + \Im(X_{n})^{2}}
$$

Where $\Im(X)$ is the imaginary component of $X$ and $\Re(X)$ is the real component of $X$.

#### Calculating Amplitude at a Given Time
Given an amplitude $a$ and phase $b$ corresponding to a frequency $n$ we can calculate the complex coordinate at each point in time using eulers formula:
$$
\begin{align}
&e^{i (n\theta + b)} \\
&a[\cos(n\theta+b) + i\sin(n\theta+b)] &\text{ using euler's formula} \\
&a(\cos(n\theta+b),\ \sin(n\theta+b)) &\mathbb{C} \rightarrow \mathbb{R}^{2} \\
&a(\cos(nt+b),\ \sin(nt+b)) &\theta \rightarrow t
\end{align}
$$

now we simply need to do so by taking a sum using a vector of amplitudes and phases: $\{a_{1}, \ldots, a_{k}\}, \{b_{1}, \ldots, b_{k}\}$:
$$
E(t) = \sum\limits_{n=0}^{k}a_{n}(\cos(nt+b_{n}),\ \sin(nt+b_{n}))
$$

This expression gives us the coordinate of function that traces the contours for any time $t$.

### Plotting Epicycles
#### Sorting Epicycles
Sort epicycles based on the vector of amplitudes: $\{a_{1}, \ldots, a_{k}\}$. This will mean that the epicycles are in order of size.

#### Iteration Over Time
The motion of the epicycles is plotted by plotting the epicycles at discrete points in time. The question is which points should we choose?

Consider the $N$th frame of the animation. We can choose some value $dt$ for which $t = N \cdot dt$.

What's a suitable value for $dt$? We must choose values such the resultant motion of the epicycles covers the entire path in exactly a single period, since each period is $2\pi$ this gives us the expression:
$$
t = N \dfrac{2\pi}{k}
$$

By incrementing the value of $t$ by $\dfrac{2\pi}{k}$ every frame it plots the epicycles as we would expect.

#### Drawing Epicycles
The epicycles can be plotted as a set of lines (and optionally circles).

Starting from the origin the direction of contribution for individual frequencies can be computed. A line will be drawn in this direction, and then the next line will be drawn starting from the end of the previous line.

If wishing to produce the circles as well we can merely draw a circle with the same radius as the amplitude at the starting point of the line.

### Plotting The Path
#### Generating Points On The Path
To generate all points of the path $P$ we can find all elements of the vector:
$$
P = \{E(0),\ E(\dfrac{2\pi}{k}),\ E(2 \cdot \dfrac{2\pi}{k}), \ldots,\ E(1)\}
$$

All lines of the path are in the form of $P_{i} \rightarrow P_{i+1}$

#### Animating The Points On The Edge
To animate the path the following lines need to be drawn:
$$
\forall i < N.\ P_{i} \rightarrow P_{i+1}
$$

## Complexity Analysis
For an $N \times M$ image there can be at most $NM$ points on the contour.
### Ordering Contour Points
Ordering points greeidly involves neighbour lookups and is $O(N^{2}M^{2})$.

Using a *quadtree* or *k-d tree* for the lookups reduces the complexity to $O(NM \log(NM))$

Ordering contour points by searching for nearby contour points rather than solving the traveling salesman problem the complexity drops to $O(NM)$.

### The Fourier Transform
A naive DFT is quadratic, therefore the complexity is $O(N^{2}M^{2})$.

A *fast fourier transform* (FFT) on the other hand is $O(NM\log(NM))$.

(The FFT is the same computation as the DFT but done in a more efficient way).

### Overall Complexity
It can be seen that the complexity is bound by the FFT and is $O(NM\log(NM))$.

## Plotting Two Arms
Plotting two arms is actually as simple as plotting a single one. The only difference is that instead of performing the DFT on the $x$ and $y$ coordinates simultaneously it is done on each separately.

One set of epicycles is calculated for each axis and the intersection points of the axes is used at the point of the path.
